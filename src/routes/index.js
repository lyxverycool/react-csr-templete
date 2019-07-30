import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import routes from './router';

const App = () => {
  const routeWithSubRoutes = (route, index) => (
    <Route
      key={index}
      exact={route.exact || false}
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
  return (
    <Switch>
      {routes.map((route, index) => routeWithSubRoutes(route, index))}
    </Switch>
  );
}


const NODE_ENV = process.env.NODE_ENV || 'development';
const AppContainer = NODE_ENV === 'development' ? hot(module)(App) : App;

export default AppContainer;
