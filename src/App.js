import React, { Component } from 'react';
import './App.css';
import Main from './containers/main';
import SVG from './pics/main-logo.svg'

class App extends Component {
  render() {
    return (
      <div 
          className="App">
         
          <Main />
      </div>
    )
  }
}

export default App;
