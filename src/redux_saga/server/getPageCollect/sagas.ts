import { all, take, takeLatest, call, put, delay } from 'redux-saga/effects'
import { getPageCollectAPI } from 'server/notion/getPageCollectAPI'

import { getPageCollectSuccess, getPageCollectFailure, tickClock } from './actions'
import { actionTypes } from './actionTypes'
import { Action } from 'redux'

interface CollectAction extends Action {
  payload: {
    pageKey: string
  }
}

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield call(delay, 800)
  }
}

export function* getPageCollectRequestSaga({ payload }: CollectAction) {
  try {
    const response = yield call(getPageCollectAPI, payload.pageKey)
    if (response.results) {
      yield put(getPageCollectSuccess(response.results))
    } else {
      yield put(getPageCollectFailure(response.message))
    }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    yield put(getPageCollectFailure(message))
  }
}

function* getPageCollectSagas() {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.GET_PAGE_COLLECT_REQUEST, getPageCollectRequestSaga),
  ])
}

export default getPageCollectSagas
