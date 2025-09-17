import { defineStore } from 'pinia'
import AxiosWithAuth from '@/configs/axiosConfig'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token'))
  const user = ref<any>(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null
  )

  const isAuthenticated = computed(() => !!token.value)

  const login = async (email: string, password: string) => {
    try {
      const res = await AxiosWithAuth.post('auth/login', { email, password })

      token.value = res.data.token
      user.value = {
        id: res.data.userId,
        role: res.data.role,
        name: res.data.name,
        email: res.data.email
      }

      localStorage.setItem('token', token.value)
      localStorage.setItem('user', JSON.stringify(user.value))
      startAutoLogout()

      return true
    } catch (err) {
      console.error('Login failed:', err)
      return false
    }
  }

  const logout = () => {
    token.value = null
    user.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const startAutoLogout = () => {
    clearTimeout((startAutoLogout as any)._timer) 
    ;(startAutoLogout as any)._timer = setTimeout(() => {
      logout()
      alert('Session expired. Please login again.')
      window.location.href = '/register' 
    }, 10 * 60 * 1000)
  }

  return {
    token,
    user,
    isAuthenticated,
    login,
    logout,
    startAutoLogout
  }
})
