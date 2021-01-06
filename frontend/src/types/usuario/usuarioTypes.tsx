export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const GET_USER_INFO = 'GET_USER_INFO';
export const TOKEN_EXPIRED = 'TOKEN_EXPIRED';

export interface ErrorLogin {
    error: string,
    error_description: string
}

export interface UserState {
    user: User,
    errorAction: ErrorLogin,
    tokenExpired: boolean | null
}

export interface User {
    matricula: string,
    name: string,
    email: string,
    filial: string | null,
    role: string | null,
    permissions: string | string[],
    sub: string

}

export interface GetUserInfoAction {
    type: typeof GET_USER_INFO,
    payload: User
}

export interface LoginSucess {
    type: typeof LOGIN_SUCCESS,
    payload: {
        token: string,
        action: any,
        user: User,
        message: string
    }
}

export interface LoginFailed {
    type: typeof LOGIN_FAILED,
    payload: string
}

export interface TokenExpired {
    type: typeof TOKEN_EXPIRED,
    payload: void
}


export type UserActions = GetUserInfoAction | LoginSucess | LoginFailed | TokenExpired;