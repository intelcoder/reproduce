import { all, fork } from 'redux-saga/effects'
import lookupsSaga from './lookups/saga'

// add global watchers
function* rootSaga() {
  yield all([fork(lookupsSaga)])
}

export default rootSaga
