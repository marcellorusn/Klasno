<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <router-link to="/" class="text-xl font-bold text-primary">Klasno</router-link>
        
        <div class="hidden md:flex space-x-6">
          <router-link to="/" class="hover:text-primary transition">Home</router-link>
          <router-link to="/products" class="hover:text-primary transition">Products</router-link>
          <div class="relative group">
            <button class="hover:text-primary transition">Categories</button>
            <div class="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-40">
              <router-link to="/category/electronics" class="block px-4 py-2 hover:bg-gray-100">Electronics</router-link>
              <router-link to="/category/clothing" class="block px-4 py-2 hover:bg-gray-100">Clothing</router-link>
              <router-link to="/category/books" class="block px-4 py-2 hover:bg-gray-100">Books</router-link>
              <router-link to="/category/accessories" class="block px-4 py-2 hover:bg-gray-100">Accessories</router-link>
            </div>
          </div>
          <router-link to="/about" class="hover:text-primary transition">About</router-link>
          <router-link to="/contact" class="hover:text-primary transition">Contact</router-link>
        </div>

        <div class="flex space-x-4 items-center">
          <router-link to="/wishlist" class="hover:text-primary transition">❤️ Wishlist</router-link>
          <router-link to="/cart" class="hover:text-primary transition">🛒 Cart</router-link>
          <router-link to="/login" class="hover:text-primary transition">👤 Login</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
</style>
