import SearchVideoListing from './SearchVideoListing';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { onSearchClick, onUpdateAddToLibrary } from '../../actions/searchVideo';
import { getFuzzySearchIdsString } from '../../common';


const mapStateToProps = state => ({
  ...state.listVideo,
});

const mapDispatchToProps = {
  onSearchClick,
  onUpdateAddToLibrary
};

/** This component will update the search listing after fetching the data based on search keyword */
const SearchVideo = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onUpdateAddToLibrary(true);
    props.onSearchClick(agent.Video.getList(props.searchText));
  };
  return (
    <a
      className="search-icon btn"
      onClick={clickHandler}>
      Search Online
      </a>
  );
};

/** This component will get the local video is from local storage and perform search and update the video listing  */
const SearchVideoLocally = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    var ids =getFuzzySearchIdsString(props.searchText)
    if(ids){
    props.onUpdateAddToLibrary(false);
    props.onSearchClick(agent.Video.getSavedList(ids));
  }
  };
  return (
    <a
      className="button btn"
      onClick={clickHandler}>
      Search In My Library
      </a>
  );
};

/** This is the main form component contains all the inputs and listing components */
class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {  searchText: '' };
    this.updateState = fieldName => e => {
      const state = this.state;
      const nState = Object.assign({}, state, { [fieldName]: e.target.value });
      this.setState(nState);
    };
  }

  render() {
    return (
      <div>
        <div className="searchWrap">
          <div className="container">
            <div className="searchArea">
              <div className="searchBox d-flex" style={{ flexGrow: 8 }}>
                <input
                  className="search form-control"
                  type="search"
                  placeholder="Enter to search"
                  value={this.state.searchText}
                  onChange={this.updateState('searchText')} />
                <SearchVideo searchText={this.state.searchText} onUpdateAddToLibrary={this.props.onUpdateAddToLibrary} onSearchClick={this.props.onSearchClick} />
              </div>
              <div className="searchButton d-flex" style={{ flexGrow: 1 }}>
                <SearchVideoLocally tab={this.props.tab} searchText={this.state.searchText} onUpdateAddToLibrary={this.props.onUpdateAddToLibrary} onSearchClick={this.props.onSearchClick} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <SearchVideoListing searchText={this.state.searchText}  onUpdateAddToLibrary={this.props.onUpdateAddToLibrary}/>
        </div>
      </div>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
