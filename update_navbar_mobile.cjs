const fs = require('fs');

let content = fs.readFileSync('src/components/Navbar.jsx', 'utf-8');

const oldMobile = `{mobileDivisionsOpen && (
                  <div className="mt-2 space-y-2 rounded-md border border-gray-200 bg-gray-50 p-3">
                    {divisionTree.map((division) => (
                      <div key={\`mobile-\${division.title}\`} className="rounded-md border border-gray-200 bg-white">
                        <p className="bg-sky-500 px-3 py-2 text-xs font-bold text-white">{division.title}</p>
                        <div className="space-y-2 p-3">
                          {division.sections.map((section) => (
                            <div key={\`mobile-\${division.title}-\${section.name}\`}>
                              <p className="text-xs font-semibold text-gray-900">{section.name}</p>
                              {section.items.length > 0 && (
                                <p className="mt-1 text-xs leading-relaxed text-gray-600">{section.items.join(', ')}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}`;

const newMobile = `{mobileDivisionsOpen && (
                  <div className="mt-2 space-y-2 rounded-md border border-gray-200 bg-gray-50 p-3">
                    {divisionTree.map((division) => (
                      <div key={\`mobile-\${division.title}\`} className="rounded-md border border-gray-200 bg-white overflow-hidden">
                        <Link to={division.url} onClick={() => { setMobileOpen(false); setMobileDivisionsOpen(false); }} className="block bg-sky-500 px-3 py-2 text-xs font-bold text-white hover:bg-sky-600 transition-colors">
                          {division.title}
                        </Link>
                        <div className="space-y-3 p-3">
                          {division.sections.map((section) => (
                            <div key={\`mobile-\${division.title}-\${section.name}\`}>
                              <Link to={section.url} onClick={() => { setMobileOpen(false); setMobileDivisionsOpen(false); }} className="block text-xs font-semibold text-gray-900 hover:text-sia-red transition-colors">
                                {section.name}
                              </Link>
                              {section.items && section.items.length > 0 && (
                                <ul className="mt-1 space-y-1 pl-2 border-l-2 border-gray-100">
                                  {section.items.map((item) => (
                                    <li key={\`mobile-\${item.name}\`}>
                                      <Link to={item.url} onClick={() => { setMobileOpen(false); setMobileDivisionsOpen(false); }} className="block text-[11px] leading-relaxed text-gray-600 hover:text-sia-red transition-colors">
                                        • {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}`;

// replace trailing spaces etc using regex
const oldEscaped = oldMobile.replace(/[.*+?^\${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s*');
const regex = new RegExp(oldEscaped);

if (regex.test(content)) {
  content = content.replace(regex, newMobile);
  fs.writeFileSync('src/components/Navbar.jsx', content, 'utf-8');
  console.log("Success");
} else {
  console.log("Failed to match mobile render");
}