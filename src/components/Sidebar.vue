<template>
  <aside class="w-64 bg-white border-r border-gray-200 p-6">
    <h3 class="font-bold text-lg mb-4">Filtre</h3>

    <div class="mb-6">
      <h4 class="font-semibold mb-2">Categorie</h4>
      <label v-for="cat in categories" :key="cat" class="flex gap-2 mb-2">
        <input type="checkbox" :value="cat" v-model="selectedCategories" class="w-4 h-4" />
        <span>{{ cat }}</span>
      </label>
    </div>

    <div class="mb-6">
      <h4 class="font-semibold mb-2">Preț</h4>
      <input v-model.number="priceRange" type="range" min="0" max="1000" class="w-full" />
      <div class="text-sm text-gray-600 mt-2">0 - {{ priceRange }} RON</div>
    </div>

    <div>
      <h4 class="font-semibold mb-2">Rating</h4>
      <label v-for="rating in ratings" :key="rating" class="flex gap-2 mb-2">
        <input type="checkbox" :value="rating" v-model="selectedRatings" class="w-4 h-4" />
        <span>{{ rating }}+ ★</span>
      </label>
    </div>
  </aside>
</template>

<script setup>
// Simple Sidebar with local reactive filters (no external logic)
import { ref } from 'vue'

const categories = ['Electronice', 'Îmbrăcăminte', 'Cărți', 'Accesorii']
const ratings = [5, 4, 3, 2, 1]

const selectedCategories = ref([])
const selectedRatings = ref([])
const priceRange = ref(500)
</script>

<style scoped></style>
