import { createWrapper } from 'next-redux-wrapper'
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './rootReducers'

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

const makeStore = () => store

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
})
