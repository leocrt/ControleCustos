import axios from 'axios';
import { getToken } from './auth';

const URL_IDENTITY = process.env.REACT_APP_URL_IDENTITY_HOMO;
const URL_API_RELATORIOS = process.env.REACT_APP_URL_API_RELATORIOS;


export async function autenticarUsuario(data: any) {
    return await axios.post(`${URL_IDENTITY}/oauth/connect/token`, data);
}

export async function buscarDadosUsuario(token: string) {
    return await axios.get(`${URL_IDENTITY}/oauth/connect/userinfo`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}

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