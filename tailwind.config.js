// tailwind.config.js
import preset from './vendor/filament/support/tailwind.config.preset'

export default {
  presets: [preset],
  content: [
    './app/Filament/**/*.php',
    './resources/views/filament/**/*.blade.php',
    './vendor/filament/**/*.blade.php',
    './resources/js/**/*.js'
  ],
  corePlugins: {
    preflight: false // Preserve Filament's base styles
  }
}