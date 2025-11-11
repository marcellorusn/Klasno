<template>
  <aside class="w-full md:w-64 bg-white rounded-lg shadow-md p-6 mb-6 md:mb-0">
    <h3 class="font-bold text-lg mb-4">Filters</h3>
    
    <div class="mb-6">
      <h4 class="font-semibold mb-3">Categories</h4>
      <label class="flex items-center mb-2 cursor-pointer">
        <input type="checkbox" class="mr-2" />
        <span>Electronics</span>
      </label>
      <label class="flex items-center mb-2 cursor-pointer">
        <input type="checkbox" class="mr-2" />
        <span>Clothing</span>
      </label>
      <label class="flex items-center mb-2 cursor-pointer">
        <input type="checkbox" class="mr-2" />
        <span>Books</span>
      </label>
      <label class="flex items-center cursor-pointer">
        <input type="checkbox" class="mr-2" />
        <span>Accessories</span>
      </label>
    </div>

    <div class="mb-6">
      <h4 class="font-semibold mb-3">Price Range</h4>
      <div class="space-y-2">
        <label class="flex items-center cursor-pointer">
          <input type="checkbox" class="mr-2" />
          <span>Under $25</span>
        </label>
        <label class="flex items-center cursor-pointer">
          <input type="checkbox" class="mr-2" />
          <span>$25 - $50</span>
        </label>
        <label class="flex items-center cursor-pointer">
          <input type="checkbox" class="mr-2" />
          <span>$50 - $100</span>
        </label>
        <label class="flex items-center cursor-pointer">
          <input type="checkbox" class="mr-2" />
          <span>Over $100</span>
        </label>
      </div>
    </div>

    <button class="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition">
      Apply Filters
    </button>
  </aside>
</template>

<script setup>
</script>

<style scoped>
</style>
