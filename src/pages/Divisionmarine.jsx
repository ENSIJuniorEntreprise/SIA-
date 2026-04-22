import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import im1 from "../assets/marine/grp elec.jpg";
import im2 from "../assets/image/SAV professionnel.jpg";
import cover from "../assets/marine/cover.jpg";

const categories = [
  { id: 1, title: "Groupes électrogènes marin", image: im1, url: "/divisions/Divisionmarine/yact" },
  { id: 2, title: "SAV & consommable", image: im2, url: "/divisions/marine" },
];

export default function DivisionMarine() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="font-['Segoe_UI','Helvetica_Neue',Arial,sans-serif] bg-white min-h-screen text-gray-900">

      {/* HERO */}
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden flex items-center justify-center">
        <img src={cover} alt="hero" className="absolute inset-0 w-full h-full object-cover brightness-90" />
        <div className="absolute inset-0 z-[1]" />
        <div className="relative z-[2] text-center px-4 pt-16 sm:pt-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
            DIVISION <span className="text-[#C00000]">MARINE</span>
          </h1>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="w-full bg-[#f8f8f8] border-b border-[#eaeaea] mb-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center gap-2 text-sm">
          <span onClick={() => navigate('/divisions')} className="text-gray-600 hover:text-red-700 cursor-pointer transition">Catalogue</span>
          <span className="text-gray-400">&gt;</span>
          <span className="text-[#c0392b] font-semibold">Division Marine</span>
        </div>
      </div>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {categories.map((cat) => (
            <Link
              to={cat.url}
              key={cat.id}
              className="flex items-center overflow-hidden rounded-sm border border-[#d5d5d5] transition-all duration-200 no-underline"
              style={{
                background: hoveredCard === cat.id ? "#fff" : "#e8e8e8",
                boxShadow: hoveredCard === cat.id ? "0 3px 20px #C00000" : "none",
                transform: hoveredCard === cat.id ? "translateY(-3px)" : "translateY(0)",
                minHeight: 90,
              }}
              onMouseEnter={() => setHoveredCard(cat.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <span className="flex-1 px-4 sm:px-5 text-sm font-bold text-gray-900 leading-snug py-3">
                {cat.title}
              </span>
              <div className="w-[100px] sm:w-[110px] h-[90px] flex-shrink-0 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                  style={{ transform: hoveredCard === cat.id ? "scale(1.08)" : "scale(1)" }}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
