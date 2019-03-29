import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routerPathConfig = [
  {
    'path': '/test',
    'name': 'test',
    'component': r => require.ensure([], () => r(require('@/components/HelloWorld')))
  }, {
    'path': '/',
    'name': 'index',
    'component': r => require.ensure([], () => r(require('@/docs/test.md')))
  }
]

export default new VueRouter({
  routes: routerPathConfig
})
