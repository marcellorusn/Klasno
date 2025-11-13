<template>
  <div class="w-full">
    <label v-if="label" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :required="required"
      :disabled="disabled"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
      @focus="$emit('focus')"
      :class="[
        'w-full px-4 py-2 border rounded-lg transition',
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
        disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'bg-white',
        error ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'
      ]"
    />
    <p v-if="error" class="text-red-500 text-sm mt-1">{{ error }}</p>
    <p v-if="hint" class="text-gray-500 text-xs mt-1">{{ hint }}</p>
  </div>
</template>

<script setup>
// Simple Input component
// - Uses native input and forwards value via v-model (update:modelValue)
defineProps({
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  label: { type: String, default: '' },
  modelValue: { type: [String, Number], default: '' },
  error: { type: String, default: '' },
  hint: { type: String, default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
})

defineEmits(['update:modelValue', 'blur', 'focus'])
</script>

<style scoped>
</style>
