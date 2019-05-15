import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import EventsCard from './Card'

class EventsIndex extends React.Component{
  constructor(){
    super()
    this.state={
      events: [],
      searchTerm: null,
      matches: []
    }
    this.getMatches=this.getMatches.bind(this)
  }

  getMatches(){
    console.log(this.state.events, 'getmatches events')
    this.setState({ matches: this.state.events.filter(event => event.name.toLowerCase().includes(this.state.searchTerm)) })
  }

  componentDidMount(){
    axios.get('/api/events')
      .then(res =>this.setState({ events: res.data }))
      .then(this.getMatches)
  }

  render(){
    return(
      <section className="section">

        {!this.state.searchTerm && <div>
          {this.state.events.map(event =>
            <div key={event._id} className="index-card container box">
              <Link  to={`/events/${event._id}`}>
                <EventsCard {...event}/>
              </Link>
            </div>
          )}
        </div>}

        {!!this.state.searchTerm && this.state.events.length>0 &&
          <div className="container">
            {this.state.matches.map(match => {
              return <p key={match.id}>{match.name}</p>
            })}
          </div>
        }

      </section>
    )
  }

}
export default EventsIndex
