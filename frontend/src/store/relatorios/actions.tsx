import { GET_RELATORIO_AGRUPAMENTO_FORNECEDOR, GET_GRUPO_FORNECEDORES, GET_FORNECEDOR_GRUPO_COMPRA, CLEAR_FORNECEDOR_GRUPO_COMPRA } from "../../types/relatorios/relatoriosType"
import {GET_GRUPOS_COMPRA} from "../../types/relatorios/relatoriosType"

export const getRelatorioGrupoFornecedores = () => {
    return ({ type: GET_RELATORIO_AGRUPAMENTO_FORNECEDOR });
}

export const popularTabelaGrupoFornecedores = () => {
    return ({ type: GET_GRUPO_FORNECEDORES });
}

export const getGruposCompra = () => {
    return ({type: GET_GRUPOS_COMPRA})
}

export const getFornecedorGrupoCompra = (idsGrupoCompra: any[]) => {
    return ({
        type: GET_FORNECEDOR_GRUPO_COMPRA,
        payload: idsGrupoCompra
    })
}
export const clearFornecedorGrupoCompra = () => {
    return ({
        type: CLEAR_FORNECEDOR_GRUPO_COMPRA
    })
}