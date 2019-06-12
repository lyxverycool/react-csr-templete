import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import App from './routes/index'

const app = document.getElementById('app')


const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    app
  )
}

render(App);

if (module.hot) {
  module.hot.accept('./routes/index', () => {
    const App = require('./routes/index').default
    render(App)
  })
}
