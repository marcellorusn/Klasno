<template>
  <footer class="bg-gray-800 text-white mt-12">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="font-bold mb-4">About Klasno</h3>
          <p class="text-gray-400 text-sm">Your trusted online store for quality products.</p>
        </div>
        <div>
          <h3 class="font-bold mb-4">Quick Links</h3>
          <ul class="text-gray-400 text-sm space-y-2">
            <li><router-link to="/about" class="hover:text-white">About Us</router-link></li>
            <li><router-link to="/contact" class="hover:text-white">Contact</router-link></li>
            <li><router-link to="/feedback" class="hover:text-white">Feedback</router-link></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold mb-4">Contact Info</h3>
          <p class="text-gray-400 text-sm">Email: info@klasno.com</p>
          <p class="text-gray-400 text-sm">Phone: +1 (555) 000-0000</p>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; 2024 Klasno Store. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>
