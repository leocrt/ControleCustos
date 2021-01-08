import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import controleCustosReducer from './controleCusto/reducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    controleCustos: controleCustosReducer
});

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof reducers>

export default store;