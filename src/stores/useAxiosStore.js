import { defineStore } from 'pinia'

export const useAxiosStore = defineStore('AxiosStore', () => {
  const URL_API = 'http://localhost:8080/api'
  const TOKEN = sessionStorage.getItem('token')
  const config = {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  }

  return { URL_API, config }
})
