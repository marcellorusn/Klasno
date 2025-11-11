<template>
  <div class="flex gap-2 mb-6">
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search products..."
      class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
    />
    <button
      @click="handleSearch"
      class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
    >
      Search
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'

const searchQuery = ref('')
const emit = defineEmits(['search'])

const handleSearch = () => {
  emit('search', searchQuery.value)
}
</script>

<style scoped>
</style>
