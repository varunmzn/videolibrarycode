import Header from './Header';
import Footer from './Footer';

import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';


const mapStateToProps = state => {
  return {
    isAppLoaded: true,
    appName: "My Video Library",
  }};

const mapDispatchToProps = dispatch => ({
});

class App extends React.Component {
  render() {
    if (this.props.isAppLoaded) {
      return (
        <div>
          <Header
            appName={this.props.appName} />
            <Switch>
            <Route exact path="/" component={Home}/>
            </Switch>
            <Footer />
        </div>
      );
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
