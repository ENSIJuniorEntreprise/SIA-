import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logoImage from "../assets/logo.png";
import arriereIndus from "./arriereindus.png";

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

/* ═══════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════ */
const categories = [
  {
    id: "transmission",
    label: "Transmission & Mouvement",
    image: imgTransmission,
    sousCategories: [
      { id: "courroies",     label: "Courroies industrielles", image: imgCourroie     },
      { id: "bandes",        label: "Bandes transporteuses",   image: imgBande        },
      { id: "chaines",       label: "Chaînes et pignons",      image: imgChaine       },
      { id: "accouplements", label: "Accouplements",           image: imgAccouplement },
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
    { id:1, nom:"Courroie trapézoïdale OPTIBELT", ref:"OPT-10026", psc:10, size:"A40",     image:imgCourroie, marque:"OPTIBELT" },
    { id:2, nom:"Courroie dentée série T5",        ref:"OPT-20022", psc:5,  size:"T5-500",  image:imgCourroie, marque:"OPTIBELT" },
    { id:3, nom:"Courroie striée poly-V",           ref:"OPT-30041", psc:12, size:"PJ-700",  image:imgCourroie, marque:"OPTIBELT" },
    { id:4, nom:"Courroie variateur agricole",      ref:"OPT-40018", psc:8,  size:"HB-900",  image:imgCourroie, marque:"OPTIBELT" },
    { id:5, nom:"Courroie plate industrielle",      ref:"OPT-50033", psc:6,  size:"40x2000", image:imgBande,    marque:"OPTIBELT" },
    { id:6, nom:"Courroie synchrone HTD",           ref:"OPT-60055", psc:4,  size:"5M-600",  image:imgCourroie, marque:"OPTIBELT" },
  ],
  bandes: [
    { id:1, nom:"Bande PVC blanche alimentaire", ref:"AMB-10011", psc:2, size:"500x3mm", image:imgBande, marque:"AMBI" },
    { id:2, nom:"Bande PU transparente",          ref:"AMB-20014", psc:2, size:"400x2mm", image:imgBande, marque:"AMBI" },
    { id:3, nom:"Courroie plate PVC noire",        ref:"AMB-30021", psc:1, size:"600x4mm", image:imgBande, marque:"AMBI" },
  ],
  chaines: [
    { id:1, nom:"Chaîne simple REGINA 06B", ref:"REG-10044", psc:10, size:"06B-1",   image:imgChaine, marque:"REGINA" },
    { id:2, nom:"Chaîne double REGINA 10B", ref:"REG-20031", psc:5,  size:"10B-2",   image:imgChaine, marque:"REGINA" },
    { id:3, nom:"Pignon simple 12B Z=25",   ref:"CHV-30017", psc:20, size:"12B-Z25", image:imgChaine, marque:"CHVK"   },
    { id:4, nom:"Pignon double 16B Z=19",   ref:"CHV-40028", psc:15, size:"16B-Z19", image:imgChaine, marque:"CHVK"   },
  ],
  accouplements: [
    { id:1, nom:"Accouplement élastique HRC 90", ref:"CHV-50012", psc:4, size:"HRC90",  image:imgAccouplement, marque:"HRC" },
    { id:2, nom:"Manchon d'accouplement",         ref:"CHV-60009", psc:6, size:"HRC130", image:imgAccouplement, marque:"HRC" },
  ],
  motoreducteurs: [
    { id:1, nom:"Motoréducteur NORD 0.37kW", ref:"NRD-10019", psc:1, size:"0.37kW", image:imgMotoreducteur, marque:"NORD" },
    { id:2, nom:"Motoréducteur NORD 0.75kW", ref:"NRD-20023", psc:1, size:"0.75kW", image:imgMotoreducteur, marque:"NORD" },
    { id:3, nom:"Motoréducteur NORD 1.5kW",  ref:"NRD-30031", psc:1, size:"1.5kW",  image:imgMotoreducteur, marque:"NORD" },
  ],
  moteurs: [
    { id:1, nom:"Moteur électrique OMEC 0.55kW", ref:"OMC-10016", psc:1, size:"0.55kW B3", image:imgMoteur, marque:"OMEC" },
    { id:2, nom:"Moteur électrique OMEC 1.1kW",  ref:"OMC-20024", psc:1, size:"1.1kW B3",  image:imgMoteur, marque:"OMEC" },
    { id:3, nom:"Moteur électrique OMEC 2.2kW",  ref:"OMC-30038", psc:1, size:"2.2kW B3",  image:imgMoteur, marque:"OMEC" },
    { id:4, nom:"Moteur électrique OMEC 4kW",    ref:"OMC-40052", psc:1, size:"4kW B3",    image:imgMoteur, marque:"OMEC" },
  ],
  variateurs: [
    { id:1, nom:"Variateur INVERTEK 0.75kW", ref:"INV-10041", psc:1, size:"0.75kW", image:imgVariateur, marque:"INVERTEK" },
    { id:2, nom:"Variateur INVERTEK 1.5kW",  ref:"INV-20055", psc:1, size:"1.5kW",  image:imgVariateur, marque:"INVERTEK" },
  ],
  paliers: [
    { id:1, nom:"Palier SNR UCF 205", ref:"SNR-10033", psc:10, size:"UCF205", image:imgPalier, marque:"SNR" },
    { id:2, nom:"Palier SNR UCF 206", ref:"SNR-20041", psc:10, size:"UCF206", image:imgPalier, marque:"SNR" },
    { id:3, nom:"Palier SNR UCP 207", ref:"SNR-30022", psc:8,  size:"UCP207", image:imgPalier, marque:"SNR" },
  ],
  "roulements-billes": [
    { id:1, nom:"Roulement SNR 6204", ref:"SNR-40011", psc:20, size:"20x47x14", image:imgRoulBille, marque:"SNR" },
    { id:2, nom:"Roulement SNR 6205", ref:"SNR-50018", psc:20, size:"25x52x15", image:imgRoulBille, marque:"SNR" },
    { id:3, nom:"Roulement UBC 6206", ref:"UBC-10027", psc:15, size:"30x62x16", image:imgRoulBille, marque:"UBC" },
    { id:4, nom:"Roulement UBC 6207", ref:"UBC-20034", psc:12, size:"35x72x17", image:imgRoulBille, marque:"UBC" },
  ],
  "roulements-rouleaux": [
    { id:1, nom:"Roulement conique 30205", ref:"SNR-60044", psc:10, size:"25x52x16", image:imgRoulRouleau, marque:"SNR" },
    { id:2, nom:"Roulement conique 30206", ref:"SNR-70051", psc:10, size:"30x62x17", image:imgRoulRouleau, marque:"SNR" },
    { id:3, nom:"Roulement tonneau 22205", ref:"SNR-80033", psc:8,  size:"25x52x18", image:imgRoulRouleau, marque:"SNR" },
  ],
  supports: [
    { id:1, nom:"Support fonte UCF 205", ref:"SNR-90022", psc:10, size:"UCF205", image:imgSupport, marque:"SNR" },
    { id:2, nom:"Support fonte UCP 206", ref:"SNR-91033", psc:8,  size:"UCP206", image:imgSupport, marque:"SNR" },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   HIERARCHY DATA
═══════════════════════════════════════════════════════════════ */
const hierarchyData = {
  "Division Industrielle": {
    "Transmission et mouvement": ["Courroies industrielles", "Bandes transporteuses", "Chaînes et pignons", "Accouplements"],
    "Motorisation et entraînement": ["Motoréducteurs", "Moteurs électriques", "Variateurs", "Paliers"],
    "Roulement & Supports": ["Roulements à billes", "Roulements à rouleaux", "Supports & paliers"],
  },
};

/* ═══════════════════════════════════════════════════════════════
   FILTER PANEL
═══════════════════════════════════════════════════════════════ */
function FilterPanel({ filters, setFilters, onFilter, onReset, showMobile }) {
  const handleSelect = (key, val) => {
    if (key === "division") {
      setFilters(prev => ({ ...prev, division: val, sousDivision1: "", sousDivision2: "" }));
    } else if (key === "sousDivision1") {
      setFilters(prev => ({ ...prev, sousDivision1: val, sousDivision2: "" }));
    } else {
      setFilters(prev => ({ ...prev, [key]: val }));
    }
  };

  const divisions = Object.keys(hierarchyData);
  const categories = filters.division ? Object.keys(hierarchyData[filters.division] || {}) : [];
  const subCategories = filters.sousDivision1 && filters.division
    ? hierarchyData[filters.division][filters.sousDivision1] || []
    : [];

  return (
    <aside className={`w-full lg:w-64 flex-shrink-0 bg-white rounded-lg p-5 shadow-[0_2px_12px_rgba(0,0,0,0.07)] lg:sticky lg:top-5 ${showMobile ? 'block' : 'hidden lg:block'}`}>
      <h3 className="font-['Raleway'] text-sm font-bold text-[#1a1a2e] mb-4 tracking-wide">Chercher par</h3>

      <div className="mb-4">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Sélectionner une Division</p>
        <select
          className="w-full px-3 py-2 text-xs text-gray-700 border border-gray-200 rounded-md bg-white cursor-pointer outline-none focus:border-red-500 transition"
          value={filters.division}
          onChange={(e) => handleSelect("division", e.target.value)}
        >
          <option value="">-- Division --</option>
          {divisions.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      {categories.length > 0 && (
        <div className="mb-4">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Sélectionner une Catégorie</p>
          <select
            className="w-full px-3 py-2 text-xs text-gray-700 border border-gray-200 rounded-md bg-white cursor-pointer outline-none focus:border-red-500 transition"
            value={filters.sousDivision1}
            onChange={(e) => handleSelect("sousDivision1", e.target.value)}
          >
            <option value="">-- Catégorie --</option>
            {categories.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
      )}

      {subCategories.length > 0 && (
        <div className="mb-4">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Sélectionner une Sous-Catégorie</p>
          <select
            className="w-full px-3 py-2 text-xs text-gray-700 border border-gray-200 rounded-md bg-white cursor-pointer outline-none focus:border-red-500 transition"
            value={filters.sousDivision2}
            onChange={(e) => handleSelect("sousDivision2", e.target.value)}
          >
            <option value="">-- Sous-Catégorie --</option>
            {subCategories.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      )}

      <button
        className="w-full bg-[#c0141c] text-white border-none rounded-md py-2 text-sm font-bold cursor-pointer mb-2 tracking-wide hover:bg-red-800 transition-colors"
        onClick={onFilter}
      >
        Filtrer
      </button>
      <button
        className="w-full bg-transparent text-[#c0141c] border border-[#c0141c] rounded-md py-1.5 text-sm font-semibold cursor-pointer tracking-wide hover:bg-red-50 transition-colors"
        onClick={onReset}
      >
        réinitialiser
      </button>
    </aside>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PRODUCT CARD
═══════════════════════════════════════════════════════════════ */
function ProductCard({ product, index }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...styles.prodCard,
        ...(hovered ? styles.prodCardHovered : {}),
        animationDelay: `${index * 60}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      

      <div style={styles.prodImgWrap}>
        <img
          src={product.image}
          alt={product.nom}
          style={{ ...styles.prodImg, transform: hovered ? "scale(1.05)" : "scale(1)" }}
        />
      </div>

      <div style={styles.prodContent}>
        <p style={styles.prodName}>{product.nom}</p>

        <div style={styles.prodAttrs}>
          <div style={styles.prodAttrRow}>
            <span style={styles.prodAttrLabel}>Référence :</span>
            <span style={styles.prodAttrVal}>{product.ref}</span>
          </div>
          <div style={styles.prodAttrRow}>
            <span style={styles.prodAttrLabel}>Marque :</span>
            <span style={styles.prodAttrVal}>{product.psc || 1}</span>
          </div>
          <div style={styles.prodAttrRow}>
            <span style={styles.prodAttrLabel}>SIZE :</span>
            <span style={{ ...styles.prodAttrVal, color: "#c0141c" }}>{product.size || "-"}</span>
          </div>
        </div>

        <button
          style={{ ...styles.prodBtn, ...(hovered ? styles.prodBtnHovered : {}) }}
          onClick={() => navigate("/contact")}
        >
          DEMANDER UN DEVIS
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN
═══════════════════════════════════════════════════════════════ */
export default function DivisionIndustrielle() {
  const [activeCat,     setActiveCat]     = useState(null);
  const [activeSousCat, setActiveSousCat] = useState(null);
  const [hoveredCard,   setHoveredCard]   = useState(null);
  const [filters,       setFilters]       = useState({ division: "", sousDivision1: "", sousDivision2: "" });
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  const empty = { division: "", sousDivision1: "", sousDivision2: "" };
  const handleFilter = () => setShowMobileFilters(false);
  const handleReset = () => { setFilters(empty); setShowMobileFilters(false); };

  useEffect(() => { setFilters(empty); }, [activeSousCat]);

  const currentCat     = categories.find((c) => c.id === activeCat);
  const currentSousCat = currentCat?.sousCategories.find((s) => s.id === activeSousCat);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSectionVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={styles.page}>

      <div style={styles.hero}>
        <img src={arriereIndus} alt="hero" style={styles.heroImg} />
        <div style={styles.heroOverlay} />
        <h1 style={styles.heroTitle}>
          DIVISION <span style={styles.heroTitleRed}>INDUSTRIELLE</span>
        </h1>
      </div>

  
      <div style={styles.breadcrumbContainer}>
        <div style={styles.breadcrumbBar}>
          <span style={{ color: "#555" }}>Catalogue</span>
          <span style={styles.sep}>&gt;</span>
          <span
            style={activeCat ? styles.bcLink : styles.bcActive}
            onClick={() => { setActiveCat(null); setActiveSousCat(null); }}
          >
            Division Industrielle
          </span>
          {currentCat && (
            <>
              <span style={styles.sep}>&gt;</span>
              <span
                style={activeSousCat ? styles.bcLink : styles.bcActive}
                onClick={() => setActiveSousCat(null)}
              >
                {currentCat.label}
              </span>
            </>
          )}
          {currentSousCat && (
            <>
              <span style={styles.sep}>&gt;</span>
              <span style={styles.bcActive}>{currentSousCat.label}</span>
            </>
          )}
        </div>
      </div>

      <section ref={sectionRef} style={{ ...styles.section, opacity: sectionVisible ? 1 : 0, transform: sectionVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}>

        
        {!activeCat && (
          <div style={styles.cardGrid}>
            {categories.map((cat) => (
              <div
                key={cat.id}
                onClick={() => { setActiveCat(cat.id); setActiveSousCat(null); }}
                style={{ ...styles.card, ...(hoveredCard === "c_" + cat.id ? styles.cardHovered : {}) }}
                onMouseEnter={() => setHoveredCard("c_" + cat.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.cardTitleWrap}>
                  <span style={styles.cardTitle}>{cat.label}</span>
                </div>
                <div style={styles.cardImgWrap}>
                  <img src={cat.image} alt={cat.label}
                    style={{ ...styles.cardImg, ...(hoveredCard === "c_" + cat.id ? styles.cardImgHovered : {}) }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* LEVEL 1 — SOUS-CATEGORIES */}
        {activeCat && !activeSousCat && (
          <div style={styles.cardGrid}>
            {currentCat?.sousCategories?.map((sc) => (
              <div
                key={sc.id}
                onClick={() => setActiveSousCat(sc.id)}
                style={{ ...styles.card, ...(hoveredCard === "s_" + sc.id ? styles.cardHovered : {}) }}
                onMouseEnter={() => setHoveredCard("s_" + sc.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.cardTitleWrap}>
                  <span style={styles.cardTitle}>{sc.label}</span>
                </div>
                <div style={styles.cardImgWrap}>
                  <img src={sc.image} alt={sc.label}
                    style={{ ...styles.cardImg, ...(hoveredCard === "s_" + sc.id ? styles.cardImgHovered : {}) }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* LEVEL 2 — FILTRE + AUCUN PRODUIT */}
        {activeCat && activeSousCat && (
          <>
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowMobileFilters((v) => !v)}
                className="w-full bg-white border border-gray-300 text-gray-800 py-3 px-4 rounded-lg flex justify-between items-center shadow-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c0141c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  Filtrer les produits
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 items-start">
              <FilterPanel
                filters={filters}
                setFilters={setFilters}
                onFilter={handleFilter}
                onReset={handleReset}
                showMobile={showMobileFilters}
              />
              <main className="flex-1 w-full">
                <div className="bg-gray-50 rounded-xl p-10 text-center text-gray-500 border border-gray-100 flex flex-col items-center">
                  <p className="text-lg font-medium text-gray-700">Aucun produit trouvé</p>
                  <p className="text-sm mt-1 mb-4">Essayez d'ajuster vos critères de filtrage.</p>
                  <button onClick={handleReset} className="text-[#c0141c] hover:underline font-semibold text-sm">Réinitialiser les filtres</button>
                </div>
              </main>
            </div>
          </>
        )}

      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @media (max-width: 768px) {
          .mobile-filter-btn { display: flex !important; }
          .filter-aside { display: none; }
        }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   STYLES
═══════════════════════════════════════════════════════════════ */
const styles = {
  page: { fontFamily:"'Segoe UI','Helvetica Neue',Arial,sans-serif", background:"#fff", minHeight:"100vh", color:"#111" },

  hero:        { position:"relative", height:250, overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center" },
  heroImg:     { position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", filter:"brightness(0.9)" },
  heroOverlay: { position:"absolute", inset:0, zIndex:1 },
  heroTitle:   { position:"relative", zIndex:2, margin:0, color:"#fff", fontSize:"clamp(30px,4vw,50px)", fontWeight:800, textAlign:"center", lineHeight:1.25, textShadow:"0 2px 12px rgba(0,0,0,0.5)" },
  heroTitleRed:{ color:"#C00000" },

  breadcrumbContainer: { width:"100%", background:"#f8f8f8", borderBottom:"1px solid #eaeaea", marginBottom:10 },
  breadcrumbBar: { maxWidth:1200, margin:"0 auto", padding:"16px 24px", fontSize:14, display:"flex", alignItems:"center", gap:12, flexWrap:"wrap" },
  bcLink:   { color:"#555", cursor:"pointer" },
  sep:      { color:"#aaa", fontSize:16 },
  bcActive: { color:"#c0392b", fontWeight:600, cursor:"pointer" },

  section:  { maxWidth:1200, margin:"0 auto", padding:"30px 20px" },

  /* Category / sous-cat cards */
  cardGrid: { display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:35 },
  card:     { background:"#e8e8e8", border:"1px solid #d5d5d5", borderRadius:3, display:"flex", alignItems:"center", padding:0, minHeight:90, cursor:"pointer", transition:"box-shadow 0.25s,transform 0.2s,background 0.2s", overflow:"hidden", gap:0 },
  cardHovered:    { background:"#fff", boxShadow:"0 3px 20px #C00000", transform:"translateY(-3px)" },
  cardTitleWrap:  { flex:1, display:"flex", flexDirection:"column", gap:4, padding:"0 16px" },
  cardTitle:      { fontSize:14, fontWeight:700, color:"#1a1a1a", lineHeight:1.35 },
  cardSubCount:   { fontSize:12, color:"#888", fontWeight:500 },
  cardImgWrap:    { width:130, height:90, flexShrink:0, overflow:"hidden" },
  cardImg:        { width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.35s ease" },
  cardImgHovered: { transform:"scale(1.08)" },

  /* Product layout */
  productLayout: { display:"flex", gap:24, alignItems:"flex-start" },
  productMain:   { flex:1, minWidth:0 },
  prodGrid:      { display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:20 },

  /* Filter sidebar */
  filterAside:    { width:240, flexShrink:0, background:"#fff", borderRadius:8, padding:20, boxShadow:"0 2px 12px rgba(0,0,0,0.07)", position:"sticky", top:20 },
  filterTitle:    { fontSize:13, fontWeight:700, color:"#1a1a2e", marginBottom:16, letterSpacing:"0.04em", textTransform:"uppercase" },
  filterGroup:    { marginBottom:16 },
  filterLabel:    { fontSize:11, fontWeight:600, color:"#aaa", textTransform:"uppercase", letterSpacing:"0.07em", marginBottom:6, margin:"0 0 6px 0" },
  filterSelect:   { width:"100%", padding:"8px 10px", fontSize:12, color:"#444", border:"1px solid #ddd", borderRadius:6, background:"#fff", cursor:"pointer", outline:"none" },
  filterBtnReset: { width:"100%", padding:"8px 0", background:"transparent", color:"#c0141c", border:"1px solid #c0141c", borderRadius:6, fontSize:13, fontWeight:600, cursor:"pointer", marginTop:4 },

  /* Mobile filter toggle */
  mobileFilterBtn: { display:"none", width:"100%", background:"#fff", border:"1px solid #ddd", borderRadius:8, padding:"12px 16px", marginBottom:12, fontSize:13, fontWeight:600, cursor:"pointer", justifyContent:"space-between", alignItems:"center", color:"#333" },

  /* Product card */
  prodCard:        { background:"#fff", borderRadius:8, overflow:"hidden", boxShadow:"0 2px 10px rgba(0,0,0,0.07)", transition:"box-shadow 0.3s,transform 0.3s", display:"flex", flexDirection:"column", position:"relative", border:"1px solid #f0f0f0", animation:"fadeUp 0.4s ease both" },
  prodCardHovered: { boxShadow:"0 8px 20px rgba(192,20,28,0.18)", transform:"translateY(-3px)" },
  prodBadge:       { position:"absolute", top:10, right:10, background:"#c0141c", color:"#fff", padding:"3px 10px", borderRadius:20, fontSize:11, fontWeight:700, zIndex:2 },
  prodImgWrap:     { background:"#fafafa", display:"flex", justifyContent:"center", alignItems:"center", height:180, borderBottom:"1px solid #f0f0f0", padding:16, overflow:"hidden" },
  prodImg:         { maxHeight:"100%", maxWidth:"80%", objectFit:"contain", transition:"transform 0.3s" },
  prodContent:     { padding:"16px 16px 14px", display:"flex", flexDirection:"column", flexGrow:1 },
  prodName:        { fontSize:13, fontWeight:700, color:"#1a1a2e", marginBottom:12, lineHeight:1.4, minHeight:36 },
  prodAttrs:       { display:"flex", flexDirection:"column", gap:6, marginBottom:14 },
  prodAttrRow:     { display:"flex", justifyContent:"space-between", alignItems:"flex-end", borderBottom:"1px dashed #e0e0e0", paddingBottom:4, fontSize:12 },
  prodAttrLabel:   { color:"#888", fontWeight:500 },
  prodAttrVal:     { color:"#1a1a2e", fontWeight:700 },
  prodBtn:         { marginTop:"auto", width:"100%", padding:"10px 0", background:"transparent", color:"#c0141c", border:"1px solid #c0141c", borderRadius:0, fontSize:12, fontWeight:700, cursor:"pointer", letterSpacing:"0.06em", transition:"all 0.3s" },
  prodBtnHovered:  { background:"#c0141c", color:"#fff" },

  emptyState: { background:"#f9f9f9", borderRadius:12, padding:48, textAlign:"center", border:"1px solid #eee" },
  resetLink:  { color:"#c0141c", background:"none", border:"none", fontSize:13, fontWeight:600, cursor:"pointer", marginTop:10, textDecoration:"underline" },
};
