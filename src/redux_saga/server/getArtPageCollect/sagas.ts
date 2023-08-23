import { all, takeLatest, call, put } from 'redux-saga/effects'
import { getPageCollectAPI } from 'server/notion/getPageCollectAPI'

import { getPageCollectSuccess, getPageCollectFailure } from './actions'
import { actionTypes } from './actionTypes'
import { Action } from 'redux'

interface CollectAction extends Action {
  payload: {
    pageKey: string
  }
}

export function* getArtPageCollectRequestSaga({ payload }: CollectAction) {
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

function* getArtPageCollectSagas() {
  yield all([takeLatest(actionTypes.GET_PAGE_COLLECT_REQUEST, getArtPageCollectRequestSaga)])
}

export default getArtPageCollectSagas
