import loadable from '@loadable/component'

const Main = loadable(() => import('../container/Main/index'))
const List = loadable(() => import('../container/List/index'))

export default [
  {
    path: '/',
    exact: true,
    component: Main,
  },
  {
    path: '/list',
    exact: true,
    component: List,
  },
]
