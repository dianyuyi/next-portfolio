import { combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import isEqual from 'lodash/isEqual'

import { initialState as artListSliceInitialState } from './server/artListSlice'
import serverReducers from './server/reducers'
import clientReducers from './client/reducers'

const getServerSliceInitialState = (key: string) => {
  switch (key) {
    case 'artListSlice':
      return artListSliceInitialState

    default:
      return {}
  }
}

const hydrateServerState = (previousState, payloadState, initialState) => {
  if (isEqual(payloadState, initialState) && isEqual(previousState, initialState) === false) {
    return previousState
  }

  return payloadState
}

const handleHydrate = (state: Store.RootState, action) => {
  const nextState = {
    ...state,
    server: {
      ...state.server,
      ...action.payload.server,
    },
  }

  // When change page, `HYDRATE` action will reset server state to initial
  // https://github.com/kirill-konshin/next-redux-wrapper/issues/481
  const serverSliceNames = Object.keys(nextState.server)
  serverSliceNames.forEach((serverSliceName) => {
    nextState.server[serverSliceName] = hydrateServerState(
      state.server[serverSliceName],
      action.payload.server[serverSliceName],
      getServerSliceInitialState(serverSliceName)
    )
  })

  return nextState
}

const rootReducer = combineReducers({
  server: serverReducers,
  client: clientReducers,
})

const reducer = (state: Store.RootState, action) => {
  switch (action.type) {
    case HYDRATE:
      return handleHydrate(state, action)

    default:
      return rootReducer(state, action)
  }
}

export default reducer
