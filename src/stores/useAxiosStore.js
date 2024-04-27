import { defineStore } from 'pinia'

export const useAxiosStore = defineStore('AxiosStore', () => {
  const URL_API = 'http://localhost:8080/api'
  const token = sessionStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  return { URL_API, config }
})
