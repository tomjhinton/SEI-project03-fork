import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



class Show extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    axios.get(`api/events/${this.props.match.params.id}`)
      .then(res => this.setState(res.data))
  }

  render () {

    return (
      <section className="section">
        <div className="container">
          <div className="columns">

            <div className="column">
              <img src={this.state.image}></img>
            </div>

            <div className="column">
              <h1  className="title is-1">{this.state.name}</h1>
              <p className="subtitle">{this.state.date}  {this.state.venue}  £{this.state.price}  Over {this.state.minimumAge}s only</p>
              <h2>{this.state.description}</h2>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default Show
