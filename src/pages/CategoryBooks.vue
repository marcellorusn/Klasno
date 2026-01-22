<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Cărți</h1>
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
import { useCartStore } from '../stores/cart'
import { useNotificationStore } from '../stores/notification'

const cartStore = useCartStore()
const notificationStore = useNotificationStore()

const products = ref([
  {
    id: 1,
    name: 'JavaScript: The Good Parts',
    description: 'Clasic de programare',
    price: 69,
    rating: 4.9,
  },
  { id: 2, name: 'Vue 3 Guide', description: 'Ghid complet', price: 79, rating: 4.8 },
  { id: 3, name: 'Clean Code', description: 'Scrie cod mai bun', price: 89, rating: 4.9 },
  { id: 4, name: 'Refactoring', description: 'Îmbunătățire cod', price: 99, rating: 4.7 },
  { id: 5, name: 'Design Patterns', description: 'Șabloane design', price: 109, rating: 4.8 },
  { id: 6, name: 'Algorithm Design', description: 'Algoritmi avansați', price: 119, rating: 4.6 },
])

const handleAddToCart = (product) => {
  cartStore.addToCart(product, 1)
  notificationStore.addNotification(`${product.name} a fost adăugat în coș! 🛒`)
}
</script>
