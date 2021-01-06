export const GET_RELATORIO_AGRUPAMENTO_FORNECEDOR = 'GET_RELATORIO_AGRUPAMENTO_FORNECEDOR';
export const GET_RELATORIO_AGRUPAMENTO_FORNECEDOR_SUCCESS = 'GET_RELATORIO_AGRUPAMENTO_FORNECEDOR_SUCCESS';
export const GET_GRUPO_FORNECEDORES = 'GET_GRUPO_FORNECEDORES';
export const GET_GRUPO_FORNECEDORES_SUCCESS = 'GET_GRUPO_FORNECEDORES_SUCCESS';
export const GET_GRUPOS_COMPRA = 'GET_GRUPOS_COMPRA';
export const GET_GRUPOS_COMPRA_SUCCESS = 'GET_GRUPOS_COMPRA_SUCCESS';
export const GET_FORNECEDOR_GRUPO_COMPRA = 'GET_FORNECEDOR_GRUPO_COMPRA';
export const GET_FORNECEDOR_GRUPO_COMPRA_SUCCESS = 'GET_FORNECEDOR_GRUPO_COMPRA_SUCCESS';
export const CLEAR_FORNECEDOR_GRUPO_COMPRA = 'CLEAR_FORNECEDOR_GRUPO_COMPRA';

export interface relatoriosState {
    grupoFornecedores: GrupoFornecedores[],
    gruposCompra: GrupoCompra[],
    fornecedorGrupoCompra: FornecedorGrupoCompra[]
};

export interface GrupoFornecedores {
    codigoFornecedorPrincipal: number
    nomeFornecedorPrincipal: string
    codigoFornecedorFilho: number
    nomeFornecedorFilho: string
    digitoFornecedorFilho: number
    codigoGrupo: number
};

export interface GrupoCompra{
    codigoGrupo: number,
    nomeGrupo: string
};

export interface FornecedorGrupoCompra{
    nomeFantasia: string,
    codigoFornecedor: number,
    digitoFornecedor: number,
    codigoGrupoCompra: number,
    nomeGrupoCompra: string
}

export interface GetRelatorioAgrupamentoFornecedor {
    type: typeof GET_RELATORIO_AGRUPAMENTO_FORNECEDOR_SUCCESS,
    payload: void
};

export interface GetGrupoFornecedores {
    type: typeof GET_GRUPO_FORNECEDORES_SUCCESS,
    payload: GrupoFornecedores[]
};

export interface GetGruposCompra{
    type: typeof GET_GRUPOS_COMPRA_SUCCESS,
    payload: GrupoCompra[]
};

export interface GetFornecedorGrupoCompra{
    type: typeof GET_FORNECEDOR_GRUPO_COMPRA_SUCCESS,
    payload: FornecedorGrupoCompra[]
};

export interface ClearFornecedorGrupoCompra{
    type: typeof CLEAR_FORNECEDOR_GRUPO_COMPRA,
    payload: void
};

export type RelatoriosActions = GetRelatorioAgrupamentoFornecedor | GetGrupoFornecedores | GetGruposCompra | GetFornecedorGrupoCompra | ClearFornecedorGrupoCompra;