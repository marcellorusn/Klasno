<template>
  <div>
    <Header />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">My Profile</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow p-6">
          <div class="text-center mb-6">
            <div class="w-24 h-24 mx-auto bg-gray-300 rounded-full flex items-center justify-center text-3xl">
              👤
            </div>
            <h2 class="text-xl font-bold mt-4">John Doe</h2>
            <p class="text-gray-600">john@example.com</p>
          </div>
          <router-link to="/profile/edit" class="block w-full text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition mb-2">
            Edit Profile
          </router-link>
          <router-link to="/orders" class="block w-full text-center px-4 py-2 bg-secondary text-white rounded-lg hover:bg-green-700 transition">
            View Orders
          </router-link>
        </div>

        <div class="lg:col-span-2 space-y-6">
          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-xl font-bold mb-4">Account Information</h3>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-600">Email:</span>
                <span class="font-semibold">john@example.com</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Phone:</span>
                <span class="font-semibold">(555) 123-4567</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Member Since:</span>
                <span class="font-semibold">January 2023</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h3 class="text-xl font-bold mb-4">Shipping Address</h3>
            <p class="text-gray-600">123 Main Street</p>
            <p class="text-gray-600">City, State 12345</p>
            <p class="text-gray-600">USA</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
</script>

<style scoped>
</style>
