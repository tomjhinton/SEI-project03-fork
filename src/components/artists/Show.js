import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class ArtistShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }



  componentDidMount() {
    //console.log(this.props.match.params.id)
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.search?q_artist=${this.props.match.params.id}&apikey=${process.env.MUSIXMATCH}`)
      .then(res => axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${res.data.message.body.artist_list[0].artist.artist_name}&api_key=${process.env.LASTFMKEY}&format=json`))
      .then(last => this.setState( last))
  }


  render () {

    console.log(this.state.data)
    //console.log(this.state.data.artist.image[0])
    return (
      <div className="section">
        {this.state.data &&   <div className="container box">

          <div className="columns ">
            <div className="column">

              {this.state.data.artist.name}
              <img className="artist-image box" src={this.state.data.artist.image[5]['#text']} />
              {this.state.data.artist.bio.summary}
            </div>
          </div>
        </div>}
      </div>
    )
  }
}

export default ArtistShow
