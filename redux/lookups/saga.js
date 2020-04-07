import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_LOOKUP } from './actions'

const instance = axios.create({
  baseURL: 'https://api.test.ca/v1/',
})

const fetchLookups = async params =>
  await instance.get('/urllookups', { params })

function* watchLookups(action) {
  console.log('watchLookups')
  if(action.url === '/favicon.ico') return null
  const { url } = action
  const result = yield call(fetchLookups, { url })
  yield put({ type: 'FETCH_LOOKUP_SUCCESS', ...result })
}

// add global watchers
function* lookupsSaga() {
  // yield call(watchLookups)
  yield takeLatest(FETCH_LOOKUP, watchLookups)
}

export default lookupsSaga
