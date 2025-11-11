<template>
  <div>
    <Header />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Clothing</h1>
      
      <div class="flex flex-col md:flex-row gap-8">
        <Sidebar />
        
        <div class="flex-1">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              v-for="i in 12"
              :key="i"
              :productName="`Clothing Item ${i}`"
              :productDescription="`Stylish and comfortable clothing`"
              :price="Math.random() * 100 + 20"
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
import Sidebar from '../components/Sidebar.vue'

const handleAddToCart = () => {
  console.log('Added to cart')
}

const handleAddToWishlist = () => {
  console.log('Added to wishlist')
}
</script>

<style scoped>
</style>
