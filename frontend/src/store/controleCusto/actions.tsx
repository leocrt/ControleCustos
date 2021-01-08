import { ADD_NEW_DEPARTAMENTO, ADD_NEW_FUNCIONARIO, ADD_NEW_MOVIMENTACAO, DELETE_DEPARTAMENTO_BY_ID, DELETE_FUNCIONARIO_BY_ID, DELETE_MOVIMENTACAO_BY_ID, Departamento, Funcionario, GET_All_DEPARTAMENTOS, GET_All_FUNCIONARIOS, GET_ALL_MOVIMENTACOES, GET_MOVIMENTACAO_BY_DESCRICAO, GET_MOVIMENTACAO_BY_ID_FUNCIONARIO, Movimentacao } from "../../types/models/controleCustoType";

export const getAllFuncionarios = () => {
    return ({ type: GET_All_FUNCIONARIOS });
};
export const addNewFuncionario = (data: any) => {
    return ({ type: ADD_NEW_FUNCIONARIO, payload: data });
};
export const getAllDepartamentos = () => {
    return ({ type: GET_All_DEPARTAMENTOS});
};
export const getDepartamentoById = (idDepartamento: number) => {
    return ({ type: ADD_NEW_DEPARTAMENTO, payload: idDepartamento });
};
export const addNewDepartamento = (data: Departamento) => {
    return ({ type: ADD_NEW_DEPARTAMENTO, payload: data });
};
export const getAllMovimentacoes = () => {
    return ({ type: GET_ALL_MOVIMENTACOES });
};
export const addNewMovimentacao = (data: Movimentacao) => {
    return ({ type: ADD_NEW_MOVIMENTACAO, payload: data });
};
export const deleteFuncionarioById = (id: number) => {
    return ({ type: DELETE_FUNCIONARIO_BY_ID, payload: id });
};
export const deleteDepartamentoById = (id: number) => {
    return ({ type: DELETE_DEPARTAMENTO_BY_ID, payload: id });
};
export const deleteMovimentacaoById = (id: number) => {
    return ({ type: DELETE_MOVIMENTACAO_BY_ID, payload: id });
};
export const getMovimentacaoByIdFuncionario = (id: number) => {
    return ({ type: GET_MOVIMENTACAO_BY_ID_FUNCIONARIO, payload: id });
};
export const getMovimentacaoByDescricao = (palavra: string) => {
    return ({ type: GET_MOVIMENTACAO_BY_DESCRICAO, payload: palavra });
};