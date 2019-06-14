import loadable from './loadable'

const NODE_ENV = process.env.NODE_ENV || 'development'
let Main, List
if (NODE_ENV == 'development') {
  //hack热更新
  Main = require('../container/Main/index').default
  List = require('../container/List/index').default
} else {
  Main = loadable(() => import('../container/Main/index'))
  List = loadable(() => import('../container/List/index'))
}

export default [
  {
    path: '/',
    exact: true,
    component: Main
  },
  {
    path: '/list',
    exact: true,
    component: List
  }
]
