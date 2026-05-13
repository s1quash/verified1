const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const htmlFiles = getAllHtmlFiles(DIST_DIR);
const results = {
  brokenLinks: [],
  missingAlt: [],
  duplicateMeta: {},
  pagesProcessed: htmlFiles.length
};

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const relativePath = path.relative(DIST_DIR, file);

  // 1. Check Links
  const linkMatches = content.matchAll(/<a\s+[^>]*href=["']([^"']+)["'][^>]*>/gi);
  for (const match of linkMatches) {
    const href = match[1];
    // Ignore external, anchors, and mailto
    if (!href || href.startsWith('http') || href.includes('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;

    let targetPath;
    if (href.startsWith('/')) {
      targetPath = path.join(DIST_DIR, href);
    } else {
      targetPath = path.join(path.dirname(file), href);
    }

    const exists = fs.existsSync(targetPath) || 
                   fs.existsSync(targetPath + '.html') ||
                   fs.existsSync(targetPath.endsWith('/') ? targetPath + 'index.html' : targetPath + '/index.html');
    
    if (!exists) {
      results.brokenLinks.push({ page: relativePath, link: href });
    }
  }

  // 2. Check Images Alt
  const imgMatches = content.matchAll(/<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi);
  for (const match of imgMatches) {
    const tag = match[0];
    const src = match[1];
    if (!tag.includes('alt=') || /alt=["']\s*["']/.test(tag)) {
      results.missingAlt.push({ page: relativePath, src: src });
    }
  }

  // 3. Duplicate Meta Descriptions
  const metaMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  if (metaMatch) {
    const desc = metaMatch[1];
    if (!results.duplicateMeta[desc]) {
      results.duplicateMeta[desc] = [];
    }
    results.duplicateMeta[desc].push(relativePath);
  }
});

const finalDuplicates = {};
Object.keys(results.duplicateMeta).forEach(desc => {
  if (results.duplicateMeta[desc].length > 1) {
    finalDuplicates[desc] = results.duplicateMeta[desc];
  }
});
results.duplicateMeta = finalDuplicates;

console.log(JSON.stringify(results, null, 2));
