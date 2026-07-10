// Post-build cho GitHub Pages:
// 1) Copy dist/index.html -> dist/404.html (SPA fallback, tránh 404 khi refresh)
// 2) Tạo .nojekyll để GitHub Pages không bỏ qua file bắt đầu bằng "_"
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
if (!existsSync(DIST)) {
  console.error("[postbuild] dist/ không tồn tại. Chạy `bun run build` trước.");
  process.exit(1);
}

writeFileSync(join(DIST, "404.html"), readFileSync(join(DIST, "index.html"), "utf8"));
console.log("[postbuild] dist/404.html được tạo (SPA fallback).");

writeFileSync(join(DIST, ".nojekyll"), "");
console.log("[postbuild] dist/.nojekyll được tạo.");
