import * as types from '../../types/models/controleCustoType';

const initialState: types.ControleCustoState = {
    funcionarios: [],
    departamentos:[],
    movimentacoes: []
}

const controleCustosReducer = (state = initialState, action: types.ControleCustoActions): types.ControleCustoState => {
    switch (action.type) {
        case types.GET_All_FUNCIONARIOS_SUCCESS:
            state.funcionarios = action.payload;
            return Object.assign({}, state);
        case types.GET_All_DEPARTAMENTOS_SUCCESS:
            state.departamentos = action.payload;
            return Object.assign({}, state);
        case types.GET_ALL_MOVIMENTACOES_SUCCESS:
            state.movimentacoes = action.payload;
            return Object.assign({}, state);
        default:
            return state;
    }
}

export default controleCustosReducer;