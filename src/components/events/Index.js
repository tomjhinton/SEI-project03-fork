import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class EventsIndex extends React.Component{

  constructor(){
    super()
    this.state={
      events: []
    }
  }

  componentDidMount(){
    axios.get('/api/events')

      .then(res =>this.setState({ events: res.data }))
  }
  render(){
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.events.map(event =>
              <div key={event._id} className="column is-full-desktop is-half-tablet">
                <Link to={`/events/${event._id}`}>
                  <div className="columns">
                    <div className="column">
                      <img className="event-image" src={event.image}></img>
                    </div>
                    <div className="column">
                      <h1  className="title is-1">{event.name}</h1>

                      <div className="event-meta">
                        <div className="subtitle is-7">{event.date}</div>
                        <div className="subtitle is-7">{event.venue}</div>

                      </div>
                    </div>
                  </div>

                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

    )
  }

}
export default EventsIndex
