import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import 'bulma'
import './style.scss'

import EventsShow from './components/events/Show'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import EventsNew from './components/events/New'
import VenuesSearch from './components/venues/Search'
import EventsIndex from './components/events/Index'
import VenueShow from './components/venues/Show'
import Navbar from './components/common/Navbar'


class App extends React.Component {
  render() {
    return (

      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/events/:id" component={EventsShow} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/events" component={EventsIndex} />
            <Route path="/venues/:id" component={VenueShow} />
            <Route path="/new" component={EventsNew} />
            <Route path="/venues" component={VenuesSearch} />
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
