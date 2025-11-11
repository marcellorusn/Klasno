<template>
  <div>
    <Header />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div v-if="cartItems.length > 0" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2">
          <div class="space-y-4">
            <div v-for="(item, index) in cartItems" :key="index" class="bg-white rounded-lg p-4 shadow flex justify-between items-center">
              <div class="flex-1">
                <h3 class="font-semibold">{{ item.name }}</h3>
                <p class="text-gray-600">Price: ${{ item.price }}</p>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-lg font-semibold">Qty: {{ item.quantity }}</span>
                <button @click="removeItem(index)" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition">Remove</button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-gray-100 rounded-lg p-6 h-fit">
          <h3 class="text-xl font-bold mb-4">Order Summary</h3>
          <div class="space-y-2 mb-6">
            <div class="flex justify-between">
              <span>Subtotal:</span>
              <span>${{ subtotal.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Tax:</span>
              <span>${{ tax.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping:</span>
              <span>${{ shipping.toFixed(2) }}</span>
            </div>
            <div class="border-t pt-2 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${{ total.toFixed(2) }}</span>
            </div>
          </div>
          <router-link to="/checkout" class="w-full block text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition">
            Proceed to Checkout
          </router-link>
        </div>
      </div>
      
      <div v-else class="text-center py-12">
        <p class="text-xl text-gray-600 mb-4">Your cart is empty</p>
        <router-link to="/products" class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition">
          Continue Shopping
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Header from '../components/Header.vue'

const cartItems = ref([
  { name: 'Sample Product 1', price: 29.99, quantity: 2 },
  { name: 'Sample Product 2', price: 49.99, quantity: 1 }
])

const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
})

const tax = computed(() => subtotal.value * 0.1)
const shipping = computed(() => 5.00)
const total = computed(() => subtotal.value + tax.value + shipping.value)

const removeItem = (index) => {
  cartItems.value.splice(index, 1)
}
</script>

<style scoped>
</style>
