import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

// Đổi tên repo GitHub ở đây nếu bạn đổi repo. Với custom domain, để BASE = "/".
const REPO = "NguyenPhuongLy-25050977";

export default defineConfig(() => ({
  // Chỉ prefix repo khi build cho GitHub Pages (workflow set GH_PAGES=1).
  // Còn lại (dev, Lovable preview/published) giữ "/" để asset load đúng.
  base: process.env.GH_PAGES ? `/${REPO}/` : "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  server: { host: "::", port: 8080, strictPort: true },
  build: { outDir: "dist" },
}));
