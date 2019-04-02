import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './searchForm';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  });

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="page">
          <SearchForm  />
        </div>
      </div >
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
