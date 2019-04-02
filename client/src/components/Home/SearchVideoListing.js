import VideoList from '../VideoList';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { onSearchClick, onUpdateAddToLibrary } from '../../actions/searchVideo';
import { getLocalStorageVideoIdsString } from '../../common';

/** This component will fetch all the videos based on the ids stored in local storage */
const SavedVideoTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    var ids = getLocalStorageVideoIdsString()
    if (ids) {
      props.onUpdateAddToLibrary(false)
      props.onSearchClick( agent.Video.getSavedList(ids));
    }
  };
  return (
    <a
      href=""
      className="btn"
      onClick={clickHandler}>
      Show My Library
      </a>
  );
};


const mapStateToProps = state => ({
  ...state.listVideo,
});

const mapDispatchToProps = {
  onSearchClick,
  onUpdateAddToLibrary
}

/** This componet will contain all videos listinf based on the search keyword and update the videolisting */
const SearchVideoListing = props => {
  return (
    <div className="container">
      <div className="video-wrap">
        <div className="video-category">
          <div className="search-result"><b>Search Result</b></div>
          <div className="search-button"> 
          <SavedVideoTab tab={props.tab} searchText={props.searchText} onUpdateAddToLibrary={props.onUpdateAddToLibrary} onSearchClick={props.onSearchClick} /></div>
          <div className="clearfix"></div>
        </div>
        <VideoList
          addToLibFlag={props.addToLibFlag}
          listVideo={props.listVideo} />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchVideoListing);
