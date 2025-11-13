<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
    <div class="h-48 bg-gray-300 flex items-center justify-center text-gray-500 relative overflow-hidden">
      <img 
        v-if="image" 
        :src="image" 
        :alt="title"
        class="w-full h-full object-cover"
      />
      <span v-else>Imagine Produs</span>
    </div>
    <div class="p-4">
      <h3 class="font-bold text-lg mb-2 truncate">{{ title || name }}</h3>
      <p class="text-gray-600 text-sm mb-2 line-clamp-2">{{ description || desc }}</p>
      <div class="flex justify-between items-center mb-4">
        <span class="text-2xl font-bold text-blue-600">{{ price }} RON</span>
        <RatingStars :rating="rating" @rated="handleRated" />
      </div>
      <Button 
        @click="handleAddToCart"
        class="w-full"
      >
        Adaugă în coș
      </Button>
    </div>
  </div>
</template>

<script setup>
// Simple ProductCard: receives product info via props and emits events
import Button from './Button.vue'
import RatingStars from './RatingStars.vue'

const props = defineProps({
  id: [String, Number],
  title: { type: String, required: true },
  description: { type: String, default: '' },
  price: { type: Number, required: true },
  image: { type: String, default: '' },
  rating: { type: Number, default: 0 }
})

// Events: 'add-to-cart' when add button clicked, 'rated' when child rating is used
const emit = defineEmits(['add-to-cart', 'rated'])

function handleAddToCart() {
  // send minimal product info to parent
  emit('add-to-cart', { id: props.id, title: props.title, price: props.price })
}

function handleRated(stars) {
  // return the chosen stars to parent
  emit('rated', { id: props.id, rating: stars })
}
</script>

<style scoped>
</style>