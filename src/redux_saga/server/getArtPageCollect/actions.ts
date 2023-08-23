import { actionTypes } from './actionTypes'

export const getPageCollectRequest = (payload: Saga.Payload) => ({
  type: actionTypes.GET_PAGE_COLLECT_REQUEST,
  payload,
})

export const getPageCollectSuccess = (payload: Saga.Payload) => ({
  type: actionTypes.GET_PAGE_COLLECT_SUCCESS,
  payload,
})

export const getPageCollectFailure = (errors: Saga.Payload) => ({
  type: actionTypes.GET_PAGE_COLLECT_FAILURE,
  payload: errors,
})

export const resetGetPageCollect = () => ({
  type: actionTypes.RESET_GET_PAGE_COLLECT,
})
