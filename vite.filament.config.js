import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
  plugins: [
    laravel({
      hotFile: 'public/filament.hot',
      buildDirectory: 'filament'
    })
  ]
})