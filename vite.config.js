import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src')
    }
  },
  server: {
    hmr: true,
    proxy: {
      '/api': {
        target: 'http://159.75.169.224:1235',
        changeOrigin: true
      }
    }
  },
})
