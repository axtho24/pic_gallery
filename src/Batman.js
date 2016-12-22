import React, { Component } from 'react'
import superheroes from './data'
import { Link } from 'react-router'

class Batman extends Component {
  render () {
    return (
      <div className="batman">
      <ul>
      <li><Link style={{color: 'white'}} to="/batman">Batman</Link></li>
      <li><Link to="/superman">Superman</Link></li>
      <li><Link to="/wonder_woman">Wonder Woman</Link></li>
      <li><Link to="/flash">Flash</Link></li>
      <li><Link to="/green_lantern">Green Lantern</Link></li>
      <li><Link to="/aquaman">Aquaman</Link></li>
      </ul>
      <h1>Batman</h1>
      <span>{superheroes[0].name}<img src={superheroes[0].url}/>{superheroes[0].description}</span>
      <span>{superheroes[1].name}<img src={superheroes[1].url}/>{superheroes[1].description}</span>
      <span>{superheroes[2].name}<img src={superheroes[2].url}/>{superheroes[2].description}</span>
      </div>
    )
  }
}

export default Batman
