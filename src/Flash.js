import React, { Component } from 'react'
import superheroes from './data'
import { Link } from 'react-router'

class Flash extends Component {
  render () {
    return (
      <div className="flash">
      <ul>
      <li><Link to="/batman">Batman</Link></li>
      <li><Link to="/superman">Superman</Link></li>
      <li><Link to="/wonder_woman">Wonder Woman</Link></li>
      <li><Link style={{color:'red'}} to="/flash">Flash</Link></li>
      <li><Link to="/green_lantern">Green Lantern</Link></li>
      <li><Link to="/aquaman">Aquaman</Link></li>
      </ul>
      <h1>Flash</h1>
      <span>{superheroes[9].name}<img src={superheroes[9].url}/>{superheroes[9].description}</span>
      <span>{superheroes[10].name}<img src={superheroes[10].url}/>{superheroes[10].description}</span>
      <span>{superheroes[11].name}<img src={superheroes[11].url}/>{superheroes[11].description}</span>
      </div>
    )
  }
}

export default Flash
