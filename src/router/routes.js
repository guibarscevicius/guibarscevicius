const render = h => h('router-view')

export default [
  {
    path: '/',
    name: 'Home',
    components: {
      menu: { render },
      default: { render },
    }
  }
]