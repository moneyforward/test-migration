import generouted from '@generouted/react-router/plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), generouted()],

  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'stml-app-[name].js',
        chunkFileNames: 'stml-app-[name].js',
        assetFileNames: 'stml-app-[name].[ext]',
      },
    },
  },
  server: {
    port: 5001,
    host: true,
  },
  preview: {
    port: 3001,
  },
  esbuild: {
    jsxInject: "import React from 'react'",
  },
});
