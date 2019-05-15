import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.MAPBOX

class Show extends React.Component {
  constructor() {
    super()

    this.state = {

    }
    this.getMap = this.getMap.bind(this)
    this.makeMap = this.makeMap.bind(this)
  }

  getMap(data){
    console.log(data)
    // SORT IT AAAAAAAAT!
    axios.get(`https://api.songkick.com/api/3.0/venues/${data.skId}.json?&apikey=${process.env.SONG_KICK_KEY}`)
      .then(res => this.setState({
        ...data,
        lat: res.data.resultsPage.results.venue.lat,
        long: res.data.resultsPage.results.venue.lng
      }))
      .then(this.makeMap)


  }

  makeMap(){
    console.log(this)
    this.map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [this.state.long, this.state.lat], // starting position [lng, lat]
      zoom: 15 // starting zoom
    })
    this.marker = new mapboxgl.Marker()
      .setLngLat([this.state.long, this.state.lat])
      .addTo(this.map)
  }

  componentDidMount() {
    axios.get(`/api/events/${this.props.match.params.id}`)
      .then(res => this.getMap(res.data))
  }

  render () {
    return (
      <div className="section">
        <div className="container box">

          <div className="columns show-body">
            <div className="column ">
              <img className="event-image box" src={this.state.image} />
              <div id="map"></div>
            </div>

            <div className="column external-event">
              <h1  className="title is-1">{this.state.name}</h1>

              <div className="event-meta">
                <div className="subtitle is-7">{this.state.date}</div>
                <Link to={`/venues/${this.state.skId}`}>
                  <div className="subtitle is-7">{this.state.venue}, {this.state.postcode}</div>
                </Link>
                <div className="subtitle is-7">£{this.state.price}</div>
                <div className="subtitle is-7">Over {this.state.minimumAge}s only</div>
                {this.state.start} - {this.state.finish}
              </div>

              {this.state.description && this.state.description.split('\n').map((paragraph, i) =>
                <p key={i}><br />{paragraph}</p>
              )}

              <div className="subtitle is-5">
                {!!this.state.artist &&

                    <div ><strong>Artists:</strong>
                      {this.state.artist.map(artist => {
                        return <span key={artist.label} className="event-show-artist" >{artist.label }

                        </span>

                      })}
                    </div>
                }

              </div>
            </div>

          </div>

          <div className="columns">
            <div className="column">
              {this.state.createdBy &&
                <div className="event-meta">
                  <span>Organised by {this.state.createdBy.username}</span>
                </div>
              }

            </div>


          </div>
          <div id="map" />
        </div>

      </div>

    )
  }
}

export default Show
