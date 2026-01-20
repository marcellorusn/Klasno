import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// TIP: To rebuild Docker safely:
// 1. docker compose down  (stop containers)
// 2. docker compose build --no-cache  (rebuild without cache)
// 3. docker compose up -d  (start fresh)
//
// To reset .vite cache if hot-reload fails:
// docker compose exec app rm -rf .vite dist node_modules/.vite
//
// Access app: http://localhost:5174
//
// GITHUB PAGES DEPLOYMENT:
// 1. Run: npm run build:gh-pages (builds with base=/klasno-shop/)
// 2. Run: npm run deploy (deploys to gh-pages branch)
// 3. Enable GitHub Pages in repository settings (use gh-pages branch)

export default defineConfig({
  // Base URL for GitHub Pages (adjust to your repo name)
  // For local dev/Docker, this remains './'
  base: process.env.NODE_ENV === "production" ? "/klasno-shop/" : "./",

  plugins: [
    vue(),
    tailwindcss(),
    VitePWA({
      // Auto-update strategy: service worker updates automatically
      registerType: "autoUpdate",

      // Enable PWA in development mode (important for testing)
      devOptions: {
        enabled: true,
        // Use Vite HMR in dev (works with Docker)
        type: "module",
      },

      // Assets to be precached by service worker
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "masked-icon.svg",
      ],

      // PWA Manifest configuration
      manifest: {
        // Application name (shown in installation prompts)
        name: "KLASNO App",

        // Short name (shown on home screen, max 12 characters)
        short_name: "KLASNO",

        // Description of the app
        description: "KLASNO - Your trusted shopping companion",

        // Display mode: standalone = full-screen app experience
        display: "standalone",

        // Starting URL when app is launched
        start_url: "./",

        // Scope of the service worker
        scope: "./",

        // Color scheme
        theme_color: "#169bcb",
        background_color: "#fafafa",

        // Application categories
        categories: ["shopping"],

        // App icons for different device sizes
        icons: [
          // 192x192 - Most common for Android
          {
            src: "icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          // 192x192 maskable for adaptive icons (Android 8+)
          {
            src: "icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          // 512x512 - Fallback for larger displays
          {
            src: "icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          // 512x512 maskable
          {
            src: "icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],

        // Screenshots for app store listings
        screenshots: [
          {
            src: "icons/screenshot-narrow.png",
            sizes: "540x720",
            type: "image/png",
            form_factor: "narrow",
          },
          {
            src: "icons/screenshot-wide.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
          },
        ],
      },
    }),
  ],

  // Module resolution (path aliases)
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  // Development server configuration (critical for Docker)
  server: {
    // Listen on all network interfaces (0.0.0.0 = all IPs)
    // Required to access dev server from host machine
    host: "0.0.0.0",

    // Port number
    port: 5174,

    // Fail if port is already in use (prevents conflicts)
    strictPort: true,

    // Enable HMR (Hot Module Reload) in Docker
    // HMR allows browser auto-refresh when files change
    hmr: {
      // localhost can be used; for remote access, replace with your server IP
      host: "localhost",
      port: 5174,
      protocol: "http",
    },

    // Watch configuration for file changes
    watch: {
      // Use polling for file system watching (required in Docker)
      // Native watching (fs.watch) doesn't work well in Docker volumes
      usePolling: true,

      // Poll interval in milliseconds (1000ms = 1 second)
      interval: 1000,

      // Ignore these directories to improve performance
      ignored: [
        "**/node_modules/**",
        "**/.git/**",
        "**/.vite/**",
        "**/dist/**",
        "**/.DS_Store",
      ],
    },
  },
});
