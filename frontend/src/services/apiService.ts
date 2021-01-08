import axios from 'axios';
import { getToken } from './auth';

const URL_API_RELATORIOS = process.env.REACT_APP_URL_API_RELATORIOS;
const URL_API_CC = process.env.REACT_APP_URL_API_CC

export async function getRelatorioAgrupamentoFornecedores() {
    return await axios.get(`${URL_API_RELATORIOS}/api/relatorios/csvfile`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
}

export async function getGrupoFornecedores() {
    return await axios.get(`${URL_API_RELATORIOS}/api/funcionario/1`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
}

export async function getGruposCompra() {
    return await axios.get (`${URL_API_RELATORIOS}/api/relatorios/getGruposCompra`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
}

export async function getFornecedorGrupoCompra(payload: any) {
    return await axios.post(`${URL_API_RELATORIOS}/api/relatorios/GetFornecedorGrupoCompraById`,payload, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
}

export async function getMoleculas() {
    return await axios.post(`${URL_API_RELATORIOS}/api/margenerico/moleculas`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
}

export async function getMoleculaProduto() {
    return await axios.get(`${URL_API_RELATORIOS}/api/margenerico/moleculas-produtos/`);
}

export async function getProdutosIDMoleculas(data:any) {
    return await axios.get(`${URL_API_RELATORIOS}/api/margenerico/id-moleculas-produtos/`+data);
}

export async function getCadastroProdutosMargenerico(data:any) {
    return await axios.get(`${URL_API_RELATORIOS}/api/margenerico/produto/`+data);
}

export async function deleteMolecula(data:any) {
    return await axios.get(`${URL_API_RELATORIOS}/api/margenerico/delete-molecula/`+data);
}

export async function getExecucaoApurador() {
    return await axios.get(`${URL_API_RELATORIOS}/api/margenerico/data-apuracao`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
}

export async function getRelatorioCSV() {
    return await axios.get(`${URL_API_RELATORIOS}/api/margenerico/csvfile`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
}

export async function postCadastroMoleculas(payload: any) {
    return await axios.post(`${URL_API_RELATORIOS}/api/margenerico/edicao-moleculas`,payload, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
}

export async function postDepartamento(payload: any) {
    return await axios.post(`${URL_API_CC}/api/departamento`,payload, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
}

export async function getDepartamentos() {
    return await axios.get(`${URL_API_CC}/api/departamento`,{
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
}

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
}

export async function getMovimentacoes() {
    return await axios.get(`${URL_API_CC}/api/movimentacao/`,{
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    });
};
