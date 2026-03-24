import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/image/different-car-accessories-composition.jpg";

const categories = [
  {
    id: 1,
    title: "MOTEUR",
    image: "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    title: "Suspension/ Direction",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&h=80&fit=crop",
  },
  {
    id: 3,
    title: "Climatisation/ Chauffage",
    image: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=120&h=80&fit=crop",
  },
  {
    id: 4,
    title: "Électricité/ Électronique",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=120&h=80&fit=crop",
  },
  {
    id: 5,
    title: "Transmission",
    image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=120&h=80&fit=crop",
  },
  {
    id: 6,
    title: "Consommables et divers",
    image: "https://images.unsplash.com/photo-1504222490345-c075b7ffe39d?w=120&h=80&fit=crop",
  },
  {
    id: 7,
    title: "Filtration",
    image: "fi.png",
  },
  {
    id: 8,
    title: "Carosserie",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=120&h=80&fit=crop",
  },
  {
    id: 9,
    title: "Freinage",
    image: "Untitled design.png" ,
  },
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
          Division Pièces de Rechange <h1 style={styles.heroTitle1}>Automobile</h1>
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
              to={cat.id === 1 ? "/divisions/piece-de-rechange/moteur" : "#"}
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
    height: 250,
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
    gridTemplateColumns: "repeat(3, 1fr)",
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
