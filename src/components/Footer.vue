<template>
  <footer class="bg-gray-800 text-white mt-12">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 class="font-bold text-lg mb-4">Klasno</h3>
          <p class="text-gray-400">Magazin online pentru produse de calitate.</p>
        </div>
        <div>
          <h4 class="font-bold mb-4">Navigare</h4>
          <ul class="space-y-2 text-gray-400">
            <li><router-link to="/" class="hover:text-white">Acasă</router-link></li>
            <li><router-link to="/products" class="hover:text-white">Produse</router-link></li>
            <li><router-link to="/about" class="hover:text-white">Despre</router-link></li>
            <li><router-link to="/contact" class="hover:text-white">Contact</router-link></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-4">Cont</h4>
          <ul class="space-y-2 text-gray-400">
            <li><router-link to="/login" class="hover:text-white">Autentificare</router-link></li>
            <li><router-link to="/register" class="hover:text-white">Înregistrare</router-link></li>
            <li><router-link to="/profile" class="hover:text-white">Profil</router-link></li>
            <li><router-link to="/orders" class="hover:text-white">Comenzi</router-link></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-4">Info</h4>
          <ul class="space-y-2 text-gray-400">
            <li><router-link to="/about" class="hover:text-white">Despre</router-link></li>
            <li><router-link to="/feedback" class="hover:text-white">Feedback</router-link></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Klasno. Toate drepturile rezervate.</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>
