import { call, takeEvery } from "redux-saga/effects";
import * as api from '../../services/apiService';
import { loadDestroy } from "../../store/autenticacao/mapper";
import { ADD_NEW_DEPARTAMENTO } from "../../types/models/controleCustoType";
import { errorMessage, returnMessage, successMessage } from "../../utils/utils";
 

function* addDepartamento(action: any) {
    debugger;
    const data = action.payload
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.postDepartamento, data);

        loading.destroy();
        if (response.status === 201) {
            successMessage('Departamento adicionado com sucesso!');
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao carregar moleculas');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao carregar moleculas');
    }
}

export function* WatchAllControleCustos() {
    yield takeEvery(ADD_NEW_DEPARTAMENTO, addDepartamento);
}