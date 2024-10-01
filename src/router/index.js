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
      path: '/sobre',
      name: 'Sobre',
      component: () => import('../views/BlogAbout.vue')
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: () => import('../views/BlogPost.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/BlogMain.vue')
    }
  ]
})

export default router
