<template>
  <div>
    <Header />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-8">Checkout</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-8">
          <div class="bg-white rounded-lg shadow p-6">
            <h2 class="text-2xl font-bold mb-4">Shipping Address</h2>
            <div class="space-y-4">
              <Input v-model="form.firstName" type="text" placeholder="First Name" />
              <Input v-model="form.lastName" type="text" placeholder="Last Name" />
              <Input v-model="form.email" type="email" placeholder="Email" />
              <Input v-model="form.address" type="text" placeholder="Street Address" />
              <div class="grid grid-cols-2 gap-4">
                <Input v-model="form.city" type="text" placeholder="City" />
                <Input v-model="form.state" type="text" placeholder="State" />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <Input v-model="form.zipcode" type="text" placeholder="Zip Code" />
                <Input v-model="form.country" type="text" placeholder="Country" />
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-6">
            <h2 class="text-2xl font-bold mb-4">Payment Method</h2>
            <div class="space-y-4">
              <Input v-model="form.cardName" type="text" placeholder="Name on Card" />
              <Input v-model="form.cardNumber" type="text" placeholder="Card Number" />
              <div class="grid grid-cols-2 gap-4">
                <Input v-model="form.expiryDate" type="text" placeholder="MM/YY" />
                <Input v-model="form.cvv" type="text" placeholder="CVV" />
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 rounded-lg p-6 h-fit">
          <h2 class="text-2xl font-bold mb-4">Order Summary</h2>
          <div class="space-y-2 mb-6">
            <div class="flex justify-between">
              <span>Subtotal:</span>
              <span>$100.00</span>
            </div>
            <div class="flex justify-between">
              <span>Tax:</span>
              <span>$10.00</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping:</span>
              <span>$5.00</span>
            </div>
            <div class="border-t pt-2 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>$115.00</span>
            </div>
          </div>
          <Button @click="handlePlaceOrder" label="Place Order" />
          <router-link to="/cart" class="block mt-4 text-center px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition">
            Back to Cart
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Header from '../components/Header.vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  country: '',
  cardName: '',
  cardNumber: '',
  expiryDate: '',
  cvv: ''
})

const handlePlaceOrder = () => {
  console.log('Order placed:', form)
  alert('Order placed successfully!')
}
</script>

<style scoped>
</style>
