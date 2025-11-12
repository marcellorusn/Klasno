<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="space-y-6">
      <h1 class="text-3xl font-bold">Contactează-ne</h1>
      
      <form class="space-y-4" @submit.prevent="handleSubmit">
        <Input v-model="form.name" placeholder="Nume" />
        <Input v-model="form.email" type="email" placeholder="Email" />
        <Input v-model="form.phone" placeholder="Telefon (opțional)" />
        <textarea 
          v-model="form.message" 
          placeholder="Mesajul tău..." 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="5"
        ></textarea>
        <Button @click="handleSubmit" class="w-full">
          Trimite Mesaj
        </Button>
      </form>
    </div>

    <div class="space-y-6">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">Informații Contact</h2>
        <div class="space-y-4 text-gray-700">
          <div>
            <p class="font-bold">Telefon:</p>
            <p>+40 1234 567 890</p>
          </div>
          <div>
            <p class="font-bold">Email:</p>
            <p>support@klasno.ro</p>
          </div>
          <div>
            <p class="font-bold">Adresă Birou:</p>
            <p>Strada Principale 123<br>București, 010101</p>
          </div>
          <div>
            <p class="font-bold">Ore Program:</p>
            <p>Luni - Vineri: 9:00 - 18:00<br>Sâmbătă: 10:00 - 14:00<br>Duminică: Închis</p>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">Urmărește-ne</h2>
        <div class="flex gap-4">
          <a href="#" class="text-2xl">📘</a>
          <a href="#" class="text-2xl">🐦</a>
          <a href="#" class="text-2xl">📷</a>
          <a href="#" class="text-2xl">▶️</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const handleSubmit = () => {
  alert(`Mulțumim! Vom răspunde la ${form.value.email} în curând.`)
}
</script>

<style scoped>
</style>
