import { actionTypes } from './actionTypes'

export const getDatabaseRequest = (payload: Saga.Payload) => ({
  type: actionTypes.GET_DATABASE_REQUEST,
  payload,
})

export const getDatabaseSuccess = (payload: Saga.Payload) => ({
  type: actionTypes.GET_DATABASE_SUCCESS,
  payload,
})

export const getDatabaseFailure = (errors: Saga.Payload) => ({
  type: actionTypes.GET_DATABASE_FAILURE,
  errors,
})

export const resetGetProductInfo = () => ({
  type: actionTypes.RESET_GET_DATABASE,
})
