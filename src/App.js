import React, { Component } from 'react';

import logo from './images/eda-logo-white.png';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="row">
          <div className="col-2">
            <img src={logo} className="bg-dark img-fluid" alt="logo" />
          </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Some content</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
