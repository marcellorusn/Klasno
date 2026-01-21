<template>
  <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
    <h1 class="text-3xl font-bold mb-6 text-center">Înregistrare</h1>

    <form class="space-y-4" @submit.prevent="handleRegister">
      <Input v-model="form.fullName" placeholder="Nume Complet" />
      <Input v-model="form.email" type="email" placeholder="Email" />
      <Input v-model="form.password" type="password" placeholder="Parolă" />
      <Input v-model="form.confirmPassword" type="password" placeholder="Confirmă Parolă" />
      <label class="flex gap-2">
        <input v-model="form.termsAccepted" type="checkbox" />
        <span class="text-sm">Accept Termenii și Condițiile</span>
      </label>
      <Button class="w-full" @click="handleRegister"> Înregistrare </Button>
    </form>

    <p class="text-center mt-4 text-gray-600">
      Ai deja cont?
      <router-link to="/login" class="text-blue-600 hover:underline">Autentifică-te</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import useAuth from '../stores/auth'

const form = ref({
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsAccepted: false,
})

const router = useRouter()
const auth = useAuth()

const handleRegister = () => {
  if (form.value.password !== form.value.confirmPassword) {
    alert('Parolele nu se potrivesc!')
    return
  }
  // Simple demo registration: mark logged in and go to profile
  auth.login({ name: form.value.fullName || form.value.email })
  router.push('/profile')
}
</script>

<style scoped></style>
