import * as types from '../../types/usuario/usuarioTypes';
import * as mapper from './mapper';

const initialState: types.UserState = {
    user: {
        matricula: '',
        name: '',
        email: '',
        filial: '',
        permissions: '',
        role: '',
        sub: ''
    },
    errorAction: {
        error: '',
        error_description: ''
    },
    tokenExpired: null
}

const userReducer = (state = initialState, action: types.UserActions): types.UserState => {
    switch (action.type) {
        case types.GET_USER_INFO:
            state.user = action.payload;
            return Object.assign({}, state);
        case types.LOGIN_SUCCESS:
            mapper.validarAutenticacao(action.payload.token, action.payload.action,
                action.payload.message);
            return Object.assign({}, state);
        case types.LOGIN_FAILED:
            mapper.erroAutenticacao(action.payload);
            return Object.assign({}, state);
        case types.TOKEN_EXPIRED:
            mapper.validarTokenExpirado();
            return Object.assign({}, state);
        default:
            return state;
    }
}

export default userReducer;