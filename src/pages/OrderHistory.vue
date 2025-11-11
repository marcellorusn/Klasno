<template>
  <div>
    <Header />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Order History</h1>
      
      <div class="space-y-4">
        <div v-for="i in 5" :key="i" class="bg-white rounded-lg shadow p-6">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <p class="text-gray-600 text-sm">Order ID</p>
              <p class="font-semibold">#ORDER{{ String(i).padStart(5, '0') }}</p>
            </div>
            <div>
              <p class="text-gray-600 text-sm">Date</p>
              <p class="font-semibold">{{ new Date(2024, 0, i).toLocaleDateString() }}</p>
            </div>
            <div>
              <p class="text-gray-600 text-sm">Total</p>
              <p class="font-semibold">${{ (i * 25.50).toFixed(2) }}</p>
            </div>
            <div>
              <p class="text-gray-600 text-sm">Status</p>
              <p class="font-semibold text-green-600">Delivered</p>
            </div>
          </div>
          <router-link :to="`/product/${i}`" class="mt-4 inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition">
            View Details
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
</script>

<style scoped>
</style>
