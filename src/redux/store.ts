import { createWrapper } from 'next-redux-wrapper'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import rootReducer from './rootReducers'

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

const makeStore = () => store

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
})
