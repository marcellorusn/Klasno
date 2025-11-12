# Klasno – Quick Start Guide

This is a Vue 3 + Vite + Tailwind CSS + Vue Router project. Follow these steps to run it locally.

## Prerequisites

- **Node.js** 20.19.0+ or 22.12.0+ ([download](https://nodejs.org/))
- **Windows PowerShell** (comes with Windows)

## Option 1: Using Yarn (Recommended – matches package.json)

### Step 1: Enable Yarn via Corepack
Corepack comes with Node.js 16.10+. In **PowerShell** (run as Administrator if needed):

```powershell
corepack enable
corepack prepare yarn@4.10.3 --activate
```

### Step 2: Install Dependencies
Navigate to the project folder and install:

```powershell
cd C:\Users\Rusnak\Klasno
yarn install
```

### Step 3: Start the Dev Server
```powershell
yarn dev
```

You'll see output like:
```
VITE v7.1.7 ready in XX ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

Open your browser to **http://localhost:5173/** and you should see the Klasno app with Tailwind styles applied.

---

## Option 2: Using npm (Quick Fallback)

If Yarn/Corepack isn't available:

### Step 1: Install Dependencies
```powershell
cd C:\Users\Rusnak\Klasno
npm install
```

### Step 2: Start the Dev Server
```powershell
npm run dev
```

Open your browser to **http://localhost:5173/**.

---

## Troubleshooting

### Port 5173 Already in Use?
Vite will auto-pick the next available port (5174, 5175, etc.). The terminal output will show which port was selected. Use that URL in your browser.

### Browser Shows Blank Page / No Styles?
1. **Hard refresh**: Press `Ctrl + Shift + R` (or `Cmd + Shift + R` on Mac)
2. **Check dev server output**: Ensure no errors are printed; look for lines like:
   ```
   ✓ X modules transformed by @tailwindcss/vite
   ```
3. **Clear browser cache** (Ctrl + Shift + Delete in Chrome/Edge)

### Yarn Not Recognized?
- Ensure Node.js is installed: `node --version` (should be ≥20.19.0)
- Try again with Option 2 (npm), which comes with Node.js

### 500 Errors or MIME Type Warnings?
- Stop the dev server (press `q` in the terminal)
- Delete the `.vite` and `node_modules/.vite` folders (optional)
- Restart with `yarn dev` or `npm run dev`

---

## Project Structure

- `src/pages/` – 22 page components (Home, ProductListing, Cart, etc.)
- `src/components/` – Reusable UI components (Header, Navbar, ProductCard, etc.)
- `src/router/index.js` – Vue Router routes
- `src/style.css` – Tailwind directives imported by `src/main.js`
- `tailwind.config.js` – Tailwind configuration (content paths, custom colors)
- `vite.config.js` – Vite + @tailwindcss/vite plugin configuration

---

## Available npm/yarn Commands

```bash
yarn dev          # Start dev server (or: npm run dev)
yarn build        # Build for production (or: npm run build)
yarn preview      # Preview production build locally (or: npm run preview)
```

---

## Docker (Optional)

To run in Docker (requires Docker Desktop installed):

```powershell
docker-compose up
```

The app will be available at **http://localhost:5173/**.

---

**Enjoy building with Klasno!** 🚀
