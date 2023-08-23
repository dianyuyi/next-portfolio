import { all } from 'redux-saga/effects'

import getDatabaseSagas from './server/getDatabase/sagas'
import getPageCollectSagas from './server/getPageCollect/sagas'

function* rootSaga() {
  yield all([getDatabaseSagas(), getPageCollectSagas()])
}

export default rootSaga
