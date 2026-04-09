import fs from 'fs';

const packageJsonPath = 'package.json';
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

packageJson.scripts = {
  ...packageJson.scripts,
  "server": "node server.js",
  "dev:all": "start npm run server & npm run dev"
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log("updated package.json");