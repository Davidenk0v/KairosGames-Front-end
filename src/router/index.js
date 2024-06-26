import adminGuard from '@/guards/adminGuard'
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
      path: '/game/:name',
      name: 'game_view',
      component: () => import('../views/GameView.vue'),
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/TeamView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
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
    },
    {
      path: '/admin',
      name: 'admin-view',
      component: () => import('../views/AdminView.vue'),
      beforeEnter: adminGuard
    }
  ]
})

export default router
