import { jwtDecode } from 'jwt-decode'
import { computed } from 'vue'

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

const authGuard = (to, from, next) => {
  if (isAuthenticated.value) {
    next()
  } else {
    next('/login')
  }
}

export default authGuard
