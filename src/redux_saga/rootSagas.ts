import { all } from 'redux-saga/effects'

import getSideDatabaseSagas from './server/getSideDatabase/sagas'
import getArtDatabaseSagas from './server/getArtDatabase/sagas'
import getWorkDatabaseSagas from './server/getWorkDatabase/sagas'

import getSidePageCollectSagas from './server/getSidePageCollect/sagas'
import getArtPageCollectSagas from './server/getArtPageCollect/sagas'
import getWorkPageCollectSagas from './server/getWorkPageCollect/sagas'

function* rootSaga() {
  yield all([
    getSideDatabaseSagas(),
    getArtDatabaseSagas(),
    getWorkDatabaseSagas(),
    getSidePageCollectSagas(),
    getArtPageCollectSagas(),
    getWorkPageCollectSagas(),
  ])
}

export default rootSaga
