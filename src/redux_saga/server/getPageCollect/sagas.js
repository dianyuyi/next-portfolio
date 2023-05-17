import { all, takeLatest, call, put } from 'redux-saga/effects'
import { getPageCollectAPI } from 'server/notion/getPageCollectAPI'

import { getPageCollectSuccess, getPageCollectFailure } from './actions'
import { actionTypes } from './actionTypes'

export function* getPageCollectRequestSaga({ payload }) {
  try {
    const response = yield call(getPageCollectAPI, payload.pageKey)
    yield put(getPageCollectSuccess(response.results))
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    yield put(getPageCollectFailure(message))
  }
}

function* getPageCollectSagas() {
  yield all([takeLatest(actionTypes.GET_PAGE_COLLECT_REQUEST, getPageCollectRequestSaga)])
}

export default getPageCollectSagas
