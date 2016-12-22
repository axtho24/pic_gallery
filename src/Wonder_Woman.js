import React, { Component } from 'react'
import superheroes from './data'
import { Link } from 'react-router'


class Wonder_Woman extends Component {
  render () {
    return (
      <div className="wonderwoman">
      <ul>
      <li><Link to="/batman">Batman</Link></li>
      <li><Link to="/superman">Superman</Link></li>
      <li><Link style={{color:'yellow'}} to="/wonder_woman">Wonder Woman</Link></li>
      <li><Link to="/flash">Flash</Link></li>
      <li><Link to="/green_lantern">Green Lantern</Link></li>
      <li><Link to="/aquaman">Aquaman</Link></li>
      </ul>
      <h1>Wonder Woman</h1>
      <span>{superheroes[3].name}<img src={superheroes[6].url}/>{superheroes[6].description}</span>
      <span>{superheroes[7].name}<img src={superheroes[7].url}/>{superheroes[7].description}</span>
      <span>{superheroes[8].name}<img src={superheroes[8].url}/>{superheroes[8].description}</span>
      </div>
    )
  }
}

export default Wonder_Woman
