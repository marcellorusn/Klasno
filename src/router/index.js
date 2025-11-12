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

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'ProductListing',
    component: ProductListing,
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/profile/edit',
    name: 'EditProfile',
    component: EditProfile,
  },
  {
    path: '/orders',
    name: 'OrderHistory',
    component: OrderHistory,
  },
  {
    path: '/category/electronics',
    name: 'CategoryElectronics',
    component: CategoryElectronics,
  },
  {
    path: '/category/clothing',
    name: 'CategoryClothing',
    component: CategoryClothing,
  },
  {
    path: '/category/books',
    name: 'CategoryBooks',
    component: CategoryBooks,
  },
  {
    path: '/category/accessories',
    name: 'CategoryAccessories',
    component: CategoryAccessories,
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist,
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback,
  },
  {
    path: '/recently-viewed',
    name: 'RecentlyViewed',
    component: RecentlyViewed,
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path: '/account',
    name: 'YourAccount',
    component: YourAccount,
  },
  {
    path: '/components',
    name: 'ComponentShowcase',
    component: ComponentShowcase,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

export default routes
