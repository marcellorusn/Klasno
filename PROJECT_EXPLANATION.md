# 📚 Simple Project Explanation - KLASNO Shop

## How Your Project Works (Simple Version)

Your project is a **Vue 3 shopping website** called "KLASNO Shop". Here's how everything connects:

---

## 🎯 **Grading Criteria Breakdown**

### ✅ **1. Routing (0.5 pts) - 22+ Routes**

**Location:** `src/router/index.js`

**How it works:**
- You have **22 routes** (more than the required 10!)
- Each route connects a URL (like `/products`) to a Vue component (like `ProductListing.vue`)

**Example:**
```javascript
{
  path: '/products',        // URL user visits
  name: 'ProductListing',    // Name for router.push()
  component: ProductListing  // Which page to show
}
```

**Two ways to navigate:**
1. **RouterLink** (in templates): `<router-link to="/products">Products</router-link>`
2. **router.push()** (in code): `router.push({ name: 'Cart' })`

**Found in:**
- `src/pages/Home.vue` - line 64: `router.push({ name: 'Cart' })`
- `src/pages/Cart.vue` - line 60: `router.push({ name: 'ProductListing' })`
- `src/pages/Login.vue` - line 44: `router.push('/profile')`

---

### ✅ **2. Computed Properties (2 pts) - 5+ Required**

**What is it?** A computed property **automatically calculates** a value when something changes.

**Simple example:**
```javascript
const cartTotal = computed(() => {
  return cartStore.items.reduce((sum, item) => sum + item.price, 0)
})
// When cartStore.items changes, cartTotal automatically updates!
```

**Found in your project:**
- `src/pages/Home.vue` - **10 computed properties**:
  - `heroTitle`, `heroMessage`, `userDisplayName`
  - `productStats`, `trendingProducts`
  - `cartItemCount`, `cartSubtotal`, `cartTotal`, `cartItems`
  - `wishlistCount`

- `src/pages/Cart.vue` - **6 computed properties**:
  - `cartItems`, `itemCount`, `cartSubtotal`
  - `averagePrice`, `discountAmount`, `cartTotal`

- **Stores also have computed (getters):**
  - `src/stores/cart.js`: `itemCount`, `subtotal`, `total`
  - `src/stores/auth.js`: `isAuthenticated`, `userName`
  - `src/stores/wishlist.js`: `wishlistCount`, `isInWishlist`
  - `src/stores/product.js`: `allProducts`, `productsByCategory`, `stats`
  - `src/stores/user.js`: `isAuthenticated`, `getUserDisplayName`
  - `src/stores/notification.js`: `notificationList`, `unreadCount`

**Total: 20+ computed properties!** ✅

---

### ✅ **3. Watchers (2 pts) - 3+ Required**

**What is it?** A watcher **watches** a value and runs code when it changes.

**Simple example:**
```javascript
watch(() => cartStore.items, (newItems) => {
  console.log(`Cart now has ${newItems.length} items`)
})
// Runs automatically when cartStore.items changes!
```

**Found in your project:**
- `src/pages/Home.vue` - **3 watchers**:
  - Watches `visitCount` changes
  - Watches `cartStore.items` changes
  - Watches `authStore.isAuthenticated` changes

- `src/pages/Cart.vue` - **2 watchers**:
  - Watches `cartStore.couponCode` changes
  - Watches `cartStore.items` changes

- `src/stores/notification.js` - **1 watcher**:
  - Watches `unreadCount` and updates page title

**Total: 6+ watchers!** ✅

---

### ✅ **4. Pinia Stores (3 pts) - 5+ Stores Required**

**What is Pinia?** Pinia is Vue's **state management** - it stores data that multiple pages can use.

**Your 5 Stores:**

1. **`src/stores/auth.js`** (or `user.js`) - User login/logout
   - Stores: `user`, `isLoading`
   - Actions: `login()`, `logout()`, `updateProfile()`

2. **`src/stores/cart.js`** - Shopping cart
   - Stores: `items`, `couponCode`
   - Actions: `addToCart()`, `removeFromCart()`, `updateQuantity()`, `applyCoupon()`

3. **`src/stores/product.js`** - Products list
   - Stores: `products`, `selectedCategory`
   - Actions: `setCategory()`, `addProduct()`, `getProductById()`

4. **`src/stores/wishlist.js`** - Wishlist
   - Stores: `items`
   - Actions: `addToWishlist()`, `removeFromWishlist()`, `toggleWishlist()`

5. **`src/stores/notification.js`** - Notifications
   - Stores: `notifications`, `theme`
   - Actions: `addNotification()`, `removeNotification()`, `toggleTheme()`

**How to use in a component:**
```javascript
import { useCartStore } from '../stores/cart'
const cartStore = useCartStore()
cartStore.addToCart(product)  // Use action
cartStore.itemCount           // Use getter
```

---

### ✅ **5. Getters (1.5 pts) - 10+ Required**

**What is a getter?** In Pinia, getters are **computed properties** that read from the store.

**Your getters (all are `computed()` in stores):**

**Cart Store (`src/stores/cart.js`):**
- `itemCount` - Number of items in cart
- `subtotal` - Total price before discount
- `total` - Total price after discount

**Auth Store (`src/stores/auth.js`):**
- `isAuthenticated` - Is user logged in?
- `userName` - User's email/name

**Wishlist Store (`src/stores/wishlist.js`):**
- `wishlistCount` - Number of wishlist items
- `isInWishlist` - Check if product is in wishlist

**Product Store (`src/stores/product.js`):**
- `allProducts` - All products
- `productsByCategory` - Products filtered by category
- `stats` - Product statistics

**User Store (`src/stores/user.js`):**
- `isAuthenticated` - Is user logged in?
- `getUserDisplayName` - User's full name

**Notification Store (`src/stores/notification.js`):**
- `notificationList` - All notifications
- `unreadCount` - Number of unread notifications

**Total: 12+ getters!** ✅

---

### ✅ **6. Actions (1.5 pts) - 10+ Required**

**What is an action?** Actions are **functions** that change the store's data.

**Your actions:**

**Cart Store:**
- `addToCart(product, quantity)` - Add product to cart
- `removeFromCart(productId)` - Remove product
- `updateQuantity(productId, quantity)` - Change quantity
- `applyCoupon(code)` - Apply discount code

**Auth Store:**
- `login(email, password)` - Log user in
- `logout()` - Log user out
- `updateProfile(updates)` - Update user info

**Product Store:**
- `setCategory(category)` - Filter by category
- `addProduct(product)` - Add new product
- `getProductById(id)` - Find product by ID

**Wishlist Store:**
- `addToWishlist(product)` - Add to wishlist
- `removeFromWishlist(productId)` - Remove from wishlist
- `toggleWishlist(product)` - Add/remove toggle

**Notification Store:**
- `addNotification(message, type)` - Show notification
- `removeNotification(id)` - Remove notification
- `toggleTheme()` - Switch light/dark theme

**Total: 16+ actions!** ✅

---

### ✅ **7. PWA Integration (1 pt)**

**What is PWA?** Progressive Web App - your website works like a mobile app!

**Location:** `vite.config.js` - line 11

**What it does:**
- ✅ Works **offline** (caches files)
- ✅ Can be **installed** on phone/desktop
- ✅ Has **app icon** and **manifest**
- ✅ **Auto-updates** when you deploy

**Configuration:**
```javascript
VitePWA({
  registerType: "autoUpdate",
  manifest: {
    name: "KLASNO App",
    theme_color: "#169bcb"
  }
})
```

**Files created automatically:**
- Service worker (`dev-dist/sw.js`)
- Manifest (auto-generated)
- Icons (`public/icons/`)

---

### ✅ **8. ESLint Integration (0.5 pts)**

**What is ESLint?** It **checks your code** for errors and bad practices.

**Location:** `eslint.config.js`

**How to use:**
```bash
yarn lint          # Check for errors
yarn lint --fix    # Auto-fix errors
```

**What it checks:**
- ✅ Syntax errors
- ✅ Unused variables
- ✅ Vue component rules
- ✅ Code style issues

---

### ✅ **9. Prettier Integration (0.5 pts)**

**What is Prettier?** It **formats your code** automatically (spaces, indentation, etc.).

**Location:** `.prettierrc.json`

**How to use:**
```bash
yarn format          # Format all files
yarn format:check    # Check if files need formatting
```

**What it does:**
- ✅ Single quotes instead of double
- ✅ No semicolons
- ✅ 2-space indentation
- ✅ Consistent code style

---

### ✅ **10. Code Quality (-4 pts if bad)**

**Your project has:**
- ✅ **Comments** explaining what code does
- ✅ **Clean structure** - organized files
- ✅ **Consistent naming** - camelCase for variables
- ✅ **Vue 3 Composition API** - modern Vue style
- ✅ **Simple, readable code**

---

## 🏗️ **Project Structure (Simple)**

```
src/
├── main.js              # App starts here
├── App.vue              # Main app component
├── router/
│   └── index.js        # All routes (22 routes)
├── stores/              # Pinia stores (5 stores)
│   ├── auth.js
│   ├── cart.js
│   ├── product.js
│   ├── wishlist.js
│   └── notification.js
├── pages/               # All pages (22+ pages)
│   ├── Home.vue
│   ├── Cart.vue
│   └── ...
└── components/          # Reusable components
    ├── Header.vue
    ├── ProductCard.vue
    └── ...
```

---

## 🔄 **How Data Flows (Simple Example)**

**Example: Adding product to cart**

1. **User clicks "Add to Cart"** on `ProductCard.vue`
2. **Component calls:** `cartStore.addToCart(product)`
3. **Store action runs:** Adds product to `items` array
4. **Computed properties update:** `itemCount`, `subtotal`, `total` recalculate
5. **Watchers trigger:** Logs cart change to console
6. **UI updates:** Cart badge shows new count automatically!

**Code flow:**
```
ProductCard.vue 
  → cartStore.addToCart() 
  → cart.items changes 
  → itemCount computed updates 
  → Header.vue shows new count
```

---

## 🎓 **Key Concepts (Simple)**

1. **Store (Pinia):** Like a shared box where all pages can read/write data
2. **Computed:** Auto-calculates value when dependencies change
3. **Watcher:** Runs code when a value changes
4. **Action:** Function that changes store data
5. **Getter:** Function that reads store data (computed property)
6. **Route:** URL path that shows a specific page
7. **Router.push():** Programmatically navigate to a page

---

## ✅ **Summary - All Requirements Met!**

| Requirement | Required | You Have | Status |
|------------|----------|----------|--------|
| Routes | 10+ | 22 | ✅ |
| Computed | 5+ | 20+ | ✅ |
| Watchers | 3+ | 6+ | ✅ |
| Stores | 5+ | 5 | ✅ |
| Getters | 10+ | 12+ | ✅ |
| Actions | 10+ | 16+ | ✅ |
| PWA | Yes | ✅ | ✅ |
| ESLint | Yes | ✅ | ✅ |
| Prettier | Yes | ✅ | ✅ |
| Code Quality | Good | ✅ | ✅ |

**Total Points: 13/13** 🎉

---

## 🚀 **How to Run**

```bash
# Install dependencies
yarn install

# Start dev server
yarn dev

# Build for production
yarn build

# Deploy to GitHub Pages
yarn deploy
```

---

## 📝 **Notes**

- Your project uses **Vue 3 Composition API** (modern Vue style)
- **Tailwind CSS v4** for styling
- **Vite** as build tool (fast!)
- All stores use **Composition API style** (`setup()` function)

**Everything is simple and well-organized!** 🎯
