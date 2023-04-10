import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RelatedVideos from "./RelatedVideos";
import { LoaderLarge } from "./Loader"
import { fetchFromAPI } from "../utils/FETCH_FROM_API";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {

    console.log("videoDetail")
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if (!videoDetail?.snippet) return <LoaderLarge />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="90vh">
      <Stack direction={{ xs: "column", lg: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "98%", position: "sticky", zIndex: '1 !important', top: "86px" }}>
            <ReactPlayer playing={true} url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }} color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box className="relatedVideosMAinDiv"
          sx={{

            marginRight: "30px",
            overflow: "hidden",
            overflowY: "scroll",
          }} px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <RelatedVideos videos={videos} />
        </Box>
      </Stack>
    </Box >
  );
};

export default VideoDetail;