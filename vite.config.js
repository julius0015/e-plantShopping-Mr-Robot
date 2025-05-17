import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'your-repo-name' with the exact name of your GitHub repository.
// If your repository is named 'e-plantShopping-Mr-Robot', use that.
const repoName = '/e-plantShopping-Mr-Robot/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? repoName : '/',
  server: {
    open: true,
  },
  build: {
    sourcemap: true, // Recommended for debugging production builds
  },
})