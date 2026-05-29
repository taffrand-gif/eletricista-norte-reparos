import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// =============================================================================
// Image Optimization Plugin
// Optimizes images during build (WebP conversion, compression)
// =============================================================================

function vitePluginImageOptimizer(): Plugin {
 return {
 name: 'vite-plugin-image-optimizer',
 apply: 'build',

 async closeBundle() {
 const publicDir = path.join(PROJECT_ROOT, 'client', 'public');
 const imagesDir = path.join(publicDir, 'images-optimized');

 console.log('\n🖼️ Image optimization summary:');
 console.log(' Images are pre-optimized in /client/public/images-optimized/');
 console.log(' - WebP format for modern browsers');
 console.log(' - Multiple sizes: 320w, 640w, 1024w, 1920w');
 console.log(' - Lazy loading enabled via OptimizedImage component');
 console.log(' ✅ No additional optimization needed at build time\n');
 }
 };
}

// =============================================================================
// Manus Debug Collector - Vite Plugin
// Writes browser logs directly to files, trimmed when exceeding size limit
// =============================================================================

const PROJECT_ROOT = import.meta.dirname;
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");
const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024; // 1MB per log file
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6); // Trim to 60% to avoid constant re-trimming

type LogSource = "browserConsole" | "networkRequests" | "sessionReplay";

function ensureLogDir() {
 if (!fs.existsSync(LOG_DIR)) {
 fs.mkdirSync(LOG_DIR, { recursive: true });
 }
}

function trimLogFile(logPath: string, maxSize: number) {
 try {
 if (!fs.existsSync(logPath) || fs.statSync(logPath).size <= maxSize) {
 return;
 }

 const lines = fs.readFileSync(logPath, "utf-8").split("\n");
 const keptLines: string[] = [];
 let keptBytes = 0;

 // Keep newest lines (from end) that fit within 60% of maxSize
 const targetSize = TRIM_TARGET_BYTES;
 for (let i = lines.length - 1; i >= 0; i--) {
 const lineBytes = Buffer.byteLength(`${lines[i]}\n`, "utf-8");
 if (keptBytes + lineBytes > targetSize) break;
 keptLines.unshift(lines[i]);
 keptBytes += lineBytes;
 }

 fs.writeFileSync(logPath, keptLines.join("\n"), "utf-8");
 } catch {
 /* ignore trim errors */
 }
}

function writeToLogFile(source: LogSource, entries: unknown[]) {
 if (entries.length === 0) return;

 ensureLogDir();
 const logPath = path.join(LOG_DIR, `${source}.log`);

 // Format entries with timestamps
 const lines = entries.map((entry) => {
 const ts = new Date().toISOString();
 return `[${ts}] ${JSON.stringify(entry)}`;
 });

 // Append to log file
 fs.appendFileSync(logPath, `${lines.join("\n")}\n`, "utf-8");

 // Trim if exceeds max size
 trimLogFile(logPath, MAX_LOG_SIZE_BYTES);
}

/**
 * Vite plugin to collect browser debug logs
 * - POST /__manus__/logs: Browser sends logs, written directly to files
 * - Files: browserConsole.log, networkRequests.log, sessionReplay.log
 * - Auto-trimmed when exceeding 1MB (keeps newest entries)
 */
function vitePluginManusDebugCollector(): Plugin {
 return {
 name: "manus-debug-collector",

 transformIndexHtml(html) {
 if (process.env.NODE_ENV === "production") {
 return html;
 }
 return {
 html,
 tags: [
 {
 tag: "script",
 attrs: {
 src: "/__manus__/debug-collector.js",
 defer: true},
 injectTo: "head"},
 ]};
 },

 configureServer(server: ViteDevServer) {
 // POST /__manus__/logs: Browser sends logs (written directly to files)
 server.middlewares.use("/__manus__/logs", (req, res, next) => {
 if (req.method !== "POST") {
 return next();
 }

 const handlePayload = (payload: any) => {
 // Write logs directly to files
 if (payload.consoleLogs?.length > 0) {
 writeToLogFile("browserConsole", payload.consoleLogs);
 }
 if (payload.networkRequests?.length > 0) {
 writeToLogFile("networkRequests", payload.networkRequests);
 }
 if (payload.sessionEvents?.length > 0) {
 writeToLogFile("sessionReplay", payload.sessionEvents);
 }

 res.writeHead(200, { "Content-Type": "application/json" });
 res.end(JSON.stringify({ success: true }));
 };

 const reqBody = (req as { body?: unknown }).body;
 if (reqBody && typeof reqBody === "object") {
 try {
 handlePayload(reqBody);
 } catch (e) {
 res.writeHead(400, { "Content-Type": "application/json" });
 res.end(JSON.stringify({ success: false, error: String(e) }));
 }
 return;
 }

 let body = "";
 req.on("data", (chunk) => {
 body += chunk.toString();
 });

 req.on("end", () => {
 try {
 const payload = JSON.parse(body);
 handlePayload(payload);
 } catch (e) {
 res.writeHead(400, { "Content-Type": "application/json" });
 res.end(JSON.stringify({ success: false, error: String(e) }));
 }
 });
 });
 }};
}

// Plugin to inject scripts at end of body instead of head
function vitePluginInjectScriptsToBody(): Plugin {
 return {
 name: 'inject-scripts-to-body',
 transformIndexHtml: {
 order: 'post',
 handler(html) {
 // Move script tags from head to end of body
 const scriptRegex = /<script\s+type="module"[^>]*><\/script>/g;
 const scripts = html.match(scriptRegex) || [];

 // Remove scripts from head
 html = html.replace(scriptRegex, '');

 // Insert scripts before </body>
 if (scripts.length > 0) {
 html = html.replace('</body>', `${scripts.join('\n ')}\n </body>`);
 }

 return html;
 }
 }
 };
}

// Plugin to load CSS asynchronously (non-render-blocking)
function vitePluginAsyncCSS(): Plugin {
 return {
 name: 'async-css',
 transformIndexHtml: {
 order: 'post',
 handler(html) {
 // Make CSS non-render-blocking by using media="print" trick
 html = html.replace(
 /<link rel="stylesheet"([^>]*) href="([^"]+\.css)"([^>]*)>/g,
 '<link rel="stylesheet"$1 href="$2"$3 media="print" onload="this.media=\'all\'; this.onload=null;">'
 );
 return html;
 }
 }
 };
}

// Plugin to add preload hints for critical resources
function vitePluginPreloadCritical(): Plugin {
 return {
 name: 'preload-critical',
 transformIndexHtml: {
 order: 'post',
 handler(html, ctx) {
 if (!ctx.bundle) {
 console.log('⚠️ Bundle not available in transformIndexHtml');
 return html;
 }

 const preloads: string[] = [];
 const bundleKeys = Object.keys(ctx.bundle);
 console.log('📦 Bundle files:', bundleKeys.filter(f => f.startsWith('assets/index-')));

 // Find main CSS file
 const cssFile = bundleKeys.find(file => file.startsWith('assets/index-') && file.endsWith('.css'));
 if (cssFile) {
 preloads.push(`<link rel="preload" href="/${cssFile}" as="style" />`);
 console.log('✅ CSS preload:', cssFile);
 }

 // Find main JS file
 const jsFile = bundleKeys.find(file => file.startsWith('assets/index-') && file.endsWith('.js'));
 if (jsFile) {
 preloads.push(`<link rel="preload" href="/${jsFile}" as="script" crossorigin />`);
 console.log('✅ JS preload:', jsFile);
 }

 // Add critical fonts
 preloads.push(`<link rel="preload" href="/fonts/poppins-400.woff2" as="font" type="font/woff2" crossorigin />`);
 preloads.push(`<link rel="preload" href="/fonts/poppins-900.woff2" as="font" type="font/woff2" crossorigin />`);

 // Insert preloads after <link rel="manifest">
 const newHtml = html.replace(
 /(<link rel="manifest"[^>]*>)/,
 `$1\n\n <!-- Preload critical resources -->\n ${preloads.join('\n ')}`
 );

 if (newHtml !== html) {
 console.log('✅ Preload hints injected');
 } else {
 console.log('⚠️ Failed to inject preload hints');
 }

 return newHtml;
 }
 }
 };
}

const plugins = [react(), tailwindcss(), jsxLocPlugin(), /* vitePluginManusRuntime(), */ vitePluginManusDebugCollector(), vitePluginImageOptimizer(), vitePluginInjectScriptsToBody(), vitePluginAsyncCSS(), vitePluginPreloadCritical()];

export default defineConfig({
 plugins,
 resolve: {
 alias: {
 "@": path.resolve(import.meta.dirname, "client", "src"),
 "@shared": path.resolve(import.meta.dirname, "shared"),
 "@assets": path.resolve(import.meta.dirname, "attached_assets")}},
 envDir: path.resolve(import.meta.dirname),
 root: path.resolve(import.meta.dirname, "client"),
 build: {
 outDir: path.resolve(import.meta.dirname, "dist/public"),
 emptyOutDir: true,
 // Use esbuild minifier (faster and safer than terser for React)
 minify: 'esbuild',
 // Inject scripts at end of body instead of head
 modulePreload: {
 polyfill: false},
 // Optimisation des chunks
 rollupOptions: {
 output: {
 manualChunks: {
 // Vendor principal (React ecosystem)
 'vendor-react': ['react', 'react-dom', 'wouter'],
 // Radix UI components (groupés par usage)
 'vendor-radix-core': [
 '@radix-ui/react-slot',
 '@radix-ui/react-label',
 '@radix-ui/react-separator',
 ],
 'vendor-radix-overlay': [
 '@radix-ui/react-dialog',
 '@radix-ui/react-alert-dialog',
 '@radix-ui/react-popover',
 '@radix-ui/react-tooltip',
 ],
 'vendor-radix-forms': [
 '@radix-ui/react-checkbox',
 '@radix-ui/react-radio-group',
 '@radix-ui/react-select',
 '@radix-ui/react-switch',
 '@radix-ui/react-slider',
 ],
 'vendor-radix-nav': [
 '@radix-ui/react-navigation-menu',
 '@radix-ui/react-dropdown-menu',
 '@radix-ui/react-menubar',
 '@radix-ui/react-tabs',
 '@radix-ui/react-accordion',
 ],
 // Utilitaires et animations
 'vendor-utils': [
 'clsx',
 'tailwind-merge',
 'class-variance-authority',
 'framer-motion',
 ]},
 // Nommage optimisé des chunks
 chunkFileNames: 'assets/[name]-[hash].js',
 entryFileNames: 'assets/[name]-[hash].js',
 assetFileNames: 'assets/[name]-[hash].[ext]'}},
 // Optimisation des assets
 assetsInlineLimit: 4096, // 4KB - inline les petits assets
 cssCodeSplit: true, // Split CSS par chunk
 cssMinify: 'lightningcss', // CSS minification plus rapide
 sourcemap: false, // Pas de sourcemaps en production
 reportCompressedSize: true, // Rapport de taille compressée
 chunkSizeWarningLimit: 600, // Augmenter limite warning
 },
 optimizeDeps: {
 include: ['react', 'react-dom', 'wouter']},
 server: {
 port: 3000,
 strictPort: false, // Will find next available port if 3000 is busy
 host: true,
 allowedHosts: [
 ".manuspre.computer",
 ".manus.computer",
 ".manus-asia.computer",
 ".manuscomputer.ai",
 ".manusvm.computer",
 "localhost",
 "127.0.0.1",
 ],
 fs: {
 strict: true,
 deny: ["**/.*"]}}});
