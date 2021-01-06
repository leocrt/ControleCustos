import * as types from '../../types/relatorios/relatoriosType';

const initialState: types.relatoriosState = {
    grupoFornecedores: [],
    gruposCompra: [],
    fornecedorGrupoCompra: []
}

const relatoriosReducer = (state = initialState, action: types.RelatoriosActions): types.relatoriosState => {
    switch (action.type) {
        case types.GET_GRUPO_FORNECEDORES_SUCCESS:
            state.grupoFornecedores = action.payload;
            return Object.assign({}, state);
        case types.GET_GRUPOS_COMPRA_SUCCESS:
            state.gruposCompra = action.payload;
            return Object.assign({}, state);
        case types.GET_FORNECEDOR_GRUPO_COMPRA_SUCCESS:
            state.fornecedorGrupoCompra = action.payload;
            return Object.assign({}, state);
        case types.CLEAR_FORNECEDOR_GRUPO_COMPRA:
            state.fornecedorGrupoCompra = [];
            return Object.assign({}, state);
        default:
            return state;
    }
}

export default relatoriosReducer;