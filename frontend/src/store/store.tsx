import jwt_decode from 'jwt-decode';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { getToken, logout } from '../services/auth';
import { TOKEN_EXPIRED } from '../types/usuario/usuarioTypes';
import controleCustosReducer from './controleCusto/reducer';
import margenericoReducer from './Margenericos/reducer';
import relatoriosReducer from './relatorios/reducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    relatorios: relatoriosReducer,
    margenerico: margenericoReducer,
    controleCustos: controleCustosReducer
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