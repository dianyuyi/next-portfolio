import { actionTypes } from './actionTypes'

export const initialState = {
  isLoading: null,
  response: {},
  errors: null,
}

const reducers = (state = initialState, action: Saga.Action) => {
  const { type, payload } = action
  switch (type) {
    case actionTypes.GET_DATABASE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case actionTypes.GET_DATABASE_SUCCESS:
      return {
        isLoading: false,
        response: payload,
        errors: null,
      }

    case actionTypes.GET_DATABASE_FAILURE:
      return {
        response: initialState.response,
        isLoading: false,
        errors: payload,
      }

    case actionTypes.RESET_GET_DATABASE:
      return initialState

    default:
      return state
  }
}

export default reducers
