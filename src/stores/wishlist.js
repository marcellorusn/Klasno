import { defineStore } from 'pinia'

// Store 4: Wishlist - 2 getters, 2 actions
export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: [],
  }),

  // Getters (separate from computed properties in components)
  getters: {
    // Getter 1: Count wishlist items
    wishlistCount(state) {
      return state.items.length
    },
    
    // Getter 2: Check if product is in wishlist
    isInWishlist(state) {
      return (productId) => {
        return state.items.some(item => item.id === productId)
      }
    },
  },

  // Actions
  actions: {
    // Action 1: Add to wishlist
    addToWishlist(product) {
      if (!this.isInWishlist(product.id)) {
        this.items.push(product)
      }
    },

    // Action 2: Remove from wishlist
    removeFromWishlist(productId) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    },
  },
})
