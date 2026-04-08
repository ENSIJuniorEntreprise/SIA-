import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/image/different-car-accessories-composition.jpg";
import imgCapteurs from "../assets/elect/capteurs.png";
import imgGestionMoteur from "../assets/elect/gestmot.png";
import imgCharge from "../assets/elect/charge.png";
import imgHabitacle from "../assets/elect/habitacle.png";

const categories = [
  {
    id: 1,
    title: "Capteurs",
    image : imgCapteurs,
  },
  {
    id: 2,
    title: "Gestion moteur",
    image : imgGestionMoteur,
  },
  {
    id: 3,
    title: "Charge",
    image : imgCharge,
  },
  {
    id: 4,
    title: "Habitacle",
    image : imgHabitacle,
  }
  
];

export default function DivisionAuto() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

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
            <span className="text-[#c0141c] font-semibold">Électricité / Électronique</span>
          </nav>
        </div>
      </div>

      {/* CATEGORIES GRID */}
      <section style={styles.section}>
        <div style={styles.grid}>
          {categories.map((cat) => {
            const isClickable = cat.title !== "Habitacle";
            const CardWrapper = isClickable ? Link : "div";
            const navProps = isClickable ? { to: `/divisions/piece-de-rechange/electricite/${cat.title.toLowerCase().replace(/[\/\s]+/g, "-").replace(/[éêè]/g, "e")}` } : {};
            return (
            <CardWrapper
              {...navProps}
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
              {/* Red diamond icon */}
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
            </CardWrapper>
          );})}
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

  // NAV
  
  // HERO
  hero: {
    position: "relative",
    height: 380,
      paddingTop: 80,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroImg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(0.9)",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    
    zIndex: 1,
  },
  heroTitle: {
    paddingTop: "60px",
    position: "relative",
    zIndex: 2,
    margin: 0,
    color: "#fff",
    fontSize: "clamp(3px, 4vw, 50px)",
    fontWeight: 800,
    textAlign: "center",
    lineHeight: 1.25,
    textShadow: "0 2px 12px rgba(0,0,0,0.5)",
    padding: "0 2px",
  },
  heroTitle1: {
    position: "relative",
    zIndex: 2,
    margin: 0,
    color: "#C00000",
    fontSize: "clamp(3px, 4vw, 50px)",
    fontWeight: 800,
    textAlign: "center",
    lineHeight: 1.25,
    textShadow: "0 2px 12px rgba(0,0,0,0.5)",
    padding: "0 2px",
  },
  

  // BREADCRUMB
  breadcrumbContainer: {
    width: "100%",
    background: "#f8f8f8",
    borderBottom: "1px solid #eaeaea",
    marginBottom: "10px",
  },
  breadcrumbBar: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "16px 24px",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  breadcrumbGray: { color: "#555" },
  breadcrumbSep: { color: "#aaa", fontSize: 16 },
  breadcrumbActive: { color: "#c0392b", fontWeight: 600 },

  // GRID
  section: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "30px 20px 30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 35,
  },

  // CARD
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