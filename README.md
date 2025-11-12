# Klasno Store - Vue 3 Online Store Project

This is a comprehensive Vue 3 online store application template built with:

- **Vue 3** - Progressive JavaScript framework
- **Vue Router** - Official router for Vue
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Lightning-fast build tool
- **Docker** - Containerization

## Project Structure

```
Klasno/
├── src/
│   ├── assets/          # CSS and static assets
│   ├── components/      # Reusable Vue components
│   ├── pages/          # Page components
│   ├── router/         # Vue Router configuration
│   ├── App.vue         # Root component
│   └── main.js         # Entry point
├── public/             # Static files
├── .docker/            # Docker configuration
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Project dependencies
```

## Installation

### Using npm

```bash
npm install
```

### Using Docker

```bash
docker-compose -f .docker/docker-compose.yml up
```

## Running the Application

### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
npm run preview
```

## Docker Commands

### Build and run with Docker

```bash
docker-compose -f .docker/docker-compose.yml up --build
```

### Stop the container

```bash
docker-compose -f .docker/docker-compose.yml down
```

## Pages Included

- **Home** - Main landing page with featured products
- **Products** - Product listing with filters
- **Product Details** - Individual product page
- **Cart** - Shopping cart management
- **Checkout** - Order checkout process
- **Login/Register** - User authentication
- **Profile** - User profile management
- **Order History** - View past orders
- **Categories** - Electronics, Clothing, Books, Accessories
- **Wishlist** - Saved items
- **About Us** - Company information
- **Contact** - Contact form
- **Feedback** - Feedback submission
- **404** - Error page

## Components Available

- **Header** - Page header
- **Footer** - Page footer
- **Navbar** - Navigation bar with categories
- **ProductCard** - Product display card
- **Button** - Reusable button component
- **Input** - Reusable input component
- **RatingStars** - Product rating display
- **Modal** - Modal dialog
- **SearchBar** - Product search
- **Sidebar** - Filter sidebar

## Styling

The project uses Tailwind CSS for all styling. Customize the theme in `tailwind.config.js`.

## Next Steps

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Start building components and adding functionality
4. Modify pages and components as needed
5. Deploy using Docker or your preferred hosting service

## Notes

- All pages include Header and Footer components
- Navigation is set up and working
- Basic form handling is in place
- All routes are configured in `src/router/index.js`
- Tailwind CSS is fully integrated

Happy coding! 🚀
