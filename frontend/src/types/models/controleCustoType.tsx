import { type } from "os";

export const GET_All_DEPARTAMENTOS = 'GET_All_DEPARTAMENTOS';
export const GET_All_DEPARTAMENTOS_SUCCESS = 'GET_All_DEPARTAMENTOS_SUCCESS';
export const ADD_NEW_DEPARTAMENTO = 'ADD_NEW_DEPARTAMENTO';
export const GET_All_FUNCIONARIOS = 'GET_All_FUNCIONARIOS';
export const GET_All_FUNCIONARIOS_SUCCESS = 'GET_All_FUNCIONARIOS_SUCCESS';
export const ADD_NEW_FUNCIONARIO = 'ADD_NEW_FUNCIONARIO';

export interface ControleCustoState{
    funcionarios: Funcionario[],
    departamentos: Departamento[]
}

export interface Departamento{
    id?: number,
    nome: string,
}

export interface Funcionario{
    id?: number,
    nome: string,
    departamento: string
}

export interface GetFuncionarios {
    type: typeof GET_All_FUNCIONARIOS_SUCCESS,
    payload: Funcionario[]
}

export interface GetDepartamentos {
    type: typeof GET_All_DEPARTAMENTOS_SUCCESS,
    payload: Departamento[]
}

export type ControleCustoActions = GetDepartamentos | GetFuncionarios;