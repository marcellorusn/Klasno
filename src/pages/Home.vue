<template>
  <div>
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 rounded-lg mb-12">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-4">Bine ai venit la Klasno!</h1>
        <p class="text-xl mb-6">Cea mai bună selecție de produse online</p>
        <router-link to="/products" class="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition">
          Explorez Produse
        </router-link>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-3xl font-bold mb-6">Produse în Trending</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <ProductCard 
          v-for="product in trendingProducts" 
          :key="product.id"
          :id="product.id"
          :title="product.name"
          :description="product.description"
          :price="product.price"
          :rating="product.rating"
          @add-to-cart="handleAddToCart"
        />
      </div>
    </section>

    <section class="bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">De ce să alegi Klasno?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="text-center">
          <div class="text-4xl mb-2">🚚</div>
          <h3 class="font-bold mb-2">Livrare Rapidă</h3>
          <p class="text-gray-600">Livrarea în termen de 24-48 ore pe întreg teritoriul</p>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-2">💰</div>
          <h3 class="font-bold mb-2">Prețuri Bune</h3>
          <p class="text-gray-600">Cele mai bune oferte și reduceri disponibile</p>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-2">🛡️</div>
          <h3 class="font-bold mb-2">Securitate</h3>
          <p class="text-gray-600">Plăți sigure și protecția datelor personale</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'

const trendingProducts = ref([
  { id: 1, name: 'Laptop ProBook', description: 'Laptop performant', price: 2999, rating: 4.5 },
  { id: 2, name: 'Monitor 4K', description: 'Ecran de calitate', price: 1299, rating: 4.8 },
  { id: 3, name: 'Cărți de Programare', description: 'Bundle educativ', price: 149, rating: 4.7 },
  { id: 4, name: 'Tricou Premium', description: 'Tricou 100% bumbac', price: 79, rating: 4.6 }
])

const handleAddToCart = (productId) => {
  alert(`Produs #${productId} adăugat în coș!`)
}
</script>

<style scoped>
</style>
