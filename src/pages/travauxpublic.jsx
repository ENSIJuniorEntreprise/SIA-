import { useState } from "react";
import { Link } from "react-router-dom";
import Cover from "../assets/image/cover-travaux-public.jpg";
import moteur from "../assets/image/moteur.jpg";
import Lubrification from "../assets/image/lubrification.jpg";
import souder from "../assets/image/souder.jpg";


const categories = [
  {
    id: 1,
    title: "Moteurs et groupes electrogenes",
    image: moteur,
  },
  {
    id: 2,
    title: "Lubrification",
    image: Lubrification,
  },
  {
    id: 3,
    title: "Machine de soudure, outillage, consommable",
    image: souder ,
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
          src={Cover}
          alt="hero"
          style={styles.heroImg}
        />
        <div style={styles.heroOverlay} />
        <h1 style={styles.heroTitle}>
          Division Travaux  <h1 style={styles.heroTitle1}>Publics</h1>
        </h1>
      </div>

      {/* BREADCRUMB */}
      <div style={styles.breadcrumbContainer}>
        <div style={styles.breadcrumbBar}>
          <span style={styles.breadcrumbGray}>Catalogue</span>
          <span style={styles.breadcrumbSep}> &gt; </span>
          <span style={styles.breadcrumbActive}>Division Travaux Publics</span>
        </div>
      </div>

      {/* CATEGORIES GRID */}
      <section style={styles.section}>
        <div style={styles.grid}>
          {categories.map((cat) => (
            <Link
              to={
                cat.id === 1 ? "/divisions/travaux-publics/moteur-et-groupe-electrogene"
                : cat.id === 2 ? "/divisions/travaux-publics/lubrifiant-moteur"
                : cat.id === 3 ? "/divisions/travaux-publics/Machine-soudure"
                : "#"
              }
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
    height: 500,
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
    fontSize: "clamp(90px, 10vw, 50px)",
    fontWeight: 700,
    textAlign: "center",
    lineHeight: 1.25,
    textShadow: "0 2px 12px rgba(0,0,0,0.5)",
    padding: "2px 2px",
  },
  heroTitle1: {
    position: "relative",
    zIndex: 2,
    margin: 0,
    
    color: "#C00000",
    fontSize: "clamp(90px, 1vw, 50px)",
    fontWeight: 700,
    textAlign: "center",
    lineHeight: 1.25,
    textShadow: "0 2px 12px rgba(0,0,0,0.5)",
    padding: "2px 2px",
  },
  

  // BREADCRUMB
  breadcrumbContainer: {
    width: "100%",
    background: "#f8f8f8",
    borderBottom: "2px solid #eaeaea",
    marginBottom: "50px",
  },
  breadcrumbBar: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "16px 24px",
    fontSize: 20,
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  breadcrumbGray: { color: "#555" },
  breadcrumbSep: { color: "#aaa", fontSize: 16 },
  breadcrumbActive: { color: "#c0392b", fontWeight: 600 },

  // GRID
  section: {
    
    maxWidth: 1800,
    margin: "0 auto",
    padding: "30px 20px 30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 30,
  },

  // CARD
  card: {
    background: "#ffffff",
    border: "1px solid #c00000",
    borderRadius: 3,
    display: "flex",
    alignItems: "center",
    padding: " 0 0 0 40px",
    minHeight: 200,
    cursor: "pointer",
    transition: "box-shadow 0.25s, transform 0.2s, background 0.2s",
    overflow: "hidden",
    gap: 6,
  },
  cardHovered: {
    background: "#fff",
    boxShadow: "0 3px 20px #C00000",
    transform: "translateY(-5px)",
  },
  diamond: {
    color: "#c0392b",
    fontSize: 100,
    flexShrink: 0,
  },
  cardTitle: {
    fontSize: 23,
    fontWeight: 700,
    color: "#1a1a1a",
    flex: 1,
    lineHeight: 1.35,
  },
  cardImgWrap: {
    width: 200,
    height: "100%",
    flexShrink: 1,
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