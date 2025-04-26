import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    open: false, // Ouvre automatiquement le navigateur
  },
  build: {
    outDir: 'build' // Change le dossier de sortie à "build"
  }
});