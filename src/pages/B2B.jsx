import { useState } from "react";
import B2BImg from "../assets/B2B.png";
 
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
    <path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
  </svg>
);
 
export default function EspacePro() {
  const [btnHover, setBtnHover] = useState(false);
  const [arrowHover, setArrowHover] = useState(false);
 
  return (
    <>
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow: hidden; }
      `}</style>
 
      <div style={{ width: "100vw", height: "100vh", position: "relative", fontFamily: "'Montserrat', sans-serif", overflow: "hidden" }}>
 
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('B2B.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }} />
 
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(10,18,35,0.58) 0%, rgba(8,15,30,0.42) 45%, rgba(10,18,35,0.68) 100%)",
        }} />
 
        <div style={{
          position: "absolute",
          inset: 0,
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 40px",
        }}>
 
          <h1 style={{
            fontSize: "clamp(56px, 8.5vw, 92px)",
            fontWeight: 800,
            lineHeight: 1,
            textTransform: "uppercase",
            letterSpacing: "4px",
            color: "#ffffff",
            marginBottom: 6,
          }}>
            ESPACE{" "}
            <span style={{ color: "#e8161a" }}>PRO</span>
          </h1>
 
          <div style={{
            width: 52,
            height: 3,
            background: "#e8161a",
            margin: "14px auto 22px",
          }} />
 
          
          <p style={{
            fontSize: "22px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.8,
            maxWidth: 800,
            marginBottom: 34,
            letterSpacing: "0.2px",
          }}>
            Notre plateforme de commande en ligne<br />
            est actuellement en cours de finalisation.<br />
            Bientôt disponible pour simplifier vos<br />
            approvisionnements.
          </p>
 
          {/* CTA Button */}
          <a
            href="/"
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            
            style={{
              display: "inline-block",
              background: btnHover ? "#c01215" : "#e8161a",
              color: "white",
              padding: "18px 50px",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              textDecoration: "none",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.15s",
              transform: btnHover ? "translateY(-1px)" : "translateY(0)",
            }}
          >
            Retour à l'accueil
          </a>
        </div>
 
      </div>
    </>
  );
}