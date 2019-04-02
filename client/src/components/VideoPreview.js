import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import { onSearchClick } from './../actions/searchVideo';
import { SaveVideoToLocalStorage, deleteVideoIdsFromLocalStorage } from './../common';

const mapDispatchToProps = {
  onSearchClick
};

/** This component will preview the single video based on the data fetch using the api  */
const ListPreview = props => {
  const thumbnail = props.list.snippet.thumbnails.medium.url;
  const title = props.list.snippet.title;
  const videoURL = props.list.id.videoId ? "https://www.youtube.com/watch?v=" + props.list.id.videoId : "https://www.youtube.com/watch?v=" + props.list.id;
  var obj = [];


/** Save video to local storage */
  const SaveVideoToMyLibrary = ev => {
    ev.preventDefault();
    if (props.list.id.videoId) {
      SaveVideoToLocalStorage(props.list.id.videoId, props.list.snippet.title)
      alert("Video added to my library")
    }
  };

/** Delete video from the local storage */
  const DelVideoFromMyLibrary = ev => {
    ev.preventDefault();
    var idsAfterDelete= deleteVideoIdsFromLocalStorage(props.list.id)
    if(idsAfterDelete){
      props.onSearchClick(agent.Video.getSavedList(idsAfterDelete))
      alert("Video deleted from my library")
    }
  };

  return (
    <div className="grid-col-sm-3">
      <div className="card">
        <div className="card-image"> <img src={thumbnail} className="card-img-top" alt="Not Available" />
          {props.addToLibFlag && <button className="btn tooltip" onClick={SaveVideoToMyLibrary}>
            <img src="images/watch-icon.png" alt="" /> <span className="tooltiptext">add to my library</span>
          </button>
          }
          {!props.addToLibFlag && <button className="btn tooltip" onClick={DelVideoFromMyLibrary}>
            <img src="images/watch-icon.png" alt="" /> <span className="tooltiptext">remove from my library</span>
          </button>
          }
        </div>
        <div className="card-body">
          <h3 className="card-title"><a className="card-title" href={videoURL} target="_blank">{title}</a></h3>
        </div>
      </div>
    </div>
  );
}

export default connect(() => ({}), mapDispatchToProps)(ListPreview);
