import React, { Component } from 'react'
import superheroes from './data'
import { Link } from 'react-router'


class Superman extends Component {
  render () {
    return (
      <div className="superman">
      <ul>
      <li><Link to="/batman">Batman</Link></li>
      <li><Link style={{color:'#0f579f'}} to="/superman">Superman</Link></li>
      <li><Link to="/wonder_woman">Wonder Woman</Link></li>
      <li><Link to="/flash">Flash</Link></li>
      <li><Link to="/green_lantern">Green Lantern</Link></li>
      <li><Link to="/aquaman">Aquaman</Link></li>
      </ul>
      <h1>Superman</h1>
      <span>{superheroes[3].name}<img src={superheroes[3].url}/>{superheroes[3].description}</span>
      <span>{superheroes[4].name}<img src={superheroes[4].url}/>{superheroes[4].description}</span>
      <span>{superheroes[5].name}<img src={superheroes[5].url}/>{superheroes[5].description}</span>
      </div>
    )
  }
}

export default Superman
