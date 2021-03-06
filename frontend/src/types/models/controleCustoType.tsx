export const GET_All_DEPARTAMENTOS = 'GET_All_DEPARTAMENTOS';
export const GET_All_DEPARTAMENTOS_SUCCESS = 'GET_All_DEPARTAMENTOS_SUCCESS';
export const GET_DEPARTAMENTO_BY_ID = 'GET_DEPARTAMENTO_BY_ID';
export const GET_DEPARTAMENTO_BY_ID_SUCCESS = 'GET_DEPARTAMENTO_BY_ID_SUCCESS';
export const ADD_NEW_DEPARTAMENTO = 'ADD_NEW_DEPARTAMENTO';
export const GET_All_FUNCIONARIOS = 'GET_All_FUNCIONARIOS';
export const GET_All_FUNCIONARIOS_SUCCESS = 'GET_All_FUNCIONARIOS_SUCCESS';
export const ADD_NEW_FUNCIONARIO = 'ADD_NEW_FUNCIONARIO';
export const GET_ALL_MOVIMENTACOES_SUCCESS = "GET_ALL_MOVIMENTACOES_SUCCESS";
export const GET_ALL_MOVIMENTACOES = "GET_ALL_MOVIMENTACOES";
export const ADD_NEW_MOVIMENTACAO = 'ADD_NEW_MOVIMENTACAO';
export const DELETE_DEPARTAMENTO_BY_ID = 'DELETE_DEPARTAMENTO_BY_ID';
export const DELETE_DEPARTAMENTO_BY_ID_SUCCESS = 'DELETE_DEPARTAMENTO_BY_ID_SUCCESS';
export const DELETE_FUNCIONARIO_BY_ID = 'DELETE_FUNCIONARIO_BY_ID';
export const DELETE_FUNCIONARIO_BY_ID_SUCCESS = 'DELETE_FUNCIONARIO_BY_ID_SUCCESS';
export const DELETE_MOVIMENTACAO_BY_ID = 'DELETE_MOVIMENTACAO_BY_ID';
export const DELETE_MOVIMENTACAO_BY_ID_SUCCESS = 'DELETE_MOVIMENTACAO_BY_ID_SUCCESS';
export const GET_MOVIMENTACAO_BY_ID_FUNCIONARIO = 'GET_MOVIMENTACAO_BY_ID_FUNCIONARIO';
export const GET_MOVIMENTACAO_BY_ID_FUNCIONARIO_SUCCESS = 'GET_MOVIMENTACAO_BY_ID_FUNCIONARIO_SUCCESS';
export const GET_MOVIMENTACAO_BY_DESCRICAO = 'GET_MOVIMENTACAO_BY_DESCRICAO';
export const GET_MOVIMENTACAO_BY_DESCRICAO_SUCCESS = 'GET_MOVIMENTACAO_BY_DESCRICAO_SUCCESS';

export interface ControleCustoState{
    funcionarios: Funcionario[],
    departamentos: Departamento[],
    movimentacoes: Movimentacao[]
};

export interface Departamento{
    id?: number,
    nome: string,
};

export interface Movimentacao{
    id?: number,
    descricao: string,
    funcionarioId: number,
    valor: number
};

export interface Funcionario{
    id?: number,
    nome: string,
    departamentos: Departamento[]
};

export interface GetFuncionarios {
    type: typeof GET_All_FUNCIONARIOS_SUCCESS,
    payload: Funcionario[]
};

export interface GetDepartamentos {
    type: typeof GET_All_DEPARTAMENTOS_SUCCESS,
    payload: Departamento[]
};

export interface GetMovimentacoes {
    type: typeof GET_ALL_MOVIMENTACOES_SUCCESS,
    payload: Movimentacao[]
};

export interface GetDepartamentoById {
    type: typeof GET_DEPARTAMENTO_BY_ID_SUCCESS,
    payload: Departamento
};

export interface GetMovimentacaoByIdFuncionario {
    type: typeof GET_MOVIMENTACAO_BY_ID_FUNCIONARIO_SUCCESS,
    payload: Movimentacao[]
};
export interface GetMovimentacaoByDescricao{
    type: typeof GET_MOVIMENTACAO_BY_DESCRICAO_SUCCESS,
    payload: Movimentacao[]
};


export type ControleCustoActions = GetDepartamentos | GetFuncionarios | GetDepartamentoById |
                 GetMovimentacoes | GetMovimentacaoByIdFuncionario | GetMovimentacaoByDescricao;