import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import 'bulma'

import EventsShow from './components/events/Show'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="events/:id" component={EventsShow} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
