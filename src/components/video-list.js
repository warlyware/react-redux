import React from 'react';
import { VideoListItem } from './video-list-item';

export const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return(
      <VideoListItem video={video}
      key={video.etag} />
    );
  });

  return (
    <ul className="col-md-4">
      {videoItems}
    </ul>
  );
}