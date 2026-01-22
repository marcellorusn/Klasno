<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '../stores/product'
import { useCartStore } from '../stores/cart'
import { useAuthStore } from '../stores/auth'
import { useWishlistStore } from '../stores/wishlist'
import { useNotificationStore } from '../stores/notification'

const router = useRouter()
const productStore = useProductStore()
const cartStore = useCartStore()
const authStore = useAuthStore()
const wishlistStore = useWishlistStore()
const notificationStore = useNotificationStore()

// Local state
const count = ref(0)
const inputText = ref('')

// Methods
const incrementCount = () => count.value++

const navigateToCategoryBooks = () => router.push({ name: 'CategoryBooks' })

const addToCartExample = () => {
  const product = productStore.allProducts[0]
  if (product) {
    cartStore.addToCart(product, 1)
    alert(`Added "${product.name}" to cart!`)
  }
}

const addNotificationExample = () => {
  notificationStore.addNotification('This is a demo notification! 🎉')
}


const userGreeting = () => authStore.isAuthenticated
  ? `Hello, ${authStore.userName}! 👋`
  : 'Hello, Guest! Welcome 👋'

const counterStatus = () => {
  if (count.value === 0) return 'No clicks yet'
  if (count.value < 5) return `${count.value} clicks - Keep going!`
  return `${count.value} clicks - Amazing! 🎉`
}

const productStatsDisplay = () => {
  const products = productStore.allProducts
  const total = products.length
  const avgPrice = products.length > 0 
    ? (products.reduce((sum, p) => sum + p.price, 0) / products.length).toFixed(2)
    : 0
  const categories = new Set(products.map(p => p.category)).size
  return `Total: ${total}, Avg: $${avgPrice}, Categories: ${categories}`
}

const expensiveProductsDisplay = () =>
  productStore.allProducts
    .filter(p => p.price > 100)
    .map(p => p.name)
    .join(', ')


const productStoreExample = () => `${productStore.allProducts.length} products available`
const authStoreExample = () => `Authenticated: ${authStore.isAuthenticated}`
const wishlistStoreExample = () => `${wishlistStore.wishlistCount} items`
</script>
