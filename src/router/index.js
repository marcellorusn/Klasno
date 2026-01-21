import Home from '../pages/Home.vue'
import ProductListing from '../pages/ProductListing.vue'
import ProductDetails from '../pages/ProductDetails.vue'
import Cart from '../pages/Cart.vue'
import Checkout from '../pages/Checkout.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Profile from '../pages/Profile.vue'
import EditProfile from '../pages/EditProfile.vue'
import OrderHistory from '../pages/OrderHistory.vue'
import CategoryElectronics from '../pages/CategoryElectronics.vue'
import CategoryClothing from '../pages/CategoryClothing.vue'
import CategoryBooks from '../pages/CategoryBooks.vue'
import CategoryAccessories from '../pages/CategoryAccessories.vue'
import Wishlist from '../pages/Wishlist.vue'
import AboutUs from '../pages/AboutUs.vue'
import Contact from '../pages/Contact.vue'
import Feedback from '../pages/Feedback.vue'
import RecentlyViewed from '../pages/RecentlyViewed.vue'
import ForgotPassword from '../pages/ForgotPassword.vue'
import YourAccount from '../pages/YourAccount.vue'
import ComponentShowcase from '../pages/ComponentShowcase.vue'
import NotFound from '../pages/404.vue'

/**
 * Vue Router Configuration - 22+ Routes
 *
 * ROUTING EXAMPLES:
 * - Static routes: /, /about, /contact, etc.
 * - Dynamic routes with params: /product/:id
 * - Programmatic navigation: router.push('/path')
 * - Named routes with RouterLink: <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
 */
const routes = [
  // Main/Public Routes
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home - KLASNO Shop' },
  },

  // Product Routes (includes dynamic parameter example)
  {
    path: '/products',
    name: 'ProductListing',
    component: ProductListing,
    meta: { title: 'All Products' },
  },
  {
    // DYNAMIC ROUTE EXAMPLE: :id parameter used for product details
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    meta: { title: 'Product Details' },
  },

  // Shopping Cart Routes
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: { title: 'Shopping Cart' },
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
    meta: { title: 'Checkout' },
  },

  // Authentication Routes
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'Login' },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { title: 'Register' },
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: { title: 'Forgot Password' },
  },

  // User Account Routes
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { title: 'My Profile', requiresAuth: true },
  },
  {
    // PROGRAMMATIC NAVIGATION EXAMPLE: Can be reached via router.push('/profile/edit')
    path: '/profile/edit',
    name: 'EditProfile',
    component: EditProfile,
    meta: { title: 'Edit Profile', requiresAuth: true },
  },
  {
    path: '/account',
    name: 'YourAccount',
    component: YourAccount,
    meta: { title: 'Your Account', requiresAuth: true },
  },
  {
    path: '/orders',
    name: 'OrderHistory',
    component: OrderHistory,
    meta: { title: 'Order History', requiresAuth: true },
  },

  // Category Routes (multiple category pages - routing pattern)
  {
    path: '/category/electronics',
    name: 'CategoryElectronics',
    component: CategoryElectronics,
    meta: { title: 'Electronics' },
  },
  {
    path: '/category/clothing',
    name: 'CategoryClothing',
    component: CategoryClothing,
    meta: { title: 'Clothing' },
  },
  {
    path: '/category/books',
    name: 'CategoryBooks',
    component: CategoryBooks,
    meta: { title: 'Books' },
  },
  {
    path: '/category/accessories',
    name: 'CategoryAccessories',
    component: CategoryAccessories,
    meta: { title: 'Accessories' },
  },

  // User Features Routes
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist,
    meta: { title: 'My Wishlist' },
  },
  {
    path: '/recently-viewed',
    name: 'RecentlyViewed',
    component: RecentlyViewed,
    meta: { title: 'Recently Viewed' },
  },

  // Company/Info Routes
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs,
    meta: { title: 'About Us' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Contact Us' },
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
    meta: { title: 'Send Feedback' },
  },

  // Demo/Development Route
  {
    path: '/components',
    name: 'ComponentShowcase',
    component: ComponentShowcase,
    meta: { title: 'Component Showcase' },
  },

  // 404 Catch-all (must be last)
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: { title: 'Page Not Found' },
  },
]

export default routes
