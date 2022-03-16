import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.join(__dirname, 'src') },
      {
        find: '~wallet',
        replacement: path.join(__dirname, 'src/features/wallet'),
      },
    ],
  },
  plugins: [react()],
})
