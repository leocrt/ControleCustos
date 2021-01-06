import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as api from '../../services/apiService';
import { loadDestroy } from "../../store/autenticacao/mapper";
import {   GET_MOLECULAS_SUCCESS, GET_MOLECULAS, GET_MOLECULAS_PRODUTOS_SUCCESS, GET_MOLECULAS_PRODUTOS,
     GET_MOLECULAS_EXECUCAO,GET_MOLECULAS_EXECUCAO_SUCCESS, GET_MOLECULAS_RELATORIOCSV,
     GET_MOLECULAS_RELATORIOCSV_SUCCESS,GET_MOLECULAS_PRODUTOS_IDMOLECULA,GET_MOLECULAS_PRODUTOS_IDMOLECULA_SUCCESS,
      GET_MOLECULAS_CADASTRO_PRODUTOS, GET_MOLECULAS_CADASTRO_PRODUTOS_SUCCESS,GET_MOLECULAS_CADASTRO_MOLECULA_SUCCESS,GET_MOLECULAS_CADASTRO_MOLECULA ,DELETE_MOLECULAS_SUCCESS,DELETE_MOLECULAS }
      from "../../types/margenericos/margenericosType";
import { errorMessage, returnMessage } from "../../utils/utils";
import {  successMessage,  downloadFile } from "../../utils/utils";
 

function* getMoleculas() {
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.getMoleculas);

        loading.destroy();
        if (response.status === 200) {
            yield put({ type: GET_MOLECULAS_SUCCESS, payload: response.data })
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

function* getExecucaoApurador() {
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.getExecucaoApurador);

        loading.destroy();
        if (response.status === 200) {
            yield put({ type: GET_MOLECULAS_EXECUCAO_SUCCESS, payload: response.data })
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao carregar Ultima Execução Apurador');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao carregar Ultima Execução Apurador');
    }
}

function* getRelatorioCSV() {
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.getRelatorioCSV);

        if (response.status === 200) {
            loading.destroy();
            downloadFile(response, 'BaseMargenerico', '.csv');
            successMessage('Arquivo baixado com sucesso');
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao baixar o arquivo de destino, por favor tente mais tarde');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao carregar Ultima Execução Apurador');
    }
}

function* getMoleculaProduto( ) {
    
    
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.getMoleculaProduto);

        loading.destroy();
        if (response.status === 200) {
            yield put({ type: GET_MOLECULAS_PRODUTOS_SUCCESS, payload: response.data })
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao Carregar Produtos das Moleculas');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao Carregar Produtos das Moleculas');
    }
}

function* getProdutosIDMoleculas(action:any) {
    const data = action.payload
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.getProdutosIDMoleculas, data);
        loading.destroy();
        if (response.status === 200) {
            yield put({ type: GET_MOLECULAS_PRODUTOS_IDMOLECULA_SUCCESS, payload: response.data })
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao Carregar Produtos das Moleculas');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao Carregar Produtos das Moleculas');
    }
}

function* postCadastroMoleculas(action:any) {
    const data = action.payload
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.postCadastroMoleculas, data);
        loading.destroy();
        if (response.status === 200) {
            yield put({ type: GET_MOLECULAS_CADASTRO_MOLECULA_SUCCESS, payload: response.data })
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao Cadastrar Moleculas');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao Cadastrar Moleculas');
    }
}

function* DeleteMoleculas(action:any) {
    const data = action.payload
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.deleteMolecula, data);
        loading.destroy();
        if (response.status === 200) {
            yield put({ type: DELETE_MOLECULAS_SUCCESS, payload: response.data })
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao Deletar Moleculas');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao Deletar Moleculas');
    }
}

function* getCadastroProdutos(action:any) {
    const data = action.payload
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.getCadastroProdutosMargenerico, data);
        loading.destroy();
        if (response.status === 200) {
            yield put({ type: GET_MOLECULAS_CADASTRO_PRODUTOS_SUCCESS, payload: response.data })
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao Carregar Cadastro Produtos0');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao Carregar Cadastro Produtos1');
    }
}

export function* watchAllMargenerico() {
    yield takeLatest(GET_MOLECULAS, getMoleculas);
    yield takeLatest(GET_MOLECULAS_PRODUTOS, getMoleculaProduto);
    yield takeLatest(GET_MOLECULAS_PRODUTOS_IDMOLECULA, getProdutosIDMoleculas);
    yield takeLatest(GET_MOLECULAS_EXECUCAO, getExecucaoApurador);
    yield takeLatest(GET_MOLECULAS_RELATORIOCSV, getRelatorioCSV);
    yield takeLatest(GET_MOLECULAS_CADASTRO_PRODUTOS, getCadastroProdutos);
    yield takeLatest(GET_MOLECULAS_CADASTRO_MOLECULA, postCadastroMoleculas);
    yield takeLatest(DELETE_MOLECULAS, DeleteMoleculas);
}