import React, { Component } from 'react';

import '../styles/main.css';

import Header from './components/common/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header /> 
        <div id="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
