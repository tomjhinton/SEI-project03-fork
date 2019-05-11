import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Search extends React.Component {
  constructor() {
    super()

    this.state = {
      searchName: {},
      venues: null,
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    e.preventDefault()
    const data = e.target.value
    this.setState({ searchName: data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.get('https://api.songkick.com/api/3.0/search/venues.json', {
      params: {
        query: this.state.searchName,
        apikey: process.env.SONG_KICK_KEY
      }
    })
      .then(res =>  this.setState({ venues: res.data.resultsPage.results.venue }))
  }

  render() {
    return (
      <div>
        <div className="section">
          <div className="container">
            <form onSubmit={this.findVenue}>
              <div className="field">
                <label className="label">Venue</label>
                <div className="control">
                  <input
                    className="input"
                    name="venue"
                    placeholder="The venue of your event!"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.errors.name && <div className="help is-danger">{this.state.errors.name}</div>}
              </div>
              <button onClick={this.handleSubmit}> Find Venue </button>
            </form>
          </div>
        </div>


        {this.state.venues &&
          <div className="section">
            <div className="search-results">
              <div className="is-5 is-multiline">
                {this.state.venues.map(venue => {
                  return(
                    <div className="search-result" key={venue.id}>
                      <div className="title is-5">{venue.displayName}</div>
                      <span className="subtitle">{venue.city.displayName}  {venue.city.country.displayName}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        }


      </div>

    )
  }
}

export default Search
