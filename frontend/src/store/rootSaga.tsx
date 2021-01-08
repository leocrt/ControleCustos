import { all } from 'redux-saga/effects';
import { WatchAllControleCustos } from './controleCusto/saga';

export function* rootSaga() {
    yield all([
        WatchAllControleCustos()
    ]);
}
