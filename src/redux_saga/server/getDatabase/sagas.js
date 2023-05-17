import { all, takeLatest, call, put } from 'redux-saga/effects'
import { getDatabaseAPI } from 'server/notion/getDataBaseAPI'

import { getDatabaseSuccess, getDatabaseFailure } from './actions'
import { actionTypes } from './actionTypes'

export function* getDatabaseRequestSaga({ payload }) {
  try {
    const response = yield call(getDatabaseAPI, payload.type)
    yield put(getDatabaseSuccess(response.results))
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    yield put(getDatabaseFailure(message))
  }
}

function* getDatabaseSagas() {
  yield all([takeLatest(actionTypes.GET_DATABASE_REQUEST, getDatabaseRequestSaga)])
}

export default getDatabaseSagas
