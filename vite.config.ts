import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

// Đổi tên repo GitHub ở đây nếu bạn đổi repo. Với custom domain, để BASE = "/".
const REPO = "warm-glow-reactor";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? `/${REPO}/` : "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  server: { host: "::", port: 8080, strictPort: true },
  build: { outDir: "dist" },
}));
