<template>
  <div>
    <Header />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Edit Profile</h1>
      
      <div class="max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <div class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold mb-2">First Name</label>
              <Input v-model="form.firstName" type="text" placeholder="First Name" />
            </div>
            <div>
              <label class="block font-semibold mb-2">Last Name</label>
              <Input v-model="form.lastName" type="text" placeholder="Last Name" />
            </div>
          </div>

          <div>
            <label class="block font-semibold mb-2">Email</label>
            <Input v-model="form.email" type="email" placeholder="Email" />
          </div>

          <div>
            <label class="block font-semibold mb-2">Phone Number</label>
            <Input v-model="form.phone" type="tel" placeholder="Phone Number" />
          </div>

          <div>
            <label class="block font-semibold mb-2">Street Address</label>
            <Input v-model="form.address" type="text" placeholder="Street Address" />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block font-semibold mb-2">City</label>
              <Input v-model="form.city" type="text" placeholder="City" />
            </div>
            <div>
              <label class="block font-semibold mb-2">State</label>
              <Input v-model="form.state" type="text" placeholder="State" />
            </div>
            <div>
              <label class="block font-semibold mb-2">Zip Code</label>
              <Input v-model="form.zipcode" type="text" placeholder="Zip Code" />
            </div>
          </div>

          <div class="flex gap-4">
            <Button @click="handleSave" label="Save Changes" />
            <router-link to="/profile" class="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition">
              Cancel
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Header from '../components/Header.vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'

const form = reactive({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '(555) 123-4567',
  address: '123 Main Street',
  city: 'City',
  state: 'State',
  zipcode: '12345'
})

const handleSave = () => {
  console.log('Profile updated:', form)
  alert('Profile updated successfully!')
}
</script>

<style scoped>
</style>
