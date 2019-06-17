import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'
import routes from './router'

class App extends Component {
  render() {
    const routeWithSubRoutes = (route, index) =>
      <Route
        key={index}
        exact={route.exact || false}
        path={route.path}
        render={props => <route.component {...props} routes={route.routes} />}
      />
    return (
      <Switch>
        {routes.map((route, index) => routeWithSubRoutes(route, index))}
      </Switch>
    )
  }
}

export default hot(module)(App)
