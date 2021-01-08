import axios from 'axios';

const URL_API_CC = process.env.REACT_APP_URL_API_CC;

export async function postDepartamento(payload: any) {
    return await axios.post(`${URL_API_CC}/api/departamento`,payload, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
};

export async function getDepartamentos() {
    return await axios.get(`${URL_API_CC}/api/departamento`,{
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
};

export async function getDepartamentoById(payload: any) {
    return await axios.get(`${URL_API_CC}/api/departamento/${payload}`,{
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
}

export async function postFuncionario(payload: any) {
    return await axios.post(`${URL_API_CC}/api/funcionario/`,payload,{
        headers: {
            'Access-Control-Allow-Origin': '*',
        }, 
    });
};

export async function getFuncionarios() {
    return await axios.get(`${URL_API_CC}/api/funcionario`,{
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
};

export async function postMovimentacao(payload: any) {
    return await axios.post(`${URL_API_CC}/api/movimentacao/`,payload,{
        headers: {
            'Access-Control-Allow-Origin': '*',
        }, 
    });
};

export async function getMovimentacoes() {
    return await axios.get(`${URL_API_CC}/api/movimentacao/`,{
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
};

export async function deleteFuncionario(payload: any) {
    return await axios.delete(`${URL_API_CC}/api/funcionario/${payload}`,{
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
};

export async function deleteDepartamento(payload: any) {
    return await axios.delete(`${URL_API_CC}/api/departamento/${payload}`,{
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
};

export async function deleteMovimentacao(payload: any) {
    return await axios.delete(`${URL_API_CC}/api/movimentacao/${payload}`,{
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
};

export async function getMovimentacaoByIdFuncionario(payload: any) {
    return await axios.get(`${URL_API_CC}/api/movimentacao/byFuncionario/${payload}`,{
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
};

export async function getMovimentacaoByDescricao(payload: any) {
    debugger;
    return await axios.get(`${URL_API_CC}/api/movimentacao/descricao/${payload}`,{
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
};

