<script setup>
import { useAuthStore } from '../stores/auth'
import { useCartStore } from '../stores/cart'

const auth = useAuthStore()
const cartStore = useCartStore()

const handleLogout = () => auth.logout()
</script>

<template>
  <header class="bg-blue-600 text-white shadow-lg">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold hover:text-blue-100">Klasno</router-link>
      <nav class="flex gap-4 items-center">
        <router-link to="/" class="hover:text-blue-100 transition">Acasă</router-link>
        <router-link to="/products" class="hover:text-blue-100 transition">Produse</router-link>
        <router-link to="/about" class="hover:text-blue-100 transition">Despre</router-link>
        <div class="flex-1"></div>
        <router-link to="/cart" class="hover:text-blue-100 transition relative">
          Coș
          <span v-if="cartStore.itemCount > 0"
            class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {{ cartStore.itemCount }}
          </span>
        </router-link>
        <div v-if="auth.isAuthenticated" class="flex items-center gap-3">
          <router-link to="/profile" class="hover:text-blue-100 transition">Profil</router-link>
          <button @click="handleLogout" class="text-sm bg-white text-blue-600 px-3 py-1 rounded">
            Ieșire
          </button>
        </div>
        <div v-else class="flex items-center gap-3">
          <router-link to="/login" class="hover:text-blue-100 transition">Autentificare</router-link>
          <router-link to="/register" class="hover:text-blue-100 transition">Înregistrare</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>
