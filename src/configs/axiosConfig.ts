import axios from 'axios'
import router from '@/router'
import { useAuthStore } from '@/stores/auth/auth'

const AxiosWithAuth = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

AxiosWithAuth.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore()
    if (authStore.token) {
      config.headers.Authorization = `Bearer ${authStore.token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)
AxiosWithAuth.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      const authStore = useAuthStore()
      const refreshToken = localStorage.getItem('refresh_token')

      if (refreshToken) {
        try {
          const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/auth/refresh`, {
            refreshToken,
          })
          localStorage.setItem('access_token', data.accessToken)
          authStore.token = data.accessToken
          error.config.headers.Authorization = `Bearer ${data.accessToken}`
          return AxiosWithAuth(error.config)
        } catch (err) {
          authStore.logout()
          router.push({ name: 'login' })
        }
      } else {
        authStore.logout()
        router.push({ name: 'login' })
      }
    }
    return Promise.reject(error)
  }
)

export default AxiosWithAuth
