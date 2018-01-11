import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterDisplay from './components/charactersDisplay'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Full-stack-host-practice</h1>
        </header>
      
          <CharacterDisplay/>
        
   
      </div>
    );
  }
}

export default App;
