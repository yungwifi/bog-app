import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Routem, Link } from 'react-router-dom'
import axios from 'axios'

class SingleCreature extends Component {
    state = {
        creature: {
            name: 'Borimir',
            description: 'SUS BOY'
        }
    }

    componentDidMount() {
        const creatureId = this.props.match.params.id
        console.log(creatureId)
        axios.get(`/api/creatures/${creatureId}`)
            .then(res => {
                this.setState({
                    creature: res.data,
                    name: res.data.name,
                    description: res.data.description
                })
            })
    }

    render() {
        return (
            <div>
                <h2> {this.state.creature.name}'s Profile </h2>
                <p> Desctription: {this.state.creature.description} </p>


            </div>
        )
    }
}

export default SingleCreature