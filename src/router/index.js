import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/Layout/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'HomeView',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/views/Login.vue'),
        },
        {
          path: 'livros',
          name: 'Livros',
          component: () => import('@/views/BooksView.vue'),
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
