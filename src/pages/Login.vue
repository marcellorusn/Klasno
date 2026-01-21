<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import { useAuthStore } from '../stores/auth'

const form = ref({
  email: '',
  password: '',
})

const router = useRouter()
const auth = useAuthStore()

const handleLogin = () => {

  auth.login(form.value.email)
  router.push('/profile')
}
</script>

<template>
  <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
    <h1 class="text-3xl font-bold mb-6 text-center">Autentificare</h1>

    <form class="space-y-4" @submit.prevent="handleLogin">
      <Input v-model="form.email" type="email" placeholder="Email" />
      <Input v-model="form.password" type="password" placeholder="Parolă" />
      <Button class="w-full" @click="handleLogin"> Autentificare </Button>
    </form>

    <p class="text-center mt-4 text-gray-600">
      Nu ai cont?
      <router-link to="/register" class="text-blue-600 hover:underline">Înregistrează-te</router-link>
    </p>

    <p class="text-center mt-2">
      <router-link to="/forgot-password" class="text-blue-600 hover:underline text-sm">
        Ai uitat parola?
      </router-link>
    </p>
  </div>
</template>



<style scoped></style>
