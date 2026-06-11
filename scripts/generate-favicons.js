const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../client/public');
const svgPath = path.join(publicDir, 'favicon.svg');

async function generateFavicons() {
 console.log('🎨 Génération des favicons pour ...\n');

 try {
 // Lire le SVG
 const svgBuffer = fs.readFileSync(svgPath);

 // Générer apple-touch-icon.png (180x180)
 await sharp(svgBuffer)
 .resize(180, 180)
 .png()
 .toFile(path.join(publicDir, 'apple-touch-icon.png'));
 console.log('✅ apple-touch-icon.png (180x180)');

 // Générer favicon-32x32.png
 await sharp(svgBuffer)
 .resize(32, 32)
 .png()
 .toFile(path.join(publicDir, 'favicon-32x32.png'));
 console.log('✅ favicon-32x32.png');

 // Générer favicon-16x16.png
 await sharp(svgBuffer)
 .resize(16, 16)
 .png()
 .toFile(path.join(publicDir, 'favicon-16x16.png'));
 console.log('✅ favicon-16x16.png');

 // Générer favicon.ico (16x16 + 32x32 combinés)
 const ico16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
 const ico32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
 
 // Note: Pour un vrai .ico, il faudrait une lib spécialisée
 // Pour l'instant, on utilise juste le 32x32 comme .ico
 await sharp(svgBuffer)
 .resize(32, 32)
 .png()
 .toFile(path.join(publicDir, 'favicon.ico'));
 console.log('✅ favicon.ico (32x32)');

 console.log('\n🎉 Favicons générés avec succès!');
 } catch (error) {
 console.error('❌ Erreur:', error.message);
 process.exit(1);
 }
}

generateFavicons();
