import React, { Component } from 'react';
import './App.css';
import Header from './shared/header/header';
// import Watch from './shared/watch/watch';
import Footer from './shared/footer/footer';
import { BrowserRouter as Router } from "react-router-dom";
import DeclarativeRouter from "./shared/router";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
              <Header />
              <div className='app-content'>
                  <DeclarativeRouter />
              </div>
              <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
