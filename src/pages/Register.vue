<template>
  <div>
    <Header />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Register</h1>
      
      <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <div class="space-y-6">
          <div>
            <label class="block font-semibold mb-2">First Name</label>
            <Input v-model="form.firstName" type="text" placeholder="Enter your first name" />
          </div>

          <div>
            <label class="block font-semibold mb-2">Last Name</label>
            <Input v-model="form.lastName" type="text" placeholder="Enter your last name" />
          </div>

          <div>
            <label class="block font-semibold mb-2">Email</label>
            <Input v-model="form.email" type="email" placeholder="Enter your email" />
          </div>

          <div>
            <label class="block font-semibold mb-2">Password</label>
            <Input v-model="form.password" type="password" placeholder="Enter your password" />
          </div>

          <div>
            <label class="block font-semibold mb-2">Confirm Password</label>
            <Input v-model="form.confirmPassword" type="password" placeholder="Confirm your password" />
          </div>

          <div class="flex items-center">
            <input type="checkbox" id="terms" class="mr-2" />
            <label for="terms" class="text-sm">I agree to the terms and conditions</label>
          </div>

          <Button @click="handleRegister" label="Register" class="w-full" />

          <div class="text-center">
            <p class="text-sm">
              Already have an account?
              <router-link to="/login" class="text-primary hover:underline">Login</router-link>
            </p>
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
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const handleRegister = () => {
  console.log('Register attempt:', form)
  alert('Registration successful!')
}
</script>

<style scoped>
</style>
