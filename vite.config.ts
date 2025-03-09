// import path from 'path'
import { fileURLToPath, URL } from 'url';

import { defineConfig, splitVendorChunkPlugin, type PluginOption } from 'vite';
import stylelint from 'vite-plugin-stylelint';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 3001
  },
  build: {
    // generate manifest.json in outDir
    chunkSizeWarningLimit: 16000,
    manifest: false,
    rollupOptions: {
      // overwrite default .html entry
      input: '/src/main.tsx',
      output: {
        entryFileNames: 'assets/[name].js'
      }
    }
  },
  plugins: [
    react() as PluginOption,
    splitVendorChunkPlugin(),
    stylelint({
      fix: true,
      dev: true,
      include: ['src/**/*.ts']
    }) as PluginOption
  ],
  resolve: {
    alias: [
      // '@': path.resolve(__dirname, './src')
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      }
    ]
  },
  define: {
    global: {}
  }
});
