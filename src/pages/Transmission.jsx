import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/image/different-car-accessories-composition.jpg";
import imgCat0 from "../assets/transm/boite.png";
import imgCat1 from "../assets/transm/card.png";
import imgCat2 from "../assets/transm/supportmot.png";

const categories = [
  { id: 1, title: "Boîte de Vitesse", image: imgCat0, link: "/divisions/piece-de-rechange/transmission/boitedevitesse" },
  { id: 2, title: "Cardans", image: imgCat1, link: "/divisions/piece-de-rechange/transmission/cardans" },
  { id: 3, title: "Gestion Moteur", image: imgCat2, link: "/divisions/piece-de-rechange/transmission/gestion-moteur" },
];

export default function Transmission() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.page}>
      {/* HERO BANNER */}
      <div className="relative h-[200px] sm:h-[250px] overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44]">
        <div
          className="absolute inset-0 opacity-90 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 pt-16">
          <h1 className="font-['Raleway'] text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center leading-tight tracking-tight drop-shadow-md">
            Division Pièces de Rechange
            <br />
            <span className="text-[#C00000]">Automobile</span>
          </h1>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="w-full bg-[#f8f8f8] border-b border-gray-200 mb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <nav className="flex flex-wrap items-center gap-2 py-4 text-sm text-gray-500">
            <Link to="/" className="text-gray-600 hover:text-red-700 transition">catalogue</Link>
            <span className="text-gray-400 text-base"> &gt; </span>
            <Link to="/divisions/piece-de-rechange" className="text-gray-600 hover:text-red-700 transition">Division Pièces de Rechange Automobile</Link>
            <span className="text-gray-400 text-base"> &gt; </span>
            <span className="text-[#c0141c] font-semibold">Transmission</span>
          </nav>
        </div>
      </div>

      {/* CATEGORIES GRID */}
      <section style={styles.section}>
        <div style={styles.grid}>
          {categories.map((cat) => (
            <Link
              to={cat.link}
              key={cat.id}
              style={{
                textDecoration: "none",
                color: "inherit",
                ...styles.card,
                ...(hoveredCard === cat.id ? styles.cardHovered : {}),
              }}
              onMouseEnter={() => setHoveredCard(cat.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <span style={styles.diamond}>◆</span>
              <span style={styles.cardTitle}>{cat.title}</span>
              <div style={styles.cardImgWrap}>
                <img
                  src={cat.image}
                  alt={cat.title}
                  style={{
                    ...styles.cardImg,
                    ...(hoveredCard === cat.id ? styles.cardImgHovered : {}),
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    background: "#f0f0f0",
    minHeight: "100vh",
    color: "#090909",
  },
  section: {
    maxWidth: 1200,
    margin: "100px 150px",
    padding: "30px 0px 30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 45,
  },
  card: {
    background: "#e8e8e8",
    border: "1px solid #d5d5d5",
    borderRadius: 3,
    display: "flex",
    alignItems: "center",
    padding: "0 0 0 20px",
    minHeight: 90,
    cursor: "pointer",
    transition: "box-shadow 0.25s, transform 0.2s, background 0.2s",
    overflow: "hidden",
    gap: 10,
  },
  cardHovered: {
    background: "#fff",
    boxShadow: "0 3px 20px #C00000",
    transform: "translateY(-3px)",
  },
  diamond: {
    color: "#c0392b",
    fontSize: 14,
    flexShrink: 0,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#1a1a1a",
    flex: 1,
    lineHeight: 1.35,
  },
  cardImgWrap: {
    width: 110,
    height: 90,
    flexShrink: 0,
    overflow: "hidden",
  },
  cardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.35s ease",
  },
  cardImgHovered: {
    transform: "scale(1.08)",
  },
};