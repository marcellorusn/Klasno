<template>
  <div class="max-w-6xl mx-auto space-y-8">
    <h1 class="text-4xl font-bold mb-8">Component & Features Showcase</h1>

    <!-- ROUTING EXAMPLES -->
    <section class="bg-white p-8 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-4">🛣️ Routing Examples (22+ routes)</h2>
      <p class="text-gray-600 mb-4">Navigate using RouterLink and programmatic navigation:</p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
        <!-- RouterLink examples - demonstrates <RouterLink> usage -->
        <router-link to="/" class="btn btn-primary">Home</router-link>
        <router-link :to="{ name: 'ProductListing' }" class="btn btn-primary">Products</router-link>
        <router-link :to="{ name: 'Cart' }" class="btn btn-primary">Cart</router-link>
        <router-link :to="{ name: 'Wishlist' }" class="btn btn-primary">Wishlist</router-link>
        <router-link :to="{ name: 'CategoryElectronics' }" class="btn btn-primary"
          >Electronics</router-link
        >
        <router-link :to="{ name: 'Login' }" class="btn btn-primary">Login</router-link>
        <router-link :to="{ name: 'Profile' }" class="btn btn-primary">Profile</router-link>
        <router-link :to="{ name: 'AboutUs' }" class="btn btn-primary">About</router-link>
      </div>
      <!-- Programmatic navigation example -->
      <div class="mt-4 p-4 bg-blue-50 rounded">
        <p class="text-sm font-mono mb-2">Programmatic Navigation (router.push):</p>
        <button @click="navigateToCategoryBooks" class="btn btn-secondary">
          Go to Books Category →
        </button>
      </div>
    </section>

    <!-- COMPUTED PROPERTIES EXAMPLES -->
    <section class="bg-white p-8 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-4">⚙️ Computed Properties Examples (5+ computed)</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Computed 1: User greeting -->
        <div class="p-4 bg-blue-50 rounded">
          <p class="text-sm text-gray-600">COMPUTED 1: User Greeting</p>
          <p class="text-lg font-bold">{{ userGreeting }}</p>
        </div>

        <!-- Computed 2: Counter status -->
        <div class="p-4 bg-yellow-50 rounded">
          <p class="text-sm text-gray-600">COMPUTED 2: Counter Status</p>
          <p class="text-lg font-bold">{{ counterStatus }}</p>
        </div>

        <!-- Computed 3: Store data -->
        <div class="p-4 bg-purple-50 rounded">
          <p class="text-sm text-gray-600">COMPUTED 3: Product Stats</p>
          <p class="text-lg font-bold">{{ productStatsDisplay }}</p>
        </div>

        <!-- Computed 4: Array transformation -->
        <div class="p-4 bg-pink-50 rounded">
          <p class="text-sm text-gray-600">COMPUTED 4: Filtered Products</p>
          <p class="text-sm font-mono">{{ expensiveProductsDisplay }}</p>
        </div>
      </div>
    </section>

    <!-- WATCH EXAMPLES -->
    <section class="bg-white p-8 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-4">👁️ Watch Statements Examples (3+ watch)</h2>
      <div class="space-y-4">
        <!-- Watch 1: Counter -->
        <div class="p-4 bg-blue-50 rounded">
          <p class="text-sm font-bold mb-2">WATCH 1: Count changes (shallow watch)</p>
          <button @click="incrementCount" class="btn btn-primary">Count: {{ count }}</button>
          <p class="text-xs text-gray-600 mt-2">→ Console log: Every count change</p>
        </div>

        <!-- Watch 2: Text input -->
        <div class="p-4 bg-green-50 rounded">
          <p class="text-sm font-bold mb-2">WATCH 2: Text input changes</p>
          <input
            v-model="inputText"
            placeholder="Type something..."
            class="w-full border rounded px-2 py-1"
          />
          <p class="text-xs text-gray-600 mt-2">Status: {{ watchStatus }}</p>
        </div>

        <!-- Watch 3: Computed value change -->
        <div class="p-4 bg-yellow-50 rounded">
          <p class="text-sm font-bold mb-2">WATCH 3: Computed property change (counterStatus)</p>
          <p class="text-sm">{{ watchComputedStatus }}</p>
          <button @click="incrementCount" class="btn btn-secondary mt-2">Change Counter</button>
        </div>
      </div>
    </section>

    <!-- PINIA STORE INTEGRATION -->
    <section class="bg-white p-8 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-4">📦 Pinia Stores Integration (5+ stores)</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Store 1: Product Store -->
        <div class="p-4 border rounded">
          <h3 class="font-bold mb-2">1. Product Store</h3>
          <p class="text-sm text-gray-600 mb-2">
            Getters: getAllProducts, getProductsByCategory, getProductStats
          </p>
          <p class="text-sm text-gray-600 mb-2">Actions: setCategory, addProduct, getProductById</p>
          <p class="text-xs font-mono">{{ productStoreExample }}</p>
        </div>

        <!-- Store 2: Cart Store -->
        <div class="p-4 border rounded">
          <h3 class="font-bold mb-2">2. Cart Store</h3>
          <p class="text-sm text-gray-600 mb-2">Getters: getItemCount, getSubtotal, getTotal</p>
          <p class="text-sm text-gray-600 mb-2">Actions: addToCart, removeFromCart, applyCoupon</p>
          <button @click="addToCartExample" class="btn btn-small">Add to Cart (demo)</button>
        </div>

        <!-- Store 3: Auth Store -->
        <div class="p-4 border rounded">
          <h3 class="font-bold mb-2">3. User/Auth Store</h3>
          <p class="text-sm text-gray-600 mb-2">Getters: isAuthenticated, getUserDisplayName</p>
          <p class="text-sm text-gray-600 mb-2">Actions: login, logout, updateProfile</p>
          <p class="text-xs font-mono">{{ authStoreExample }}</p>
        </div>

        <!-- Store 4: Wishlist Store -->
        <div class="p-4 border rounded">
          <h3 class="font-bold mb-2">4. Wishlist Store</h3>
          <p class="text-sm text-gray-600 mb-2">Getters: getWishlistCount, isInWishlist</p>
          <p class="text-sm text-gray-600 mb-2">Actions: addToWishlist, toggleWishlist</p>
          <p class="text-xs font-mono">Items: {{ wishlistStoreExample }}</p>
        </div>

        <!-- Store 5: Notification Store -->
        <div class="p-4 border rounded col-span-full">
          <h3 class="font-bold mb-2">5. Notification Store</h3>
          <p class="text-sm text-gray-600 mb-2">Getters: getNotifications, getUnreadCount</p>
          <p class="text-sm text-gray-600 mb-2">
            Actions: addNotification, removeNotification, toggleTheme
          </p>
          <button @click="addNotificationExample" class="btn btn-secondary">
            Add Notification (demo)
          </button>
        </div>
      </div>
    </section>

    <!-- PWA INFO -->
    <section class="bg-white p-8 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-4">📱 PWA Integration</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>✓ vite-plugin-pwa configured with auto-update</li>
        <li>✓ Manifest with theme color (#169bcb) and background (#fafafa)</li>
        <li>✓ Icons using KLASNO logo (192x192, 512x512 with maskable support)</li>
        <li>✓ Service worker auto-registered and precaching</li>
        <li>✓ Works offline with cached assets</li>
      </ul>
    </section>

    <!-- CODE QUALITY -->
    <section class="bg-white p-8 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-4">✨ Code Quality & Tools</h2>
      <ul class="space-y-2">
        <li>✓ ESLint configuration (.eslintrc.json)</li>
        <li>✓ Prettier formatting (.prettierrc.json)</li>
        <li>✓ Scripts: npm run lint, npm run format, npm run format:check</li>
        <li>✓ Detailed comments on all stores, computed, and watches</li>
        <li>✓ Clean component structure with Vue 3 Composition API</li>
        <li>✓ Consistent naming conventions and code organization</li>
      </ul>
    </section>

    <!-- GITHUB PAGES -->
    <section class="bg-white p-8 rounded-lg shadow">
      <h2 class="text-2xl font-bold mb-4">🚀 GitHub Pages Deployment</h2>
      <div class="bg-gray-50 p-4 rounded font-mono text-sm space-y-2">
        <p>npm run build:gh-pages # Build for GitHub Pages with base=/klasno-shop/</p>
        <p>npm run deploy # Deploy to gh-pages branch</p>
        <p class="text-gray-600">Then enable GitHub Pages in repository settings</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '../stores/product'
import { useCartStore } from '../stores/cart'
import { useAuthStore } from '../stores/user'
import { useWishlistStore } from '../stores/wishlist'
import { useNotificationStore } from '../stores/notification'

const router = useRouter()
const productStore = useProductStore()
const cartStore = useCartStore()
const authStore = useAuthStore()
const wishlistStore = useWishlistStore()
const notificationStore = useNotificationStore()

// ========== LOCAL STATE ==========
const count = ref(0)
const inputText = ref('')

// ========== COMPUTED PROPERTIES (4+ EXAMPLES) ==========

/**
 * COMPUTED 1: User Greeting
 */
const userGreeting = computed(() => {
  return authStore.isAuthenticated
    ? `Hello, ${authStore.userName}! 👋`
    : 'Hello, Guest! Welcome 👋'
})

/**
 * COMPUTED 2: Counter Status
 */
const counterStatus = computed(() => {
  if (count.value === 0) return 'No clicks yet'
  if (count.value < 5) return `${count.value} clicks - Keep going!`
  return `${count.value} clicks - Amazing! 🎉`
})

/**
 * COMPUTED 3: Product Stats from store
 */
const productStatsDisplay = computed(() => {
  const stats = productStore.stats
  return `Total: ${stats.total}, Avg: $${stats.avgPrice}, Categories: ${stats.categories.length}`
})

/**
 * COMPUTED 4: Expensive products filter
 */
const expensiveProductsDisplay = computed(() => {
  return productStore.allProducts
    .filter(p => p.price > 100)
    .map(p => p.name)
    .join(', ')
})

// Store examples for display
const productStoreExample = computed(
  () => `${productStore.allProducts.length} products available`
)
const authStoreExample = computed(() => `Authenticated: ${authStore.isAuthenticated}`)
const wishlistStoreExample = computed(() => `${wishlistStore.wishlistCount} items`)

// ========== WATCH STATEMENTS (3 EXAMPLES) ==========

/**
 * WATCH 1: Count changes
 */
watch(
  () => count.value,
  (newVal, oldVal) => {
    console.log(`[WATCH 1] Count changed from ${oldVal} to ${newVal}`)
  }
)

/**
 * WATCH 2: Input text changes
 */
let watchStatusMsg = 'Waiting for input...'
watch(
  () => inputText.value,
  newVal => {
    console.log(`[WATCH 2] Input changed: "${newVal}"`)
    watchStatusMsg = `Last update: ${new Date().toLocaleTimeString()}`
  }
)

/**
 * WATCH 3: Computed property changes
 */
watch(
  () => counterStatus.value,
  newStatus => {
    console.log(`[WATCH 3] Counter status changed: ${newStatus}`)
  }
)

// Current watch status
const watchStatus = computed(() => watchStatusMsg)
const watchComputedStatus = computed(() => {
  return `Status: "${counterStatus.value}"`
})

// ========== METHODS ==========

/**
 * Navigate to category books (programmatic navigation example)
 */
const navigateToCategoryBooks = () => {
  router.push({ name: 'CategoryBooks' })
}

/**
 * Increment counter
 */
const incrementCount = () => {
  count.value++
}

/**
 * Add to cart (store action example)
 */
const addToCartExample = () => {
  const product = productStore.allProducts[0]
  if (product) {
    cartStore.addToCart(product, 1)
    alert(`Added "${product.name}" to cart!`)
  }
}

/**
 * Add notification (store action example)
 */
const addNotificationExample = () => {
  notificationStore.addNotification('This is a demo notification! 🎉', 'success', 3000)
}
</script>

<style scoped>
.btn {
  padding: 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background-color: #2563eb;
  color: white;
}

.btn-primary:hover {
  background-color: #1d4ed8;
}

.btn-secondary {
  background-color: #4b5563;
  color: white;
}

.btn-secondary:hover {
  background-color: #374151;
}

.btn-small {
  padding: 0.5rem 0.5rem;
  font-size: 0.75rem;
}
</style>
