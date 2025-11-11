<template>
  <div>
    <Header />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8">Welcome to Klasno Store</h1>
      
      <SearchBar @search="handleSearch" />
      
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Featured Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard
            v-for="i in 8"
            :key="i"
            :productName="`Product ${i}`"
            :productDescription="`Description for product ${i}`"
            :price="Math.random() * 100 + 10"
            :rating="Math.floor(Math.random() * 5) + 1"
            @add-to-cart="handleAddToCart"
            @add-to-wishlist="handleAddToWishlist"
          />
        </div>
      </section>

      <section class="bg-gray-100 rounded-lg p-8 mb-12">
        <h2 class="text-2xl font-bold mb-4">Shop by Category</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <router-link to="/category/electronics" class="bg-white p-4 rounded-lg text-center hover:shadow-lg transition">
            <div class="text-4xl mb-2">📱</div>
            <span class="font-semibold">Electronics</span>
          </router-link>
          <router-link to="/category/clothing" class="bg-white p-4 rounded-lg text-center hover:shadow-lg transition">
            <div class="text-4xl mb-2">👕</div>
            <span class="font-semibold">Clothing</span>
          </router-link>
          <router-link to="/category/books" class="bg-white p-4 rounded-lg text-center hover:shadow-lg transition">
            <div class="text-4xl mb-2">📚</div>
            <span class="font-semibold">Books</span>
          </router-link>
          <router-link to="/category/accessories" class="bg-white p-4 rounded-lg text-center hover:shadow-lg transition">
            <div class="text-4xl mb-2">⌚</div>
            <span class="font-semibold">Accessories</span>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
import Header from '../components/Header.vue'
import ProductCard from '../components/ProductCard.vue'
import SearchBar from '../components/SearchBar.vue'

const emit = defineEmits(['add-to-cart', 'add-to-wishlist'])

const handleSearch = (query) => {
  console.log('Search query:', query)
}

const handleAddToCart = () => {
  console.log('Added to cart')
}

const handleAddToWishlist = () => {
  console.log('Added to wishlist')
}
</script>

<style scoped>
</style>
