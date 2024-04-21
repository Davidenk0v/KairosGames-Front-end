import authGuard from '@/guards/authGuard'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('../views/ForgotPasswordView.vue')
    },
    {
      path: '/myaccount',
      name: 'my_account',
      component: () => import('../views/MyAccountView.vue'),
      beforeEnter: authGuard
    },
    {
      path: '/newpassword/:id',
      name: 'new-password',
      component: () => import('../views/NewPasswordView.vue')
    },
    {
      path: '/newpassword/sended',
      name: 'new-password-sended',
      component: () => import('../views/NewPasswordSendedView.vue')
    }
  ]
})

export default router
