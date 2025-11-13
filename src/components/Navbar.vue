<template>
  <nav class="bg-gray-100 border-b border-gray-200 sticky top-0 z-40">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-3">
        <!-- Desktop Navigation -->
        <div class="hidden md:flex gap-4 overflow-x-auto">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="px-3 py-2 rounded hover:bg-gray-200 transition whitespace-nowrap"
            :class="isActive(item.path) ? 'bg-blue-600 text-white' : 'text-gray-700'"
          >
            {{ item.label }}
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu"
          class="md:hidden text-2xl p-2 hover:bg-gray-200 rounded transition"
        >
          {{ menuOpen ? '✕' : '☰' }}
        </button>
      </div>

      <!-- Mobile Navigation -->
      <transition name="slide-down">
        <div v-if="menuOpen" class="md:hidden bg-white border-t border-gray-200">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="block px-4 py-3 hover:bg-gray-100 transition"
            :class="isActive(item.path) ? 'bg-blue-100 text-blue-600 font-bold' : 'text-gray-700'"
            @click="menuOpen = false"
          >
            {{ item.label }}
          </router-link>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
// Simple Navbar component
// - Keeps a small mobile menu state
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

const navItems = [
  { path: '/', label: 'Acasă' },
  { path: '/products', label: 'Produse' },
  { path: '/category/electronics', label: 'Electronice' },
  { path: '/category/clothing', label: 'Îmbrăcăminte' },
  { path: '/category/books', label: 'Cărți' },
  { path: '/category/accessories', label: 'Accesorii' }
]

const emit = defineEmits(['toggle-menu'])

function isActive(path) {
  return route.path === path
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  emit('toggle-menu', menuOpen.value)
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
