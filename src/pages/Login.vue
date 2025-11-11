<template>
  <div>
    <Header />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Login</h1>
      
      <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <div class="space-y-6">
          <div>
            <label class="block font-semibold mb-2">Email</label>
            <Input v-model="form.email" type="email" placeholder="Enter your email" />
          </div>

          <div>
            <label class="block font-semibold mb-2">Password</label>
            <Input v-model="form.password" type="password" placeholder="Enter your password" />
          </div>

          <div class="flex items-center">
            <input type="checkbox" id="remember" class="mr-2" />
            <label for="remember" class="text-sm">Remember me</label>
          </div>

          <Button @click="handleLogin" label="Login" class="w-full" />

          <div class="text-center space-y-2">
            <router-link to="/forgot-password" class="text-primary hover:underline text-sm block">
              Forgot password?
            </router-link>
            <p class="text-sm">
              Don't have an account?
              <router-link to="/register" class="text-primary hover:underline">Register</router-link>
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
  email: '',
  password: ''
})

const handleLogin = () => {
  console.log('Login attempt:', form)
  alert('Login successful!')
}
</script>

<style scoped>
</style>
