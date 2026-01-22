<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { useNotificationStore } from '../stores/notification'

const router = useRouter()
const cartStore = useCartStore()
const notificationStore = useNotificationStore()

const cartItems = computed(() => cartStore.items)
const itemCount = computed(() => cartStore.itemCount)
const cartTotal = computed(() => cartStore.total)
const averagePrice = computed(() => {
  if (cartStore.items.length === 0) return '0.00'
  return (parseFloat(cartStore.total) / cartStore.items.length).toFixed(2)
})

const continueShopping = () => {
  router.push({ name: 'ProductListing' })
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">Coș de Cumpărături</h1>
    <div v-if="cartItems.length === 0" class="bg-gray-50 p-8 text-center rounded">
      <p class="text-gray-600 mb-4">Your cart is empty</p>
      <router-link to="/products" class="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Continue Shopping
      </router-link>
    </div>
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 space-y-4">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="flex justify-between items-center bg-white p-4 rounded shadow"
        >
          <div>
            <h3 class="font-bold">{{ item.name }}</h3>
            <p class="text-gray-600">{{ item.price }} RON</p>
            <p class="text-sm text-gray-500">Cantitate: {{ item.quantity }}</p>
          </div>
          <button
            class="text-red-600 hover:text-red-800"
            @click="cartStore.removeFromCart(item.id); notificationStore.addNotification(item.name + ' a fost șters din coș')"
          >
            Remove
          </button>
        </div>
      </div>
      <div class="lg:col-span-1 bg-white p-6 rounded shadow h-fit sticky top-4">
        <h2 class="text-2xl font-bold mb-6">Order Summary</h2>
        <div class="space-y-3 mb-6">
          <div class="flex justify-between">
            <span>Total produse:</span>
            <span>{{ itemCount }}</span>
          </div>
          <div class="flex justify-between">
            <span>Preț mediu:</span>
            <span>{{ averagePrice }} RON</span>
          </div>
        </div>
        <div class="border-t pt-4 mb-6">
          <div class="flex justify-between text-2xl font-bold">
            <span>Total:</span>
            <span class="text-blue-600">{{ cartTotal }} RON</span>
          </div>
        </div>
        <router-link
          to="/checkout"
          class="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded hover:bg-blue-700 font-bold"
        >
          Proceed to Checkout
        </router-link>
        <button
          class="w-full mt-2 border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50"
          @click="continueShopping"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  </div>
</template>
