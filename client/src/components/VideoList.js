import VideoPreview from './VideoPreview';
import React from 'react';


/** This component lists all the videos based on the search keyword */
const VideoList = props => {
  if (!props.listVideo) {
    return (
      <div>No video are here yet</div>
    );
  }

  if (props.listVideo.length === 0) {
    return (
      <div>
        No video found.
      </div>
    );
  }

  return (
    <div className="grid-row">
      {
        props.listVideo.map(list => {
          return (
            <VideoPreview addToLibFlag={props.addToLibFlag} list={list} />
          );
        })
      }
    </div>
  );
};

export default VideoList;
