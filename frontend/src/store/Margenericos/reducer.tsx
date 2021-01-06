import * as types from '../../types/margenericos/margenericosType';

const initialState: types.margenericoState = {
    moleculas: [],
    moleculasProdutos: [],
    execucaoApurador: [],
    moleculasProdutosID: [],
    cadastroProdutos: [],
    CadastroMolecula: [],
    DeleteMolecula:[],
}

const margenericoReducer = (state = initialState, action: types.MargenericosActions): types.margenericoState => {
    switch (action.type) {
        case types.GET_MOLECULAS_SUCCESS:
            state.moleculas = action.payload;
            return Object.assign({}, state);

        case types.GET_MOLECULAS_PRODUTOS_SUCCESS:
            state.moleculasProdutos = action.payload;
            return Object.assign({}, state);

        case types.GET_MOLECULAS_PRODUTOS_IDMOLECULA_SUCCESS:
            state.moleculasProdutosID = action.payload;
            return Object.assign({}, state);

        case types.GET_MOLECULAS_CADASTRO_MOLECULA_SUCCESS:
            state.CadastroMolecula = action.payload;
            return Object.assign({}, state);

        case types.DELETE_MOLECULAS_SUCCESS:
            state.DeleteMolecula = action.payload;
            return Object.assign({}, state);

        case types.GET_MOLECULAS_CADASTRO_PRODUTOS_SUCCESS:
            state.cadastroProdutos = action.payload;
            return Object.assign({}, state);

        case types.GET_MOLECULAS_EXECUCAO_SUCCESS:
            state.execucaoApurador = action.payload;
            return Object.assign({}, state);
        default:
            return state;
    }
}

export default margenericoReducer;