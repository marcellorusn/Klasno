<template>
  <div v-if="product" class="bg-white p-8 rounded-lg shadow-md">
    <router-link to="/products" class="text-blue-600 hover:underline mb-4 block">← Înapoi la Produse</router-link>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="h-96 bg-gray-300 flex items-center justify-center rounded-lg">
        <span class="text-gray-500 text-xl">Imagine Produs</span>
      </div>
      
      <div>
        <h1 class="text-4xl font-bold mb-2">{{ product.name }}</h1>
        <RatingStars :rating="product.rating" class="mb-4" />
        
        <p class="text-gray-600 mb-4">{{ product.description }}</p>
        
        <div class="mb-6">
          <span class="text-4xl font-bold text-blue-600">{{ product.price }} RON</span>
          <span class="text-gray-500 line-through ml-4">{{ Math.round(product.price * 1.2) }} RON</span>
        </div>

        <div class="mb-6">
          <label class="block mb-2">Cantitate:</label>
          <input v-model.number="quantity" type="number" min="1" class="w-20 px-3 py-2 border border-gray-300 rounded-lg">
        </div>

        <div class="flex gap-4 mb-6">
          <Button @click="handleAddToCart" class="flex-1">
            Adaugă în Coș
          </Button>
          <Button @click="handleAddToWishlist" variant="secondary" class="flex-1">
            ♥ Wishlist
          </Button>
        </div>

        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-bold mb-2">Detalii Produs</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>✓ Livrare gratuită</li>
            <li>✓ Garanție 2 ani</li>
            <li>✓ Retur gratuit 30 zile</li>
            <li>✓ Suport 24/7</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-12 border-t pt-8">
      <h2 class="text-2xl font-bold mb-4">Recenzii ({{ reviews.length }})</h2>
      <div class="space-y-4">
        <div v-for="review in reviews" :key="review.id" class="bg-gray-50 p-4 rounded-lg">
          <div class="flex justify-between items-start mb-2">
            <span class="font-bold">{{ review.author }}</span>
            <RatingStars :rating="review.rating" />
          </div>
          <p class="text-gray-600">{{ review.text }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center py-12">
    <p class="text-gray-500">Produsul nu a fost găsit</p>
    <router-link to="/products" class="text-blue-600 hover:underline">Înapoi la Produse</router-link>
  </div>
</template>

<script setup>
// Simple ProductDetails page
// - Shows a single product from local data
// - Uses local reactive `quantity` and simple handlers
import { ref } from 'vue'
import Button from '../components/Button.vue'
import RatingStars from '../components/RatingStars.vue'

const product = ref({
  id: 1,
  name: 'Laptop Dell XPS 13',
  description: 'Laptop ultraportabil cu procesor Intel i7, 16GB RAM, 512GB SSD',
  price: 3499,
  rating: 4.8
})

const quantity = ref(1)

const reviews = ref([
  { id: 1, author: 'Ion M.', rating: 5, text: 'Excelent! Laptop foarte rapid și ușor.' },
  { id: 2, author: 'Maria T.', rating: 4.5, text: 'Foarte bun, doar bateria ar putea fi mai bună.' },
  { id: 3, author: 'Andrei K.', rating: 5, text: 'Cel mai bun laptop pe care l-am avut.' }
])

function handleAddToCart() {
  alert(`${quantity.value} x ${product.value.name} adăugat în coș!`)
}

function handleAddToWishlist() {
  alert(`Adăugat în Wishlist!`)
}
</script>

<style scoped>
</style>
