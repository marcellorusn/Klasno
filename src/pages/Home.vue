<template>
  <div class="space-y-8">
    <!-- Hero Section with Computed Properties Examples -->
    <section class="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-12 rounded-lg">
      <h1 class="text-4xl font-bold mb-4">{{ heroTitle }}</h1>
      <p class="text-xl mb-4">{{ heroMessage }}</p>

      <!-- Display user greeting using getter from auth store -->
      <div class="text-lg">
        <p>Hello, {{ userDisplayName }}! 👋</p>
      </div>
    </section>

    <!-- Product Statistics (using computed properties from store) -->
    <section class="bg-white p-8 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-6">Shop Statistics</h2>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-blue-50 p-4 rounded">
          <p class="text-gray-600">Total Products</p>
          <p class="text-3xl font-bold text-blue-600">{{ productStats.total }}</p>
        </div>
        <div class="bg-green-50 p-4 rounded">
          <p class="text-gray-600">Average Price</p>
          <p class="text-3xl font-bold text-green-600">${{ productStats.avgPrice }}</p>
        </div>
        <div class="bg-purple-50 p-4 rounded">
          <p class="text-gray-600">Categories</p>
          <p class="text-3xl font-bold text-purple-600">{{ productStats.categories.length }}</p>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="bg-white p-8 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-6">Produse în Trending</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <ProductCard
          v-for="product in trendingProducts"
          :key="product.id"
          :id="product.id"
          :title="product.name"
          :description="product.description"
          :price="product.price"
          :rating="product.rating"
          @add-to-cart="handleAddToCart"
        />
      </div>
    </section>

    <!-- Cart Summary (using computed properties) -->
    <section v-if="cartItems.length > 0" class="bg-white p-8 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-6">Cart Summary</h2>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <p class="text-gray-600">Items in Cart</p>
          <p class="text-2xl font-bold">{{ cartItemCount }}</p>
        </div>
        <div>
          <p class="text-gray-600">Subtotal</p>
          <p class="text-2xl font-bold">${{ cartSubtotal }}</p>
        </div>
        <div>
          <p class="text-gray-600">Total (with discount)</p>
          <p class="text-2xl font-bold text-green-600">${{ cartTotal }}</p>
        </div>
      </div>
      <button
        class="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        @click="navigateToCart"
      >
        Go to Cart →
      </button>
    </section>

    <!-- Wishlist Preview -->
    <section v-if="wishlistCount > 0" class="bg-white p-8 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-4">Wishlist ({{ wishlistCount }} items)</h2>
      <router-link :to="{ name: 'Wishlist' }" class="text-blue-600 hover:underline">
        View Wishlist →
      </router-link>
    </section>

    <!-- Why Choose Klasno Section -->
    <section class="bg-white p-8 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-4">De ce să alegi Klasno?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="text-center">
          <div class="text-4xl mb-2">🚚</div>
          <h3 class="font-bold mb-2">Livrare Rapidă</h3>
          <p class="text-gray-600">Livrarea în termen de 24-48 ore pe întreg teritoriul</p>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-2">💰</div>
          <h3 class="font-bold mb-2">Prețuri Bune</h3>
          <p class="text-gray-600">Cele mai bune oferte și reduceri disponibile</p>
        </div>
        <div class="text-center">
          <div class="text-4xl mb-2">🛡️</div>
          <h3 class="font-bold mb-2">Securitate</h3>
          <p class="text-gray-600">Plăți sigure și protecția datelor personale</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '../stores/product'
import { useCartStore } from '../stores/cart'
import { useWishlistStore } from '../stores/wishlist'
import { useAuthStore } from '../stores/user'
import ProductCard from '../components/ProductCard.vue'

const router = useRouter()

// Import stores (demonstrates using 4 stores)
const productStore = useProductStore()
const cartStore = useCartStore()
const wishlistStore = useWishlistStore()
const authStore = useAuthStore()

// Local state
const visitCount = ref(0)

// ========== COMPUTED PROPERTIES EXAMPLES (5 computed) ==========

/**
 * COMPUTED 1: Hero Title
 * Demonstrates: Simple text concatenation
 */
const heroTitle = computed(() => {
  return 'Welcome to KLASNO Shop'
})

/**
 * COMPUTED 2: Hero Message
 * Demonstrates: Conditional logic based on local state
 */
const heroMessage = computed(() => {
  return visitCount.value === 0
    ? 'Discover amazing products and start shopping today!'
    : `Welcome back! You have visited ${visitCount.value} times.`
})

/**
 * COMPUTED 3: User Display Name
 * Demonstrates: Using store getter from authStore
 */
const userDisplayName = computed(() => {
  return authStore.getUserDisplayName
})

/**
 * COMPUTED 4: Product Statistics
 * Demonstrates: Using store getter (getProductStats)
 */
const productStats = computed(() => {
  return productStore.getProductStats
})

/**
 * COMPUTED 5: Featured Products (filtered list)
 * Demonstrates: Filtering and slicing arrays from store
 */
const trendingProducts = computed(() => {
  return productStore.getAllProducts.slice(0, 4)
})

/**
 * Additional computed properties for cart display
 */
const cartItemCount = computed(() => cartStore.getItemCount)
const cartSubtotal = computed(() => cartStore.getSubtotal)
const cartTotal = computed(() => cartStore.getTotal)
const cartItems = computed(() => cartStore.items)
const wishlistCount = computed(() => wishlistStore.getWishlistCount)

// ========== WATCH STATEMENTS EXAMPLES (3 watch) ==========

/**
 * WATCH 1: Track visit count
 * Demonstrates: Watching local ref changes and logging
 */
watch(
  () => visitCount.value,
  (newValue, oldValue) => {
    console.log(`[WATCH 1] Visit count changed from ${oldValue} to ${newValue}`)
  }
)

/**
 * WATCH 2: Monitor cart changes
 * Demonstrates: Watching store array with deep flag
 * Deep watch needed for detecting nested array changes
 */
watch(
  () => cartStore.items,
  newItems => {
    console.log(`[WATCH 2] Cart updated with ${newItems.length} items`)
  },
  { deep: true }
)

/**
 * WATCH 3: Track user authentication changes
 * Demonstrates: Watching store computed property
 */
watch(
  () => authStore.isAuthenticated,
  isAuth => {
    console.log(`[WATCH 3] User authentication status: ${isAuth}`)
  }
)

// ========== METHODS ==========

/**
 * Handle adding product to cart
 * Demonstrates: Using store action (cartStore.addToCart)
 */
const handleAddToCart = product => {
  cartStore.addToCart(product, 1)
  visitCount.value++
  console.log(`Added ${product.name} to cart`)
}

/**
 * Navigate to cart
 * Demonstrates: Programmatic navigation using router.push()
 * Example: router.push('/cart') or router.push({ name: 'Cart' })
 */
const navigateToCart = () => {
  router.push({ name: 'Cart' })
}

// Initialize
visitCount.value = 1
</script>

<style scoped>
/* Component-specific styles */
</style>
