import { defineStore } from 'pinia'

// Store 3: Product - 2 getters, 2 actions
export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      { id: 1, name: 'Laptop Pro', price: 1299, category: 'electronics' },
      { id: 2, name: 'Wireless Mouse', price: 29.99, category: 'electronics' },
      { id: 3, name: 'T-Shirt Blue', price: 19.99, category: 'clothing' },
      { id: 4, name: 'Jeans Classic', price: 59.99, category: 'clothing' },
      { id: 5, name: 'JavaScript Book', price: 45.99, category: 'books' },
    ],
  }),

  // Getters (separate from computed properties in components)
  getters: {
    // Getter 1: Get all products
    allProducts(state) {
      return state.products
    },
    
    // Getter 2: Get product count
    productCount(state) {
      return state.products.length
    },
  },

  // Actions
  actions: {
    // Action 1: Get product by ID
    getProductById(id) {
      return this.products.find(p => p.id === id)
    },

    // Action 2: Add new product
    addProduct(product) {
      const newProduct = {
        ...product,
        id: this.products.length + 1,
      }
      this.products.push(newProduct)
      return newProduct
    },
  },
})
