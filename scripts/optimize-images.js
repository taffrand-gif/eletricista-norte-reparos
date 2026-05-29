#!/usr/bin/env node

/**
 * Script d'optimisation des images pour staff-seekers
 *
 * Génère des versions WebP et des srcsets responsives pour toutes les images
 * Tailles générées: 320w, 640w, 1024w, 1920w
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'client/public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const OUTPUT_DIR = path.join(PUBLIC_DIR, 'images-optimized');

// Tailles responsive à générer
const SIZES = [320, 640, 1024, 1920];

// Extensions d'images à traiter
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

/**
 * Créer les dossiers de sortie
 */
function ensureOutputDir(dir) {
 if (!fs.existsSync(dir)) {
 fs.mkdirSync(dir, { recursive: true });
 }
}

/**
 * Obtenir tous les fichiers images récursivement
 */
function getImageFiles(dir, fileList = []) {
 const files = fs.readdirSync(dir);

 files.forEach(file => {
 const filePath = path.join(dir, file);
 const stat = fs.statSync(filePath);

 if (stat.isDirectory()) {
 getImageFiles(filePath, fileList);
 } else {
 const ext = path.extname(file).toLowerCase();
 if (IMAGE_EXTENSIONS.includes(ext)) {
 fileList.push(filePath);
 }
 }
 });

 return fileList;
}

/**
 * Optimiser une image et générer les versions responsive
 */
async function optimizeImage(inputPath) {
 const relativePath = path.relative(IMAGES_DIR, inputPath);
 const outputDir = path.join(OUTPUT_DIR, path.dirname(relativePath));
 const baseName = path.basename(inputPath, path.extname(inputPath));

 ensureOutputDir(outputDir);

 console.log(`Optimisation: ${relativePath}`);

 try {
 const image = sharp(inputPath);
 const metadata = await image.metadata();

 // Générer les versions responsive
 for (const width of SIZES) {
 // Ne pas upscaler les images
 if (width > metadata.width) continue;

 const outputPath = path.join(outputDir, `${baseName}-${width}w.webp`);

 await image
 .clone()
 .resize(width, null, {
 withoutEnlargement: true,
 fit: 'inside'})
 .webp({ quality: 80 })
 .toFile(outputPath);

 console.log(` ✓ ${width}w → ${path.basename(outputPath)}`);
 }

 // Générer la version WebP par défaut (taille originale)
 const defaultOutputPath = path.join(outputDir, `${baseName}.webp`);
 await image
 .clone()
 .webp({ quality: 80 })
 .toFile(defaultOutputPath);

 console.log(` ✓ default → ${path.basename(defaultOutputPath)}`);

 } catch (error) {
 console.error(` ✗ Erreur: ${error.message}`);
 }
}

/**
 * Fonction principale
 */
async function main() {
 console.log('🖼️ Optimisation des images pour staff-seekers\n');

 if (!fs.existsSync(IMAGES_DIR)) {
 console.error(`❌ Dossier images introuvable: ${IMAGES_DIR}`);
 process.exit(1);
 }

 // Obtenir toutes les images
 const imageFiles = getImageFiles(IMAGES_DIR);
 console.log(`📁 ${imageFiles.length} images trouvées\n`);

 // Optimiser chaque image
 for (const imagePath of imageFiles) {
 await optimizeImage(imagePath);
 }

 console.log('\n✅ Optimisation terminée!');
 console.log(`📂 Images optimisées dans: ${OUTPUT_DIR}`);
}

main().catch(error => {
 console.error('❌ Erreur fatale:', error);
 process.exit(1);
});
