import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './router'
import '../less/normal.less'

interface State {
  hasError: boolean
}

export default class extends Component<State> {
  state: State = { hasError: false }

  // componentDidMount() {
  //   if ('serviceWorker' in navigator) {
  //     window.addEventListener('load', () => {
  //       navigator.serviceWorker.register('/service-worker.js').then(registration => {
  //         console.log('SW registered: ', registration)
  //       }).catch(registrationError => {
  //         console.log('SW registration failed: ', registrationError)
  //       })
  //     })
  //   }
  // }

  routeWithSubRoutes = (route: any, index: number) => (
    <Route
      key={index}
      exact={route.exact || false}
      path={route.path}
      render={props => < route.component {...props} routes={route.routes} />}
    />
  )

  componentDidCatch(error: any, info: any) {
    if (String(error).includes('Loading chunk')) {
      window.location.reload();
      return
    }
    this.setState({
      hasError: true
    })
    console.log(`报错信息:${error}`)
    console.log(`报错调用栈的组件: ${JSON.stringify(info)}`)
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Sorry, Something went wrong.</h1>
    }
    return (
      <Switch>
        {routes.map((route, index) => this.routeWithSubRoutes(route, index))}
      </Switch>
    )
  }
}

