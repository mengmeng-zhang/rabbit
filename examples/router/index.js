import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import routerPath from '@/router.json'
Vue.use(Router)

const route = []

routerPath.path.map(item => {
  if (item.mdName) {
    route.push({
      path: item.router,
      name: item.mdName,
      component: r => require.ensure([], () => r(require('../docs/' + item.mdName + '.md')))
    })
  }
})

export default new Router({
  routes: route
})
