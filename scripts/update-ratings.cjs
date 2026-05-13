const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const FIRMS_FILE = path.join(__dirname, '../src/data/firms.js');
const RATINGS_FILE = path.join(__dirname, '../src/data/trustpilot-ratings.json');

async function getTrustpilotData(page, url) {
  try {
    console.log(`Fetching ${url}...`);
    // Use domcontentloaded to be faster, but networkidle2 is safer for JSON-LD
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Wait a bit just in case
    await new Promise(r => setTimeout(r, 2000));

    const data = await page.evaluate(() => {
      const result = { score: null, count: null };
      
      // Try finding ALL ld+json scripts
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      for (const script of scripts) {
        try {
          const json = JSON.parse(script.textContent);
          // Trustpilot sometimes nests this in an array or different object
          const items = Array.isArray(json) ? json : [json];
          for (const item of items) {
            if (item.aggregateRating) {
              result.score = String(item.aggregateRating.ratingValue);
              result.count = String(item.aggregateRating.reviewCount);
              return result;
            }
          }
        } catch (e) {}
      }
      
      // Fallback to DOM selectors if JSON-LD fails
      const scoreElement = document.querySelector('[data-rating-typography="true"]');
      if (scoreElement) result.score = scoreElement.textContent.trim();
      
      // Try to find review count in the text (e.g. "1,234 reviews")
      const bodyText = document.body.innerText;
      const countMatch = bodyText.match(/([0-9,]+)\s+total\s+reviews/i) || bodyText.match(/based\s+on\s+([0-9,]+)\s+reviews/i);
      if (countMatch) {
        result.count = countMatch[1].replace(/,/g, '');
      }
      
      return result;
    });
    
    return data;
  } catch (err) {
    console.error(`Error fetching ${url}:`, err.message);
    return null;
  }
}

async function updateRatings() {
  const firmsContent = fs.readFileSync(FIRMS_FILE, 'utf8');
  let ratings = {};
  if (fs.existsSync(RATINGS_FILE)) {
    ratings = JSON.parse(fs.readFileSync(RATINGS_FILE, 'utf8'));
  }
  
  // Extract firms with Trustpilot URLs using regex
  const firmRegex = /id:\s*'([^']+)',[\s\S]*?trustpilotUrl:\s*'([^']+)'/g;
  let match;
  const firmsToUpdate = [];
  
  while ((match = firmRegex.exec(firmsContent)) !== null) {
    firmsToUpdate.push({ id: match[1], url: match[2] });
  }

  if (firmsToUpdate.length === 0) {
    console.log('No firms with Trustpilot URLs found.');
    return;
  }

  console.log(`Found ${firmsToUpdate.length} firms to update.`);

  const browser = await puppeteer.launch({ 
    headless: 'new', 
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');

  // We want to keep the JSON clean, so we'll only keep the IDs found in firms.js
  const newRatings = {};

  for (const firm of firmsToUpdate) {
    const data = await getTrustpilotData(page, firm.url);
    if (data && data.score) {
      console.log(`Success: ${firm.id} -> ${data.score} (${data.count} reviews)`);
      newRatings[firm.id] = {
        score: data.score,
        count: data.count || (ratings[firm.id] ? ratings[firm.id].count : '0')
      };
    } else {
      console.log(`Failed to get data for ${firm.id}, keeping old value if exists.`);
      if (ratings[firm.id]) {
        newRatings[firm.id] = ratings[firm.id];
      } else {
          // Default fallback
          newRatings[firm.id] = { score: null, count: '0' };
      }
    }
    await new Promise(r => setTimeout(r, 1000));
  }

  await browser.close();

  fs.writeFileSync(RATINGS_FILE, JSON.stringify(newRatings, null, 2));
  console.log('Ratings updated successfully!');
}

updateRatings().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
