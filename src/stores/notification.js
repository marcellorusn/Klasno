import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

/**
 * UI/Notifications Store - Manages notifications and UI state
 * Demonstrates: 2 getters, 3 actions
 */
export const useNotificationStore = defineStore('notification', () => {
  // State
  const notifications = ref([])
  const theme = ref('light')

  // Getter 1: Latest notifications
  const getNotifications = computed(() => notifications.value)

  // Getter 2: Unread count
  const getUnreadCount = computed(() => {
    return notifications.value.filter(n => !n.read).length
  })

  // Action 1: Add notification
  const addNotification = (message, type = 'info', duration = 3000) => {
    const id = Date.now()
    const notification = {
      id,
      message,
      type, // 'success', 'error', 'info', 'warning'
      read: false,
    }
    notifications.value.push(notification)

    // Auto-remove after duration
    if (duration) {
      setTimeout(() => {
        removeNotification(id)
      }, duration)
    }

    return id
  }

  // Action 2: Remove notification
  const removeNotification = (id) => {
    const index = notifications.value.findIndex(n => n.id === id)
    if (index !== -1) {
      notifications.value.splice(index, 1)
    }
  }

  // Action 3: Toggle theme
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    return theme.value
  }

  return {
    notifications,
    theme,
    getNotifications,
    getUnreadCount,
    addNotification,
    removeNotification,
    toggleTheme,
  }
})
