<template>
  <button
    :class="[
      'px-4 py-2 rounded-lg font-medium transition',
      variant === 'primary' ? 'bg-blue-600 text-white hover:bg-blue-700' : '',
      variant === 'secondary' ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' : '',
      variant === 'danger' ? 'bg-red-600 text-white hover:bg-red-700' : '',
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  ></button>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'primary' },
  disabled: { type: Boolean, default: false },
})
defineEmits(['click'])
</script>

<style scoped></style>
