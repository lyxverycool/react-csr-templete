import React from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './router'

export default () => {
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
