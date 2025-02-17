// vite.config.js
import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/css/filament.css',
        'resources/js/filament.js'
      ],
      refresh: [
        'app/Filament/**/*.php',
        'resources/views/filament/**/*.blade.php'
      ]
    }),
    tailwindcss()
  ]
})