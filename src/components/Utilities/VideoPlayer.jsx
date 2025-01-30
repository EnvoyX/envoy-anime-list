"use client";

import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId, height, width }) => {
  const option = {
    width: `${height}`,
    height: `${width}`,
  };

  return (
    <YouTube
      videoId={youtubeId}
      onReady={(event) => event.target.pauseVideo()}
      opts={option}
      onError={() => alert(`Video is broken, please try another,=.`)}
    ></YouTube>
  );
};

export default VideoPlayer;
