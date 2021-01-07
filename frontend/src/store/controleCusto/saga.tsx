import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import * as api from '../../services/apiService';
import { ADD_NEW_DEPARTAMENTO, ADD_NEW_FUNCIONARIO, GET_All_DEPARTAMENTOS, GET_All_DEPARTAMENTOS_SUCCESS, GET_All_FUNCIONARIOS, GET_DEPARTAMENTO_BY_ID, GET_DEPARTAMENTO_BY_ID_SUCCESS } from "../../types/models/controleCustoType";
import { GET_GRUPOS_COMPRA_SUCCESS } from "../../types/relatorios/relatoriosType";
import { errorMessage, loadDestroy, returnMessage, successMessage } from "../../utils/utils";
 

function* addDepartamento(action: any) {
    
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
            errorMessage('Ocorreu um erro ao adicionar o departamento');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('departamento');
    }
}

function* getDepartamentos() {
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.getDepartamentos);

        loading.destroy();
        if (response.status === 200) {
            yield put({ type: GET_All_DEPARTAMENTOS_SUCCESS, payload: response.data })
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao adicionar o departamento');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('departamento');
    }
}

function* getDepartamentoById(action: any) {
    const data = action.payload
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.getDepartamentoById, data);
        loading.destroy();
        if (response.status === 200) {
            yield put({ type: GET_DEPARTAMENTO_BY_ID_SUCCESS, payload: response.data })
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao carregar os departamentos');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao carregar os departamentos');
    }
}

function* addFuncionario(action: any) {
    const data = action.payload
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.postFuncionario, data);

        loading.destroy();
        if (response.status === 201) {
            successMessage('Funcionário adicionado com sucesso!');
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao adicionar o Funcionário');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao adicionar o Funcionário');
    }
}

export function* WatchAllControleCustos() {
    yield takeLatest(ADD_NEW_DEPARTAMENTO, addDepartamento);
    yield takeEvery(GET_All_DEPARTAMENTOS, getDepartamentos);
    yield takeLatest(GET_DEPARTAMENTO_BY_ID, getDepartamentos);
    yield takeLatest(ADD_NEW_FUNCIONARIO, addFuncionario);
}