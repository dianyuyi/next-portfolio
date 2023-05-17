import { combineReducers } from '@reduxjs/toolkit'

import languageCodeSlice from './languageCodeSlice'
// import pageCollectSlice from './pageCollectSlice'
// import pageCollectSlice from 'src/redux_saga/client/getPageCollect/reducers'
import databaseSlice from './databaseSlice'

export default combineReducers({
  languageCodeSlice,
  // pageCollectSlice,
  databaseSlice,
})
