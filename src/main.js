import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import App from './App.vue'
import routes from './router/index.js'
import './tailwind.css' // <- import corect Tailwind

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
