export const GET_All_FUNCIONARIOS = 'GET_All_FUNCIONARIOS';
export const GET_All_FUNCIONARIOS_SUCCESS = 'GET_All_FUNCIONARIOS_SUCCESS';
export const ADD_NEW_FUNCIONARIO = 'ADD_NEW_FUNCIONARIO';


export interface Funcionario{
    id?: number,
    nome: string,
    departamento: string
}