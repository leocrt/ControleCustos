import { all } from 'redux-saga/effects';
import { watchAllUsuario } from './autenticacao/saga';
import { WatchAllControleCustos } from './controleCusto/saga';
import { watchAllMargenerico } from './Margenericos/saga';
import { watchAllRelatorios } from './relatorios/saga';

export function* rootSaga() {
    yield all([
        watchAllUsuario(),
        watchAllRelatorios(),
        watchAllMargenerico(),
        WatchAllControleCustos()
    ]);
}
