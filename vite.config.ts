import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/0f5ff06a-aba2-43cb-8f11-3ad4fc82bdfa/preview/',
  plugins: [react()],
  server: {
    port: 5137,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5137,
    },
  },
})
