import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

export default defineConfig({
  plugins: [react()],
  root: fileURLToPath(new URL('./client', import.meta.url)),
  build: {
    outDir: fileURLToPath(new URL('./dist/public', import.meta.url)),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./client/src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./attached_assets', import.meta.url)),
    },
  },
});
