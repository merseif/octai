import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    open: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {},
    cors: false
  }
});