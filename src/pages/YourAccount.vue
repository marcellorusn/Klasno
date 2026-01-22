<template>
  <div class="max-w-4xl">
    <h1 class="text-3xl font-bold mb-6">Managerul Contului</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <router-link
        to="/profile"
        class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
      >
        <div class="text-3xl mb-2">👤</div>
        <h2 class="font-bold text-lg mb-2">Profil Utilizator</h2>
        <p class="text-gray-600 text-sm">Vezi și editează informațiile personale</p>
      </router-link>

      <router-link
        to="/orders"
        class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
      >
        <div class="text-3xl mb-2">📦</div>
        <h2 class="font-bold text-lg mb-2">Comenzi</h2>
        <p class="text-gray-600 text-sm">Verifica status comenzilor tale</p>
      </router-link>

      <router-link
        to="/wishlist"
        class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
      >
        <div class="text-3xl mb-2">❤️</div>
        <h2 class="font-bold text-lg mb-2">Wishlist</h2>
        <p class="text-gray-600 text-sm">Produsele tale salvate</p>
      </router-link>

      <div class="bg-white p-6 rounded-lg shadow-md cursor-pointer">
        <div class="text-3xl mb-2">⚙️</div>
        <h2 class="font-bold text-lg mb-2">Setări</h2>
        <p class="text-gray-600 text-sm">Modifică preferințele contului</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md cursor-pointer">
        <div class="text-3xl mb-2">🔒</div>
        <h2 class="font-bold text-lg mb-2">Securitate</h2>
        <p class="text-gray-600 text-sm">Schimbă parola și setări de acces</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md cursor-pointer">
        <div class="text-3xl mb-2">📞</div>
        <h2 class="font-bold text-lg mb-2">Suport</h2>
        <p class="text-gray-600 text-sm">Contactează echipa de suport</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
