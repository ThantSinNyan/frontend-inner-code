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
        email: res.data.email,
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
  const register = async (payload: {
    name: string
    email: string
    password: string
    confirmPassword: string
  }) => {
    try {
      const { data } = await AxiosWithAuth.post('auth/register', payload)
      return data // you can return a success message or user object from backend
    } catch (err) {
      const error = err as AxiosError<string>
      console.error('Registration failed:', error?.response?.data || err)
      throw error
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
    ;(startAutoLogout as any)._timer = setTimeout(
      () => {
        logout()
        alert('Session expired. Please login again.')
        window.location.href = '/register'
      },
      10 * 60 * 1000
    )
  }

  return {
    token,
    user,
    isAuthenticated,
    login,
    logout,
    startAutoLogout,
    register,
  }
})
