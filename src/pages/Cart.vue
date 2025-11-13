<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Coș de Cumpărături</h1>
    
    <div v-if="cartItems.length > 0" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <div class="bg-white rounded-lg shadow-md p-6">
          <div v-for="item in cartItems" :key="item.id" class="flex gap-4 pb-4 border-b last:border-b-0 last:pb-0">
            <div class="h-24 w-24 bg-gray-300 rounded-lg flex items-center justify-center">
              <span class="text-gray-500 text-sm">Imagine</span>
            </div>
            <div class="flex-1">
              <h3 class="font-bold">{{ item.name }}</h3>
              <p class="text-gray-600 text-sm">{{ item.price }} RON</p>
              <div class="flex gap-2 mt-2">
                <button @click="decrementQuantity(item.id)" class="bg-gray-200 px-2 py-1 rounded">-</button>
                <span class="px-3 py-1">{{ item.quantity }}</span>
                <button @click="incrementQuantity(item.id)" class="bg-gray-200 px-2 py-1 rounded">+</button>
              </div>
            </div>
            <div class="text-right">
              <p class="font-bold">{{ item.price * item.quantity }} RON</p>
              <button @click="removeItem(item.id)" class="text-red-600 hover:underline text-sm">Șterge</button>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6 h-fit">
        <h2 class="font-bold text-lg mb-4">Rezumat Comandă</h2>
        <div class="space-y-2 mb-4 text-sm">
          <div class="flex justify-between">
            <span>Subtotal:</span>
            <span>{{ subtotal }} RON</span>
          </div>
          <div class="flex justify-between">
            <span>Livrare:</span>
            <span>{{ shipping }} RON</span>
          </div>
          <div class="flex justify-between">
            <span>TVA (19%):</span>
            <span>{{ tax }} RON</span>
          </div>
          <div class="border-t pt-2 flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span>{{ total }} RON</span>
          </div>
        </div>
        <router-link to="/checkout" class="bg-blue-600 text-white px-4 py-2 rounded-lg w-full block text-center hover:bg-blue-700">
          Continuă Cumpărarea
        </router-link>
      </div>
    </div>

    <div v-else class="text-center bg-white p-12 rounded-lg shadow-md">
      <p class="text-gray-600 text-lg mb-4">Coșul tău este gol</p>
      <router-link to="/products" class="text-blue-600 hover:underline">Explorez Produse</router-link>
    </div>
  </div>
</template>

<script setup>
// Simple Cart page with local cart items
// - Uses `ref` for list and `computed` for totals
import { ref, computed } from 'vue'

const cartItems = ref([
  { id: 1, name: 'Laptop Dell XPS', price: 3499, quantity: 1 },
  { id: 2, name: 'Monitor LG 32"', price: 2199, quantity: 2 }
])

const shipping = 50

const subtotal = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0))
const tax = computed(() => Math.round(subtotal.value * 0.19))
const total = computed(() => subtotal.value + shipping + tax.value)

function incrementQuantity(id) {
  const item = cartItems.value.find(i => i.id === id)
  if (item) item.quantity++
}

function decrementQuantity(id) {
  const item = cartItems.value.find(i => i.id === id)
  if (item && item.quantity > 1) item.quantity--
}

function removeItem(id) {
  cartItems.value = cartItems.value.filter(item => item.id !== id)
}
</script>

<style scoped>
</style>
