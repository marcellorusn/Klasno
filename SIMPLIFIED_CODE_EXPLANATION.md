# 📝 Simplified Code Structure - Meeting All Requirements

## ✅ All Requirements Met with Simple Code

### **1. Routing (0.5 pts) - 10 Routes**

**File:** `src/router/index.js`

**Routes:**
1. `/` - Home
2. `/products` - Product Listing
3. `/product/:id` - Product Details (dynamic route)
4. `/cart` - Shopping Cart
5. `/login` - Login
6. `/register` - Register
7. `/profile` - Profile
8. `/wishlist` - Wishlist
9. `/about` - About
10. `/:pathMatch(.*)*` - 404 Page

**Navigation Examples:**
- `<router-link to="/cart">Cart</router-link>` - RouterLink
- `router.push({ name: 'Cart' })` - Programmatic navigation

---

### **2. Computed Properties (2 pts) - 5 Computed**

**File:** `src/pages/Home.vue`

1. `productCount` - Total number of products
2. `cartItemCount` - Items in cart
3. `cartTotal` - Total cart price
4. `userName` - Current user name
5. `featuredProducts` - First 4 products

**Simple Example:**
```javascript
const cartItemCount = computed(() => cartStore.itemCount)
```

---

### **3. Watchers (2 pts) - 3 Watchers**

**File:** `src/pages/Home.vue`

1. Watches `visitCount` - Logs when visit count changes
2. Watches `cartStore.items` - Logs when cart items change
3. Watches `authStore.isAuthenticated` - Logs when auth status changes

**Simple Example:**
```javascript
watch(() => cartStore.items, (newItems) => {
  console.log(`Cart has ${newItems.length} items`)
}, { deep: true })
```

---

### **4. Pinia Stores (3 pts) - 5 Stores**

#### **Store 1: Auth** (`src/stores/auth.js`)
- **Getters (2):** `isAuthenticated`, `userName`
- **Actions (2):** `login(email)`, `logout()`

#### **Store 2: Cart** (`src/stores/cart.js`)
- **Getters (2):** `itemCount`, `total`
- **Actions (2):** `addToCart(product, quantity)`, `removeFromCart(productId)`

#### **Store 3: Product** (`src/stores/product.js`)
- **Getters (2):** `allProducts`, `productCount`
- **Actions (2):** `getProductById(id)`, `addProduct(product)`

#### **Store 4: Wishlist** (`src/stores/wishlist.js`)
- **Getters (2):** `wishlistCount`, `isInWishlist`
- **Actions (2):** `addToWishlist(product)`, `removeFromWishlist(productId)`

#### **Store 5: Notification** (`src/stores/notification.js`)
- **Getters (2):** `notificationList`, `unreadCount`
- **Actions (2):** `addNotification(message)`, `removeNotification(id)`

**Total: 10 Getters, 10 Actions** ✅

**Simple Usage:**
```javascript
import { useCartStore } from '../stores/cart'
const cartStore = useCartStore()
cartStore.addToCart(product)  // Action
cartStore.itemCount            // Getter
```

---

### **5. Getters (1.5 pts) - 10 Getters**

All getters are `computed()` properties in stores:

1. `auth.isAuthenticated`
2. `auth.userName`
3. `cart.itemCount`
4. `cart.total`
5. `product.allProducts`
6. `product.productCount`
7. `wishlist.wishlistCount`
8. `wishlist.isInWishlist`
9. `notification.notificationList`
10. `notification.unreadCount`

---

### **6. Actions (1.5 pts) - 10 Actions**

All actions are functions in stores:

1. `auth.login(email)`
2. `auth.logout()`
3. `cart.addToCart(product, quantity)`
4. `cart.removeFromCart(productId)`
5. `product.getProductById(id)`
6. `product.addProduct(product)`
7. `wishlist.addToWishlist(product)`
8. `wishlist.removeFromWishlist(productId)`
9. `notification.addNotification(message)`
10. `notification.removeNotification(id)`

---

### **7. PWA Integration (1 pt)**

**File:** `vite.config.js`

```javascript
VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    name: 'KLASNO Shop',
    short_name: 'KLASNO',
    theme_color: '#2563eb',
    icons: [...]
  }
})
```

**Features:**
- ✅ Service worker auto-registered
- ✅ Works offline
- ✅ Installable as app

---

### **8. ESLint Integration (0.5 pts)**

**File:** `eslint.config.js`

**Usage:**
```bash
yarn lint
```

---

### **9. Prettier Integration (0.5 pts)**

**File:** `.prettierrc.json`

**Usage:**
```bash
yarn format
```

---

## 📁 Simple File Structure

```
src/
├── main.js              # App entry point
├── App.vue              # Main app component
├── router/
│   └── index.js        # 10 routes
├── stores/              # 5 stores (2 getters + 2 actions each)
│   ├── auth.js
│   ├── cart.js
│   ├── product.js
│   ├── wishlist.js
│   └── notification.js
├── pages/
│   ├── Home.vue        # 5 computed + 3 watchers
│   ├── Cart.vue
│   ├── Login.vue
│   ├── Register.vue
│   ├── Profile.vue
│   ├── ProductListing.vue
│   ├── ProductDetails.vue
│   ├── Wishlist.vue
│   ├── AboutUs.vue
│   └── 404.vue
└── components/
    ├── Header.vue
    ├── ProductCard.vue
    └── ...
```

---

## 🎯 Key Simplifications Made

1. **Stores:** Reduced to exactly 2 getters and 2 actions each
2. **Routes:** Reduced from 22 to exactly 10 routes
3. **Computed:** Reduced to exactly 5 in Home.vue
4. **Watchers:** Reduced to exactly 3 in Home.vue
5. **Removed:** Duplicate auth store (user.js)
6. **Simplified:** Cart and Home pages
7. **Fixed:** All store property references

---

## ✅ Verification Checklist

- [x] 10 routes (minimum 10)
- [x] 5 computed properties (minimum 5)
- [x] 3 watchers (minimum 3)
- [x] 5 stores (minimum 5)
- [x] 10 getters (minimum 10)
- [x] 10 actions (minimum 10)
- [x] PWA configured
- [x] ESLint configured
- [x] Prettier configured
- [x] Code is simple and functional

**All requirements met with simple, clean code!** 🎉
