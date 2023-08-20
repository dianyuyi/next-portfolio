import { actionTypes } from './actionTypes'

export const initialState = {
  response: [],
  isLoading: null,
  errors: null,
}

const reducers = (state = initialState, action: Saga.Action) => {
  const { type, payload } = action
  switch (type) {
    case actionTypes.GET_PAGE_COLLECT_REQUEST:
      return {
        ...state,
        isLoading: true,
      }

    case actionTypes.GET_PAGE_COLLECT_SUCCESS:
      return {
        isLoading: false,
        response: payload,
        errors: null,
      }

    case actionTypes.GET_PAGE_COLLECT_FAILURE:
      return {
        isLoading: false,
        response: initialState.response,
        errors: payload,
      }

    case actionTypes.RESET_GET_PAGE_COLLECT:
      return initialState

    default:
      return state
  }
}

export default reducers
