import { jwtDecode } from 'jwt-decode'
import { defineStore } from 'pinia'
import router from '@/router'
import { computed } from 'vue'

export const useAuthStore = defineStore('authStore', () => {
  // State of the store
  const isAuthenticated = computed(() => {
    const TOKEN = sessionStorage.getItem('token')
    if (TOKEN) {
      try {
        //Descodificamos el TOKEN para saber si el usuario es admin o user
        const { authorities } = jwtDecode(TOKEN)
        if (authorities === 'ROLE_ADMIN' || authorities === 'ROLE_USER') {
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
    const TOKEN = sessionStorage.getItem('token')
    if (isAuthenticated.value) {
      const { authorities } = jwtDecode(TOKEN)
      if (authorities === 'ROLE_ADMIN') {
        return true
      }
    }
    return false
  })

  const getUserId = computed(() => {
    const TOKEN = sessionStorage.getItem('token')
    if (TOKEN) {
      try {
        const { id } = jwtDecode(TOKEN)
        return id
      } catch (e) {
        console.error(e)
      }
    }
    return null
  })

  const getUsername = computed(() => {
    const TOKEN = sessionStorage.getItem('token')
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
