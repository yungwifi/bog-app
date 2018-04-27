import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SingleCreature from './SingleCreature'
import axios from 'axios'
import styled from 'styled-components'

const CreatureContainer = styled.div`
margin-left: 35px;`

const NewCreatureForm = styled.div`
display: flex;
flex-direction: column;
margin-left: 45px;
margin-top: 25px;`

class Creatures extends Component {
  state = {
    creature: [{
      name: '',
      description: ''
    }],
    addNewCreature: false
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

  toggleAddNewCreature = () => {
    const addNewCreature = !this.state.addNewCreature
    this.setState({ addNewCreature })
  }

  createNewCreature = () => {
    const creatureId = this.state.creature._id
    const url = `/api/creature/${creatureId}`
    console.log("CREATURE ROUTE BEING CALLED", url)
    axios.post(url)
      .then((res) => {
        console.log("RESPONSE FROM NEW CREATURE", res.data)
        this.setState({ creature: res.data.creature })
      })
  }

  handleChange = (e) => {
    const creature = [...this.state.creature]
    creature[e.target.name] = e.target.value
    console.log("HANDLE CHANGE", e.target.value)
    this.setState({ creature })
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
        <CreatureContainer >
          <h1>List of Creatures</h1>
          {creatures}

          <button onClick={this.toggleAddNewCreature}>
            {this.state.addNewCreature
              ? "Hide New Creature Form"
              : "Add New Creature"}
          </button>

          {this.state.addNewCreature
            ?
            <NewCreatureForm >
              <div> New Creature:
              <br />
                <input type="text" name="name" value={this.state.creature.name}
                  onChange={this.handleChange} />
                <br />
                <textarea type="text" name="description" value={this.state.creature.description}
                  onChange={this.handleChange} />
                <br />
                <button> Add New Creature </button>
              </div>
            </NewCreatureForm>
            : null}
        </CreatureContainer>
      </div>

    )
  }
}

export default Creatures