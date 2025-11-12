<template>
  <div class="flex gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
    <div class="h-24 w-24 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
      <img 
        v-if="image" 
        :src="image" 
        :alt="productName"
        class="w-full h-full object-cover rounded"
      />
      <span v-else class="text-gray-500 text-sm text-center">Imagine</span>
    </div>
    
    <div class="flex-1">
      <h3 class="font-bold text-lg mb-1">{{ productName }}</h3>
      <p class="text-gray-600 text-sm mb-2">{{ price }} RON</p>
      
      <div class="flex items-center gap-2 mb-3">
        <label class="text-sm text-gray-600">Cantitate:</label>
        <button 
          @click="decrementQuantity"
          class="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition"
        >
          −
        </button>
        <span class="px-3 py-1 bg-gray-100 rounded text-center min-w-12">{{ quantity }}</span>
        <button 
          @click="incrementQuantity"
          class="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition"
        >
          +
        </button>
      </div>

      <p class="text-sm text-gray-600 mb-2">
        Subtotal: <span class="font-bold text-blue-600">{{ (price * quantity).toFixed(2) }} RON</span>
      </p>
    </div>

    <button 
      @click="removeItem"
      class="text-red-600 hover:text-red-800 transition text-2xl h-fit p-2 hover:bg-red-50 rounded"
      title="Șterge din coș"
    >
      ×
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    default: 1
  },
  image: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['remove-item', 'update:quantity'])

const currentQuantity = ref(props.quantity)

const incrementQuantity = () => {
  currentQuantity.value++
  emit('update:quantity', currentQuantity.value)
}

const decrementQuantity = () => {
  if (currentQuantity.value > 1) {
    currentQuantity.value--
    emit('update:quantity', currentQuantity.value)
  }
}

const removeItem = () => {
  emit('remove-item', props.id)
}
</script>

<style scoped>
</style>
