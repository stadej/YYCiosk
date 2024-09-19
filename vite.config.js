import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

// because __dirname was showing undefined
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: '/YYCiosk',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
