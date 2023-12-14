import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/licenses',
      name: 'licenses',
    },
    {
      path: '/equipment',
      name: 'equipment',
    },
    {
      path: '/energetics',
      name: 'energetics',
    },
    {
      path: '/contacts',
      name: 'contacts',
    }
  ]
})

export default router
