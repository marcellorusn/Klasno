import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * Product Store - Manages product listing and details
 * Demonstrates: 3 getters, 3 actions
 */
export const useProductStore = defineStore('product', () => {
  // State
  const products = ref([
    { id: 1, name: 'Laptop Pro', price: 1299, category: 'electronics', rating: 4.5 },
    { id: 2, name: 'Wireless Mouse', price: 29.99, category: 'electronics', rating: 4.2 },
    { id: 3, name: 'T-Shirt Blue', price: 19.99, category: 'clothing', rating: 4.0 },
    { id: 4, name: 'Jeans Classic', price: 59.99, category: 'clothing', rating: 4.3 },
    { id: 5, name: 'JavaScript Book', price: 45.99, category: 'books', rating: 4.8 },
    { id: 6, name: 'Headphones', price: 199.99, category: 'electronics', rating: 4.6 },
    { id: 7, name: 'Watch Band', price: 14.99, category: 'accessories', rating: 4.1 },
    { id: 8, name: 'Python Book', price: 49.99, category: 'books', rating: 4.7 },
  ])

  const selectedCategory = ref(null)
  const filteredProducts = ref([])

  // Getter 1: All products
  const getAllProducts = computed(() => products.value)

  // Getter 2: Filtered by category
  const getProductsByCategory = computed(() => (category) => {
    return category ? products.value.filter(p => p.category === category) : products.value
  })

  // Getter 3: Product statistics
  const getProductStats = computed(() => ({
    total: products.value.length,
    categories: [...new Set(products.value.map(p => p.category))],
    avgPrice: (products.value.reduce((sum, p) => sum + p.price, 0) / products.value.length).toFixed(2),
  }))

  // Action 1: Set selected category filter
  const setCategory = (category) => {
    selectedCategory.value = category
    filteredProducts.value = getProductsByCategory.value(category)
  }

  // Action 2: Add new product (demo)
  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Math.max(...products.value.map(p => p.id)) + 1,
    }
    products.value.push(newProduct)
    return newProduct
  }

  // Action 3: Get product by ID
  const getProductById = (id) => {
    return products.value.find(p => p.id === id)
  }

  return {
    products,
    selectedCategory,
    getAllProducts,
    getProductsByCategory,
    getProductStats,
    setCategory,
    addProduct,
    getProductById,
  }
})
