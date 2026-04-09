const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const svgFaceStr = `<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>`;

let count = 0;

walkDir('src/pages', (filePath) => {
  if (!filePath.endsWith('.jsx')) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (content.includes(svgFaceStr)) {
    content = content.replace(svgFaceStr, '');
    fs.writeFileSync(filePath, content, 'utf-8');
    count++;
  } else if (content.includes('<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />')) {
      // Regex fallback just in case formatting is different
      const newContent = content.replace(/<svg[\s\S]*?M9\.172 16\.172a4 4 0 015\.656 0M9 10h\.01M15 10h\.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z[\s\S]*?<\/svg>/, '');
      if (newContent !== content) {
          fs.writeFileSync(filePath, newContent, 'utf-8');
          count++;
      }
  }
});

console.log('Removed sad face from ' + count + ' files.');
