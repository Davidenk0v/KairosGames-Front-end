import { jwtDecode } from 'jwt-decode'
import { defineStore } from 'pinia'
import router from '@/router'
import { computed } from 'vue'

export const useAuthStore = defineStore('authStore', () => {
  // State of the store
  const TOKEN = sessionStorage.getItem('token')
  const isAuthenticated = computed(() => {
    if (TOKEN) {
      try {
        //Descodificamos el TOKEN para saber si el usuario es admin o user
        const { iss } = jwtDecode(TOKEN)
        if (iss === 'ADMIN' || iss === 'USER') {
          return true
        }
      } catch (error) {
        console.error(error)
        return false
      }
    }
    return false
  })

  const isAdmin = computed(() => {
    if (isAuthenticated.value) {
      const { iss } = jwtDecode(TOKEN)
      if (iss === 'ADMIN') {
        return true
      }
    }
    return false
  })

  const getUserId = computed(() => {
    if (TOKEN) {
      try {
        const { sub } = jwtDecode(TOKEN)
        return sub
      } catch (e) {
        console.error(e)
      }
    }
    return null
  })

  const logout = () => {
    sessionStorage.removeItem('token')
    window.location.reload()
    router.push('/login')
  }

  return { isAuthenticated, isAdmin, logout, getUserId }
})
