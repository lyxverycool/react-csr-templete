import loadable from '@loadable/component'

const loadableCom = name => loadable(() => import(`../container/${name}/index`))

export default [
  {
    path: ['/', '/index'],
    exact: true,
    component: loadableCom('Main')
  },
  {
    path: '/list',
    exact: true,
    component: loadableCom('List')
  },
]
