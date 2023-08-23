import { combineReducers } from '@reduxjs/toolkit'

// import pageCollectSlice from './pageCollectSlice'
import pageSideCollectSlice from 'src/redux_saga/server/getSidePageCollect/reducers'
import pageArtCollectSlice from 'src/redux_saga/server/getSidePageCollect/reducers'
import pageWorkCollectSlice from 'src/redux_saga/server/getSidePageCollect/reducers'

// import databaseSlice from './databaseSlice'
import sideDatabaseSlice from 'src/redux_saga/server/getSideDatabase/reducers'
import artDatabaseSlice from 'src/redux_saga/server/getSideDatabase/reducers'
import workDatabaseSlice from 'src/redux_saga/server/getSideDatabase/reducers'

export default combineReducers({
  pageSideCollectSlice,
  pageArtCollectSlice,
  pageWorkCollectSlice,
  sideDatabaseSlice,
  artDatabaseSlice,
  workDatabaseSlice,
})
