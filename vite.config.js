import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utilities: ['./src/main.jsx'],
        }
    }
    },
    chunkSizeWarningLimit: 2000, // Adjust this value as needed
  }
})
