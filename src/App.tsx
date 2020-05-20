import React, { Component } from 'react';
import { Link } from "react-router-dom"
import logo from './images/neuralium.png';
import './App.css';

class Home extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" height="150px" width="150px" />
          <Link className="App-link" to="/content">Neuralium puzzles</Link>
        </header>
      </div>
    );
  }
  
}

export default Home;
