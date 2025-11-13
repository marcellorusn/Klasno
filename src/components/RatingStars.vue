<template>
  <div class="flex items-center gap-1 cursor-pointer" @click.stop>
    <span 
      v-for="star in 5" 
      :key="star"
      @click="handleRate(star)"
      :class="[
        'text-xl transition hover:scale-110',
        star <= (hoverRating || rating) ? 'text-yellow-400' : 'text-gray-300'
      ]"
      @mouseover="hoverRating = star"
      @mouseleave="hoverRating = 0"
    >
      ★
    </span>
    <span class="ml-2 text-sm text-gray-600">({{ rating.toFixed(1) }})</span>
  </div>
</template>

<script setup>
// Simple interactive stars component
// Props: rating (number)
// Emits: 'rated' with the chosen star count
import { ref } from 'vue'

const props = defineProps({ rating: { type: Number, default: 0 } })
const emit = defineEmits(['rated'])
const hoverRating = ref(0)

function handleRate(stars) {
  emit('rated', stars)
}
</script>

<style scoped>
</style>
