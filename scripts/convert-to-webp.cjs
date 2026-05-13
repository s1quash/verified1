const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGE_DIRS = [
  'public/images',
  'src/assets/images'
];

async function convertDir(dir) {
  const absoluteDir = path.resolve(process.cwd(), dir);
  if (!fs.existsSync(absoluteDir)) return;

  const entries = fs.readdirSync(absoluteDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(absoluteDir, entry.name);
    
    if (entry.isDirectory()) {
      await convertDir(fullPath);
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (['.png', '.jpg', '.jpeg'].includes(ext)) {
      const newName = entry.name.replace(ext, '.webp');
      const newPath = path.join(absoluteDir, newName);

      console.log(`Converting: ${entry.name} -> ${newName}`);

      try {
        await sharp(fullPath)
          .webp({ quality: 85 })
          .toFile(newPath);
        
        // Delete original
        fs.unlinkSync(fullPath);
        console.log(`  ✅ Success`);
      } catch (err) {
        console.error(`  ❌ Error: ${err.message}`);
      }
    }
  }
}

async function run() {
  console.log('🚀 Starting webp conversion...');
  for (const dir of IMAGE_DIRS) {
    await convertDir(dir);
  }
  console.log('✨ Conversion complete!');
}

run().catch(console.error);
