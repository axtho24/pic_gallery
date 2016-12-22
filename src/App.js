import React, { Component } from 'react';
import { Link } from 'react-router'
import superheroes from './data'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Justice League</h1>
        <ul className="list">
        <li><Link to="/flash"><img className="symbols" src={superheroes[9].url}/></Link></li>
        <li><Link to="/superman"><img className="symbols" src={superheroes[3].url}/></Link></li>
        <li><Link to="/wonder_woman"><img className="symbols" src={superheroes[6].url}/></Link></li>
        <li><Link to="/batman"><img className="symbols" src={superheroes[0].url}/></Link></li>
        <li><Link to="/green_lantern"><img className="symbols" src={superheroes[12].url}/></Link></li>
        <li><Link to="/aquaman"><img className="symbols" src={superheroes[15].url}/></Link></li>
        </ul>
      </div>
    )
  }
}

export default App;
