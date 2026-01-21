import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * Wishlist Store - Manages user's wishlist
 * Demonstrates: 2 getters, 3 actions
 */
export const useWishlistStore = defineStore('wishlist', () => {
  // State
  const items = ref([])

  // Getter 1: Wishlist count
  const getWishlistCount = computed(() => items.value.length)

  // Getter 2: Check if product is in wishlist
  const isInWishlist = computed(() => productId => {
    return items.value.some(item => item.id === productId)
  })

  // Action 1: Add product to wishlist
  const addToWishlist = product => {
    if (!isInWishlist.value(product.id)) {
      items.value.push(product)
      return true
    }
    return false
  }

  // Action 2: Remove product from wishlist
  const removeFromWishlist = productId => {
    const index = items.value.findIndex(item => item.id === productId)
    if (index !== -1) {
      items.value.splice(index, 1)
      return true
    }
    return false
  }

  // Action 3: Toggle product in wishlist
  const toggleWishlist = product => {
    if (isInWishlist.value(product.id)) {
      removeFromWishlist(product.id)
      return false
    } else {
      addToWishlist(product)
      return true
    }
  }

  return {
    items,
    getWishlistCount,
    isInWishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
  }
})
