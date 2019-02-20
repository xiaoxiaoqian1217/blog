import React, { Component } from 'react';
import  './App.css';
import Card from './components/Card/Card'
// import Demo from './components/Demo/Demo'

class App extends Component {
  render() {
   console.log("xxq---",Card);
    return (
      <div className="App">
      <Card/>
      </div>
    );
  }
}

export default App;
