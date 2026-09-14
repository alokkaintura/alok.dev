import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: {
      // Recoil's ESM build breaks on Vite's React interop (SECRET_INTERNALS).
      recoil: path.resolve(__dirname, 'node_modules/recoil/cjs/index.js'),
    },
  },
  optimizeDeps: {
    include: ['recoil'],
  },
  build: {
    commonjsOptions: {
      include: [/recoil/, /node_modules/],
    },
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['framer-motion'],
        },
      },
    },
  },
});
