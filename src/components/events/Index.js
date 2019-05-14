import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class EventsIndex extends React.Component{

  constructor(){
    super()
    this.state={
      events: [],
      searchTerm: 'ren',
      matches: []
    }
    this.getMatches=this.getMatches.bind(this)
  }


  getMatches(){
    console.log(this.state.events, 'getmatches events')
    this.setState({matches: this.state.events.filter(event => event.name.match(/ren/gi))})
    console.log('getmatches', this.state.matches)
  }

  componentDidMount(){
    axios.get('/api/events')
      .then(res =>this.setState({ events: res.data }))
      .then(this.getMatches)
      .then(console.log('mdm', this.state.matches))
  }
  render(){
    return(

      <section className="section">

        {!this.state.searchTerm && <div className="container">
          {this.state.events.map(event =>
            <Link key={event._id} to={`/events/${event._id}`}>
              <div  className="columns index-card event-index-card box-shadow">
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
