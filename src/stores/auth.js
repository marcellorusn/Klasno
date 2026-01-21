import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),

  // Getters
  getters: {
    // Getter 1: Check if user is logged in
    isAuthenticated(state) {
      if (state.user) {
        return true
      } else {
        return false
      }
    },

    // Getter 2: Get user name
    userName(state) {
      if (state.user && state.user.email) {
        return state.user.email
      } else {
        return 'Guest'
      }
    },
  },

  // Actions
  actions: {
    login(email) {
      this.user = { email }
    },

    logout() {
      this.user = null
    },
  },
})
