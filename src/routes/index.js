import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import routes from './router';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    console.log(error)
    return { hasError: true };
  }


  routeWithSubRoutes = (route, index) => (
    <Route
      key={index}
      exact={route.exact || false}
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  )

  componentDidCatch(error) {
    console.log(error)
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Sorry,Something went wrong.</h1>;
    }
    return (
      <Switch>
        {routes.map((route, index) => this.routeWithSubRoutes(route, index))}
      </Switch>
    );
  }
}

export default App
