import React from "react";
import { Grid } from "@mui/material";

import ChannelCard from "./ChannelCard";
import { LoaderLarge } from "./Loader";
import VideoCard from "./VideoCard";
import { Box } from "@mui/system";



const Videos = ({ videos, direction }) => {
  //redux fetch 
  if (!videos?.length) return <LoaderLarge />;

  return (
    <Grid container spacing={3}>
      {videos.map((item, idx) => (
        <Grid key={idx} item xs={12} sm={6} md={6} lg={4} xl={3}>
          <Box>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>

        </Grid>
      ))}
    </Grid>
  );
}

export default Videos;



