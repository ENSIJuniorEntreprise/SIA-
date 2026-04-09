const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const sadFace1 = `<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>`;

const sadFace2 = `<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>`;

// More robust regex but not greedy across elements
const strictSadFaceRegex = /<svg[^>]*className="h-12 w-12 mx-auto text-gray-400 mb-3"[^>]*>[\s\S]*?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth=\{1\.5\}[^>]*d="M9\.172 16\.172a4 4 0 015\.656 0M9 10h\.01M15 10h\.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"[^>]*\/>\s*<\/svg>/g;

let count = 0;

walkDir('src/pages', (filePath) => {
  if (!filePath.endsWith('.jsx')) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  const initialContent = content;
  
  content = content.replace(strictSadFaceRegex, '');
  
  if (initialContent !== content) {
    fs.writeFileSync(filePath, content, 'utf-8');
    count++;
  }
});

console.log('Removed sad face from ' + count + ' files.');
