<script setup>
import Notifications from './components/Notifications.vue'
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import './style.css'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gray-50">
    <Header />
    <Navbar />
    <main class="flex-1 container mx-auto px-4 py-8">
      <router-view />
    </main>
    <Footer />
    <Notifications />
  </div>
</template>