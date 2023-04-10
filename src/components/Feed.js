import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/FETCH_FROM_API";
import { useSelector } from "react-redux";



import Sidebar from "./Sidebar";

const Feed = () => {

  const [videos, setVideos] = useState(null);
  const selectedCategory = useSelector(store => store.changeCategory.items)
  //sidebar

  //videoFetching

  useEffect(() => {

    console.log("sidebar")
    setVideos(null)
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))

  }, [selectedCategory]);

  // console.log(videos)
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>

        <Sidebar />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © 2023 The Watcher
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
