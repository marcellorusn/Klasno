<template>
  <div class="flex gap-2">
    <input 
      v-model="searchQuery" 
      @keyup.enter="handleSearch"
      type="text" 
      placeholder="Caută produse..." 
      class="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <Button @click="handleSearch" variant="primary">
      🔍
    </Button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from './Button.vue'

const searchQuery = ref('')

const emit = defineEmits(['search'])

const handleSearch = () => {
  emit('search', searchQuery.value)
}
</script>

<style scoped>
</style>
