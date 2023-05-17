import { createWrapper } from 'next-redux-wrapper'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducers'
import rootSaga from 'src/redux_saga/rootSagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  devTools: true,
})

store.sagaTask = sagaMiddleware.run(rootSaga)
const makeStore = () => store

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
})
