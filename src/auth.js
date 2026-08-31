import { ref } from 'vue'

export const isAuthenticated = ref(false)

export const login = (username, password) => {
  if (username === 'admin' && password === 'password123') {
    isAuthenticated.value = true
    return true
  }

  isAuthenticated.value = false
  return false
}

export const logout = () => {
  isAuthenticated.value = false
}
