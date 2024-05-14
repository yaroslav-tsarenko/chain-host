import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist", // change this to the name of your desired output directory
  },
  plugins: [react()],
})