<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Electronice</h1>
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
  { id: 1, name: 'Laptop Dell XPS', description: 'Laptop performant', price: 3499, rating: 4.8 },
  { id: 2, name: 'Monitor 4K', description: 'Monitor ultrawide', price: 1299, rating: 4.7 },
  { id: 3, name: 'Mouse Wireless', description: 'Mouse performant', price: 249, rating: 4.6 },
  { id: 4, name: 'Tastatura RGB', description: 'Tastatura mecanică', price: 449, rating: 4.9 },
  { id: 5, name: 'Căști Wireless', description: 'Căști ANC', price: 799, rating: 4.8 },
  { id: 6, name: 'Webcam 4K', description: 'Webcam profesională', price: 399, rating: 4.7 },
])

const handleAddToCart = (product) => {
  cartStore.addToCart(product, 1)
  notificationStore.addNotification(`${product.name} a fost adăugat în coș! 🛒`)
}
</script>
