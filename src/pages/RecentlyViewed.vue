<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Produse Vizionate Recent</h1>
    
    <div v-if="viewedProducts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard 
        v-for="product in viewedProducts" 
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>

    <div v-else class="text-center bg-white p-12 rounded-lg shadow-md">
      <p class="text-gray-600 text-lg mb-4">Nu ai vizionat niciun produs</p>
      <router-link to="/products" class="text-blue-600 hover:underline">Explorez Produse</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'

const viewedProducts = ref([
  { id: 1, name: 'Laptop Dell XPS', description: 'Laptop performant', price: 3499, rating: 4.8 },
  { id: 2, name: 'Monitor 4K', description: 'Monitor ultrawide', price: 1299, rating: 4.7 },
  { id: 4, name: 'Tastatura RGB', description: 'Tastatura mecanică', price: 449, rating: 4.9 }
])

const handleAddToCart = (productId) => {
  alert(`Produs #${productId} adăugat în coș!`)
}
</script>

<style scoped>
</style>
