import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Products from '../components/Products'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Products',
    component: Products
  },
  {
    path: '/about',
    name: 'About',
    component: Products
  }
]

const router = new VueRouter({
  routes
})

export default router
