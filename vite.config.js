import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Diese Zeile sorgt dafür, dass Pfade immer relativ gefunden werden
})
