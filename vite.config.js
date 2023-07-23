import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginRequire from "vite-plugin-require";
import requireTransform from 'vite-plugin-require-transform';
import ViteRequireContext from '@originjs/vite-plugin-require-context'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), requireTransform({fileRegex: /(.jsx?|.tsx?|.vue)$/}), vitePluginRequire({ fileRegex:/(.jsx?|.tsx?|.vue)$/ })],
  server: {
    port: 3000,
  },
  
})

