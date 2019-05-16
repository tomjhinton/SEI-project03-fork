import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import 'mapbox-gl/dist/mapbox-gl.css'
import 'bulma'
import './style.scss'
import EventsShow from './components/events/Show'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import EventsNew from './components/events/New'
import VenuesSearch from './components/venues/Search'
import EventsIndex from './components/events/Index'
import VenuesShow from './components/venues/Show'
import Navbar from './components/common/Navbar'
import Profile from './components/common/Profile'

import Home from './components/common/Home'
import SEventsShow from './components/events/external/Show'
import ArtistShow from './components/artists/Show'
import SecureRoute from './components/common/SecureRoute'
import FlashMessages from './components/common/FlashMessages'


class App extends React.Component {
  constructor(){
    super()

    this.state = {
    }
  }

  componentDidMount() {

  }

  render() {
    return (

      <Router>
        <main>
          <Navbar />
          <FlashMessages />

          <Switch>
            <Route path="/artists/:id" component={ArtistShow}/>
            <SecureRoute path="/events/new" component={EventsNew} />
            <Route path="/events/external/:id" component={SEventsShow}/>
            <Route path="/events/:id" component={EventsShow} />
            <Route path="/events" component={EventsIndex} />

            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <SecureRoute path="/myprofile" component={Profile} />


            <Route path="/venues/:id" component={VenuesShow} />
            <Route path="/venues" component={VenuesSearch} />
            <Route path="/" render={(props) => <Home location={this.state.location} {...props} />} />

          </Switch>
        </main>
      </Router>


    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
