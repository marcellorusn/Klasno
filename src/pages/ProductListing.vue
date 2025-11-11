<template>
  <div>
    <Header />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">All Products</h1>
      
      <SearchBar @search="handleSearch" />
      
      <div class="flex flex-col md:flex-row gap-8">
        <Sidebar />
        
        <div class="flex-1">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              v-for="i in 12"
              :key="i"
              :productName="`Product ${i}`"
              :productDescription="`Description for product ${i}`"
              :price="Math.random() * 150 + 20"
              :rating="Math.floor(Math.random() * 5) + 1"
              @add-to-cart="handleAddToCart"
              @add-to-wishlist="handleAddToWishlist"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import ProductCard from '../components/ProductCard.vue'
import SearchBar from '../components/SearchBar.vue'
import Sidebar from '../components/Sidebar.vue'

const handleSearch = (query) => {
  console.log('Searching for:', query)
}

const handleAddToCart = () => {
  console.log('Product added to cart')
}

const handleAddToWishlist = () => {
  console.log('Product added to wishlist')
}
</script>

<style scoped>
</style>
