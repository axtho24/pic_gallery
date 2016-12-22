import React, { Component } from 'react'
import superheroes from './data'
import { Link } from 'react-router'

class Aquaman extends Component {
  render () {
    return (
      <div className="aquaman">
      <ul>
      <li><Link to="/batman">Batman</Link></li>
      <li><Link to="/superman">Superman</Link></li>
      <li><Link to="/wonder_woman">Wonder Woman</Link></li>
      <li><Link to="/flash">Flash</Link></li>
      <li><Link to="/green_lantern">Green Lantern</Link></li>
      <li><Link style={{color:'orange'}} to="/aquaman">Aquaman</Link></li>
      </ul>
      <h1>Aquaman</h1>
      <span>{superheroes[15].name}<img src={superheroes[15].url}/>{superheroes[15].description}</span>
      <span>{superheroes[16].name}<img src={superheroes[16].url}/>{superheroes[16].description}</span>
      <span>{superheroes[17].name}<img src={superheroes[17].url}/>{superheroes[17].description}</span>
      </div>
    )
  }
}

export default Aquaman
