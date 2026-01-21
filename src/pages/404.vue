<template>
  <div class="text-center py-24">
    <h1 class="text-6xl font-bold text-gray-400 mb-4">404</h1>
    <h2 class="text-3xl font-bold mb-4">Pagina nu a fost găsită</h2>
    <p class="text-gray-600 mb-8">Pagina pe care o cauți nu există sau a fost mutată.</p>

    <div class="flex gap-4 justify-center">
      <router-link to="/" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Înapoi Acasă
      </router-link>
      <router-link
        to="/products"
        class="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
      >
        Vezi Produse
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
