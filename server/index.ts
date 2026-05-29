import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import compression from "compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
 const app = express();
 const server = createServer(app);

 // Compression Brotli/Gzip pour tous les assets
 app.use(compression({
 level: 6, // Niveau de compression (0-9)
 threshold: 1024, // Compresser seulement si > 1KB
 filter: (req, res) => {
 if (req.headers['x-no-compression']) {
 return false;
 }
 return compression.filter(req, res);
 }
 }));

 // Serve static files from dist/public in production
 const staticPath =
 process.env.NODE_ENV === "production"
 ? path.resolve(__dirname, "public")
 : path.resolve(__dirname, "..", "dist", "public");

 // Headers de cache optimisés
 app.use(express.static(staticPath, {
 maxAge: process.env.NODE_ENV === "production" ? '1y' : 0,
 setHeaders: (res, filePath) => {
 // Cache immutable pour les assets avec hash
 if (filePath.match(/\.(js|css|woff2?|jpg|jpeg|png|webp|svg|ico)$/)) {
 if (filePath.includes('-') || filePath.includes('.')) {
 res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
 } else {
 res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 jour
 }
 }

 // Pas de cache pour HTML
 if (filePath.endsWith('.html')) {
 res.setHeader('Cache-Control', 'no-cache, must-revalidate');
 }

 // Security headers
 res.setHeader('X-Content-Type-Options', 'nosniff');
 res.setHeader('X-Frame-Options', 'DENY');
 res.setHeader('X-XSS-Protection', '1; mode=block');
 res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
 }
 }));

 // Handle client-side routing - serve index.html for all routes
 app.get("*", (_req, res) => {
 res.setHeader('Cache-Control', 'no-cache, must-revalidate');
 res.sendFile(path.join(staticPath, "index.html"));
 });

 const port = process.env.PORT || 3000;

 server.listen(port, () => {
 console.log(`Server running on http://localhost:${port}/`);
 });
}

startServer().catch(console.error);
