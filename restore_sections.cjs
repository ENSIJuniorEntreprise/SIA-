const { execSync } = require('child_process');
const fs = require('fs');

const diff = execSync('git diff HEAD').toString();
const files = diff.split('diff --git a/');

for (const fileDiff of files) {
  if (!fileDiff.trim()) continue;
  
  const fileNameMatch = fileDiff.match(/^([^ ]+)/);
  if (!fileNameMatch) continue;
  
  const fileName = fileNameMatch[1];
  if (!fs.existsSync(fileName)) continue;

  let content = fs.readFileSync(fileName, 'utf8');
  let changed = false;

  // We are looking for lines in the diff where we removed <section class=... and added <section >
  const hunks = fileDiff.split('@@ -');
  for (const hunk of hunks) {
      if (!hunk.includes('@@')) continue;
      
      const lines = hunk.split('\n');
      let removedSection = '';
      for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (line.startsWith('-') && line.includes('<section')) {
              removedSection = line.substring(1).trim();
          }
          if (line.startsWith('+') && line.includes('<section >') && removedSection) {
              // Found a match
              const toReplace = '<section >';
              if (content.includes(toReplace)) {
                  content = content.replace(toReplace, removedSection);
                  changed = true;
              }
              removedSection = '';
          }
      }
  }

  if (changed) {
      fs.writeFileSync(fileName, content, 'utf8');
      console.log('Restored sections in', fileName);
  }
}
