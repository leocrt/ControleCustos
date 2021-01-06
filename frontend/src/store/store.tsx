import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
import userReducer from './autenticacao/reducer';
import { logout, getToken } from '../services/auth';
import jwt_decode from 'jwt-decode';
import relatoriosReducer from './relatorios/reducer';
import margenericoReducer from './Margenericos/reducer';
import { TOKEN_EXPIRED } from '../types/usuario/usuarioTypes';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    user: userReducer,
    relatorios: relatoriosReducer,
    margenerico: margenericoReducer

});

const checkTokenExpirationMiddleware = () => (next: any) => (action: any) => {
    const token = getToken();
    if (token != null) {
        const { exp } = jwt_decode(token);
        const expirationTime = (exp * 1000) - 60000;
        if (Date.now() >= expirationTime) {
            next(action);
            logout();
            next({ type: TOKEN_EXPIRED });
        }
    }
    next(action);
};

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, checkTokenExpirationMiddleware)
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof reducers>

export default store;