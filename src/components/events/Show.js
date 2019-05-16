import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Auth from '../../lib/Auth'

import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.MAPBOX

class Show extends React.Component {
  constructor() {
    super()

    this.state = null
    this.getMap = this.getMap.bind(this)
    this.makeMap = this.makeMap.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.canModify= this.canModify.bind(this)

  }

  getMap(data){
    console.log('hi there',data)
    console.log(data.skId)
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
  handleDelete() {
    const token = Auth.getToken()
    axios.delete(`/api/events/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/events'))
  }

  canModify() {
    console.log('I am running')

    console.log(this.state)
    // if the user is logged in AND the user's id matches the characters' user's id return true
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.createdBy._id
  }

  render () {

    if(!this.state) return null
    console.log(this.state,'eeee')

    return (
      <div className="section">
        <div className="container box">

          <div className="columns ">
            <div className="column">
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


              <h2>{this.state.description}</h2>

              <div className="subtitle is-5">
                {!!this.state.artist &&
                    <div ><strong>Artists:</strong>
                      {this.state.artist.map(artist => {
                        return <span key={artist.label} className="event-show-artist" >{artist.label}
                        </span>
                      })}
                    </div>
                }
              </div>

              {this.state.description && this.state.description.split('\n').map((paragraph, i) =>
                <p key={i}><br />{paragraph}</p>
              )}
            </div>
          </div>

          <div className="columns">
            <div className="column">
              <div className="columns">
                {this.state.createdBy &&
                  <div className="event-meta column">
                    <span>Organised by {this.state.createdBy.username}</span>
                  </div>
                }
                {this.canModify() &&
                  <div className="column">
                    <div className="columns event-buttons">
                      <Link to={`/events/${this.state._id}/edit`}><button>Edit</button></Link>
                      <button onClick={this.handleDelete}>Delete</button>
                    </div>
                  </div>
                }
              </div>
            </div>

            <div className="column">
              {!!this.state.artist &&
                <div className="event-show-artists">
                  <div className="columns">
                    {this.state.artist.map(artist =>
                      <span key={artist.label} className="column is-one-quarter event-show-artist" >{artist.label}</span>
                    )}
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Show
