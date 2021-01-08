import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as api from '../../services/apiService';
import { ADD_NEW_DEPARTAMENTO, ADD_NEW_FUNCIONARIO, ADD_NEW_MOVIMENTACAO, DELETE_DEPARTAMENTO_BY_ID, DELETE_FUNCIONARIO_BY_ID, DELETE_MOVIMENTACAO_BY_ID, GET_All_DEPARTAMENTOS, GET_All_DEPARTAMENTOS_SUCCESS, GET_All_FUNCIONARIOS, GET_All_FUNCIONARIOS_SUCCESS, GET_ALL_MOVIMENTACOES, GET_ALL_MOVIMENTACOES_SUCCESS, GET_DEPARTAMENTO_BY_ID, GET_DEPARTAMENTO_BY_ID_SUCCESS, GET_MOVIMENTACAO_BY_DESCRICAO, GET_MOVIMENTACAO_BY_DESCRICAO_SUCCESS, GET_MOVIMENTACAO_BY_ID_FUNCIONARIO, GET_MOVIMENTACAO_BY_ID_FUNCIONARIO_SUCCESS } from "../../types/models/controleCustoType";
import { errorMessage, loadDestroy, returnMessage, successMessage } from "../../utils/utils";
import { deleteMovimentacaoById } from "./actions";

 

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

function* getFuncionarios() {
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.getFuncionarios);

        loading.destroy();
        if (response.status === 200) {
            yield put({ type: GET_All_FUNCIONARIOS_SUCCESS, payload: response.data })
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

function* getMovimentacoes() {
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.getMovimentacoes);

        loading.destroy();
        if (response.status === 200) {
            yield put({ type: GET_ALL_MOVIMENTACOES_SUCCESS, payload: response.data })
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

function* addMovimentacao(action: any) {
    const data = action.payload
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.postMovimentacao, data);

        loading.destroy();
        if (response.status === 201) {
            successMessage('Movimentação adicionada com sucesso!');
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao adicionar a Movimentação');
        };
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao adicionar o a Movimentação');
    };
};

function* deleteFuncionario(action: any) {
    const data = action.payload
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.deleteFuncionario, data);

        loading.destroy();
        if (response.status === 200) {
            successMessage('Funcionário excluído com sucesso!');
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao excluir o funcionário');
        };
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao excluir o funcionário');
    };
};

function* deleteDepartamento(action: any) {
    const data = action.payload
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.deleteDepartamento, data);

        loading.destroy();
        if (response.status === 200) {
            successMessage('Departamento excluído com sucesso!');
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao excluir o departamento');
        };
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao excluir o departamento');
    };
};

function* deleteMovimentacao(action: any) {
    const data = action.payload
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.deleteMovimentacao, data);

        loading.destroy();
        if (response.status === 200) {
            successMessage('Movimentação excluído com sucesso!');
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao excluir o Movimentação');
        };
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao excluir o Movimentação');
    };
};

function* getMovimentacaoByIdFuncionario(action: any) {
    const data = action.payload
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.getMovimentacaoByIdFuncionario, data);
        loading.destroy();
        if (response.status === 200) {
            yield put({ type: GET_MOVIMENTACAO_BY_ID_FUNCIONARIO_SUCCESS, payload: response.data })
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao carregar as movimentacoes');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao carregar os movimentacoes');
    }
};

function* getMovimentacaoByDescricao(action: any) {
    debugger;
    const data = action.payload
    try {
        const loading = returnMessage();
        loading.loading('Processando');
        const response = yield call(api.getMovimentacaoByIdFuncionario, data);
        loading.destroy();
        if (response.status === 200) {
            yield put({ type: GET_MOVIMENTACAO_BY_DESCRICAO_SUCCESS, payload: response.data })
        }
        else {
            loading.destroy();
            errorMessage('Ocorreu um erro ao carregar as movimentacoes');
        }
    } catch (error) {
        loadDestroy();
        errorMessage('Ocorreu um erro ao carregar os movimentacoes');
    }
};

export function* WatchAllControleCustos() {
    yield takeLatest(ADD_NEW_DEPARTAMENTO, addDepartamento);
    yield takeLatest(GET_All_DEPARTAMENTOS, getDepartamentos);
    yield takeLatest(GET_DEPARTAMENTO_BY_ID, getDepartamentos);
    yield takeLatest(ADD_NEW_FUNCIONARIO, addFuncionario);
    yield takeLatest(GET_All_FUNCIONARIOS, getFuncionarios);
    yield takeLatest(ADD_NEW_MOVIMENTACAO, addMovimentacao);
    yield takeLatest(GET_ALL_MOVIMENTACOES, getMovimentacoes);
    yield takeLatest(DELETE_FUNCIONARIO_BY_ID, deleteFuncionario);
    yield takeLatest(DELETE_DEPARTAMENTO_BY_ID, deleteDepartamento);
    yield takeLatest(DELETE_MOVIMENTACAO_BY_ID, deleteMovimentacao);
    yield takeLatest(GET_MOVIMENTACAO_BY_ID_FUNCIONARIO, getMovimentacaoByIdFuncionario);
    yield takeLatest(GET_MOVIMENTACAO_BY_DESCRICAO, getMovimentacaoByDescricao);
    
}