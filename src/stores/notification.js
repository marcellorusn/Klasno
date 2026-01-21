import { defineStore } from 'pinia'

// Store 5: Notification
export const useNotificationStore = defineStore('notification', {
  state: () => ({
    notifications: [],
  }),

  // Getters
  getters: {
    // Getter 1: Get all notifications
    notificationList(state) {
      return state.notifications
    },

    // Getter 2: Count unread notifications
    unreadCount(state) {
      let count = 0
      for (let i = 0; i < state.notifications.length; i++) {
        if (!state.notifications[i].read) {
          count++
        }
      }
      return count
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
      this.notifications = this.notifications.filter(n => n.id !== id)
    },
  },
})
