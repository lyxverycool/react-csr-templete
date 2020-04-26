import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './router'
import '../less/normal.less'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  routeWithSubRoutes = (route, index) => (
    <Route
      key={index}
      exact={route.exact || false}
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  )

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    })
    console.log(`报错信息:${error}`)
    console.log(`报错调用栈的组件: ${JSON.stringify(info)}`)
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Sorry,Something went wrong.</h1>
    }
    return (
      <Switch>
        {routes.map((route, index) => this.routeWithSubRoutes(route, index))}
      </Switch>
    )
  }
}

export default App
