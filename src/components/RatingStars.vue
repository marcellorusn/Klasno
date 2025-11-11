<template>
  <div class="flex items-center gap-1">
    <span
      v-for="i in 5"
      :key="i"
      :class="[
        'text-xl',
        i <= rating ? 'text-yellow-400' : 'text-gray-300'
      ]"
    >
      ★
    </span>
    <span class="text-sm text-gray-600 ml-2">({{ rating }}/5)</span>
  </div>
</template>

<script setup>
defineProps({
  rating: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0 && value <= 5
  }
})
</script>

<style scoped>
</style>
