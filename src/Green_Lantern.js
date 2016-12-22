import React, { Component } from 'react'
import superheroes from './data'
import { Link } from 'react-router'

class Green_Lantern extends Component {
  render () {
    return (
      <div className="greenlantern">
      <ul>
      <li><Link to="/batman">Batman</Link></li>
      <li><Link to="/superman">Superman</Link></li>
      <li><Link to="/wonder_woman">Wonder Woman</Link></li>
      <li><Link to="/flash">Flash</Link></li>
      <li><Link style={{color:'green'}} to="/green_lantern">Green Lantern</Link></li>
      <li><Link to="/aquaman">Aquaman</Link></li>
      </ul>
      <h1>Green Lantern</h1>
      <span>{superheroes[12].name}<img src={superheroes[12].url}/>{superheroes[12].description}</span>
      <span>{superheroes[13].name}<img src={superheroes[13].url}/>{superheroes[13].description}</span>
      <span>{superheroes[14].name}<img src={superheroes[14].url}/>{superheroes[14].description}</span>
      </div>
    )
  }
}

export default Green_Lantern
