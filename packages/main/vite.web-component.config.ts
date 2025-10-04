import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true
      }
    })
  ],
  resolve: {
    alias: {
      '$lib': resolve(__dirname, 'src/lib')
    }
  },
  build: {
    outDir: 'dist-web-component',
    lib: {
      entry: resolve(__dirname, 'src/lib/web-component.ts'),
      name: 'SupabaseAuthWebComponent',
      fileName: 'supabase-auth-web-component',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['@supabase/supabase-js'],
      output: {
        globals: {
          '@supabase/supabase-js': 'Supabase'
        }
      }
    }
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
})

