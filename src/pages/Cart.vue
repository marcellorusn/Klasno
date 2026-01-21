<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../stores/cart'

const router = useRouter()
const cartStore = useCartStore()

const couponInput = ref('')
const couponApplied = ref(false)

const cartItems = computed(() => cartStore.items)
const itemCount = computed(() => cartStore.getItemCount)
const cartSubtotal = computed(() => cartStore.getSubtotal)

const averagePrice = computed(() => {
  if (cartStore.items.length === 0) return '0.00'
  return (parseFloat(cartStore.getSubtotal) / cartStore.items.length).toFixed(2)
})

const discountAmount = computed(() => {
  if (cartStore.couponCode) {
    return (parseFloat(cartStore.getSubtotal) * 0.1).toFixed(2)
  }
  return '0.00'
})

const cartTotal = computed(() => cartStore.getTotal)

watch(
  () => cartStore.couponCode,
  newCode => {
    couponApplied.value = newCode !== null
    console.log(`[WATCH] Coupon code changed to: ${newCode}`)
  }
)

watch(
  () => cartStore.items,
  newItems => {
    console.log(`[WATCH] Cart items changed. New count: ${newItems.length}`)
  },
  { deep: true }
)

const updateQuantity = (productId, quantity) => {
  cartStore.updateQuantity(productId, quantity)
}

const applyCoupon = () => {
  const success = cartStore.applyCoupon(couponInput.value)
  if (success) {
    couponInput.value = ''
  } else {
    alert('Invalid coupon code. Try "SAVE10"')
  }
}

const continueShopping = () => {
  router.push({ name: 'ProductListing' })
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <h1 class="text-3xl font-bold mb-8">Coș de Cumpărături</h1>

    <div v-if="cartItems.length === 0" class="bg-gray-50 p-8 text-center rounded">
      <p class="text-gray-600 mb-4">Your cart is empty</p>
      <router-link
        to="/products"
        class="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Continue Shopping
      </router-link>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Cart Items -->
      <div class="lg:col-span-2 space-y-4">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="flex justify-between items-center bg-white p-4 rounded shadow"
        >
          <div>
            <h3 class="font-bold">{{ item.name }}</h3>
            <p class="text-gray-600">${{ item.price }}</p>
          </div>
          <div class="flex items-center gap-4">
            <input
              v-model.number="item.quantity"
              type="number"
              min="1"
              class="w-16 border rounded px-2 py-1"
              @change="updateQuantity(item.id, item.quantity)"
            />
            <button
              class="text-red-600 hover:text-red-800"
              @click="cartStore.removeFromCart(item.id)"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <!-- Cart Summary Card -->
      <div class="lg:col-span-1 bg-white p-6 rounded shadow h-fit sticky top-4">
        <h2 class="text-2xl font-bold mb-6">Order Summary</h2>

        <!-- Computed Property Examples -->
        <div class="space-y-3 mb-6">
          <div class="flex justify-between">
            <span>Subtotal:</span>
            <span>${{ cartSubtotal }}</span>
          </div>
          <div class="flex justify-between">
            <span>Items:</span>
            <span>{{ itemCount }}</span>
          </div>
          <div class="flex justify-between">
            <span>Average Price:</span>
            <span>${{ averagePrice }}</span>
          </div>

          <!-- Coupon Section -->
          <div class="pt-3 border-t">
            <div v-if="discountAmount > 0" class="flex justify-between text-green-600">
              <span>Discount (10%):</span>
              <span>-${{ discountAmount }}</span>
            </div>
            <div class="mt-2">
              <input
                v-model="couponInput"
                placeholder="Enter coupon code"
                class="w-full border rounded px-2 py-1 mb-2"
              />
              <button
                class="w-full bg-gray-200 px-4 py-1 rounded hover:bg-gray-300 text-sm"
                @click="applyCoupon"
              >
                Apply Coupon
              </button>
              <p v-if="couponApplied" class="text-green-600 text-sm mt-1">
                ✓ Coupon SAVE10 applied!
              </p>
            </div>
          </div>
        </div>

        <!-- Total (Computed) -->
        <div class="border-t pt-4 mb-6">
          <div class="flex justify-between text-2xl font-bold">
            <span>Total:</span>
            <span class="text-blue-600">${{ cartTotal }}</span>
          </div>
        </div>

        <!-- Checkout Button -->
        <router-link
          to="/checkout"
          class="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded hover:bg-blue-700 font-bold"
        >
          Proceed to Checkout
        </router-link>

        <!-- Continue Shopping -->
        <button
          class="w-full mt-2 border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50"
          @click="continueShopping"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
