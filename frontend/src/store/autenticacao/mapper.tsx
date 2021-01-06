import { setToken } from "../../services/auth";
import { successMessage, errorMessage, openNotificationBallon } from "../../utils/utils";
import { message } from "antd";


export function validarAutenticacao(token: string, action: any, message: string) {
    setToken(token);
    successMessage(message);
    action.history.push('/home');
}

export function erroAutenticacao(message: string) {
    errorMessage(message);
}

export function loadDestroy() {
    message.destroy();
}

export function validarTokenExpirado() {
    localStorage.clear();
    openNotificationBallon('Sessão expirada', 'Por motivos de segurança, faça login novamente no sistema.',
        () => window.location.href = '/login', null);
}