<script setup>
import { computed } from 'vue'
import { useWishlistStore } from '../stores/wishlist'
import { useCartStore } from '../stores/cart'
import { useNotificationStore } from '../stores/notification'
import ProductCard from '../components/ProductCard.vue'

const wishlistStore = useWishlistStore()
const cartStore = useCartStore()
const notificationStore = useNotificationStore()
const wishlistItems = computed(() => wishlistStore.items)

const handleAddToCart = (product) => {
  cartStore.addToCart(product, 1)
  notificationStore.addNotification(`${product.name} a fost adăugat în coș! 🛒`)
}
</script>

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
      <router-link to="/products" class="text-blue-600 hover:underline">
        Explorez Produse
      </router-link>
    </div>
  </div>
</template>
