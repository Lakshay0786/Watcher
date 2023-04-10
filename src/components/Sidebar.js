import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

//redux 
import { changeCategory } from "../Store.js/Slice/changeCategory";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";


const Categories = () => {

  const selectedCategory = useSelector(store => store.changeCategory.items)

  const HandleCategoryState = (category) => {
    dispatch(changeCategory(category.name))
    // console.log('trigger');
  }
  const dispatch = useDispatch();

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => HandleCategoryState(category)}

          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white",
          }}
          key={category.name}
        >
          <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
            {category.icon}
          </span>
          <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  )
}


export default Categories;