import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "Category",
  initialState: { items: ["New"] },
  reducers: {
    changeCategory: (state, action) => {
      state.items = action.payload;
    }
  }
})

export const { changeCategory } = CategorySlice.actions
export default CategorySlice.reducer