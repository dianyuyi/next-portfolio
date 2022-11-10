import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  languageCode: 'zh-tw',
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguageCode: (state, action) => {
      state.languageCode = action.payload
    },
  },
})

export const { setLanguageCode } = languageSlice.actions

export default languageSlice.reducer
