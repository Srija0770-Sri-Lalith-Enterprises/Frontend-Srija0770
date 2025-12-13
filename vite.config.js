import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
    port: 3000,
    open: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    },
    // Security: Minify code in production
    minify: 'esbuild', // Fast minification (default)
    // Note: Console.log statements are already conditionally removed via import.meta.env.DEV checks
    sourcemap: false // Disable source maps in production for security (optional)
  }
})
