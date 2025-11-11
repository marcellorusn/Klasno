<template>
  <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
    <div class="mb-4 bg-gray-200 h-40 rounded flex items-center justify-center text-gray-500">
      <img src="placeholder-image.jpg" alt="product" class="w-full h-full object-cover rounded" />
    </div>
    <h3 class="font-bold text-lg mb-2">{{ productName }}</h3>
    <p class="text-gray-600 text-sm mb-2">{{ productDescription }}</p>
    <div class="flex justify-between items-center mb-3">
      <span class="text-primary font-bold text-lg">${{ price }}</span>
      <RatingStars :rating="rating" />
    </div>
    <div class="flex gap-2">
      <Button @click="handleAddToCart" label="Add to Cart" class="flex-1" />
      <Button @click="handleAddToWishlist" label="❤️" variant="secondary" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import Button from './Button.vue'
import RatingStars from './RatingStars.vue'

defineProps({
  productName: {
    type: String,
    default: 'Product Name'
  },
  productDescription: {
    type: String,
    default: 'Product description goes here'
  },
  price: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 4
  }
})

const emit = defineEmits(['add-to-cart', 'add-to-wishlist'])

const handleAddToCart = () => {
  emit('add-to-cart')
}

const handleAddToWishlist = () => {
  emit('add-to-wishlist')
}
</script>

<style scoped>
</style>
