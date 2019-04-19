import React, { Component } from 'react';
import './App.css';
import Header from './shared/header/header';
import Watch from './shared/watch/watch';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <div className='app-content'>
              <p className='title'>TuSeZjesz</p>
              <p className='opening-time'>
                  Do zamknięcia
                  <Watch />
              </p>
          </div>
      </div>
    );
  }
}

export default App;
