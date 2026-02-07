import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

const target = process.env.ASPNETCORE_HTTPS_PORT 
  ? `https://localhost:${process.env.ASPNETCORE_HTTPS_PORT}` 
  : process.env.ASPNETCORE_URLS 
    ? process.env.ASPNETCORE_URLS.split(';')[0] 
    : 'https://localhost:7298';

export default defineConfig({
  plugins: [plugin()],
  base: '/English-App/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '^/weatherforecast': {
        target,
        secure: false
      }
    },
    port: 5173,
    https: false
  }
});
