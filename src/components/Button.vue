<template>
  <button
    :class="[
      'px-6 py-2 rounded-lg font-semibold transition',
      variantClasses
    ]"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Button'
  },
  variant: {
    type: String,
    enum: ['primary', 'secondary', 'danger'],
    default: 'primary'
  }
})

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-700',
    secondary: 'bg-secondary text-white hover:bg-green-700',
    danger: 'bg-red-500 text-white hover:bg-red-700'
  }
  return variants[props.variant]
})
</script>

<style scoped>
</style>
