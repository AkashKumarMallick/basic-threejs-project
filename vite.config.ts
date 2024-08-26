import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png', 'android-chrome-192x192.png'],
      manifest: {
        name: 'Your App Name',
        short_name: 'AppName',
        description: 'Your app description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate React and React-DOM into their own chunk
          react: ['react', 'react-dom'],

          // Split Firebase into its own chunk
          firebase: ['firebase'],

          // Split Bootstrap and React-Bootstrap into their own chunk
          bootstrap: ['react-bootstrap', 'bootstrap'],

          // Split Three.js related libraries into a chunk
          three: ['three', '@react-three/fiber', '@react-three/drei'],
        },
      },
    },
    cssCodeSplit: true,  // Enables CSS splitting
  },
});
