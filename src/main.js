import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import App from './App.vue'
import routes from './router/index.js'
import './style.css'

// Create app instance
const app = createApp(App)

// Create and install router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Create and install Pinia for state management (5 stores with getters/actions)
const pinia = createPinia()

// Install plugins and mount
app.use(pinia)
app.use(router)
app.mount('#app')