export const GET_MOLECULAS = 'GET_MOLECULAS';
export const GET_MOLECULAS_PRODUTOS = 'GET_MOLECULAS_PRODUTOS';
export const GET_MOLECULAS_SUCCESS = 'GET_MOLECULAS_SUCCESS';
export const GET_MOLECULAS_PRODUTOS_SUCCESS = 'GET_MOLECULAS_PRODUTOS_SUCCESS';
export const GET_MOLECULAS_EXECUCAO = 'GET_MOLECULAS_EXECUCAO';
export const GET_MOLECULAS_EXECUCAO_SUCCESS = 'GET_MOLECULAS_EXECUCAO_SUCCESS';
export const GET_MOLECULAS_RELATORIOCSV = 'GET_MOLECULAS_RELATORIOCSV';
export const GET_MOLECULAS_RELATORIOCSV_SUCCESS = 'GET_MOLECULAS_RELATORIOCSV_SUCCESS';
export const GET_MOLECULAS_PRODUTOS_IDMOLECULA = 'GET_MOLECULAS_PRODUTOS_IDMOLECULA';
export const GET_MOLECULAS_PRODUTOS_IDMOLECULA_SUCCESS = 'GET_MOLECULAS_PRODUTOS_IDMOLECULA_SUCCESS';
export const GET_MOLECULAS_CADASTRO_PRODUTOS = 'GET_MOLECULAS_CADASTRO_PRODUTOS';
export const GET_MOLECULAS_CADASTRO_PRODUTOS_SUCCESS = 'GET_MOLECULAS_CADASTRO_PRODUTOS_SUCCESS';
export const GET_MOLECULAS_CADASTRO_MOLECULA = 'GET_MOLECULAS_CADASTRO_MOLECULA';
export const GET_MOLECULAS_CADASTRO_MOLECULA_SUCCESS = 'GET_MOLECULAS_CADASTRO_MOLECULA_SUCCESS';
export const DELETE_MOLECULAS = 'DELETE_MOLECULAS';
export const DELETE_MOLECULAS_SUCCESS = 'DELETE_MOLECULAS_SUCCESS';

export interface margenericoState {    
    moleculas: moleculas[] ,
    moleculasProdutos: moleculasProdutos[],
    execucaoApurador: execucaoApurador[],
    moleculasProdutosID:moleculasProdutosID[],
    cadastroProdutos:CadastroProdutos[],
    CadastroMolecula:CadastroMolecula[],
    DeleteMolecula:DeleteMolecula[], 
}

export interface GetRelatorioCSV {
    type: typeof GET_MOLECULAS_RELATORIOCSV_SUCCESS,
    payload: void
};

export interface moleculas {
    id: number
    descricao: string
    tamanho: string
}

export interface moleculasProdutos {
    codigo: string
    foraMix: string
    percentualAtingido: number
    peso: number
    molecula:string
    descricao: string
    fabricante:string
    fornecedor:string
}

export interface CadastroProdutos {
    codigo: string
    descricao: string 
}

export interface CadastroMolecula {
    id: number
    usuario: number 
    descricao: string 
    Produtos:[]
}

export interface DeleteMolecula {
    retornoDel: string
}

export interface moleculasProdutosID {
    codigo: number
    peso: number
    descricaoProduto: string
}

export interface execucaoApurador {
     data: string
}

export interface GetMoleculas {
    type: typeof GET_MOLECULAS_SUCCESS,
    payload: moleculas[]
}

export interface GetMoleculasProdutos {
    type: typeof GET_MOLECULAS_PRODUTOS_SUCCESS,
    payload: moleculasProdutos[]
}

export interface PostCadastroMolecula {
    type: typeof GET_MOLECULAS_CADASTRO_MOLECULA_SUCCESS,
    payload: CadastroMolecula[]
}

export interface DeleteMolecula {
    type: typeof DELETE_MOLECULAS_SUCCESS,
    payload: DeleteMolecula[]
}

export interface GetProdutosIDMoleculas {
    type: typeof GET_MOLECULAS_PRODUTOS_IDMOLECULA_SUCCESS,
    payload: moleculasProdutosID[]
}

export interface GetCadastroProdutos {
    type: typeof GET_MOLECULAS_CADASTRO_PRODUTOS_SUCCESS,
    payload: CadastroProdutos[]
}

export interface GetExecucaoApurador {
    type: typeof GET_MOLECULAS_EXECUCAO_SUCCESS,
    payload: execucaoApurador[]
}


export type MargenericosActions = GetMoleculas | GetMoleculasProdutos | GetExecucaoApurador | GetRelatorioCSV | GetProdutosIDMoleculas | GetCadastroProdutos | PostCadastroMolecula | DeleteMolecula ;