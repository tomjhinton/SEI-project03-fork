import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import 'bulma'
import './style.scss'



import Show from './components/events/Show'
import Login from './components/auth/Login'
import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import New from './components/events/New'
import EventIndex from './components/events/EventIndex'
import VenueShow from './components/venues/Show'




class App extends React.Component {
  render() {
    return (






      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/events/:id" component={Show} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/events" component={EventIndex} />
            <Route path="/venues/:id" component={VenueShow} />




            <Route path="/new" component={New} />

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
