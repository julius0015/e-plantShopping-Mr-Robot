import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/e-plantShopping/' : '/',
  plugins: [react()],
  server: {
    host: true, // Allow external devices to access the app
  },
  preview: {
    host: true, // Allow preview access from LAN
  },
});
