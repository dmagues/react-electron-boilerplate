import React, { Component } from 'react';
import { Link } from "react-router-dom"
import logo from './logo.svg';
import './App.css';

class Home extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Link className="App-link" to="/about">Link to the About Page</Link>
        </header>
      </div>
    );
  }
  
}

export default Home;
