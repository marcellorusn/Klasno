<template>
  <div class="flex gap-6">
    <Sidebar />
    <div class="flex-1">
      <h1 class="text-3xl font-bold mb-6">Toate Produsele</h1>

      <div class="mb-4 flex justify-between items-center">
        <p class="text-gray-600">{{ products.length }} produse disponibile</p>
        <select class="px-4 py-2 border border-gray-300 rounded-lg">
          <option>Sortare: Nou</option>
          <option>Preț: Crescător</option>
          <option>Preț: Descrescător</option>
          <option>Rating: Crescător</option>
        </select>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :id="product.id"
          :title="product.name"
          :description="product.description"
          :price="product.price"
          :rating="product.rating"
          @add-to-cart="handleAddToCart"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '../components/Sidebar.vue'
import ProductCard from '../components/ProductCard.vue'

const products = ref([
  { id: 1, name: 'Laptop Dell XPS', description: 'Laptop performant', price: 3499, rating: 4.8 },
  { id: 2, name: 'Monitor LG 32"', description: 'Monitor 4K ultrawide', price: 2199, rating: 4.7 },
  { id: 3, name: 'Mouse Logitech', description: 'Mouse wireless', price: 249, rating: 4.6 },
  { id: 4, name: 'Cărți JavaScript', description: 'Bundle de 5 cărți', price: 199, rating: 4.5 },
  { id: 5, name: 'Tricou Developer', description: 'Tricou premium', price: 89, rating: 4.4 },
  { id: 6, name: 'Carcasă PC', description: 'Carcasă gaming', price: 599, rating: 4.9 },
  { id: 7, name: 'Tastatura Mecanică', description: 'Tastatura RGB', price: 449, rating: 4.7 },
  { id: 8, name: 'Căști Wireless', description: 'Căști ANC', price: 799, rating: 4.8 },
  { id: 9, name: 'Încărcător USB-C', description: '100W rapid', price: 149, rating: 4.6 },
])

const handleAddToCart = productId => {
  alert(`Produs #${productId} adăugat în coș!`)
}
</script>

<style scoped></style>
