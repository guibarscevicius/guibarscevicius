
export default [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "mainTemplate" */ '@views/Main'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "homepage" */ '@components/Homepage')
      }
    ]
  }
]
