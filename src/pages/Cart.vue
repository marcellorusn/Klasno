<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'

const router = useRouter()
const cartStore = useCartStore()

watch(() => cartStore.items, (newItems) => {
  console.log(`Cart updated: ${newItems.length} items`)
}, { deep: true })

const continueShopping = () => {
  router.push({ name: 'ProductListing' })
}
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Shopping Cart</h1>

    <div v-if="cartStore.items.length === 0" class="bg-gray-50 p-8 text-center rounded">
      <p class="text-gray-600 mb-4">Your cart is empty</p>
      <button
        class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        @click="continueShopping"
      >
        Continue Shopping
      </button>
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="item in cartStore.items"
        :key="item.id"
        class="flex justify-between items-center bg-white p-4 rounded shadow"
      >
        <div>
          <h3 class="font-bold">{{ item.name }}</h3>
          <p class="text-gray-600">${{ item.price }} x {{ item.quantity }}</p>
        </div>
        <button
          class="text-red-600 hover:text-red-800"
          @click="cartStore.removeFromCart(item.id)"
        >
          Remove
        </button>
      </div>

      <div class="bg-white p-6 rounded shadow">
        <div class="flex justify-between mb-4">
          <span class="text-lg">Items:</span>
          <span class="font-bold">{{ cartStore.itemCount }}</span>
        </div>
        <div class="flex justify-between text-xl font-bold border-t pt-4">
          <span>Total:</span>
          <span class="text-blue-600">${{ cartStore.total }}</span>
        </div>
        <button
          class="w-full mt-4 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          @click="continueShopping"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
