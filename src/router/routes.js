
export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "mainTemplate" */ '@templates/Main'),
    children: [
      {
        path: '',
        name: 'Homepage',
        component: () => import(/* webpackChunkName: "homepage" */ '@containers/Homepage')
      },
      {
        path: '/sobre',
        name: 'Sobre',
        component: () => import(/* webpackChunkName: "about" */ '@containers/About')
      }
    ]
  }
]
