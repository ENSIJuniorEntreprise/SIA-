import { useState } from "react";
import moteur from "../assets/image/moteur.jpg";
import imm1 from "../assets/image/Poste à Souder MIG Lincoln Electric 250A.jpg";
import imm2 from "../assets/image/Poste à Souder Inverter ESAB 160A.jpg";
import imm3 from "../assets/image/Poste à Souder Plasma Hypertherm 45A.jpg";
import { useNavigate } from 'react-router-dom'
import imm4 from "../assets/image/Clé à Choc Pneumatique.jpg";
import imm5 from "../assets/image/Marteau Piqueur SDS-Max Makita 1500W.jpg";
import imm6 from "../assets/image/Clé Dynamométrique.jpg";
import imm7 from "../assets/image/Électrode Soudure Rutile E6013 3.2mm.jpg";

const products = [
  {
    id: 1,
    name: "Poste à Souder MIG Lincoln Electric 250A",
    reference: "SOU-MIG-001",
    pscCarton: 1,
    size: "250A",
    image: imm1,
    tag: "Machine de Soudure"
  },
 
  {
    id: 2,
    name: "Poste à Souder Inverter ESAB 160A",
    reference: "SOU-INV-003",
    pscCarton: 1,
    size: "160A",
    image: imm2,
    tag: "Machine de Soudure"
  },
  {
    id: 3,
    name: "Poste à Souder Plasma Hypertherm 45A",
    reference: "SOU-PLA-004",
    pscCarton: 1,
    size: "45A",
    image: imm3,
    tag: "Machine de Soudure"
  },

  {
    id: 4,
    name: "Clé à Choc Pneumatique 1/2\"",
    reference: "OUT-CLE-005",
    pscCarton: 1,
    size: "1/2\"",
    image: imm4,
    tag: "Outillage"
  },
   {
    id: 5,
    name: "Marteau Piqueur SDS-Max Makita 1500W",
    reference: "OUT-MAR-008",
    pscCarton: 1,
    size: "1500W",
    image: imm5,
    tag: "Outillage"
  },
  {
    id: 6,
    name: "Clé Dynamométrique 1/2\" 40-200 Nm",
    reference: "OUT-DYN-009",
    pscCarton: 1,
    size: "40-200 Nm",
    image: imm6,
    tag: "Outillage"
  },

  {
    id: 7,
    name: "Électrode Soudure Rutile E6013 3.2mm",
    reference: "CON-ELE-010",
    pscCarton: 20,
    size: "3.2mm",
    image: imm7,
    tag: "Consommable"
  },
 
]



const filterDivision = ["Division Pièces de Rechange Automobile", "Division Industrielle", "Division Marine", "Division Travaux Publics"];
const filterSousDivision1 = ["Machine de soudure", "Outillage","Consommable"]


const Breadcrumb = () => (
  <nav style={styles.breadcrumb}>
    <span style={styles.breadLink}>catalogue</span>
    <span style={styles.breadSep}> &gt; </span>
    <span style={styles.breadLink}>Division Travaux Publics</span>
    <span style={styles.breadSep}> &gt; </span>
    <span style={styles.breadLink}>Machine de soudure, outillage, consommable</span>
    
  </nav>
);

const FilterPanel = ({ filters, setFilters, onFilter, onReset }) => {
  const handleSelect = (key, val) => {
    setFilters((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <aside style={styles.filterPanel}>
      <h3 style={styles.filterTitle}>Chercher par</h3>

      <div style={styles.filterSection}>
        <p style={styles.filterLabel}>Sélectionner un Division</p>
        <select
          style={styles.select}
          value={filters.division}
          onChange={(e) => handleSelect("sousDivision1", e.target.value)}
        >
          <option value="">-- Division --</option>
          {filterDivision.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div style={styles.filterSection}>
        <p style={styles.filterLabel}>Sélectionner un Sous-Division </p>
        <select
          style={styles.select}
          value={filters.sousDivision1}
          onChange={(e) => handleSelect("sousDivision1", e.target.value)}
        >
          <option value="">-- Sous-Division 1 --</option>
          {filterSousDivision1.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      

      <button style={styles.btnFilter} onClick={onFilter}>
        Filtrer
      </button>
      <button style={styles.btnReset} onClick={onReset}>
        réinitialiser
      </button>
    </aside>
  );
};

const ProductCard = ({ product, index }) => {
    const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(hovered ? styles.cardHover : {}),
        animationDelay: `${index * 60}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.cardImgWrap}>
        <img src={product.image} alt={product.name} style={styles.cardImg} />
        <span style={styles.cardTag}>{product.tag}</span>
      </div>
      <div style={styles.cardBody}>
        <p style={styles.cardName}>{product.name}</p>
        <div style={styles.cardMeta}>
          <span style={styles.metaLabel}>Référence :</span>
          <span style={styles.metaVal}>{product.reference}</span>
        </div>
        <div style={styles.cardMeta}>
          <span style={styles.metaLabel}>Psc/carton :</span>
          <span style={styles.metaVal}>{product.pscCarton}</span>
        </div>
        <div style={styles.cardMeta}>
          <span style={styles.metaLabel}>SIZE :</span>
          <span style={{ ...styles.metaVal, ...styles.sizeVal }}>
            {product.size}
          </span>
        </div>
      </div>
      <button
        onClick={() => navigate('/contact')}
        style={{
          ...styles.btnDevis,
          ...(hovered ? styles.btnDevisHover : {}),
        }}
      >
        DEMANDER UN DEVIS
      </button>
    </div>
  );
};

export default function LubrificationPage() {
  const navigate = useNavigate();
 const [filters, setFilters] = useState({ division: "", sousDivision1: "" })
const [activeFilters, setActiveFilters] = useState({ division: "", sousDivision1: "" })

  const handleFilter = () => setActiveFilters({ ...filters });
 const handleReset = () => {
  const empty = { division: "", sousDivision1: "" }
  setFilters(empty)
  setActiveFilters(empty)
}

const filtered = products.filter((p) => {
  const okSousDiv1 = !activeFilters.sousDivision1 || p.tag === activeFilters.sousDivision1
  return okSousDiv1
})

  return (
    <div style={styles.page}>
      {/* Hero Banner */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Division Travaux 
            <br />
            <span style={styles.heroTitle1}>Public</span>
          </h1>
        </div>
      </div>

      <div style={styles.breadcrumbContainer}>
        <div style={styles.breadcrumbInner}>
          <Breadcrumb />
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.layout}>
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            onFilter={handleFilter}
            onReset={handleReset}
          />

          <main style={styles.main}>
            <div style={styles.grid}>
              {filtered.map((p, i) => (
                <ProductCard key={`${p.id}-${i}`} product={p} index={i} />
              ))}
            </div>
          </main>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&family=Source+Sans+3:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Source Sans 3', sans-serif; background: #ffffff; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .card-anim { animation: fadeUp 0.4s ease both; }
      `}</style>
    </div>
  );
}

const RED = "#c0141c";
const DARK = "#1a1a2e";

const styles = {
  page: { fontFamily: "'Source Sans 3', sans-serif", background: "#ffffff", minHeight: "100vh" },

  // Hero
  hero: { position: "relative", height: 500, overflow: "hidden", background: `linear-gradient(135deg, ${DARK} 0%, #2d2d44 100%)` },
  heroOverlay: { position: "absolute", inset: 0, background: `url(${moteur}) center/cover no-repeat`, opacity: 0.9 },
  heroContent: { position: "relative", zIndex: 1, height: "100%", display: "flex", alignItems: "center", justifyContent: "center" },
  heroTitle: { fontFamily: "'Raleway', sans-serif", color: "#fff", fontSize: "clamp(90px, 4vw, 50px)", fontWeight: 800, textAlign: "center", lineHeight: 1.25, letterSpacing: "-0.5px" },
  heroTitle1: { fontFamily: "'Raleway', sans-serif", color: "#C00000", fontSize: "clamp(90px, 4vw, 50px)", fontWeight: 800, textAlign: "center", lineHeight: 1.25, letterSpacing: "-0.5px" },

  // Layout
  breadcrumbContainer: { width: "100%", background: "#f8f8f8", borderBottom: "1px solid #eaeaea", marginBottom: 24 },
  breadcrumbInner: { maxWidth: 1140, margin: "0 auto", padding: "0 20px" },
  container: { maxWidth: 1140, margin: "0 auto", padding: "0 20px" },
  layout: { display: "flex", gap: 24, alignItems: "flex-start", paddingBottom: 48 },

  // Breadcrumb
  breadcrumb: { padding: "16px 0", fontSize: 14, color: "#888", display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" },
  breadLink: { color: "#555", cursor: "pointer", textDecoration: "none" },
  breadSep: { color: "#aaa", fontSize: 16 },
  breadActive: { color: RED, fontWeight: 600 },

  // Sidebar
  filterPanel: { width: 200, flexShrink: 0, background: "#fff", borderRadius: 10, padding: "20px 16px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", position: "sticky", top: 20 },
  filterTitle: { fontFamily: "'Raleway', sans-serif", fontSize: 14, fontWeight: 700, color: DARK, marginBottom: 16, letterSpacing: "0.3px" },
  filterSection: { marginBottom: 16 },
  filterLabel: { fontSize: 11, fontWeight: 600, color: "#999", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 6 },
  select: { width: "100%", padding: "7px 10px", fontSize: 12, color: "#444", border: "1.5px solid #e0e0e0", borderRadius: 6, background: "#fff", cursor: "pointer", outline: "none", appearance: "auto" },
  btnFilter: { width: "100%", background: RED, color: "#fff", border: "none", borderRadius: 6, padding: "9px 0", fontSize: 13, fontWeight: 700, cursor: "pointer", marginBottom: 8, letterSpacing: "0.3px", transition: "opacity .2s" },
  btnReset: { width: "100%", background: "transparent", color: RED, border: `1.5px solid ${RED}`, borderRadius: 6, padding: "8px 0", fontSize: 13, fontWeight: 600, cursor: "pointer", letterSpacing: "0.3px" },

  // Grid
  main: { flex: 1 },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 },

  // Card
  card: {
    background: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.07)",
    display: "flex",
    flexDirection: "column",
    transition: "transform .2s, box-shadow .2s",
    animation: "fadeUp 0.4s ease both",
  },
  cardHover: { transform: "translateY(0px)", boxShadow: "0 8px 8px #C00000" },
  cardImgWrap: { position: "relative", background: "#fafafa", display: "flex", justifyContent: "center", alignItems: "center", height: 160, borderBottom: "1px solid #f0f0f0" },
  cardImg: { maxHeight: 130, maxWidth: "80%", objectFit: "contain" },
  cardTag: { position: "absolute", top: 8, right: 8, background: RED, color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 20, letterSpacing: "0.5px" },
  cardBody: { padding: "12px 14px 8px", flex: 1 },
  cardName: { fontSize: 13, fontWeight: 700, color: DARK, marginBottom: 10, lineHeight: 1.35, minHeight: 36 },
  cardMeta: { display: "flex", justifyContent: "space-between", fontSize: 12, color: "#555", marginBottom: 4, borderBottom: "1px dashed #f0f0f0", paddingBottom: 4 },
  metaLabel: { color: "#888", fontWeight: 500 },
  metaVal: { fontWeight: 600, color: DARK },
  sizeVal: { color: RED },
  btnDevis: {
    margin: "10px 14px 14px",
    background: "transparent",
    color: "#E10600",
    border: "1px solid #E10600",
    borderRadius: 0,
    padding: "9px 0",
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: "0.6px",
    cursor: "pointer",
    transition: "all 0.3s",
  },
  btnDevisHover: { background: "#E10600", color: "#fff" },
};