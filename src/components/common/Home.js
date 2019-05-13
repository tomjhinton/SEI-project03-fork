import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'

class Home extends React.Component{
  constructor(){
    super()
    this.state = {
      events: []
    }

    this.getMetroCode=this.getMetroCode.bind(this)
    this.getLocation=this.getLocation.bind(this)
  }

  getMetroCode(){
    axios.get(`https://api.songkick.com/api/3.0/search/locations.json?location=geo:${this.state.location.lat},${this.state.location.lon}&apikey=${process.env.SONG_KICK_KEY}`)
      .then(res => axios.get(`https://api.songkick.com/api/3.0/metro_areas/${res.data.resultsPage.results.location[0].metroArea.id}/calendar.json?apikey=${process.env.SONG_KICK_KEY}&per_page=5`))
      .then(res => console.log(res))

  }

  getLocation(){
    navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords
      this.setState({ location: {
        lat: latitude,
        lon: longitude
      }}, this.getMetroCode)
    })
  }

  componentDidMount() {
    this.getLocation()
  }

  render() {
    return (<p> {this.state.location && this.state.location.lat}   {this.state.location && this.state.location.lon}  </p>)
  }
}

export default Home
