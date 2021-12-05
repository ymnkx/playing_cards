import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/playing_cards/',
  build: {
    outDir: '../docs',
    assetsDir: './assets',
    // lib: {
    //   entry: 'src/my-element.ts',
    //   formats: ['es']
    // },
    // rollupOptions: {
    //   external: /^lit/
    // }
  },
});
