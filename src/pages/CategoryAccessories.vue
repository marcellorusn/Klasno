<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Accesorii</h1>
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
  { id: 1, name: 'Cabluri USB-C', description: 'Set de 3 cabluri', price: 79, rating: 4.5 },
  { id: 2, name: 'Stație de Incarcare', description: 'Multi-port', price: 199, rating: 4.7 },
  { id: 3, name: 'Husă Laptop', description: 'Protecție 13"', price: 89, rating: 4.6 },
  { id: 4, name: 'Suport Telefon', description: 'Suport birou', price: 49, rating: 4.4 },
  { id: 5, name: 'Filtru Ecran', description: 'Protecție privacitate', price: 129, rating: 4.8 },
  { id: 6, name: 'Pad Mouse', description: 'Pad XL', price: 59, rating: 4.6 }
])

const handleAddToCart = (productId) => {
  alert(`Produs #${productId} adăugat în coș!`)
}
</script>

<style scoped>
</style>
