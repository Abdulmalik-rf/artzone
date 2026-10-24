import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // absolute asset URLs: pages live at nested paths (/en/work/)
  base: '/',
})
