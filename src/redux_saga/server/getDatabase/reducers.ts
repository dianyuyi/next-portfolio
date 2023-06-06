import { actionTypes } from './actionTypes'

export const initialState = {
  isLoading: null,
  response: {},
  errors: null,
}

const reducers = (state = initialState, action) => {
  const { type, payload, errors } = action
  switch (type) {
    case actionTypes.GET_DATABASE_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case actionTypes.GET_DATABASE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: payload,
        errors: null,
      }

    case actionTypes.GET_DATABASE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: errors,
      }

    case actionTypes.RESET_GET_DATABASE:
      return initialState

    default:
      return state
  }
}

export default reducers
