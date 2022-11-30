import { combineReducers, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import isEqual from 'lodash/isEqual'

import { initialState as pageCollectSliceInitialState } from './server/pageCollectSlice'
import { initialState as databaseSliceInitialState } from './server/databaseSlice'

import serverReducers from './server/reducers'
import clientReducers from './client/reducers'

const getServerSliceInitialState = (key: string) => {
  switch (key) {
    case 'pageCollectSlice':
      return pageCollectSliceInitialState
    case 'databaseSlice':
      return databaseSliceInitialState

    default:
      return { response: [], isLoading: null, errors: null }
  }
}

const hydrateServerState = (
  previousState: Store.InitialState,
  payloadState: Store.InitialState,
  initialState: Store.InitialState
) => {
  if (isEqual(payloadState, initialState) && isEqual(previousState, initialState) === false) {
    return previousState
  }

  return payloadState
}

const handleHydrate = (state: RootState, action: PayloadAction<Store.RootState>) => {
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

type RootState = ReturnType<typeof rootReducer>

const reducer = (state: RootState, action: PayloadAction<Store.RootState>) => {
  switch (action.type) {
    case HYDRATE:
      return handleHydrate(state, action)

    default:
      return rootReducer(state, action)
  }
}

export default reducer
