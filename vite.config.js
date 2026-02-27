import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative base makes assets resolve correctly on GitHub Pages
  // even if repo name/path changes.
  base: './',
});
