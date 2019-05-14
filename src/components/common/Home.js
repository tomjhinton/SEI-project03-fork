import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

class Home extends React.Component{
  constructor(){
    super()
    this.state = {
      recEvents: []
    }

    this.getMetroCode=this.getMetroEvents.bind(this)
    this.getLocation=this.getLocation.bind(this)
  }

  getMetroEvents(){
    axios.get(`https://api.songkick.com/api/3.0/search/locations.json?location=geo:${this.state.location.lat},${this.state.location.lon}&apikey=${process.env.SONG_KICK_KEY}`)
      .then(res => axios.get(`https://api.songkick.com/api/3.0/metro_areas/${res.data.resultsPage.results.location[0].metroArea.id}/calendar.json?apikey=${process.env.SONG_KICK_KEY}&per_page=30`))
      .then(res => {
        const recEvents = []
        const recEventsId = []

        while (recEvents.length<3) {
          const recEvent =  res.data.resultsPage.results.event[Math.floor(Math.random() * 30)]
          if (!recEventsId.includes(recEvent.id) && recEvent.status!=='cancelled'){
            recEvents.push(recEvent)
            recEventsId.push(recEvent.id)
          }
        }
        this.setState( {recEvents} )
      })
  }

  getLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      this.setState({ location: {
        lat: latitude,
        lon: longitude
      }}, this.getMetroEvents)
    })
  }

  componentDidMount() {
    this.getLocation()
  }

  render() {
    return(
      <main className="home-main">
        <div className="home-main-overlay">

          <div className="columns ">
            <div className="column is-half">
              <h1 className="logo">EventUp</h1>
              <p>Connecting you with music in your area.  </p>
            </div>
            <div className="column is-half">
              <form className="level is-half">
                <input
                  className="input home-main-form-item"
                  placeholder="What you looking for?"
                  onChange={this.handleChange}
                />
                <button className="home-main-form-item">Find it</button>
              </form>
            </div>
          </div>

          <div className="home-rec-events">
            {this.state.recEvents.map(recEvent => {
              return <Link to={`/events/external/${recEvent.id}`} key={recEvent.id} className="home-rec-event">{recEvent.displayName}</Link>
            })}
          </div>

        </div>
      </main>
    )
  }
}

export default Home
