<template>
  <Teleport to="body">
    <transition name="fade">
      <div
        v-if="show"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        @click.self="close"
      >
        <transition name="slide-up">
          <div class="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full mx-4">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-bold">{{ title }}</h2>
              <button @click="close" class="text-gray-500 hover:text-gray-700 text-2xl transition">
                ×
              </button>
            </div>
            <div class="mb-6">
              <slot />
            </div>
            <div class="flex gap-3 justify-end">
              <Button variant="secondary" @click="close"> Anulează </Button>
              <Button @click="confirm"> Confirmă </Button>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import Button from './Button.vue'

const props = defineProps({
  show: { type: Boolean, required: true },
  title: { type: String, default: 'Dialog' },
})
const emit = defineEmits(['close', 'confirm'])

function close() {
  emit('close')
}

function confirm() {
  emit('confirm')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}

.slide-up-enter-from {
  transform: translateY(20px);
}

.slide-up-leave-to {
  transform: translateY(20px);
}
</style>
