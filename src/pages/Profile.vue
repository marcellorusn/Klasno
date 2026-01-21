<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
    <aside class="bg-white p-6 rounded-lg shadow-md">
      <div class="text-center mb-6">
        <div
          class="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-3 flex items-center justify-center"
        >
          <span class="text-3xl">👤</span>
        </div>
        <h2 class="font-bold">{{ auth.userName }}</h2>
        <p class="text-sm text-gray-600">{{ auth.user?.email || 'noreply@example.com' }}</p>
      </div>
      <nav class="space-y-2">
        <router-link to="/profile" class="block px-3 py-2 bg-blue-600 text-white rounded-lg">
          Profil
        </router-link>
        <router-link to="/wishlist" class="block px-3 py-2 hover:bg-gray-100 rounded-lg">
          Wishlist
        </router-link>
        <button
          @click="handleLogout"
          class="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
        >
          Deconectare
        </button>
      </nav>
    </aside>

    <div class="md:col-span-3 space-y-6">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4">Informații Profil</h2>
        <div class="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p class="text-gray-600">Nume:</p>
            <p class="font-bold">{{ auth.userName }}</p>
          </div>
          <div>
            <p class="text-gray-600">Email:</p>
            <p class="font-bold">{{ auth.user?.email || 'noreply@example.com' }}</p>
          </div>
          <div>
            <p class="text-gray-600">Telefon:</p>
            <p class="font-bold">+40 7xx xxx xxx</p>
          </div>
          <div>
            <p class="text-gray-600">Data Aderării:</p>
            <p class="font-bold">01 Ianuarie 2023</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-4">Adresa Livrare Implicită</h2>
        <div class="text-sm text-gray-600 mb-4">
          <p>Ion Popescu</p>
          <p>Strada Exemple 123</p>
          <p>București, 010101</p>
          <p>România</p>
        </div>
        <Button @click="editAddress" variant="secondary"> Modifică Adresa </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from '../components/Button.vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const auth = useAuthStore()

const editAddress = () => {
  alert('Modifică adresa')
}

const handleLogout = () => {
  auth.logout()
  router.push('/')
}
</script>

<style scoped></style>
