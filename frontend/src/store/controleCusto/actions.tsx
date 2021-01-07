import { ADD_NEW_DEPARTAMENTO, ADD_NEW_FUNCIONARIO, Departamento, Funcionario, GET_All_FUNCIONARIOS } from "../../types/models/controleCustoType";


export const getAllFuncionarios = () => {
    return ({ type: GET_All_FUNCIONARIOS });
}

export const addNewFuncionario = (data: Funcionario) => {
    return ({ type: ADD_NEW_FUNCIONARIO, payload: data });
}

export const getAllDepartamentos = () => {
    return ({ type: GET_All_FUNCIONARIOS });
}

export const addNewDepartamento = (data: Departamento) => {
    return ({ type: ADD_NEW_DEPARTAMENTO, payload: data });
}