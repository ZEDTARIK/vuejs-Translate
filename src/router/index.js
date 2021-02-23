import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Translates from '../views/Translates.vue'
import Page404 from '../views/Page404';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/translate',
    name: 'Translate',
    component: Translates
  },
  {
    path: '/:catchAll(.*)',
    component: Page404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
