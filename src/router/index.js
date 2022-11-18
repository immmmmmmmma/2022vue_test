import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../components/ProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'about',
    component: ProductView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
