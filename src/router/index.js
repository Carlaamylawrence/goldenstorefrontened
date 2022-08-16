import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/products',
    name: 'DisplayProducts',
    component: () => import('../views/DisplayProducts.vue')
  },
  {
    path: '/products/product',
    name: 'SingleProduct',
    component: () => import('../views/SingleProduct.vue')
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue')
  },{
    path: '/register',
    name: 'RegisterView',
    component: () => import('../views/RegisterView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
