import { ADD_NEW_FUNCIONARIO, Funcionario, GET_All_FUNCIONARIOS } from "../../types/models/funcionarioType";

export const getAllFuncionarios = () => {
    return ({ type: GET_All_FUNCIONARIOS });
}

export const addNewFuncionario = (data: Funcionario) => {
    return ({ type: ADD_NEW_FUNCIONARIO, payload: data });
}