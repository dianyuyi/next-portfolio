import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getPageCollectAPI } from 'server/notion/getPageCollectAPI'
import { AppDispatch } from 'src/redux/store'
import { defineNotionError } from 'src/utils/notionErrorMsg'

export const initialState = {
  response: [],
  isLoading: null,
  errors: null,
} as Store.InitialState

export const getPageCollectAsync = createAsyncThunk<
  Store.SliceResponse,
  string,
  {
    dispatch: AppDispatch
    state: Store.RootState
  }
>('pageCollect/getPageCollect', async (key, thunkAPI) => {
  try {
    const response = await getPageCollectAPI(key)
    return response.results
  } catch (error: unknown) {
    const message = defineNotionError(error, '')
    return thunkAPI.rejectWithValue(message)
  }
})

const pageCollectSlice = createSlice({
  name: 'pageCollect',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPageCollectAsync.pending, (state) => {
        state.isLoading = true
        state.errors = null
      })
      .addCase(getPageCollectAsync.fulfilled, (state, action) => {
        state.response = action.payload
        state.isLoading = false
        state.errors = null
      })
      .addCase(getPageCollectAsync.rejected, (state, action) => {
        state.response = initialState.response
        state.errors = action.payload
        state.isLoading = false
      })
  },
})

export default pageCollectSlice.reducer
