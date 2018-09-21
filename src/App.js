import React, { Component } from 'react';
import './App.css';
import BannerCreatorContainer from './containers/banner-creator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BannerCreatorContainer />
      </div>
    );
  }
}

export default App;
