// Post-build cho GitHub Pages:
// 1) Copy dist/index.html -> dist/404.html (SPA fallback, tránh 404 khi refresh)
// 2) Rewrite mọi URL "/warm-glow-reactor/__l5e/..." -> "https://warm-glow-reactor.lovable.app/__l5e/..."
//    (vì ảnh CDN nằm trên hạ tầng Lovable, không có trên github.io)
// 3) Tạo file .nojekyll để GitHub Pages không bỏ qua file bắt đầu bằng "_"
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const CDN = "https://warm-glow-reactor.lovable.app";

if (!existsSync(DIST)) {
  console.error("[postbuild] dist/ không tồn tại. Chạy `bun run build` trước.");
  process.exit(1);
}

// 1) SPA fallback
const indexHtml = readFileSync(join(DIST, "index.html"), "utf8");
writeFileSync(join(DIST, "404.html"), indexHtml);
console.log("[postbuild] dist/404.html được tạo (SPA fallback).");

// 2) Rewrite CDN
const exts = new Set([".js", ".css", ".html", ".map"]);
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (exts.has(p.slice(p.lastIndexOf(".")))) {
      const before = readFileSync(p, "utf8");
      const after = before
        .replaceAll(`/warm-glow-reactor/__l5e/`, `${CDN}/__l5e/`)
        .replaceAll(`"/__l5e/`, `"${CDN}/__l5e/`);
      if (before !== after) writeFileSync(p, after);
    }
  }
}
walk(DIST);
console.log(`[postbuild] Rewrite CDN xong (base = ${CDN}).`);

// 3) .nojekyll
writeFileSync(join(DIST, ".nojekyll"), "");
console.log("[postbuild] dist/.nojekyll được tạo.");
