<script setup>
import Button from './Button.vue'
import RatingStars from './RatingStars.vue'

const props = defineProps({
  product: { type: Object, required: true }
})

const emit = defineEmits(['add-to-cart', 'rated'])

const handleAddToCart = () => {
  emit('add-to-cart', props.product)
}

const handleRated = (stars) => {
  emit('rated', { id: props.product.id, rating: stars })
}
</script>



<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
    <div class="h-48 bg-gray-300 flex items-center justify-center text-gray-500 overflow-hidden">
      <img v-if="product.image" :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
      <span v-else>Imagine Produs</span>
    </div>
    <div class="p-4">
      <h3 class="font-bold text-lg mb-2 truncate">{{ product.name }}</h3>
      <p class="text-gray-600 text-sm mb-2 line-clamp-2">{{ product.description }}</p>
      <div class="flex justify-between items-center mb-4">
        <span class="text-2xl font-bold text-blue-600">{{ product.price }} RON</span>
        <RatingStars :rating="product.rating" @rated="handleRated" />
      </div>
      <Button @click="handleAddToCart" class="w-full">Adaugă în coș</Button>
    </div>
  </div>
</template>

