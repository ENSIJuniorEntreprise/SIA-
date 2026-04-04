const fs = require('fs');
const path = require('path');

const oldStyles = `// BREADCRUMB
  breadcrumbContainer: {
    width: "100%",
    background: "#f8f8f8",
    borderBottom: "1px solid #eaeaea",
    marginBottom: "10px",
  },
  breadcrumbBar: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "16px 24px",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  breadcrumbGray: { color: "#555" },
  breadcrumbSep: { color: "#aaa", fontSize: 16 },
  breadcrumbActive: { color: "#c0392b", fontWeight: 600 },`;

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Revert new breadcrumb styles back to the old
  const styleRegex = /\/\/ BREADCRUMB[\s\S]*?breadcrumbActive:\s*\{[^}]+\},/g;
  if (styleRegex.test(content)) {
    content = content.replace(styleRegex, oldStyles);
    changed = true;
  }

  // Replace SVGs back to >
  const svgRegex = /<span style=\{styles\.breadcrumbSep\}>\s*<svg[\s\S]*?<\/svg>\s*<\/span>/g;
  if (svgRegex.test(content)) {
    content = content.replace(svgRegex, `<span style={styles.breadcrumbSep}> &gt; </span>`);
    changed = true;
  }
  
  // Replace interactive catalogue back to normal
  const catRegex = /<span style=\{\{\s*\.\.\.styles\.breadcrumbGray,\s*cursor:\s*"pointer"\s*\}\}>\s*Catalogue\s*<\/span>/g;
  if (catRegex.test(content)) {
      content = content.replace(catRegex, `<span style={styles.breadcrumbGray}>Catalogue</span>`);
      changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Reverted main file', filePath);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      updateFile(fullPath);
    }
  }
}

processDirectory(path.join(__dirname, 'src', 'pages'));
