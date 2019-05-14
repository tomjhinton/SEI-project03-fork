import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

class Home extends React.Component{
  constructor(){
    super()

    this.state = {
      recEvents: [],
      searchTerm: []
    }

    this.getMetroCode=this.getMetroEvents.bind(this)
    this.getLocation=this.getLocation.bind(this)
    // this.handleChange=this.handleChange.bind(this)
  }

  getMetroEvents(){
    axios.get('https://api.songkick.com/api/3.0/search/locations.json', {
      params: {
        location: `geo:${this.state.location.lat},${this.state.location.lon}`,
        apikey: process.env.SONG_KICK_KEY
      }
    })
      .then(res => {
        const [{ metroArea }] = res.data.resultsPage.results.location
        console.log(metroArea)
        return axios.get(`https://api.songkick.com/api/3.0/metro_areas/${metroArea.id}/calendar.json`, {
          params: {
            apikey: process.env.SONG_KICK_KEY,
            per_page: 30
          }
        })
      })
      .then(res => {
        const { event } = res.data.resultsPage.results
        console.log(event, 'event')
        const recEvents = []

        const activeEvents = event.filter(event => event.status !== 'cancelled')

        let randomEvent = activeEvents[Math.floor(Math.random() * activeEvents.length)]
        while(recEvents.length < 3 && !recEvents.includes(randomEvent)) {
          recEvents.push(randomEvent)
          randomEvent = activeEvents[Math.floor(Math.random() * activeEvents.length)]
        }

        this.setState({ recEvents })
      })
  }

  // handleChange(){
  //   e.preventDefault
  //   const searchTerm = e.target
  // }

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
