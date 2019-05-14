import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import qs from 'query-string'

import EventsCard from './Card'

class EventsIndex extends React.Component{
  constructor(props){
    super(props)

    this.props.match.query = qs.parse(this.props.location.search)
    this.getMatches=this.getMatches.bind(this)

    this.state={
      events: [],
      searchTerm: this.props.match.query.search || ''
    }
  }

  getMatches(){
    const re = new RegExp(this.state.searchTerm, 'i')
    return this.state.events.filter(event => re.test(event.name))
  }

  componentDidMount(){
    axios.get('/api/events')
      .then(res => this.setState({ events: res.data }))
  }

  render(){
    return(
      <section className="section">
        {this.getMatches().map(event =>
          <div key={event._id} className="container index-card">
            <Link to={`/events/${event._id}`}>
              <EventsCard {...event}/>
            </Link>
          </div>
        )}
      </section>
    )
  }

}
export default EventsIndex
