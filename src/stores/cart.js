import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * Cart Store - Manages shopping cart
 * Demonstrates: 3 getters, 4 actions
 */
export const useCartStore = defineStore('cart', () => {
  // State
  const items = ref([])
  const couponCode = ref(null)

  // Getter 1: Cart items count
  const getItemCount = computed(() => items.value.length)

  // Getter 2: Cart subtotal
  const getSubtotal = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  })

  // Getter 3: Cart with discount (10% if coupon applied)
  const getTotal = computed(() => {
    const subtotal = parseFloat(getSubtotal.value)
    const discount = couponCode.value ? subtotal * 0.1 : 0
    return (subtotal - discount).toFixed(2)
  })

  // Action 1: Add item to cart
  const addToCart = (product, quantity = 1) => {
    const existing = items.value.find(item => item.id === product.id)
    if (existing) {
      existing.quantity += quantity
    } else {
      items.value.push({ ...product, quantity })
    }
  }

  // Action 2: Remove item from cart
  const removeFromCart = productId => {
    const index = items.value.findIndex(item => item.id === productId)
    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }

  // Action 3: Update item quantity
  const updateQuantity = (productId, quantity) => {
    const item = items.value.find(i => i.id === productId)
    if (item) {
      item.quantity = quantity
      if (item.quantity <= 0) {
        removeFromCart(productId)
      }
    }
  }

  // Action 4: Apply coupon code
  const applyCoupon = code => {
    if (code === 'SAVE10') {
      couponCode.value = code
      return true
    }
    return false
  }

  return {
    items,
    couponCode,
    getItemCount,
    getSubtotal,
    getTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyCoupon,
  }
})
