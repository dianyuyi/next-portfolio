import { actionTypes } from './actionTypes'

export const getPageCollectRequest = (payload) => ({
  type: actionTypes.GET_PAGE_COLLECT_REQUEST,
  payload,
})

export const getPageCollectSuccess = (payload) => ({
  type: actionTypes.GET_PAGE_COLLECT_SUCCESS,
  payload,
})

export const getPageCollectFailure = (errors) => ({
  type: actionTypes.GET_PAGE_COLLECT_FAILURE,
  errors,
})

export const resetGetPageCollect = () => ({
  type: actionTypes.RESET_GET_PAGE_COLLECT,
})
