import { defineStore } from 'pinia'

// Store 2: Cart - 2 getters, 2 actions
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  // Getters (separate from computed properties in components)
  getters: {
    // Getter 1: Count items in cart
    itemCount(state) {
      return state.items.length
    },
    
    // Getter 2: Calculate total price
    total(state) {
      return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
    },
  },

  // Actions
  actions: {
    // Action 1: Add product to cart
    addToCart(product, quantity = 1) {
      const existing = this.items.find(item => item.id === product.id)
      if (existing) {
        existing.quantity += quantity
      } else {
        this.items.push({ ...product, quantity })
      }
    },

    // Action 2: Remove product from cart
    removeFromCart(productId) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    },
  },
})
