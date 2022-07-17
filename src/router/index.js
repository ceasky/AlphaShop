import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import checkoutlist from '../views/CheckoutList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/checkoutlist',
      name: 'checkoutlist',
      component: checkoutlist
    },
    {
      path: '/',
      name: 'root',
      component: checkoutlist
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
