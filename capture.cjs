const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const firms = [
  { name: 'fxify', url: 'https://fxify.com' },
  { name: 'blueberry', url: 'https://blueberryfunded.com' },
  { name: 'fundingpips', url: 'https://fundingpips.com' },
  { name: 'dna', url: 'https://dnafunded.com' },
  { name: 'moneta', url: 'https://monetafunded.com' },
  { name: 'darwinex', url: 'https://www.darwinexzero.com' }
];

async function captureScreenshots() {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  
  for (const firm of firms) {
    try {
      console.log(`Capturing ${firm.name}...`);
      const page = await browser.newPage();
      await page.setViewport({ width: 1280, height: 720 });
      // Fake user agent to avoid basic blocks
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');
      
      await page.goto(firm.url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Wait an extra 2 seconds for animations
      await new Promise(r => setTimeout(r, 2000));
      
      const destPath = path.join(__dirname, 'public', 'images', `${firm.name}.png`);
      await page.screenshot({ path: destPath, clip: { x: 0, y: 0, width: 1280, height: 720 } });
      console.log(`Saved ${destPath}`);
      await page.close();
    } catch (err) {
      console.error(`Failed to capture ${firm.name}:`, err.message);
    }
  }
  
  await browser.close();
}

captureScreenshots();
