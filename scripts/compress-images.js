import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const TARGET_DIRS = [
  'public/images',
  'public/images/reviews',
  'public/images/blog'
];

async function compressImages() {
  console.log('🚀 Starting image compression...');
  
  for (const dir of TARGET_DIRS) {
    const absoluteDir = path.resolve(dir);
    try {
      const files = await fs.readdir(absoluteDir);
      
      for (const file of files) {
        const filePath = path.join(absoluteDir, file);
        const ext = path.extname(file).toLowerCase();
        
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
          const stats = await fs.stat(filePath);
          const originalSize = stats.size;
          
          const buffer = await fs.readFile(filePath);
          let pipeline = sharp(buffer);
          
          if (ext === '.png') {
            pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
          } else if (ext === '.jpg' || ext === '.jpeg') {
            pipeline = pipeline.jpeg({ quality: 80 });
          } else if (ext === '.webp') {
            pipeline = pipeline.webp({ quality: 80 });
          }
          
          const outputBuffer = await pipeline.toBuffer();
          const newSize = outputBuffer.length;
          
          if (newSize < originalSize) {
            await fs.writeFile(filePath, outputBuffer);
            const saved = ((originalSize - newSize) / originalSize * 100).toFixed(2);
            console.log(`✅ Compressed ${file}: ${saved}% reduction (${(originalSize/1024).toFixed(1)}KB -> ${(newSize/1024).toFixed(1)}KB)`);
          } else {
            console.log(`⏭️ Skipped ${file} (already optimized)`);
          }
        }
      }
    } catch (err) {
      console.error(`❌ Error processing directory ${dir}:`, err.message);
    }
  }
  
  console.log('✨ Compression complete!');
}

compressImages();
