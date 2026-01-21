import { defineStore } from 'pinia'

// Store 5: Notification - 2 getters, 2 actions
export const useNotificationStore = defineStore('notification', {
  state: () => ({
    notifications: [],
  }),

  // Getters (separate from computed properties in components)
  getters: {
    // Getter 1: Get all notifications
    notificationList(state) {
      return state.notifications
    },
    
    // Getter 2: Count unread notifications
    unreadCount(state) {
      return state.notifications.filter(n => !n.read).length
    },
  },

  // Actions
  actions: {
    // Action 1: Add notification
    addNotification(message) {
      const notification = {
        id: Date.now(),
        message,
        read: false,
      }
      this.notifications.push(notification)
    },

    // Action 2: Remove notification
    removeNotification(id) {
      const index = this.notifications.findIndex(n => n.id === id)
      if (index !== -1) {
        this.notifications.splice(index, 1)
      }
    },
  },
})
