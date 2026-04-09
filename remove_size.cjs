const fs = require('fs');
const path = require('path');
const dir = 'src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
    let c = fs.readFileSync(path.join(dir, file), 'utf8');
    c = c.replace(/<div className="flex justify-between[^>]*>\s*<span[^>]*>SIZE :<\/span>\s*<span[^>]*>\{product\.size\}<\/span>\s*<\/div>/gs, '');
    c = c.replace(/<div className="flex justify-between[^>]*>\s*<span[^>]*>Size :<\/span>\s*<span[^>]*>\{product\.size\}<\/span>\s*<\/div>/gs, '');
    fs.writeFileSync(path.join(dir, file), c);
}
