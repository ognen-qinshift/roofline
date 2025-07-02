import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ command }) => ({
  plugins: [react(), svgr()],
  base: command === 'serve' ? '/' : '/roofline/',
  assetsInclude: ['**/*.m4v'],
}));