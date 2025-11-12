# Vue Components Documentation

## Overview
This project contains 10 reusable Vue 3 components with Tailwind CSS styling, demonstrating best practices for props and emit events.

---

## 1. **ProductCard.vue**
A reusable component for displaying product information with add-to-cart functionality.

### Props
- `id` (String | Number, required): Unique product identifier
- `title` (String, required): Product name/title
- `description` (String, default: ''): Short product description
- `price` (Number, required): Product price in RON
- `image` (String, default: ''): Product image URL
- `rating` (Number, default: 0): Product rating (0-5)

### Emits
- `add-to-cart`: Emits object with `{ id, title, price }`
- `rated`: Emits object with `{ id, rating }`

### Example Usage
```vue
<ProductCard
  id="1"
  title="Laptop Dell"
  description="High performance laptop"
  price="2999"
  rating="4.5"
  @add-to-cart="handleAddToCart"
  @rated="handleRated"
/>
```

---

## 2. **CartItem.vue**
Displays a single item in the shopping cart with quantity controls.

### Props
- `id` (String | Number, required): Item ID
- `productName` (String, required): Product name
- `price` (Number, required): Unit price in RON
- `quantity` (Number, default: 1): Item quantity
- `image` (String, default: ''): Product image URL

### Emits
- `remove-item`: Emits item `id`
- `update:quantity`: Emits new `quantity` value

### Example Usage
```vue
<CartItem
  id="1"
  productName="Laptop"
  price="2999"
  :quantity="2"
  @remove-item="removeItem"
  @update:quantity="updateQuantity"
/>
```

---

## 3. **Input.vue** (InputField Component)
Enhanced text input with validation, labels, and hints.

### Props
- `type` (String, default: 'text'): Input type (text, email, password, number, tel, url, date)
- `placeholder` (String, default: ''): Placeholder text
- `label` (String, default: ''): Input label
- `modelValue` (String | Number, default: ''): v-model binding
- `error` (String, default: ''): Error message to display
- `hint` (String, default: ''): Helper text below input
- `required` (Boolean, default: false): Mark as required
- `disabled` (Boolean, default: false): Disable input

### Emits
- `update:modelValue`: Emits updated value
- `blur`: Emits when input loses focus
- `focus`: Emits when input gains focus

### Example Usage
```vue
<Input
  v-model="email"
  type="email"
  label="Email"
  placeholder="example@email.com"
  hint="We'll use this for notifications"
  :error="emailError"
  required
  @blur="validateEmail"
/>
```

---

## 4. **RatingStars.vue**
Interactive star rating display component.

### Props
- `rating` (Number, default: 0): Current rating (0-5)

### Emits
- `rated`: Emits the star value clicked (1-5)

### Features
- Hover effect to preview rating
- Click to set new rating
- Displays decimal rating (e.g., 4.5/5)

### Example Usage
```vue
<RatingStars
  :rating="4.5"
  @rated="handleRate"
/>
```

---

## 5. **Button.vue**
Reusable button component with variants.

### Props
- `variant` (String, default: 'primary'): Button style
  - `'primary'`: Blue background
  - `'secondary'`: Gray background
  - `'danger'`: Red background
- `disabled` (Boolean, default: false): Disable button

### Emits
- `click`: Emits when button is clicked

### Example Usage
```vue
<Button
  variant="primary"
  @click="handleSubmit"
>
  Submit
</Button>

<Button variant="danger" disabled>
  Delete (Disabled)
</Button>
```

---

## 6. **Modal.vue**
Reusable dialog component with confirmation buttons.

### Props
- `show` (Boolean, required): Control modal visibility
- `title` (String, default: 'Dialog'): Modal title

### Emits
- `close`: Emits when modal should close
- `confirm`: Emits when confirm button is clicked

### Slots
- Default slot for modal content

### Example Usage
```vue
<Modal
  :show="showModal"
  title="Confirm Action"
  @close="showModal = false"
  @confirm="handleConfirm"
>
  <p>Are you sure you want to continue?</p>
</Modal>
```

---

## 7. **Navbar.vue**
Responsive navigation component with mobile menu toggle.

### Props
- None

### Emits
- `toggle-menu`: Emits `boolean` (menu open/closed state)

### Features
- Desktop: Horizontal navigation
- Mobile: Hamburger menu with slide animation
- Active state highlighting
- Router integration

### Example Usage
```vue
<Navbar @toggle-menu="handleMenuToggle" />
```

---

## 8. **RatingStars.vue** (Interactive)
Same as component #4 but enhanced for interaction.

---

## 9. **SearchBar.vue**
Search input with search event emission.

### Props
- None

### Emits
- `search`: Emits search query string

### Features
- Enter key to search
- Search button click to search

### Example Usage
```vue
<SearchBar @search="handleSearch" />
```

---

## 10. **Sidebar.vue**
Product filter sidebar component.

### Features
- Category checkboxes
- Price range slider
- Rating filter
- Tailwind CSS responsive design

---

## Common Patterns

### v-model Binding
```vue
<!-- Input component -->
<Input v-model="formData.email" />

<!-- In parent component -->
const formData = ref({ email: '' })
```

### Event Handling
```vue
<!-- Child component emits -->
@emit('add-to-cart', { id: 1, title: 'Product' })

<!-- Parent component listens -->
@add-to-cart="(data) => cart.push(data)"
```

### Props Validation
```vue
const props = defineProps({
  price: {
    type: Number,
    required: true,
    validator: (value) => value > 0
  }
})
```

---

## Component Showcase

Visit `/components` route to see all components in action with live examples and event logging.

---

## Tailwind CSS Classes Used

- **Layout**: `flex`, `grid`, `container`, `mx-auto`, `px-4`
- **Colors**: `bg-blue-600`, `text-white`, `text-gray-600`, `border-gray-300`
- **Spacing**: `mb-4`, `p-6`, `gap-4`, `space-y-2`
- **Effects**: `shadow-md`, `hover:shadow-lg`, `transition`, `rounded-lg`
- **Responsive**: `md:`, `lg:` breakpoints

---

## Best Practices Implemented

✅ **Props Validation**: All props have defined types and validators
✅ **Emit Events**: Clear event names and payload structures
✅ **Accessibility**: Labels, aria attributes, keyboard support
✅ **Responsive Design**: Mobile-first approach with Tailwind
✅ **Reusability**: Components are self-contained and composable
✅ **Documentation**: Clear comments and showcase page

---

## Future Enhancements

- [ ] Add loading states to buttons
- [ ] Add pagination to product listings
- [ ] Add form validation utilities
- [ ] Add toast/notification component
- [ ] Add tooltip component
- [ ] Add image carousel component

