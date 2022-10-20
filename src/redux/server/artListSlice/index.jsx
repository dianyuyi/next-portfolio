import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getArtListAPI } from 'server/notion/artsAPI'

export const initialState = {
  response: {},
  isLoading: null,
  errors: null,
}

export const getArtListAsync = createAsyncThunk('artList/getArtList', async (thunkAPI) => {
  try {
    const response = await getArtListAPI()
    console.log(response.object)
    if (response.object === 'list') {
      return response.results
    } else {
      //   {
      //     "object": "error",
      //     "status": 401,
      //     "code": "unauthorized",
      //     "message": "API token is invalid."
      // }
      const message = response?.message
      return thunkAPI.rejectWithValue(message)
    }
  } catch (error) {
    console.log(error)
    const message = error?.message
    return thunkAPI.rejectWithValue(message)
  }
})

const artListSlice = createSlice({
  name: 'artList',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getArtListAsync.pending, (state) => {
        state.isLoading = true
        state.errors = null
      })
      .addCase(getArtListAsync.fulfilled, (state, action) => {
        state.response = action.payload
        state.isLoading = false
        state.errors = null
      })
      .addCase(getArtListAsync.rejected, (state, action) => {
        state.response = initialState.response
        state.errors = action.payload
        state.isLoading = false
      })
  },
})

export default artListSlice.reducer
