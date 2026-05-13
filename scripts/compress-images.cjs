const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGE_DIRS = [
  'public/images',
  'public/images/proofs'
];

async function compressImages() {
  for (const dir of IMAGE_DIRS) {
    const absoluteDir = path.resolve(process.cwd(), dir);
    if (!fs.existsSync(absoluteDir)) continue;

    const files = fs.readdirSync(absoluteDir);
    
    for (const file of files) {
      const filePath = path.join(absoluteDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) continue;

      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        // Skip small files (under 50KB) as they are likely already optimized or not worth it
        if (stat.size < 50 * 1024) continue;

        console.log(`Processing: ${file} (${(stat.size / 1024).toFixed(2)} KB)`);
        
        const tempPath = filePath + '.tmp';
        
        try {
          let pipeline = sharp(filePath);
          
          if (ext === '.png') {
            pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
          } else {
            pipeline = pipeline.jpeg({ quality: 80, progressive: true });
          }

          await pipeline.toFile(tempPath);
          
          const newStat = fs.statSync(tempPath);
          const savings = ((1 - newStat.size / stat.size) * 100).toFixed(2);
          
          if (newStat.size < stat.size) {
            fs.renameSync(tempPath, filePath);
            console.log(`  ✅ Optimized! New size: ${(newStat.size / 1024).toFixed(2)} KB (${savings}% saved)`);
          } else {
            fs.unlinkSync(tempPath);
            console.log(`  ℹ️  Skipped (No size reduction possible)`);
          }
        } catch (err) {
          console.error(`  ❌ Error processing ${file}:`, err.message);
          if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        }
      }
    }
  }
}

compressImages().catch(console.error);
