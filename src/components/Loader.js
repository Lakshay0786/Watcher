import { ShimmerSimpleGallery } from "react-shimmer-effects";
// import { ShimmerPostList } from "react-shimmer-effects";

import React from 'react'

export const LoaderLarge = () => {
  return <ShimmerSimpleGallery card imageHeight={200} row={3} col={4} caption />;
};

export const LoaderSmall = () => {
  return <ShimmerSimpleGallery card imageHeight={200} row={3} col={1} caption />
};


//<ShimmerPostList imageWidth={400} imageHeight={100} postStyle="STYLE_FOUR" col={1} row={2} gap={10} />;
