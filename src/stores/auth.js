import { reactive } from 'vue'

// Minimal, local auth store used for demo/navigation purposes.
// In a real app replace with proper auth (JWT/OAuth/session).
const state = reactive({
  loggedIn: false,
  user: null,
})

export function useAuth() {
  const login = (user = { name: 'User' }) => {
    state.loggedIn = true
    state.user = user
  }

  const logout = () => {
    state.loggedIn = false
    state.user = null
  }

  return { state, login, logout }
}

export default useAuth
