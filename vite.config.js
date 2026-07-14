import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true // Permite acceder desde iPhone/iPad conectados a la misma red WiFi
  }
})
