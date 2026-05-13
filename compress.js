import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoryPath = 'public/images';

async function compressImages(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await compressImages(fullPath);
    } else if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const ext = path.extname(file).toLowerCase();
      const tempPath = fullPath + '.tmp';
      
      try {
        let image = sharp(fullPath);
        
        // Resize massive images but keep them high quality
        image = image.resize({ width: 1200, withoutEnlargement: true });

        if (ext === '.png') {
          await image.png({ quality: 80, compressionLevel: 9 }).toFile(tempPath);
        } else if (ext === '.jpg' || ext === '.jpeg') {
          await image.jpeg({ quality: 80, progressive: true }).toFile(tempPath);
        }

        const oldSize = stat.size;
        const newSize = fs.statSync(tempPath).size;
        
        if (newSize < oldSize) {
          fs.renameSync(tempPath, fullPath);
          console.log(`Compressed ${file}: ${(oldSize/1024).toFixed(1)}kb -> ${(newSize/1024).toFixed(1)}kb (${Math.round((1 - newSize/oldSize)*100)}% reduction)`);
        } else {
          fs.unlinkSync(tempPath);
          console.log(`Skipped ${file}: Already highly optimized.`);
        }
      } catch (error) {
        console.error(`Error compressing ${file}:`, error);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      }
    }
  }
}

compressImages(directoryPath).then(() => console.log('Compression complete!'));
