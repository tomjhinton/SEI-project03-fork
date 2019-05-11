import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


class VenuesShow extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      venue: { },
      upcoming: {}
    }
  }
  componentDidMount(){
    axios.get(`https://api.songkick.com/api/3.0/venues/${this.props.match.params.id}.json?&apikey=${process.env.SONG_KICK_KEY}`)
      .then(res => this.setState({venue: res.data}))
    axios.get(`https://api.songkick.com/api/3.0/venues/${this.props.match.params.id}/calendar.json?&apikey=${process.env.SONG_KICK_KEY}`)
      .then(res =>this.setState({upcoming: res.data}))


  }
  previousUpEvent(){

  }
  render(){
    console.log(this.state.venue.resultsPage)
    console.log(this.state.upcoming.resultsPage)

    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-one-quarter">


            </div>
            <div className="column is-three-quarters">

              {!!this.state.venue.resultsPage &&
                <div className="subtitle is-2"><span> {this.state.venue.resultsPage.results.venue.displayName}</span>
                </div>
              }
              {!!this.state.venue.resultsPage &&
                <div className="subtitle is-4"><span> Capacity:{this.state.venue.resultsPage.results.venue.capacity}</span>
                </div>
              }
              {!!this.state.venue.resultsPage &&
                <div className="subtitle is-4"><span>Address: {this.state.venue.resultsPage.results.venue.street} - {this.state.venue.resultsPage.results.venue.zip}</span>
                </div>
              }
              {!!this.state.venue.resultsPage &&
                <div className="subtitle is-4"><span>Phone: {this.state.venue.resultsPage.results.venue.phone}</span>
                </div>
              }
              {!!this.state.venue.resultsPage &&
                <div className="subtitle is-4"><span>Website:<a href={this.state.venue.resultsPage.results.venue.website}> {this.state.venue.resultsPage.results.venue.website}</a></span>
                </div>
              }

            </div>


          </div>

        </div>

        <div className=" upcoming">
          <h1 className="title is-3">UpComing Events</h1>
          <div className="columns upVevents is-multiline is-full-desktop">

            <div className="backArrow">
              <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
            </div>
            {!!this.state.upcoming.resultsPage &&
              this.state.upcoming.resultsPage.results.event.map(upevent =>
                <div key={upevent.id} className="column uevents is-one-quarter">
                  <span className="subtitle is-4 has-text-light">{upevent.displayName}</span>
                </div>
              )
            }


            <div className="nextArrow">
              <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
            </div>

          </div>
        </div>
      </section>
    )
  }
}

export default VenuesShow
