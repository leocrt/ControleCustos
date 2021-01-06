import { LOGIN } from "../../types/usuario/usuarioTypes";

export const autenticarUsuario = (matricula: string, senha: string, history: any) => {
    return ({ type: LOGIN, payload: { matricula, senha }, history });
}