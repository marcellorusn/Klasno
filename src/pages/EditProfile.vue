<template>
  <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
    <h1 class="text-3xl font-bold mb-6">Modifică Profil</h1>
    
    <form class="space-y-4" @submit.prevent="handleSubmit">
      <Input v-model="form.fullName" placeholder="Nume Complet" />
      <Input v-model="form.email" type="email" placeholder="Email" />
      <Input v-model="form.phone" placeholder="Telefon" />
      <Input v-model="form.city" placeholder="Oraș" />
      <Input v-model="form.address" placeholder="Adresă" />
      
      <div class="flex gap-4">
        <Button @click="handleSubmit" class="flex-1">
          Salvează Modificări
        </Button>
        <router-link to="/profile" class="flex-1">
          <Button variant="secondary" class="w-full">
            Anulează
          </Button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'

const form = ref({
  fullName: 'Ion Popescu',
  email: 'ion@example.com',
  phone: '+40 7xx xxx xxx',
  city: 'București',
  address: 'Strada Exemple 123'
})

const handleSubmit = () => {
  alert('Profil actualizat cu succes!')
}
</script>

<style scoped>
</style>
