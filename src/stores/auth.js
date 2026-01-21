import { defineStore } from 'pinia'

// Store 1: Auth - 2 getters, 2 actions
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),

  // Getters (separate from computed properties in components)
  getters: {
    // Getter 1: Check if user is logged in
    isAuthenticated(state) {
      return !!state.user
    },
    
    // Getter 2: Get user name
    userName(state) {
      return state.user?.email || 'Guest'
    },
  },

  // Actions
  actions: {
    // Action 1: Login
    login(email) {
      this.user = { email }
    },

    // Action 2: Logout
    logout() {
      this.user = null
    },
  },
})
