import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { AppDispatch } from 'src/redux/store'
import { getDatabaseAPI } from 'server/notion/getDataBaseAPI'
import { defineNotionError } from 'src/utils/notionErrorMsg'

export const initialState = {
  response: [],
  isLoading: null,
  errors: null,
} as Store.InitialState

export const getDatabaseAsync = createAsyncThunk<
  Store.SliceResponse,
  string,
  {
    dispatch: AppDispatch
    state: Store.RootState
  }
>('database/getDatabase', async (type, thunkAPI) => {
  try {
    const response = await getDatabaseAPI(type)
    return response.results
  } catch (error: unknown) {
    const message = defineNotionError(error, '')
    return thunkAPI.rejectWithValue(message)
  }
})

const databaseSlice = createSlice({
  name: 'database',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDatabaseAsync.pending, (state) => {
        state.isLoading = true
        state.errors = null
      })
      .addCase(getDatabaseAsync.fulfilled, (state, action) => {
        state.response = action.payload
        state.isLoading = false
        state.errors = null
      })
      .addCase(getDatabaseAsync.rejected, (state, action) => {
        state.response = initialState.response
        state.errors = action.payload
        state.isLoading = false
      })
  },
})

export default databaseSlice.reducer
