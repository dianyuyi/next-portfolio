import { combineReducers } from '@reduxjs/toolkit'

import languageCodeSlice from './languageCodeSlice'
import pageCollectSlice from './pageCollectSlice'
import databaseSlice from './databaseSlice'

export default combineReducers({
  languageCodeSlice,
  pageCollectSlice,
  databaseSlice,
})
