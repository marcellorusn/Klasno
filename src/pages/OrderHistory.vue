<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Istoricul Comenzilor</h1>

    <div v-if="orders.length > 0" class="space-y-4">
      <div v-for="order in orders" :key="order.id" class="bg-white p-6 rounded-lg shadow-md">
        <div class="grid grid-cols-4 gap-4 mb-4">
          <div>
            <p class="text-gray-600 text-sm">Comandă #</p>
            <p class="font-bold">#{{ order.id }}</p>
          </div>
          <div>
            <p class="text-gray-600 text-sm">Data</p>
            <p class="font-bold">{{ order.date }}</p>
          </div>
          <div>
            <p class="text-gray-600 text-sm">Total</p>
            <p class="font-bold">{{ order.total }} RON</p>
          </div>
          <div>
            <p class="text-gray-600 text-sm">Status</p>
            <p :class="['font-bold', statusColor(order.status)]">{{ order.status }}</p>
          </div>
        </div>
        <div class="text-sm text-gray-600 mb-4">
          <p v-for="item in order.items" :key="item">{{ item }}</p>
        </div>
        <Button @click="viewOrder(order.id)" variant="secondary"> Vezi Detalii </Button>
      </div>
    </div>

    <div v-else class="text-center bg-white p-12 rounded-lg shadow-md">
      <p class="text-gray-600 text-lg mb-4">Nu ai nicio comandă</p>
      <router-link to="/products" class="text-blue-600 hover:underline"
        >Explorez Produse</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from '../components/Button.vue'

const orders = ref([
  {
    id: 1001,
    date: '01 Septembrie 2024',
    total: 3500,
    status: 'Livrat',
    items: ['Laptop Dell XPS', 'Monitor LG'],
  },
  {
    id: 1002,
    date: '15 Septembrie 2024',
    total: 450,
    status: 'În Livrare',
    items: ['Tastatura Mecanică'],
  },
  {
    id: 1003,
    date: '20 Septembrie 2024',
    total: 199,
    status: 'În Pregătire',
    items: ['Cărți JavaScript'],
  },
])

const statusColor = status => {
  if (status === 'Livrat') return 'text-green-600'
  if (status === 'În Livrare') return 'text-blue-600'
  return 'text-yellow-600'
}

const viewOrder = orderId => {
  alert(`Detaliile comenzii #${orderId}`)
}
</script>
