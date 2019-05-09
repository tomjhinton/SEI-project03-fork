import React from 'react'
import ReactDOM from 'react-dom'
//import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import 'bulma'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      venues: []
    }
  }
  render() {
    return(
      <h1 className="title is-1">Hello World</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
