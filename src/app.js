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
import VenuesShow from './components/venues/Show'
import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import SEventsShow from './components/events/external/Show'
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
            <SecureRoute path="/events/new" component={EventsNew} />
            <Route path="/events/external/:id" component={SEventsShow}/>
            <Route path="/events/:id" component={EventsShow} />
            <Route path="/events" component={EventsIndex} />

            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />

            <Route path="/venues/:id" component={VenuesShow} />
            <Route path="/venues" component={VenuesSearch} />
            <Route path="/" render={() => <Home location={this.state.location} />} />

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
