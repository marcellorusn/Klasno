<template>
  <div class="space-y-12">
    <section class="bg-white p-6 rounded-lg shadow-md">
      <h1 class="text-4xl font-bold mb-2">Vue Components Showcase</h1>
      <p class="text-gray-600">Examples of reusable components with props and emits</p>
    </section>

    <!-- ProductCard Component -->
    <section class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">ProductCard Component</h2>
      <p class="text-gray-600 mb-4">Props: id, title, description, price, image, rating | Emits: add-to-cart, rated</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
        <ProductCard
          id="1"
          title="Laptop Premium"
          description="Laptop performant pentru lucru"
          price="2999"
          rating="4.5"
          @add-to-cart="handleAddToCart"
          @rated="handleRated"
        />
        <ProductCard
          id="2"
          title="Monitor 4K"
          description="Monitor ultrawide de calitate"
          price="1299"
          rating="4.8"
          @add-to-cart="handleAddToCart"
          @rated="handleRated"
        />
        <ProductCard
          id="3"
          title="Tastatura Mecanică"
          description="Tastatura gaming RGB"
          price="449"
          rating="4.7"
          @add-to-cart="handleAddToCart"
          @rated="handleRated"
        />
      </div>
      <p class="text-sm text-gray-500">Ultimul eveniment: {{ lastEvent }}</p>
    </section>

    <!-- CartItem Component -->
    <section class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">CartItem Component</h2>
      <p class="text-gray-600 mb-4">Props: id, productName, price, quantity, image | Emits: remove-item, update:quantity</p>
      <div class="space-y-3 mb-4">
        <CartItem
          id="1"
          productName="Laptop Dell XPS"
          price="3499"
          :quantity="cartItems[0]?.quantity || 1"
          @remove-item="handleRemoveItem"
          @update:quantity="handleUpdateQuantity"
        />
        <CartItem
          id="2"
          productName="Monitor LG 32"
          price="2199"
          :quantity="cartItems[1]?.quantity || 1"
          @remove-item="handleRemoveItem"
          @update:quantity="handleUpdateQuantity"
        />
      </div>
      <p class="text-sm text-gray-500">Ultimul eveniment: {{ lastEvent }}</p>
    </section>

    <!-- Input Component -->
    <section class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Input Component (InputField)</h2>
      <p class="text-gray-600 mb-4">Props: type, placeholder, label, modelValue, error, hint, required, disabled | Emits: update:modelValue, blur, focus</p>
      <div class="max-w-md space-y-4">
        <Input
          v-model="formData.email"
          type="email"
          label="Email Address"
          placeholder="example@email.com"
          hint="Ne vom folosi adresa pentru notificări"
          @blur="lastEvent = 'Email input blurred'"
        />
        <Input
          v-model="formData.password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          required
          @focus="lastEvent = 'Password input focused'"
        />
        <Input
          v-model="formData.phone"
          type="tel"
          label="Phone Number"
          placeholder="+40 7xx xxx xxx"
          hint="Format: +40 7xx xxx xxx"
        />
      </div>
    </section>

    <!-- RatingStars Component -->
    <section class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">RatingStars Component</h2>
      <p class="text-gray-600 mb-4">Props: rating | Emits: rated (interactive - click to rate)</p>
      <div class="space-y-4">
        <div>
          <p class="mb-2">Rating: 4.5/5</p>
          <RatingStars :rating="4.5" @rated="handleStarRating" />
        </div>
        <div>
          <p class="mb-2">Your Rating: {{ userRating }}/5 (click to rate)</p>
          <RatingStars :rating="userRating" @rated="userRating = $event" />
        </div>
        <p class="text-sm text-gray-500">{{ lastEvent }}</p>
      </div>
    </section>

    <!-- Navbar Component -->
    <section class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Navbar Component</h2>
      <p class="text-gray-600 mb-4">Props: none | Emits: toggle-menu (mobile responsive)</p>
      <Navbar @toggle-menu="handleToggleMenu" />
      <p class="text-sm text-gray-500 mt-4">{{ lastEvent }}</p>
    </section>

    <!-- Modal Component -->
    <section class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Modal Component</h2>
      <p class="text-gray-600 mb-4">Props: show, title | Emits: close, confirm</p>
      <Button @click="showModal = true" class="mb-4">
        Deschide Modal
      </Button>
      <Modal
        :show="showModal"
        title="Confirmare"
        @close="showModal = false"
        @confirm="handleConfirmModal"
      >
        <p>Ești sigur că vrei să continui?</p>
        <p class="text-sm text-gray-600 mt-2">Această acțiune nu poate fi anulată.</p>
      </Modal>
      <p class="text-sm text-gray-500">{{ lastEvent }}</p>
    </section>

    <!-- Button Component -->
    <section class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Button Component</h2>
      <p class="text-gray-600 mb-4">Props: variant (primary, secondary, danger), disabled | Emits: click</p>
      <div class="flex flex-wrap gap-3">
        <Button @click="lastEvent = 'Primary button clicked'" variant="primary">
          Primary Button
        </Button>
        <Button @click="lastEvent = 'Secondary button clicked'" variant="secondary">
          Secondary Button
        </Button>
        <Button @click="lastEvent = 'Danger button clicked'" variant="danger">
          Danger Button
        </Button>
        <Button disabled>Disabled Button</Button>
      </div>
      <p class="text-sm text-gray-500 mt-4">{{ lastEvent }}</p>
    </section>

    <!-- SearchBar Component -->
    <section class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">SearchBar Component</h2>
      <p class="text-gray-600 mb-4">Props: none | Emits: search</p>
      <SearchBar @search="handleSearch" />
      <p class="text-sm text-gray-500 mt-4">{{ lastEvent }}</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import CartItem from '../components/CartItem.vue'
import Input from '../components/Input.vue'
import RatingStars from '../components/RatingStars.vue'
import Navbar from '../components/Navbar.vue'
import Modal from '../components/Modal.vue'
import Button from '../components/Button.vue'
import SearchBar from '../components/SearchBar.vue'

const lastEvent = ref('Aștept o acțiune...')
const showModal = ref(false)
const userRating = ref(0)
const cartItems = ref([
  { id: 1, quantity: 1 },
  { id: 2, quantity: 1 }
])

const formData = ref({
  email: '',
  password: '',
  phone: ''
})

const handleAddToCart = (data) => {
  lastEvent.value = `Adăugat în coș: ${data.title} (ID: ${data.id})`
}

const handleRated = (data) => {
  lastEvent.value = `Produs #${data.id} a fost evaluat cu ${data.rating}/5 stele`
}

const handleRemoveItem = (id) => {
  lastEvent.value = `Produs #${id} a fost șters din coș`
  cartItems.value = cartItems.value.filter(item => item.id !== id)
}

const handleUpdateQuantity = (quantity) => {
  lastEvent.value = `Cantitate actualizată: ${quantity}`
}

const handleStarRating = (stars) => {
  lastEvent.value = `Ai evaluat cu ${stars}/5 stele`
}

const handleToggleMenu = (isOpen) => {
  lastEvent.value = isOpen ? 'Meniu mobil deschis' : 'Meniu mobil închis'
}

const handleConfirmModal = () => {
  lastEvent.value = 'Modal confirmat'
  showModal.value = false
}

const handleSearch = (query) => {
  lastEvent.value = `Căutare pentru: "${query}"`
}
</script>

<style scoped>
</style>
