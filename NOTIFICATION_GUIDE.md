# How Notifications Work - Complete Guide

## What is the Notification Store?

The notification store is a **centralized system** that manages notifications (popup messages) throughout your app. Think of it as a notification center where you can:
- **Add** a notification (sends a message to users)
- **Remove** a notification (clears it from the list)
- **Get all** notifications (display list)
- **Count** unread notifications

---

## Notification Store Structure

**File**: `src/stores/notification.js`

### State (The Data)
```javascript
state: () => ({
  notifications: [],  // Empty array - stores all notifications
})
```

### Getters (Read-only access)
```javascript
// GETTER 1: Get all notifications
notificationList(state) {
  return state.notifications
}

// GETTER 2: Count unread notifications
unreadCount(state) {
  let count = 0
  for (let i = 0; i < state.notifications.length; i++) {
    if (!state.notifications[i].read) {
      count++
    }
  }
  return count
}
```

### Actions (Modify data)
```javascript
// ACTION 1: Add a new notification
addNotification(message) {
  const notification = {
    id: Date.now(),           // Unique ID
    message,                   // The message text
    read: false,              // Not read yet
  }
  this.notifications.push(notification)
}

// ACTION 2: Remove a notification
removeNotification(id) {
  this.notifications = this.notifications.filter(n => n.id !== id)
}
```

---

## How to Use Notifications

### Step 1: Import the store
```javascript
import { useNotificationStore } from '../stores/notification'

const notificationStore = useNotificationStore()
```

### Step 2: Add a notification
```javascript
notificationStore.addNotification('Product added to cart! ✅')
```

### Step 3: Access notifications
```javascript
// Get all notifications
console.log(notificationStore.notificationList)

// Count unread notifications
console.log(notificationStore.unreadCount)
```

### Step 4: Remove a notification
```javascript
notificationStore.removeNotification(id)
```

---

## Where Notifications Work on Your Website

### 🎯 **ComponentShowcase Page** (Where you can test it!)

**File**: `src/pages/ComponentShowcase.vue`

This is where notifications are demonstrated and tested:

```vue
<!-- In the template: -->
<button @click="addNotificationExample" class="btn btn-secondary">
  Add Notification (demo)
</button>

<!-- In the script: -->
const addNotificationExample = () => {
  notificationStore.addNotification('This is a demo notification! 🎉')
}
```

**How to test on the website:**
1. Go to the Component Showcase page
2. Scroll down to "📦 Pinia Stores Integration" section
3. Find "5. Notification Store"
4. Click the "Add Notification (demo)" button
5. A notification is added to the store

---

## What Happens When You Click "Add Notification"

### Step-by-Step Flow

```
User clicks button
    ↓
addNotificationExample() runs
    ↓
notificationStore.addNotification('This is a demo notification! 🎉')
    ↓
Store ACTION creates new notification object:
{
  id: 1705900000000,    // Current time as unique ID
  message: 'This is a demo notification! 🎉',
  read: false
}
    ↓
Adds it to notifications array
    ↓
notificationList getter returns updated array
    ↓
Any component can now access it
```

---

## Example: Complete Notification Flow

### In a Component
```javascript
import { useNotificationStore } from '../stores/notification'
import { computed } from 'vue'

const notificationStore = useNotificationStore()

// COMPUTED: Get all notifications
const allNotifications = computed(() => notificationStore.notificationList)

// COMPUTED: Get count of unread
const unreadCount = computed(() => notificationStore.unreadCount)

// METHOD: Add notification
const addNotification = () => {
  notificationStore.addNotification('Item added to cart! ✅')
}

// METHOD: Remove notification
const removeNotification = (id) => {
  notificationStore.removeNotification(id)
}
```

### In the Template
```html
<!-- Show unread count -->
<span>{{ unreadCount }} new notifications</span>

<!-- List all notifications -->
<div v-for="notif in allNotifications" :key="notif.id" class="notification">
  <p>{{ notif.message }}</p>
  <button @click="removeNotification(notif.id)">Close</button>
</div>

<!-- Add notification button -->
<button @click="addNotification">Add Notification</button>
```

---

## Real-World Use Cases

### When Should You Add Notifications?

1. **After adding to cart:**
   ```javascript
   cartStore.addToCart(product, 1)
   notificationStore.addNotification(`${product.name} added to cart! ✅`)
   ```

2. **After form submission:**
   ```javascript
   handleSubmit()
   notificationStore.addNotification('Profile updated successfully! ✅')
   ```

3. **After login:**
   ```javascript
   authStore.login(email)
   notificationStore.addNotification(`Welcome, ${email}! 👋`)
   ```

4. **When errors occur:**
   ```javascript
   try {
     // Some operation
   } catch (error) {
     notificationStore.addNotification('Error: Something went wrong ❌')
   }
   ```

---

## Current State on Your Website

### What's Implemented ✅
- Notification store exists with getters and actions
- ComponentShowcase has a demo button to test
- Store can add/remove notifications

### What's NOT Yet Implemented 🔲
- **No UI component** to display notifications (toasts/alerts)
- **No auto-remove** - notifications stay forever
- **Not integrated** with cart/wishlist/auth actions yet

### To Make It Fully Functional

You would need to:

1. **Create a Notification UI component** (e.g., `NotificationCenter.vue`):
```vue
<template>
  <div class="notification-container">
    <div v-for="notif in notificationStore.notificationList" :key="notif.id"
      class="notification-item">
      {{ notif.message }}
      <button @click="notificationStore.removeNotification(notif.id)">×</button>
    </div>
  </div>
</template>

<script setup>
import { useNotificationStore } from '../stores/notification'
const notificationStore = useNotificationStore()
</script>
```

2. **Add notifications when products are added**:
```javascript
// In ProductCard or ProductDetails
const handleAddToCart = (product) => {
  cartStore.addToCart(product, 1)
  notificationStore.addNotification(`${product.name} added to cart! ✅`)
}
```

3. **Auto-remove after timeout** (optional):
```javascript
const addNotificationExample = () => {
  const id = Date.now()
  notificationStore.addNotification('This is a demo notification! 🎉')
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    notificationStore.removeNotification(id)
  }, 3000)
}
```

---

## Summary

| Feature | What It Does |
|---------|-------------|
| **State** | Stores array of notifications |
| **Getter: notificationList** | Returns all notifications |
| **Getter: unreadCount** | Counts notifications with `read: false` |
| **Action: addNotification** | Creates new notification object and adds it |
| **Action: removeNotification** | Deletes notification by ID |
| **Current Usage** | ComponentShowcase demo button only |

The notification system is ready to use - you just need to **add notification calls** throughout your app and create a **UI component** to display them!
