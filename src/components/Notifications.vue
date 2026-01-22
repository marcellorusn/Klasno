<script setup>
import { computed, watch } from 'vue'
import { useNotificationStore } from '../stores/notification'

const notificationStore = useNotificationStore()
const notifications = computed(() => notificationStore.notifications)

watch(notifications, (newNotifications) => {
  newNotifications.forEach((notification) => {
    setTimeout(() => {
      notificationStore.removeNotification(notification.id)
    }, 3000)
  })
}, { deep: true })
</script>

<template>
  <div class="fixed top-20 right-4 flex flex-col gap-2 z-50">
    <div
      v-for="notification in notifications"
      :key="notification.id"
      class="bg-blue-600 text-white px-4 py-2 rounded shadow"
    >
      {{ notification.message }}
    </div>
  </div>
</template>
