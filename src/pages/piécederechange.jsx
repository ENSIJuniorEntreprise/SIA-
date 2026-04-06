import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/image/different-car-accessories-composition.jpg";

import imgMoteur from "../assets/piecesderechang/moteurr.png";
import imgElec from "../assets/piecesderechang/elect.png";
import imgFiltration from "../assets/piecesderechang/Filtra.png";
import imgSuspension from "../assets/piecesderechang/susp.png";
import imgTransmission from "../assets/piecesderechang/trans.png";
import imgCarrosserie from "../assets/piecesderechang/carosseri.png";
import imgClim from "../assets/piecesderechang/clim.png";
import imgConsommables from "../assets/piecesderechang/consom.png";
import imgFreinage from "../assets/piecesderechang/frein.png";

const categories = [
  { id: 1, title: "MOTEUR", image: imgMoteur, link: "/divisions/piece-de-rechange/moteur" },
  { id: 2, title: "Électricité/ Électronique", image: imgElec, link: "/divisions/piece-de-rechange/electricite" },
  { id: 3, title: "Filtration", image: imgFiltration, link: "/divisions/piece-de-rechange/filtration" },
  { id: 4, title: "Suspension/ Direction", image: imgSuspension, link: "/divisions/piece-de-rechange/suspension" },
  { id: 5, title: "Transmission", image: imgTransmission, link: "/divisions/piece-de-rechange/transmission" },
  { id: 6, title: "Carosserie", image: imgCarrosserie, link: "/divisions/piece-de-rechange/carosserie" },
  { id: 7, title: "Climatisation/ Chauffage", image: imgClim, link: "/divisions/piece-de-rechange/climatisation" },
  { id: 8, title: "Consommables et divers", image: imgConsommables, link: "/divisions/piece-de-rechange/consommables" },
  { id: 9, title: "Freinage", image: imgFreinage, link: "/divisions/piece-de-rechange/freinage" },
];

export default function DivisionAuto() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={styles.page}>
     

      {/* HERO BANNER */}
      <div style={styles.hero}>
        <img
          src={heroImage}
          alt="hero"
          style={styles.heroImg}
        />
        <div style={styles.heroOverlay} />
        <h1 style={styles.heroTitle}>
          <span>Division Pièces de Rechange </span>
          <span style={styles.heroTitle1}>Automobile</span>
        </h1>
      </div>

      {/* BREADCRUMB */}
      <div style={styles.breadcrumbContainer}>
        <div style={styles.breadcrumbBar}>
          <span style={styles.breadcrumbGray}>Catalogue</span>
          <span style={styles.breadcrumbSep}> &gt; </span>
          <span style={styles.breadcrumbActive}>Division Pièces de Rechange Automobile</span>
        </div>
      </div>

      {/* CATEGORIES GRID */}
      <section style={styles.section}>
        <div style={styles.grid}>
          {categories.map((cat) => (
            <Link
              to={cat.link || "#"}
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
    background: "#ffffff",
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
    fontSize: "clamp(30px, 4vw, 50px)",
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
    fontSize: "clamp(30px, 4vw, 50px)",
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
