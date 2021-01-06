import { takeEvery, call, put } from "redux-saga/effects";
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, User } from '../../types/usuario/usuarioTypes';
import * as api from '../../services/apiService';
import { verifyRoles, APP, GRANT_TYPE, CLIENT_ID, SCOPE, setUserName,setUserMatricula } from "../../services/auth";
import { errorMessage, returnMessage } from "../../utils/utils";
import { TOKEN_EXPIRED } from "../../types/usuario/usuarioTypes";

function* autenticarUsuario(action: any) {
    const identityServer = new URLSearchParams({
        username: action.payload.matricula,
        password: action.payload.senha,
        app: APP,
        grant_type: GRANT_TYPE,
        client_id: CLIENT_ID,
        scope: SCOPE,
        client_secret: 'rc-cupom-dsm',
    });

    const data = identityServer.toString();
    const loading = returnMessage();
    try {
        loading.loading('Processando');
        const response = yield call(api.autenticarUsuario, data);
        if (response.status === 200) {
            const responseUser = yield call(api.buscarDadosUsuario, response.data.access_token);
            const userPermission = verifyRoles(response.data.access_token, responseUser.data.permissions);
            loading.destroy();
            if (userPermission?.authorized) {
                setUserName(responseUser.data.name);
                setUserMatricula(responseUser.data.matricula);
                yield put({
                    type: LOGIN_SUCCESS, payload: {
                        token: response.data.access_token,
                        action: action,
                        message: userPermission.message,
                        user: responseUser.data
                    }
                });
            }
            else {
                yield put({
                    type: LOGIN_FAILED, payload: userPermission?.message
                });
            }
        }
    }
    catch (error) {
        loading.destroy();
        return errorMessage(error.response.data.error_description);
    }
}

function* tokenExpired() {
    yield put({ type: TOKEN_EXPIRED });
}

export function* watchAllUsuario() {
    yield takeEvery(LOGIN, autenticarUsuario);
    yield takeEvery(TOKEN_EXPIRED, tokenExpired);
}