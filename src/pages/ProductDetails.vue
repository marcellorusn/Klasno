<template>
  <div>
    <Header />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Product Details</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="bg-gray-200 h-96 rounded flex items-center justify-center text-gray-500">
          Product Image
        </div>
        
        <div>
          <h2 class="text-2xl font-bold mb-4">Product Name</h2>
          <RatingStars :rating="4" />
          
          <div class="text-3xl font-bold text-primary mb-4 mt-4">$49.99</div>
          
          <p class="text-gray-600 mb-6">This is a detailed description of the product. It includes features, benefits, and specifications.</p>
          
          <div class="mb-6">
            <label class="block mb-2 font-semibold">Quantity:</label>
            <div class="flex items-center gap-4">
              <button @click="decreaseQuantity" class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">-</button>
              <span class="text-xl font-semibold">{{ quantity }}</span>
              <button @click="increaseQuantity" class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">+</button>
            </div>
          </div>
          
          <div class="flex gap-4">
            <Button @click="handleAddToCart" label="Add to Cart" />
            <Button @click="handleAddToWishlist" label="Add to Wishlist" variant="secondary" />
          </div>
        </div>
      </div>

      <div class="bg-gray-100 rounded-lg p-6 mb-12">
        <h3 class="text-xl font-bold mb-4">Reviews</h3>
        <div class="space-y-4">
          <div v-for="i in 3" :key="i" class="bg-white p-4 rounded">
            <div class="flex justify-between items-start mb-2">
              <span class="font-semibold">Customer {{ i }}</span>
              <RatingStars :rating="4" />
            </div>
            <p class="text-gray-600">Great product! Really satisfied with my purchase.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '../components/Header.vue'
import RatingStars from '../components/RatingStars.vue'
import Button from '../components/Button.vue'

const quantity = ref(1)

const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const handleAddToCart = () => {
  console.log('Added', quantity.value, 'item(s) to cart')
}

const handleAddToWishlist = () => {
  console.log('Added to wishlist')
}
</script>

<style scoped>
</style>
