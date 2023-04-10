import { createSlice } from "@reduxjs/toolkit";

const SearchValueSlice = createSlice({
  name: "Category",
  initialState: { items: [] },
  reducers: {
    searchValue: (state, action) => {
      state.items = action.payload;
    }
  }
})

export const { searchValue } = SearchValueSlice.actions
export default SearchValueSlice.reducer