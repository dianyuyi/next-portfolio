import { combineReducers } from '@reduxjs/toolkit'

// import pageCollectSlice from './pageCollectSlice'
import pageCollectSlice from 'src/redux_saga/server/getPageCollect/reducers'

// import databaseSlice from './databaseSlice'
import databaseSlice from 'src/redux_saga/server/getDatabase/reducers'

export default combineReducers({
  pageCollectSlice,
  databaseSlice,
})
