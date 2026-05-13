const puppeteer = require('puppeteer');
const path = require('path');

async function captureFxify() {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  
  try {
    console.log(`Capturing fxify...`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');
    
    await page.goto('https://fxify.com', { waitUntil: 'networkidle2', timeout: 45000 });
    
    await new Promise(r => setTimeout(r, 4000));
    
    await page.evaluate(() => {
      // Force hide fixed position overlays that take up full screen
      const elements = document.querySelectorAll('*');
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        if (style.position === 'fixed' && parseInt(style.zIndex, 10) > 100) {
          el.style.display = 'none';
        }
      });
      
      // Scroll down slightly to get past top banners
      window.scrollBy(0, 150);
    });
    
    await new Promise(r => setTimeout(r, 1000));
    
    const destPath = path.join(__dirname, 'public', 'images', `fxify.png`);
    await page.screenshot({ path: destPath, clip: { x: 0, y: 150, width: 1280, height: 720 } });
    console.log(`Saved ${destPath}`);
  } catch (err) {
    console.error(`Failed to capture fxify:`, err.message);
  }
  
  await browser.close();
}

captureFxify();
