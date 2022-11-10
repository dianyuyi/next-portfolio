import { combineReducers } from '@reduxjs/toolkit'

import pageCollectSlice from './pageCollectSlice'
import databaseSlice from './databaseSlice'

export default combineReducers({
  pageCollectSlice,
  databaseSlice,
})
