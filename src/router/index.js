import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/BlogMain.vue')
    },
    {
      path: '/post/:id',
      name: 'home',
      component: () => import('../views/BlogPost.vue')
    }
  ]
})

export default router
