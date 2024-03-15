import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', () => {
  // State of the store
  const rol = ''

  function setRol(newRol) {
    this.rol = newRol
  }

  function getRol() {
    return this.rol
  }
  return { setRol, getRol }
})
