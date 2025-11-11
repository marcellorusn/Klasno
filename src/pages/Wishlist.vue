<template>
  <div>
    <Header />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">My Wishlist</h1>
      
      <div v-if="wishlistItems.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="(item, index) in wishlistItems"
          :key="index"
          :productName="item.name"
          :productDescription="item.description"
          :price="item.price"
          :rating="item.rating"
          @add-to-cart="handleAddToCart(index)"
          @add-to-wishlist="handleRemoveFromWishlist(index)"
        />
      </div>
      
      <div v-else class="text-center py-12">
        <p class="text-xl text-gray-600 mb-4">Your wishlist is empty</p>
        <router-link to="/products" class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition">
          Continue Shopping
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import ProductCard from '../components/ProductCard.vue'

const wishlistItems = ref([
  { name: 'Wishlist Item 1', description: 'Nice product', price: 29.99, rating: 4 },
  { name: 'Wishlist Item 2', description: 'Great quality', price: 49.99, rating: 5 }
])

const handleAddToCart = (index) => {
  console.log('Added to cart:', wishlistItems.value[index].name)
}

const handleRemoveFromWishlist = (index) => {
  wishlistItems.value.splice(index, 1)
}
</script>

<style scoped>
</style>
