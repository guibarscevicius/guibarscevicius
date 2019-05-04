
export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "mainTemplate" */ '@templates/Main'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "homepage" */ '@components/Homepage')
      }
    ]
  }
]
