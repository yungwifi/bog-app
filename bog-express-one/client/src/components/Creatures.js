import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SingleCreature from './SingleCreature'
import axios from 'axios'

class Creatures extends Component {
  state = {
    creature: [{
      name: 'Borimir',
      description: 'SUS BOY'
    }]
  }

  componentDidMount() {
    axios.get(`/api/creatures`)
      .then(res => {
        this.setState({
          creature: res.data,
          name: res.data.name,
          description: res.data.description
        })
      })
  }


  render() {
    const creatures = this.state.creature.map((name, i) => {
      return (
        <div key={i}>
          <Link to={`/${name._id}`}>{name.name} </Link>
        </div>
      )
    })
    return (
      <div>
        <h1>List of Creatures</h1>
        {creatures}
      </div>
    )
  }
}

export default Creatures