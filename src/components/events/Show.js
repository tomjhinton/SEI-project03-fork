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
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <img className="event-image" src={this.state.image}></img>
            </div>

            <div className="column">
              <h1  className="title is-1">{this.state.name}</h1>

              <div className="event-meta">
                <div className="subtitle is-7">{this.state.date}</div>
                <div className="subtitle is-7">{this.state.venue}</div>
                <div className="subtitle is-7">£{this.state.price}</div>
                <div className="subtitle is-7">Over {this.state.minimumAge}s only</div>
              </div>

              <h2>{this.state.artist}</h2>



            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Show

// <div className="event-meta">
//   {this.state.artist.map(artist => {
//     return <div key={artist} className="subtitle is-5">{artist}</div>
//   })}
// </div>
