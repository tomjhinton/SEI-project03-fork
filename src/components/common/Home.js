import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import SearchBar from './SearchBar'

class Home extends React.Component{
  constructor(){
    super()

    this.state = {
      recEvents: []
      // searchTerm: []
    }

    this.getMetroCode=this.getMetroEvents.bind(this)
    this.getLocation=this.getLocation.bind(this)
    // this.handleChange=this.handleChange.bind(this)
    // this.handleSubmit=this.handleSubmit.bind(this)
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


  getLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      this.setState({ location: {
        lat: latitude,
        lon: longitude
      }}, this.getMetroEvents)
    })
  }

  // handleChange(e){
  //   e.preventDefault
  //   this.setState( { searchTerm: e.target.value } )
  //   console.log(this.state)
  // }
  //
  // handleSubmit(e){
  //   e.preventDefault
  //   this.props.history.push('/events?search=' + this.state.searchTerm)
  // }

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
              <p className="subtitle is-5">Connecting you with music in your area.  </p>
            </div>
            <div className="column is-half">

          
              <SearchBar />

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


// <form className="level is-half" onSubmit={this.handleSubmit}>
//   <input
//     className="input home-main-form-item"
//     placeholder="What you looking for?"
//     onChange={this.handleChange}
//   />
//   <button className="home-main-form-item">Find it</button>
// </form>
