<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
      <div class="flex justify-between items-center p-6 border-b">
        <h2 class="text-xl font-bold">{{ title }}</h2>
        <button
          @click="closeModal"
          class="text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
      </div>
      <div class="p-6">
        <slot></slot>
      </div>
      <div class="flex gap-3 p-6 border-t justify-end">
        <Button @click="closeModal" label="Cancel" variant="secondary" />
        <Button @click="confirmAction" label="Confirm" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import Button from './Button.vue'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Modal'
  }
})

const emit = defineEmits(['close', 'confirm'])

const closeModal = () => {
  emit('close')
}

const confirmAction = () => {
  emit('confirm')
}
</script>

<style scoped>
</style>
