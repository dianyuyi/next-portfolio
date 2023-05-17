import { actionTypes } from './actionTypes'

export const initialState = {
  response: [],
  isLoading: null,
  errors: null,
}

const reducers = (state = initialState, action) => {
  const { type, payload, errors } = action
  switch (type) {
    case actionTypes.GET_PAGE_COLLECT_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case actionTypes.GET_PAGE_COLLECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: payload,
        errors: null,
      }

    case actionTypes.GET_PAGE_COLLECT_FAILURE:
      return {
        ...state,
        isLoading: false,
        errors: errors,
      }

    case actionTypes.RESET_GET_PAGE_COLLECT:
      return initialState

    default:
      return state
  }
}

export default reducers
