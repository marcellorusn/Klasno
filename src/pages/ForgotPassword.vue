<template>
  <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
    <h1 class="text-3xl font-bold mb-6 text-center">Recuperare Parolă</h1>

    <form class="space-y-4" @submit.prevent="handleSubmit">
      <p class="text-gray-600 mb-4">
        Introdu adresa de email și îți vom trimite instrucțiuni pentru a reseta parola.
      </p>

      <Input v-model="form.email" type="email" placeholder="Adresa ta de Email" />

      <Button class="w-full" @click="handleSubmit"> Trimite Link Resetare </Button>
    </form>

    <p class="text-center mt-4 text-gray-600">
      Ți-ai amintit parola?
      <router-link to="/login" class="text-blue-600 hover:underline">Autentifică-te</router-link>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'

const form = ref({
  email: '',
})

const handleSubmit = () => {
  alert(`Link de resetare trimis la ${form.value.email}`)
}
</script>

<style scoped></style>
