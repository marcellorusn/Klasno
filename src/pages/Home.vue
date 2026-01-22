<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '../stores/product'
import { useCartStore } from '../stores/cart'
import { useAuthStore } from '../stores/auth'
import { useNotificationStore } from '../stores/notification'
import ProductCard from '../components/ProductCard.vue'

const router = useRouter()
const productStore = useProductStore()
const cartStore = useCartStore()
const authStore = useAuthStore()
const notificationStore = useNotificationStore()

const visitCount = ref(0)

// Computed 1: Product count
const productCount = computed(() => productStore.productCount)

// Computed 2: Cart item count
const cartItemCount = computed(() => cartStore.itemCount)

// Computed 3: Cart total
const cartTotal = computed(() => cartStore.total)

// Computed 4: User name
const userName = computed(() => authStore.userName)

// Computed 5: Featured products
const featuredProducts = computed(() => productStore.allProducts.slice(0, 4))

// Watcher 1: Watch visit count
watch(() => visitCount.value, (newVal) => {
  if (newVal > 0) {
    notificationStore.addNotification(`Ati vizualizat ${newVal} produs(e)`)
  }
})

const handleAddToCart = (product) => {
  cartStore.addToCart(product, 1)
  notificationStore.addNotification(`${product.name} a fost adăugat în coș! 🛒`)
  visitCount.value++
}

const navigateToCart = () => {
  router.push({ name: 'Cart' })
}

visitCount.value = 1
</script>





<template>
  <div class="space-y-8">
    <section class="bg-blue-600 text-white p-8 rounded-lg">
      <h1 class="text-3xl font-bold mb-4">Welcome to KLASNO Shop</h1>
      <p>Hello, {{ userName }}! 👋</p>
    </section>

    <section class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-4">Shop Info</h2>
      <p class="text-gray-600">Total Products: <span class="font-bold">{{ productCount }}</span></p>
      <p class="text-gray-600">Items in Cart: <span class="font-bold">{{ cartItemCount }}</span></p>
      <p class="text-gray-600">Cart Total: <span class="font-bold">${{ cartTotal }}</span></p>
    </section>

    <section class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-4">Featured Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProductCard
          v-for="product in featuredProducts"
          :key="product.id"
          :product="product"
          @add-to-cart="handleAddToCart"
        />
      </div>
    </section>

    <section v-if="cartItemCount > 0" class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-4">Cart Summary</h2>
      <p class="mb-4">You have {{ cartItemCount }} items in your cart</p>
      <button
        class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        @click="navigateToCart"
      >
        Go to Cart
      </button>
    </section>
  </div>
</template>


