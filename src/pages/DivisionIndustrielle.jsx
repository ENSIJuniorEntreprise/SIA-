import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import logoImage from "../assets/logo.png";

/* ═══════════════════════════════════════════════════════════════
   IMPORTS IMAGES LOCALES
═══════════════════════════════════════════════════════════════ */
import imgHero          from "../assets/images-division-industrielle/hero-industrial.jpg";
import imgTransmission  from "../assets/images-division-industrielle/transmission.jpg";
import imgMotorisation  from "../assets/images-division-industrielle/motorisation.jpg";
import imgRoulement     from "../assets/images-division-industrielle/roulement.jpg";
import imgCourroie      from "../assets/images-division-industrielle/courroie.webp";
import imgBande         from "../assets/images-division-industrielle/bande.webp";
import imgChaine        from "../assets/images-division-industrielle/chaine.png";
import imgAccouplement  from "../assets/images-division-industrielle/accouplement.jpg";
import imgMotoreducteur from "../assets/images-division-industrielle/motoreducteur.png";
import imgMoteur        from "../assets/images-division-industrielle/moteur.jpg";
import imgVariateur     from "../assets/images-division-industrielle/variateur.jpg";
import imgPalier        from "../assets/images-division-industrielle/palier.jpg";
import imgRoulBille     from "../assets/images-division-industrielle/roul-bille.jpg";
import imgRoulRouleau   from "../assets/images-division-industrielle/roul-rouleau.jpg";
import imgSupport       from "../assets/images-division-industrielle/support.jpg";

const LOGO_IMAGE = logoImage;

/* ═══════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════ */
const categories = [
  {
    id: "transmission",
    label: "Transmission & Mouvement",
    image: imgTransmission,
    sousCategories: [
      { id: "courroies",     label: "Courroies industrielles", image: imgCourroie      },
      { id: "bandes",        label: "Bandes transporteuses",   image: imgBande         },
      { id: "chaines",       label: "Chaînes et pignons",      image: imgChaine        },
      { id: "accouplements", label: "Accouplements",           image: imgAccouplement  },
    ],
  },
  {
    id: "motorisation",
    label: "Motorisation & Entraînement",
    image: imgMotorisation,
    sousCategories: [
      { id: "motoreducteurs", label: "Motoréducteurs",      image: imgMotoreducteur },
      { id: "moteurs",        label: "Moteurs électriques", image: imgMoteur        },
      { id: "variateurs",     label: "Variateurs",          image: imgVariateur     },
      { id: "paliers",        label: "Paliers",              image: imgPalier        },
    ],
  },
  {
    id: "roulement",
    label: "Roulement & Supports",
    image: imgRoulement,
    sousCategories: [
      { id: "roulements-billes",   label: "Roulements à billes",   image: imgRoulBille   },
      { id: "roulements-rouleaux", label: "Roulements à rouleaux", image: imgRoulRouleau },
      { id: "supports",            label: "Supports & paliers",    image: imgSupport     },
    ],
  },
];

const produits = {
  courroies: [
    { id:1, nom:"Courroie trapézoïdale OPTIBELT", ref:"OPT-10026", psc:10, size:"A40",     image:imgCourroie },
    { id:2, nom:"Courroie dentée série T5",        ref:"OPT-20022", psc:5,  size:"T5-500",  image:imgCourroie },
    { id:3, nom:"Courroie striée poly-V",           ref:"OPT-30041", psc:12, size:"PJ-700",  image:imgCourroie },
    { id:4, nom:"Courroie variateur agricole",      ref:"OPT-40018", psc:8,  size:"HB-900",  image:imgCourroie },
    { id:5, nom:"Courroie plate industrielle",      ref:"OPT-50033", psc:6,  size:"40x2000", image:imgBande    },
    { id:6, nom:"Courroie synchrone HTD",           ref:"OPT-60055", psc:4,  size:"5M-600",  image:imgCourroie },
  ],
  bandes: [
    { id:1, nom:"Bande PVC blanche alimentaire", ref:"AMB-10011", psc:2, size:"500x3mm", image:imgBande },
    { id:2, nom:"Bande PU transparente",          ref:"AMB-20014", psc:2, size:"400x2mm", image:imgBande },
    { id:3, nom:"Courroie plate PVC noire",        ref:"AMB-30021", psc:1, size:"600x4mm", image:imgBande },
  ],
  chaines: [
    { id:1, nom:"Chaîne simple REGINA 06B", ref:"REG-10044", psc:10, size:"06B-1",   image:imgChaine },
    { id:2, nom:"Chaîne double REGINA 10B", ref:"REG-20031", psc:5,  size:"10B-2",   image:imgChaine },
    { id:3, nom:"Pignon simple 12B Z=25",   ref:"CHV-30017", psc:20, size:"12B-Z25", image:imgChaine },
    { id:4, nom:"Pignon double 16B Z=19",   ref:"CHV-40028", psc:15, size:"16B-Z19", image:imgChaine },
  ],
  accouplements: [
    { id:1, nom:"Accouplement élastique HRC 90", ref:"CHV-50012", psc:4, size:"HRC90",  image:imgAccouplement },
    { id:2, nom:"Manchon d'accouplement",         ref:"CHV-60009", psc:6, size:"HRC130", image:imgAccouplement },
  ],
  motoreducteurs: [
    { id:1, nom:"Motoréducteur NORD 0.37kW", ref:"NRD-10019", psc:1, size:"0.37kW", image:imgMotoreducteur },
    { id:2, nom:"Motoréducteur NORD 0.75kW", ref:"NRD-20023", psc:1, size:"0.75kW", image:imgMotoreducteur },
    { id:3, nom:"Motoréducteur NORD 1.5kW",  ref:"NRD-30031", psc:1, size:"1.5kW",  image:imgMotoreducteur },
  ],
  moteurs: [
    { id:1, nom:"Moteur électrique OMEC 0.55kW", ref:"OMC-10016", psc:1, size:"0.55kW B3", image:imgMoteur },
    { id:2, nom:"Moteur électrique OMEC 1.1kW",  ref:"OMC-20024", psc:1, size:"1.1kW B3",  image:imgMoteur },
    { id:3, nom:"Moteur électrique OMEC 2.2kW",  ref:"OMC-30038", psc:1, size:"2.2kW B3",  image:imgMoteur },
    { id:4, nom:"Moteur électrique OMEC 4kW",    ref:"OMC-40052", psc:1, size:"4kW B3",    image:imgMoteur },
  ],
  variateurs: [
    { id:1, nom:"Variateur INVERTEK 0.75kW", ref:"INV-10041", psc:1, size:"0.75kW", image:imgVariateur },
    { id:2, nom:"Variateur INVERTEK 1.5kW",  ref:"INV-20055", psc:1, size:"1.5kW",  image:imgVariateur },
  ],
  paliers: [
    { id:1, nom:"Palier SNR UCF 205", ref:"SNR-10033", psc:10, size:"UCF205", image:imgPalier },
    { id:2, nom:"Palier SNR UCF 206", ref:"SNR-20041", psc:10, size:"UCF206", image:imgPalier },
    { id:3, nom:"Palier SNR UCP 207", ref:"SNR-30022", psc:8,  size:"UCP207", image:imgPalier },
  ],
  "roulements-billes": [
    { id:1, nom:"Roulement SNR 6204", ref:"SNR-40011", psc:20, size:"20x47x14", image:imgRoulBille },
    { id:2, nom:"Roulement SNR 6205", ref:"SNR-50018", psc:20, size:"25x52x15", image:imgRoulBille },
    { id:3, nom:"Roulement UBC 6206", ref:"UBC-10027", psc:15, size:"30x62x16", image:imgRoulBille },
    { id:4, nom:"Roulement UBC 6207", ref:"UBC-20034", psc:12, size:"35x72x17", image:imgRoulBille },
  ],
  "roulements-rouleaux": [
    { id:1, nom:"Roulement conique 30205", ref:"SNR-60044", psc:10, size:"25x52x16", image:imgRoulRouleau },
    { id:2, nom:"Roulement conique 30206", ref:"SNR-70051", psc:10, size:"30x62x17", image:imgRoulRouleau },
    { id:3, nom:"Roulement tonneau 22205", ref:"SNR-80033", psc:8,  size:"25x52x18", image:imgRoulRouleau },
  ],
  supports: [
    { id:1, nom:"Support fonte UCF 205", ref:"SNR-90022", psc:10, size:"UCF205", image:imgSupport },
    { id:2, nom:"Support fonte UCP 206", ref:"SNR-91033", psc:8,  size:"UCP206", image:imgSupport },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   VARIANTS
═══════════════════════════════════════════════════════════════ */
const fadeUp  = { hidden:{ opacity:0, y:28 }, visible:{ opacity:1, y:0, transition:{ duration:0.52, ease:[0.22,1,0.36,1] } } };
const stagger = { hidden:{}, visible:{ transition:{ staggerChildren:0.07 } } };

function AnimSection({ children, style }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-50px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView?"visible":"hidden"} style={style}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════════════ */
function DivisionNav() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <motion.div
      style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 32px", height:64 }}
      animate={scrolled ? { backgroundColor:"rgba(0,0,0,0.82)", backdropFilter:"blur(14px)" } : { backgroundColor:"rgba(0,0,0,0.38)", backdropFilter:"blur(0px)" }}
      transition={{ duration:0.35 }}
    >
      <motion.img src={LOGO_IMAGE} alt="SIA"
        style={{ height:36, cursor:"pointer", objectFit:"contain" }}
        onClick={() => navigate("/")}
        whileHover={{ scale:1.06 }} whileTap={{ scale:0.96 }}
        transition={{ type:"spring", stiffness:300, damping:18 }}
      />
      <nav style={{ display:"flex", alignItems:"center", gap:28 }}>
        <Link to="/" style={{ color:"rgba(255,255,255,0.72)", fontSize:13, fontWeight:600, textDecoration:"none", fontFamily:"'Montserrat',sans-serif", letterSpacing:"0.04em" }}>
          ← Accueil
        </Link>
        <span style={{ color:"#e20613", fontSize:13, fontWeight:800, fontFamily:"'Montserrat',sans-serif", letterSpacing:"0.04em", borderBottom:"2px solid #e20613", paddingBottom:2 }}>
          Division Industrielle
        </span>
        <Link to="/#categories" style={{ color:"rgba(255,255,255,0.72)", fontSize:13, fontWeight:600, textDecoration:"none", fontFamily:"'Montserrat',sans-serif", letterSpacing:"0.04em" }}>
          Partenaires
        </Link>
        <Link to="/#contact" style={{ color:"rgba(255,255,255,0.72)", fontSize:13, fontWeight:600, textDecoration:"none", fontFamily:"'Montserrat',sans-serif", letterSpacing:"0.04em" }}>
          Contact
        </Link>
      </nav>
      <motion.button
        style={{ padding:"9px 18px", background:"#e20613", color:"#fff", border:"none", borderRadius:6, fontSize:11, fontWeight:800, cursor:"pointer", fontFamily:"'Montserrat',sans-serif", letterSpacing:"0.07em", textTransform:"uppercase" }}
        whileHover={{ y:-2, filter:"brightness(1.1)" }} whileTap={{ scale:0.97 }}
      >
        Demander un devis
      </motion.button>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SOUS-CAT CARD
═══════════════════════════════════════════════════════════════ */
function SousCatCard({ sc, onClick }) {
  return (
    <motion.button variants={fadeUp} onClick={onClick}
      whileHover={{ y:-8, boxShadow:"0 28px 56px rgba(0,0,0,0.18)", transition:{ type:"spring", stiffness:260, damping:20 } }}
      whileTap={{ scale:0.97 }}
      style={{ background:"#fff", border:"1px solid #e4e4e4", borderRadius:18, overflow:"hidden", cursor:"pointer", textAlign:"left", padding:0, fontFamily:"inherit", display:"flex", flexDirection:"column", boxShadow:"0 4px 16px rgba(0,0,0,0.06)" }}
    >
      {/* Image */}
      <div style={{ height:180, overflow:"hidden", position:"relative", background:"#f0f0f0" }}>
        <img src={sc.image} alt={sc.label}
          style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.6s ease" }}
          onMouseEnter={e=>e.target.style.transform="scale(1.1)"}
          onMouseLeave={e=>e.target.style.transform="scale(1)"}
        />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg,transparent 25%,rgba(0,0,0,0.55) 100%)" }} />
        {/* Red top accent */}
        <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:"linear-gradient(90deg,#e20613,#ff4444)" }} />
      </div>
      {/* Label */}
      <div style={{ padding:"18px 20px 20px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:10 }}>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <div style={{ width:8, height:8, borderRadius:"50%", background:"#e20613", flexShrink:0 }} />
          <span style={{ fontSize:14, fontWeight:800, color:"#111", lineHeight:1.3 }}>{sc.label}</span>
        </div>
        <motion.div
          style={{ width:32, height:32, borderRadius:"50%", background:"#fff1f1", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}
          whileHover={{ background:"#e20613", scale:1.1 }}
          transition={{ duration:0.2 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e20613" strokeWidth="2.5">
            <polyline points="9,18 15,12 9,6"/>
          </svg>
        </motion.div>
      </div>
    </motion.button>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PRODUCT CARD
═══════════════════════════════════════════════════════════════ */
function ProductCard({ product }) {
  return (
    <motion.div variants={fadeUp}
      whileHover={{ y:-8, boxShadow:"0 24px 56px rgba(0,0,0,0.15)", transition:{ type:"spring", stiffness:260, damping:20 } }}
      style={{ background:"#fff", borderRadius:18, overflow:"hidden", border:"1px solid #eaeaea", display:"flex", flexDirection:"column", boxShadow:"0 4px 16px rgba(0,0,0,0.06)" }}
    >
      {/* Image */}
      <div style={{ height:200, overflow:"hidden", background:"#f5f5f5", position:"relative" }}>
        <img src={product.image} alt={product.nom}
          style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.55s ease" }}
          onMouseEnter={e=>e.target.style.transform="scale(1.08)"}
          onMouseLeave={e=>e.target.style.transform="scale(1)"}
        />
        {/* Red top accent */}
        <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:"linear-gradient(90deg,#e20613,#ff4444)" }} />
        {/* Ref badge */}
        <div style={{ position:"absolute", bottom:12, left:12, background:"rgba(0,0,0,0.7)", backdropFilter:"blur(6px)", borderRadius:7, padding:"5px 10px", fontSize:11, fontWeight:700, color:"#fff", letterSpacing:"0.05em" }}>
          {product.ref}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding:"18px 18px 0" }}>
        <p style={{ margin:0, fontSize:13, fontWeight:800, color:"#111", lineHeight:1.45 }}>{product.nom}</p>

        {/* Divider */}
        <div style={{ margin:"14px 0 12px", height:1, background:"#f0f0f0" }} />

        {/* Details */}
        <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <span style={{ fontSize:11, color:"#aaa", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.06em" }}>PSC/carton</span>
            <span style={{ fontSize:12, fontWeight:800, color:"#222", background:"#f7f7f7", padding:"3px 10px", borderRadius:5 }}>{product.psc}</span>
          </div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <span style={{ fontSize:11, color:"#aaa", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.06em" }}>Dimension</span>
            <span style={{ fontSize:12, fontWeight:800, color:"#222", background:"#f7f7f7", padding:"3px 10px", borderRadius:5 }}>{product.size}</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding:"16px 18px 18px", marginTop:"auto" }}>
        <motion.button
          style={{ width:"100%", padding:"12px", background:"#e20613", color:"#fff", border:"none", borderRadius:10, fontSize:12, fontWeight:800, cursor:"pointer", fontFamily:"inherit", letterSpacing:"0.07em", textTransform:"uppercase", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}
          whileHover={{ filter:"brightness(1.1)", scale:1.01 }} whileTap={{ scale:0.97 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a2 2 0 011.72-2.18h3"/></svg>
          Demander un devis
        </motion.button>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   BACK BUTTON
═══════════════════════════════════════════════════════════════ */
function BackButton({ label, onClick }) {
  return (
    <motion.button onClick={onClick}
      style={{ display:"inline-flex", alignItems:"center", gap:7, background:"none", border:"none", cursor:"pointer", fontFamily:"'Montserrat',sans-serif", fontSize:13, fontWeight:700, color:"#e20613", padding:0, marginBottom:28 }}
      whileHover={{ x:-5 }} transition={{ type:"spring", stiffness:400, damping:26 }}
    >
      ← {label}
    </motion.button>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN
═══════════════════════════════════════════════════════════════ */
﻿
export default function DivisionIndustrielle() {
  const [activeCat, setActiveCat] = useState(null);
  const [activeSousCat, setActiveSousCat] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const currentCat = categories.find((c) => c.id === activeCat);
  const currentSousCat = currentCat?.sousCategories.find(
    (s) => s.id === activeSousCat
  );
  const currentProduits = activeSousCat
    ? produits[activeSousCat] || []
    : [];

  return (
    <div style={styles.page}>
      {/* HERO BANNER */}
      <div style={styles.hero}>
        <img src={imgHero} alt="hero" style={styles.heroImg} />
        <div style={styles.heroOverlay} />
        <h1 style={styles.heroTitle}>
          DIVISION <span style={styles.heroTitle1}>INDUSTRIELLE</span>
        </h1>
      </div>

      {/* BREADCRUMB */}
      <div style={styles.breadcrumbContainer}>
        <div style={styles.breadcrumbBar}>
          <span style={{ color: "#555" }}>Catalogue</span>
          <span style={styles.breadcrumbSep}> &gt; </span>
          <span
            style={activeCat ? styles.breadcrumbGray : styles.breadcrumbActive}
            onClick={() => {
              setActiveCat(null);
              setActiveSousCat(null);
            }}
          >
            Division Industrielle
          </span>
          
          {currentCat && (
             <>
               <span style={styles.breadcrumbSep}> &gt; </span>
               <span
                 style={activeSousCat ? styles.breadcrumbGray : styles.breadcrumbActive}
                 onClick={() => {
                   setActiveSousCat(null);
                 }}
               >
                 {currentCat.label}
               </span>
             </>
          )}

          {currentSousCat && (
             <>
               <span style={styles.breadcrumbSep}> &gt; </span>
               <span style={styles.breadcrumbActive}>
                 {currentSousCat.label}
               </span>
             </>
          )}
        </div>
      </div>

      {/* CARD GRID */}
      <section style={styles.section}>
        <div style={styles.grid}>
          {/* LEVEL 0: CATEGORIES */}
          {!activeCat &&
            categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  setActiveCat(cat.id);
                  setActiveSousCat(null);
                }}
                style={{
                  ...styles.card,
                  ...(hoveredCard === "c_" + cat.id ? styles.cardHovered : {}),   
                }}
                onMouseEnter={() => setHoveredCard("c_" + cat.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.cardTitleWrap}>
                  <span style={styles.cardTitle}>{cat.label}</span>
                  <span style={styles.cardSubCount}>{cat.sousCategories?.length} familles</span>
                </div>
                <div style={styles.cardImgWrap}>
                  <img
                    src={cat.image}
                    alt={cat.label}
                    style={{
                      ...styles.cardImg,
                      ...(hoveredCard === "c_" + cat.id ? styles.cardImgHovered : {}),
                    }}
                  />
                </div>
              </div>
            ))}

          {/* LEVEL 1: SOUS-CATEGORIES */}
          {activeCat && !activeSousCat && currentCat?.sousCategories?.map((sc) => (
              <div
                key={sc.id}
                onClick={() => setActiveSousCat(sc.id)}
                style={{
                  ...styles.card,
                  ...(hoveredCard === "s_" + sc.id ? styles.cardHovered : {}),   
                }}
                onMouseEnter={() => setHoveredCard("s_" + sc.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <span style={styles.cardTitle}>{sc.label}</span>
                <div style={styles.cardImgWrap}>
                  <img
                    src={sc.image}
                    alt={sc.label}
                    style={{
                      ...styles.cardImg,
                      ...(hoveredCard === "s_" + sc.id ? styles.cardImgHovered : {}),
                    }}
                  />
                </div>
              </div>
          ))}

          {/* LEVEL 2: PRODUITS */}
          {activeCat && activeSousCat && currentProduits.map((p) => (
              <div
                key={p.id}
                style={{
                  ...styles.productCard,
                  ...(hoveredCard === "p_" + p.id ? styles.productCardHovered : {})
                }}
                onMouseEnter={() => setHoveredCard("p_" + p.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Badge */}
                <div style={styles.productBadge}>
                  {currentSousCat?.label || "Produit"}
                </div>
                
                {/* Image */}
                <div style={styles.productImgContainer}>
                  <img src={p.image} alt={p.nom} style={styles.productImg} />
                </div>

                {/* Info */}
                <div style={styles.productContent}>
                  <h3 style={styles.productTitle}>{p.nom}</h3>
                  
                  <div style={styles.productAttributes}>
                    <div style={styles.productAttrRow}>
                      <span style={styles.productAttrLabel}>Référence :</span>
                      <span style={styles.productAttrValue}>{p.ref}</span>
                    </div>
                    <div style={styles.productAttrRow}>
                      <span style={styles.productAttrLabel}>Psc/carton :</span>
                      <span style={styles.productAttrValue}>{p.psc || 1}</span>
                    </div>
                    <div style={styles.productAttrRow}>
                      <span style={styles.productAttrLabel}>SIZE :</span>
                      <span style={{...styles.productAttrValue, color: "#e20613"}}>{p.size || "-"}</span>
                    </div>
                  </div>

                  <button 
                    style={{
                      ...styles.productButton,
                      ...(hoveredCard === "p_" + p.id ? styles.productButtonHovered : {})
                    }}
                  >
                    DEMANDER UN DEVIS
                  </button>
                </div>
              </div>
          ))}
        </div>
        
        {/* If no products found */}
        {activeCat && activeSousCat && currentProduits.length === 0 && (
          <div style={{ textAlign: "center", padding: "50px", color: "#888" }}>
            Produits à venir — contactez-nous pour plus d'informations.
          </div>
        )}
      </section>
    </div>
  );
}

const styles = {
  page: { fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif", background: "#ffffff", minHeight: "100vh", color: "#090909" },
  hero: { position: "relative", height: 250, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "115px" },
  heroImg: { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.9)" },
  heroOverlay: { position: "absolute", inset: 0, zIndex: 1 },
  heroTitle: { position: "relative", zIndex: 2, margin: 0, color: "#fff", fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 800, textAlign: "center", lineHeight: 1.25, textShadow: "0 2px 12px rgba(0,0,0,0.5)", padding: "0 2px", display:"inline-block" },
  heroTitle1: { position: "relative", zIndex: 2, margin: 0, color: "#C00000", fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 800, textAlign: "center", lineHeight: 1.25, textShadow: "0 2px 12px rgba(0,0,0,0.5)", padding: "0 2px", display:"inline-block" },
  breadcrumbContainer: { width: "100%", background: "#f8f8f8", borderBottom: "1px solid #eaeaea", marginBottom: "10px" },
  breadcrumbBar: { maxWidth: 1200, margin: "0 auto", padding: "16px 24px", fontSize: 14, display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" },
  breadcrumbGray: { color: "#555", cursor: "pointer", transition: "color 0.2s" },
  breadcrumbSep: { color: "#aaa", fontSize: 16 },
  breadcrumbActive: { color: "#c0392b", fontWeight: 600, cursor: "pointer" },
  section: { maxWidth: 1200, margin: "0 auto", padding: "30px 20px 30px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 35 },
  card: { background: "#e8e8e8", border: "1px solid #d5d5d5", borderRadius: 3, display: "flex", alignItems: "center", padding: "0 0 0 20px", minHeight: 90, cursor: "pointer", transition: "box-shadow 0.25s, transform 0.2s, background 0.2s", overflow: "hidden", gap: 10 },
  cardHovered: { background: "#fff", boxShadow: "0 3px 20px #C00000", transform: "translateY(-3px)" },
  cardTitleWrap: { flex: 1, display: "flex", flexDirection: "column", gap: 4 },
  cardTitle: { fontSize: 14, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.35 },
  cardSubCount: { fontSize: 12, color: "#888", fontWeight: 500 },
  cardImgWrap: { width: 110, height: 90, flexShrink: 0, overflow: "hidden" },
  cardImg: { width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.35s ease" },
  cardImgHovered: { transform: "scale(1.08)" },
  productCard: {
    background: "#fff",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 0 15px rgba(0,0,0,0.08)",
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    border: "2px solid #f6f6f6"
  },
  productCardHovered: {
    boxShadow: "0 8px 25px rgba(226, 6, 19, 0.15)",
    transform: "translateY(-3px)",
    border: "2px solid #ffcccc"
  },
  productBadge: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "#c0392b",
    color: "#fff",
    padding: "4px 10px",
    borderRadius: "15px",
    fontSize: "12px",
    fontWeight: "bold",
    zIndex: 2,
  },
  productImgContainer: {
    width: "100%",
    height: "220px",
    background: "#fdfdfd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderBottom: "1px solid #f0f0f0"
  },
  productImg: {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  },
  productContent: {
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    background: "#fff",
  },
  productTitle: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#111",
    margin: "0 0 25px 0",
    minHeight: "40px",
    lineHeight: "1.4"
  },
  productAttributes: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "25px"
  },
  productAttrRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderBottom: "1px dotted #ccc",
    paddingBottom: "5px",
    fontSize: "13px",
    color: "#888"
  },
  productAttrLabel: {
    fontWeight: "500",
  },
  productAttrValue: {
    color: "#000",
    fontWeight: "700",
  },
  productButton: {
    marginTop: "auto",
    width: "100%",
    padding: "12px 0",
    background: "#ffefef",
    color: "#e74c3c",
    border: "1px solid #e74c3c",
    borderRadius: "0px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  productButtonHovered: {
    background: "#e74c3c",
    color: "#fff"
  }
};