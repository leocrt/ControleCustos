import jwtDecode from 'jwt-decode';
export const GRANT_TYPE = 'password';
export const CLIENT_ID = 'ComprasReact';
export const SECRET = 'comprasreact';
export const SCOPE = 'openid ComprasReact';
export const APP = 'CORT';


export const TOKEN_KEY = "@compras-Token";
export const USER_NAME = "@compras-username";
export const USER_MATRICULA = "@compras-matricula";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const setUserName = (userName: string) => localStorage.setItem(USER_NAME, userName);
export const setUserMatricula = (userMatricula: string) => localStorage.setItem( USER_MATRICULA, userMatricula );
export const getUserName = () => localStorage.getItem(USER_NAME);
export const getUserMatricula = () => localStorage.getItem(USER_MATRICULA);
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getRole = (token: string) => {
  const decoded: any = jwtDecode(token);

  return decoded.role;
}

export const verifyRoles = (token: string, roles: string[] | string) => {
  const decoded: any = jwtDecode(token);

  //Verifica se o token decodificado possui a propriedade role e verifica se ela é uma string
  if ('role' in decoded && typeof (decoded.role) === 'string' && decoded.app === APP && typeof (roles) === 'string') {
    if (decoded.role === roles) {
      return {
        authorized: true,
        message: 'Sucesso na autenticação'
      }
    }
    else
      return {
        authorized: false,
        message: 'Usuário sem permissão para acessar o sistema'
      }
  }
  //Verifica se o token decodificado possui a propriedade role. Aqui a propriedade role é um array
  else if (typeof (roles) === 'object' && Array.isArray(roles)) {
    if ('role' in decoded && decoded.app === APP && decoded.role.find((i: string) => roles.findIndex((e) => e === i))) {
      return {
        authorized: true,
        message: 'Sucesso na autenticação'
      }
    }
    else {
      return {
        authorized: false,
        message: 'Usuário sem permissão para acessar o sistema'
      }
    }
  }
}
