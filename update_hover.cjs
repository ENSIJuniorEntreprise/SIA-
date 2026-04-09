const fs = require('fs');

let content = fs.readFileSync('src/components/Navbar.jsx', 'utf-8');

// Replace the first level dropdown
content = content.replace(
    /<ul className="absolute left-0 top-full z-50 mt-1 hidden min-w-\[300px\] bg-\[#F3F3F3\] py-2 text-black shadow-2xl group-hover\/lvl1:block">/g,
    '<ul className="absolute left-0 top-full z-50 pt-2 invisible min-w-[300px] bg-[#F3F3F3] text-black opacity-0 shadow-2xl transition-all delay-100 duration-300 group-hover/lvl1:visible group-hover/lvl1:opacity-100 group-hover/lvl1:delay-0">'
);
// Wait, the inner padding is inside py-2, but if we do pt-2 on the ul, it will expand the background, which isn't good.
// Instead, adding a wrapper, or better, an invisible pseudo element or keeping the py-2.
