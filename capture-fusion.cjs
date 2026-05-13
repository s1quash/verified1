const puppeteer = require('puppeteer');
const path = require('path');

async function captureFusion() {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  
  try {
    console.log(`Capturing Fusion Markets...`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');
    
    await page.goto('https://fusionmarkets.com', { waitUntil: 'networkidle2', timeout: 45000 });
    
    // Wait for animations
    await new Promise(r => setTimeout(r, 4000));
    
    const destPath = path.join(__dirname, 'public', 'images', `fusion.png`);
    await page.screenshot({ path: destPath, clip: { x: 0, y: 0, width: 1280, height: 720 } });
    console.log(`Saved ${destPath}`);
  } catch (err) {
    console.error(`Failed to capture fusion:`, err.message);
  }
  
  await browser.close();
}

captureFusion();
