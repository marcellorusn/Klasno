<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div class="lg:col-span-2">
      <h1 class="text-3xl font-bold mb-6">Finalizare Comandă</h1>

      <form class="space-y-6" @submit.prevent="handleSubmit">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="font-bold text-lg mb-4">Date Livrare</h2>
          <Input v-model="form.fullName" placeholder="Nume Complet" class="mb-4" />
          <Input v-model="form.email" type="email" placeholder="Email" class="mb-4" />
          <Input v-model="form.phone" placeholder="Telefon" class="mb-4" />
          <Input v-model="form.address" placeholder="Adresă" class="mb-4" />
          <Input v-model="form.city" placeholder="Oraș" class="mb-4" />
          <Input v-model="form.postalCode" placeholder="Cod Poștal" />
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <h2 class="font-bold text-lg mb-4">Metodă Plată</h2>
          <label class="flex gap-2 mb-3">
            <input v-model="form.paymentMethod" type="radio" value="card" />
            <span>Card de Credit/Debit</span>
          </label>
          <label class="flex gap-2 mb-3">
            <input v-model="form.paymentMethod" type="radio" value="transfer" />
            <span>Transfer Bancar</span>
          </label>
          <label class="flex gap-2">
            <input v-model="form.paymentMethod" type="radio" value="cash" />
            <span>Plată la Livrare</span>
          </label>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <label class="flex gap-2">
            <input v-model="form.termsAccepted" type="checkbox" />
            <span>Accept Termenii și Condițiile</span>
          </label>
        </div>

        <Button @click="handleSubmit" class="w-full text-lg py-3">
          Plasează Comanda
        </Button>
      </form>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md h-fit">
      <h2 class="font-bold text-lg mb-4">Rezumat</h2>
      <div class="space-y-2 text-sm mb-4">
        <div class="flex justify-between">
          <span>Subtotal:</span>
          <span>4500 RON</span>
        </div>
        <div class="flex justify-between">
          <span>Livrare:</span>
          <span>50 RON</span>
        </div>
        <div class="flex justify-between">
          <span>TVA:</span>
          <span>855 RON</span>
        </div>
        <div class="border-t pt-2 flex justify-between font-bold">
          <span>Total:</span>
          <span>5405 RON</span>
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
  fullName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  postalCode: '',
  paymentMethod: 'card',
  termsAccepted: false
})

const handleSubmit = () => {
  if (!form.value.termsAccepted) {
    alert('Trebuie să accepți termenii și condițiile')
    return
  }
  alert('Comandă plasată cu succes!')
}
</script>

<style scoped>
</style>
