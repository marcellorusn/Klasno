import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * Auth Store - Manages user authentication and profile
 * Demonstrates: 2 getters, 3 actions
 */
export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(null)
  const isLoading = ref(false)

  // Getter 1: Is user authenticated
  const isAuthenticated = computed(() => user.value !== null)

  // Getter 2: User display name
  const getUserDisplayName = computed(() => {
    if (!user.value) return 'Guest'
    return user.value.firstName
      ? `${user.value.firstName} ${user.value.lastName}`
      : user.value.email
  })

  // Action 1: Login user
  const login = async (email, password) => {
    isLoading.value = true
    // Simulate API call
    return new Promise(resolve => {
      setTimeout(() => {
        user.value = {
          id: 1,
          email,
          firstName: 'John',
          lastName: 'Doe',
          avatar: 'https://via.placeholder.com/40',
        }
        isLoading.value = false
        resolve(true)
      }, 500)
    })
  }

  // Action 2: Logout user
  const logout = () => {
    user.value = null
  }

  // Action 3: Update user profile
  const updateProfile = updates => {
    if (user.value) {
      user.value = { ...user.value, ...updates }
      return true
    }
    return false
  }

  return {
    user,
    isLoading,
    isAuthenticated,
    getUserDisplayName,
    login,
    logout,
    updateProfile,
  }
})
