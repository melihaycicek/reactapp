import React from 'react';
import logo from './logo.svg';
import melih from './melih.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={melih} className="App-logo" alt="logo" />
        <p>
          Melih <code>src/App.js</code> Aycicek.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Melih
        </a>
      </header>
    </div>
  );
}

export default App;
