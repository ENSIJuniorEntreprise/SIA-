const fs = require('fs');
const path = require('path');

const oldSubStyles = `  breadcrumbContainer: {
    width: "100%",
    background: "#f8f8f8",
    borderBottom: "1px solid #eaeaea",
    marginBottom: 24,
  },
  breadcrumbInner: { maxWidth: 1140, margin: "0 auto", padding: "0 20px" },
  breadcrumb: {
    padding: "16px 0",
    fontSize: 14,
    color: "#888",
  },
  breadLink: { color: "#888", textDecoration: "none" },
  breadSep: { margin: "0 8px", color: "#ccc" },
  breadActive: { color: "#C00000", fontWeight: "600" },
`;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Restore inner block of styles
  const styleRegex = /breadcrumbContainer:\s*\{[\s\S]*?breadActive:\s*\{[^}]+\},/g;
  if (styleRegex.test(content)) {
    content = content.replace(styleRegex, oldSubStyles);
    changed = true;
  }

  // Restore SVG back to text separator
  const svgRegex = /<span style=\{styles\.breadSep\}>\s*<svg[\s\S]*?<\/svg>\s*<\/span>/g;
  if (svgRegex.test(content)) {
    content = content.replace(svgRegex, `<span style={styles.breadSep}> &gt; </span>`);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Reverted sub file:', filePath);
  }
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

processDir(path.join(__dirname, 'src', 'pages'));
