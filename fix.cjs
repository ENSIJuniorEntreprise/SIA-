
const fs = require("fs");
const file = "c:/Users/USER/Documents/GitHub/SIA-/src/pages/Eléctricité.jsx";
let content = fs.readFileSync(file, "utf8");

content = content.replace("</CardWrapper>\n            ))}", "</CardWrapper>\n          )})}");

fs.writeFileSync(file, content, "utf8");
console.log("Fixed globally!");

