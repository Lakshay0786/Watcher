import React from "react";
import { Box } from "@mui/material";

import ChannelCard from "./ChannelCard";
import { LoaderSmall } from "./Loader";
import VideoCard from "./VideoCard";




const RelatedVideos = ({ videos }) => {
  //redux fetch 
  if (!videos?.length) return <LoaderSmall />;

  return (
    <div className="relatedvideos">
      {videos.map((item, idx) => (
        <div className="videos-cards">
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
}

export default RelatedVideos;

