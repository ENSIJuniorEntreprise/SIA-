const fs = require('fs');

let content = fs.readFileSync('src/components/Navbar.jsx', 'utf-8');

// Level 1
content = content.replace(
    'className="absolute left-0 top-full z-50 mt-1 hidden min-w-[300px] bg-[#F3F3F3] py-2 text-black shadow-2xl group-hover/lvl1:block"',
    'className="absolute left-0 top-full z-50 mt-1 min-w-[300px] bg-[#F3F3F3] py-2 text-black shadow-2xl invisible opacity-0 transition-all duration-300 delay-150 group-hover/lvl1:visible group-hover/lvl1:opacity-100 group-hover/lvl1:delay-0"'
);

// Level 2
content = content.replace(
    'className="absolute left-full top-0 hidden items-start group-hover/div:flex"',
    'className="absolute left-full top-0 items-start invisible opacity-0 transition-all duration-300 delay-150 group-hover/div:flex group-hover/div:visible group-hover/div:opacity-100 group-hover/div:delay-0"'
);

// Level 3
content = content.replace(
    'className="absolute left-full top-0 hidden min-w-[340px] border-l border-gray-300 bg-white shadow-2xl group-hover/section:block flex-col items-stretch"',
    'className="absolute left-full top-0 min-w-[340px] flex-col items-stretch border-l border-gray-300 bg-white shadow-2xl invisible opacity-0 transition-all duration-300 delay-150 group-hover/section:flex group-hover/section:visible group-hover/section:opacity-100 group-hover/section:delay-0"'
);

fs.writeFileSync('src/components/Navbar.jsx', content, 'utf-8');
console.log("Hover transitions added successfully");
