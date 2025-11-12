<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Îmbrăcăminte</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard 
        v-for="product in products" 
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'

const products = ref([
  { id: 1, name: 'Tricou Premium', description: '100% bumbac', price: 89, rating: 4.6 },
  { id: 2, name: 'Pantalon Jeans', description: 'Jeans premium', price: 149, rating: 4.5 },
  { id: 3, name: 'Bluză Hoodie', description: 'Hoodie confortabil', price: 129, rating: 4.7 },
  { id: 4, name: 'Jachetă Puffer', description: 'Jachetă caldă', price: 349, rating: 4.8 },
  { id: 5, name: 'Mănuși Lână', description: 'Mănuși iarnă', price: 49, rating: 4.6 },
  { id: 6, name: 'Șapcă Baseball', description: 'Șapcă sport', price: 59, rating: 4.4 }
])

const handleAddToCart = (productId) => {
  alert(`Produs #${productId} adăugat în coș!`)
}
</script>

<style scoped>
</style>
