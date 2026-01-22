<template>
  <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
    <h1 class="text-3xl font-bold mb-2">Spune-ne Opinia Ta</h1>
    <p class="text-gray-600 mb-6">Feedback-ul tău ne ajută să ne îmbunătățim serviciile</p>

    <form class="space-y-4" @submit.prevent="handleSubmit">
      <div>
        <label class="block mb-2 font-semibold">Rata Experiența:</label>
        <div class="flex gap-2">
          <button
            v-for="star in 5"
            :key="star"
            type="button"
            @click="form.rating = star"
            :class="['text-3xl', star <= form.rating ? 'text-yellow-400' : 'text-gray-300']"
          >
            ★
          </button>
        </div>
      </div>

      <Input v-model="form.name" placeholder="Numele Tău" />
      <Input v-model="form.email" type="email" placeholder="Email" />

      <div>
        <label class="block mb-2 font-semibold">Categoria Feedback:</label>
        <select v-model="form.category" class="w-full px-4 py-2 border border-gray-300 rounded-lg">
          <option>Calitate Produs</option>
          <option>Serviciu Client</option>
          <option>Livrare</option>
          <option>Website</option>
          <option>Altele</option>
        </select>
      </div>

      <textarea
        v-model="form.message"
        placeholder="Spune-ne ce crezi..."
        class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows="6"
      ></textarea>

      <Button @click="handleSubmit" class="w-full"> Trimite Feedback </Button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'

const form = ref({
  rating: 0,
  name: '',
  email: '',
  category: 'Calitate Produs',
  message: '',
})

const handleSubmit = () => {
  alert(`Mulțumim pentru feedback! Rating: ${form.value.rating}/5`)
}
</script>
