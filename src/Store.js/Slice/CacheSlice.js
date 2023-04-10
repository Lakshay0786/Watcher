import { createSlice } from "@reduxjs/toolkit";

const CacheSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    }
  }
})

export const { cacheResults } = CacheSlice.actions;

export default CacheSlice.reducer;  