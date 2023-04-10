import { configureStore } from "@reduxjs/toolkit";
import searchValue from "./Slice/searchValueSlice"
import changeCategory from "./Slice/changeCategory";
import cacheResults from "./Slice/CacheSlice"



const store = configureStore({
  reducer: {
    //
    changeCategory: changeCategory,
    searchValue: searchValue,
    cacheResults: cacheResults,
  }
})
export default store;