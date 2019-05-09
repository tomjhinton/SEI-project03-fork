import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import 'bulma'

import Login from '../components/auth/Login'
import Register from '../components/auth/Register'

class App extends React.Component {
  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />

          </Switch>
        </Router>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
