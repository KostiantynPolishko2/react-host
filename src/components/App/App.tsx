import React from 'react';
import logo from './img/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt='ReactIcon' style={{width: 250 + 'px', height: 'auto'}}></img>
        <p style={{backgroundColor: 'red'}}>Test GitHub Host</p>
      </header>
    </div>
  );
}

export default App;
