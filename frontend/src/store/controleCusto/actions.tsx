import { ADD_NEW_DEPARTAMENTO, ADD_NEW_FUNCIONARIO, ADD_NEW_MOVIMENTACAO, Departamento, Funcionario, GET_All_DEPARTAMENTOS, GET_All_FUNCIONARIOS, GET_ALL_MOVIMENTACOES, Movimentacao } from "../../types/models/controleCustoType";


export const getAllFuncionarios = () => {
    return ({ type: GET_All_FUNCIONARIOS });
}

export const addNewFuncionario = (data: any) => {
    return ({ type: ADD_NEW_FUNCIONARIO, payload: data });
}

export const getAllDepartamentos = () => {
    return ({ type: GET_All_DEPARTAMENTOS});
}

export const getDepartamentoById = (idDepartamento: number) => {
    return ({ type: ADD_NEW_DEPARTAMENTO, payload: idDepartamento });
}

export const addNewDepartamento = (data: Departamento) => {
    return ({ type: ADD_NEW_DEPARTAMENTO, payload: data });
}


export const getAllMovimentacoes = () => {
    return ({ type: GET_ALL_MOVIMENTACOES });
}

export const addNewMovimentacao = (data: Movimentacao) => {
    return ({ type: ADD_NEW_MOVIMENTACAO, payload: data });
}