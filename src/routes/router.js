import loadable from '@loadable/component'

//跟webpack开发者确认webpack不支持变量name.perhaps feature
const loadableCom = name => loadable(() => import(/* webpackChunkName: "[request]"*/`../container/${name}/index`))

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
