import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Rafael2727-portfolio-website/', // Matches your GitHub repo name
});