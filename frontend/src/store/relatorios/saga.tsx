import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import * as api from '../../services/apiService';
import { GET_RELATORIO_AGRUPAMENTO_FORNECEDOR, GET_GRUPO_FORNECEDORES, GET_GRUPO_FORNECEDORES_SUCCESS, GET_FORNECEDOR_GRUPO_COMPRA, GET_FORNECEDOR_GRUPO_COMPRA_SUCCESS } from "../../types/relatorios/relatoriosType";
import { returnMessage, successMessage, errorMessage, downloadFile } from "../../utils/utils";
import { loadDestroy } from "../../store/autenticacao/mapper";
import { GET_GRUPOS_COMPRA, GET_GRUPOS_COMPRA_SUCCESS } from "../../types/relatorios/relatoriosType";


function* getRelatorioAgrupamentoFornecedores() {

    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.getRelatorioAgrupamentoFornecedores);

        if (response.status === 200) {
            loading.destroy();
            downloadFile(response, 'GrupoFornecedores', '.csv');
            successMessage('Arquivo baixado com sucesso');
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao baixar o arquivo de destino, por favor tente mais tarde');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao baixar o arquivo de destino, por favor tente mais tarde');
    }
}

function* getGrupoFornedores() {
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.getGrupoFornecedores);

        loading.destroy();
        if (response.status === 200) {
            yield put({ type: GET_GRUPO_FORNECEDORES_SUCCESS, payload: response.data })
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao carregar os grupos, por favor tente mais tarde');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao carregar os grupos, por favor tente mais tarde');
    }
}

function* getGruposCompra() {
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.getGruposCompra);

        loading.destroy();
        if (response.status === 200) {
            yield put({ type: GET_GRUPOS_COMPRA_SUCCESS, payload: response.data })
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao carregar os grupos de compra, por favor tente mais tarde');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao carregar os grupos de compra, por favor tente mais tarde');
    }
}

function* getFornecedorGrupoCompra(action: any) {
    const data = action.payload
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.getFornecedorGrupoCompra, data);

        loading.destroy();
        if (response.status === 200) {
            yield put({ type: GET_FORNECEDOR_GRUPO_COMPRA_SUCCESS, payload: response.data })
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao carregar os grupos de compra, por favor tente mais tarde');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao carregar os grupos de compra, por favor tente mais tarde');
    }
}

export function* watchAllRelatorios() {
    yield takeEvery(GET_RELATORIO_AGRUPAMENTO_FORNECEDOR, getRelatorioAgrupamentoFornecedores);
    yield takeLatest(GET_GRUPO_FORNECEDORES, getGrupoFornedores);
    yield takeLatest(GET_GRUPOS_COMPRA, getGruposCompra);
    yield takeEvery(GET_FORNECEDOR_GRUPO_COMPRA, getFornecedorGrupoCompra);
}