import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/VKHackerNews/',
  plugins: [react()],
  server: {
    port: 3000,
  },
});
