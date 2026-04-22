import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      tailwindcss()
    ],
    server: {
      proxy: {
        '/wp-json': {
          target: env.VITE_WOO_API_URL || 'http://localhost/shopflow',
          changeOrigin: true,
          secure: false,
        }
      }
    }
  }
})
