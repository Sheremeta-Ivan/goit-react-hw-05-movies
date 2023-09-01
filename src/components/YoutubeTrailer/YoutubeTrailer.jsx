import React from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoId }) => {
  const opts = {
    height: '260',
    width: '340',
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubeVideo;
