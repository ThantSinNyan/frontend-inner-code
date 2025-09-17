// src/plugins/axios.ts
import axios from 'axios'
import { useAuthStore } from '@/stores/personalInfo/auth'

axios.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  if (authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`
  }
  return config
})

export default axios
