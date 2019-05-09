import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import 'bulma'
import './style.scss'


import Show from './components/events/Show'

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
            <Route path="/events/:id" component={Show} />
        </main>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
