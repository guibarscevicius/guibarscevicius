
export default [
  {
    path: '/',
    component: () => import('@templates/Main'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@components/Homepage')
      }
    ]
  }
]
