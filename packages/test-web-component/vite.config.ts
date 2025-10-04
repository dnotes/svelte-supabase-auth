import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    fs: {
      allow: ['../main/dist/supabase-auth.css', '.']
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
})
