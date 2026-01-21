<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Wishlist-ul Meu</h1>

    <div
      v-if="wishlistItems.length > 0"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      <ProductCard
        v-for="product in wishlistItems"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>

    <div v-else class="text-center bg-white p-12 rounded-lg shadow-md">
      <p class="text-gray-600 text-lg mb-4">Wishlist-ul tău este gol</p>
      <router-link to="/products" class="text-blue-600 hover:underline"
        >Explorez Produse</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'

const wishlistItems = ref([
  { id: 1, name: 'Laptop Dell XPS', description: 'Laptop performant', price: 3499, rating: 4.8 },
  { id: 3, name: 'Monitor 4K', description: 'Monitor ultrawide', price: 1299, rating: 4.7 },
])

const handleAddToCart = productId => {
  alert(`Produs #${productId} adăugat în coș!`)
}
</script>

<style scoped></style>
