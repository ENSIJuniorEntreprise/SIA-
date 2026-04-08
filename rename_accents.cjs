const fs = require('fs');
const path = require('path');
function walk(dir) {
  const files = fs.readdirSync(dir);
  for(let f of files) {
    const p = path.join(dir, f);
    if(fs.statSync(p).isDirectory()) walk(p);
    else {
      if(/[йиазыфовк]/i.test(f)) {
        const newF = f.replace(/й/g, 'e').replace(/и/g, 'e').replace(/а/g, 'a').replace(/з/g, 'c');
        const newP = path.join(dir, newF);
        fs.renameSync(p, newP);
        console.log('Renamed: ', f, '->', newF);
      }
    }
  }
}
walk('src/assets/sia');

