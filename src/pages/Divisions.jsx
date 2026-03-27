import { useState } from "react";
import { Link } from "react-router-dom";

const divisions = [
  {
    id: 1,
    title: "Division pièce de rechange automobile",
    description: "Des composants de qualité conçus pour durer",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=220&fit=crop",
    color: "#c0392b",
  },
  {
    id: 2,
    title: "Division Industrielle",
    description: "Des composants de qualité conçus pour durer",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=220&fit=crop",
    color: "#c0392b",
  },
  {
    id: 3,
    title: "Division Travaux Publics",
    description: "Des composants de qualité conçus pour durer",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=220&fit=crop",
    color: "#c0392b",
  },
  {
    id: 4,
    title: "Division Marine",
    description: "Des composants de qualité conçus pour durer",
    image: "https://marine-oceans.com/wp-content/uploads/2024/07/IG-PSMTourville-0091.jpg",
    color: "#c0392b",
  },
];


export default function NsDivisions() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={styles.page}>
     

      {/* HERO BANNER */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay} />
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
          alt="hero"
          style={styles.heroImg}
        />
        <h1 style={styles.heroTitle}>
          <span style={styles.heroNos}>Nos </span>
          <span style={styles.heroDivisions}>divisions</span>
        </h1>
      </div>

      {/* CARDS SECTION */}
      <section style={styles.cardsSection}>
        <div style={styles.cardsGrid}>
          {divisions.map((div) => (
            <Link
             to={
                  div.id === 1
                    ? "/divisions/piece-de-rechange"
                    : div.id === 3
                    ? "/divisions/travaux-publics"
                    : "#"
                }
             
              key={div.id}
              style={{
                textDecoration: "none",
                color: "inherit",
                ...styles.card,
                ...(hoveredCard === div.id ? styles.cardHovered : {}),
              }}
              onMouseEnter={() => setHoveredCard(div.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              
          
              <div style={styles.cardImgWrapper}>
                <img
                  src={div.image}
                  alt={div.title}
                  style={{
                    ...styles.cardImg,
                    ...(hoveredCard === div.id ? styles.cardImgHovered : {}),
                  }}
                />
              </div>
              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{div.title}</h3>
                <p style={styles.cardDesc}>{div.description}</p>
                <div
                  style={{
                    ...styles.cardLink,
                    ...(hoveredCard === div.id ? styles.cardLinkHovered : {}),
                  }}
                >
                  Voir plus &gt;
                </div>
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
    color: "#1a1a1a",
  },

  
  // HERO
  hero: {
    position: "relative",
    height: 250,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
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
    background: "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 100%)",
    zIndex: 1,
  },
  heroTitle: {
    position: "relative",
    zIndex: 2,
    margin: 0,
    padding: "0 48px",
    fontSize: "clamp(42px, 7vw, 68px)",
    fontWeight: 900,
    letterSpacing: "-0.01em",
    lineHeight: 1.1,
    width: "100%",
    textAlign: "center",
  },
  heroNos: {
    color: "#c00000",
  
  },
  heroDivisions: {
    color: "#fff",
  },

  // CARDS
  cardsSection: {
    maxWidth: 1300,
    margin: "0 auto",
    padding: "55px 24px 0px",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
    gap: 30,
  },
  card: {
    background: "#fff",
    border: "1.6px solid #000000",
    borderRadius: 3,
    overflow: "hidden",
    transition: "box-shadow 0.25s, transform 0.25s",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
  },
  cardHovered: {
    boxShadow: "0 3px 20px #C00000",
    transform: "translateY(-4px)",
  },
  cardImgWrapper: {
    height: 200,
    overflow: "hidden",
  },
  cardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  cardImgHovered: {
    transform: "scale(1.07)",
  },
  cardBody: {
    padding: "16px 16px 30px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  cardTitle: {
    margin: "0 0 8px",
    fontSize: 14,
    fontWeight: 700,
    color: "#1a1a1a",
    lineHeight: 1.35,
  },
  cardDesc: {
    margin: "0 0 16px",
    fontSize: 13,
    color: "#666",
    lineHeight: 1.5,
    flex: 1,
  },
  cardLink: {
    color: "#c0392b",
    fontSize: 12,
    fontWeight: 700,
    textDecoration: "none",
    letterSpacing: "0.03em",
    transition: "letter-spacing 0.2s",
  },
  cardLinkHovered: {
    letterSpacing: "0.1em",
  },
};