import { useState } from "react";
import moteur from "../assets/image/moteur.jpg";
import moteur1 from "../assets/image/Moteur Cummins 6BT 5.9.jpg";
import moteur2 from "../assets/image/Moteur Perkins 1104C-44.jpg";
import moteur3 from "../assets/image/Moteur Deutz BF4M1013.jpg";
import { useNavigate } from 'react-router-dom'
import moteur4 from "../assets/image/Moteur Caterpillar C4.4.jpg";
import groupe1 from "../assets/image/Groupe Perkins 30 KVA.jpg";
import groupe2 from "../assets/image/Groupe Cummins 20 KVA.jpg";
import groupe3 from "../assets/image/Groupe FG Wilson 50 KVA.jpg";
import groupe4 from "../assets/image/Groupe Stamford 100 KVA.jpg";
import groupe5 from "../assets/image/Groupe Leroy Somer 200 KVA.jpg";


const products = [
  {
    id: 1,
    name: "Moteur Cummins 6BT 5.9",
    reference: "MOT-CUM-001",
    pscCarton: 1,
    size: "5.9L",
    image: moteur1,
    tag: "Moteur",
  },
  {
    id: 2,
    name: "Moteur Perkins 1104C-44",
    reference: "MOT-PER-002",
    pscCarton: 1,
    size: "4.4L",
    image: moteur2,
    tag: "Moteur",
  },
  {
    id: 3,
    name: "Moteur Deutz BF4M1013",
    reference: "MOT-DEU-003",
    pscCarton: 1,
    size: "4.0L",
    image: moteur3,
    tag: "Moteur",
    
  },
  {
    id: 4,
    name: "Moteur John Deere 4045",
    reference: "MOT-JD-004",
    pscCarton: 1,
    size: "4.5L",
    image: moteur4,
    tag: "Moteur",
  },
  {
    id: 5,
    name: "Moteur Caterpillar C4.4",
    reference: "MOT-CAT-005",
    pscCarton: 1,
    size: "4.4L",
    image: moteur4 ,
    tag: "Moteur",
  },
  {
    id: 6,
    name: "Groupe Cummins 20 KVA",
    reference: "GRP-CUM-006",
    pscCarton: 1,
    size: "20 KVA",
    image: groupe2,
    tag: "Groupe Électrogène",
  },
  {
    id: 7,
    name: "Groupe Perkins 30 KVA",
    reference: "GRP-PER-007",
    pscCarton: 1,
    size: "30 KVA",
    image: groupe1,
    tag: "Groupe Électrogène",
  },
  
  {
    id: 8,
    name: "Groupe FG Wilson 50 KVA",
    reference: "GRP-FGW-008",
    pscCarton: 1,
    size: "50 KVA",
    image: groupe3 ,
    tag: "Groupe Électrogène",
  },
  
  {
    id: 9,
    name: "Groupe Stamford 100 KVA",
    reference: "GRP-STG-009",
    pscCarton: 1,
    size: "100 KVA",
    image: groupe4,
    tag: "Groupe Électrogène",
  },
    {
    id: 10,
    name: "Groupe Leroy Somer 200 KVA",
    reference: "GRP-LS-010",
    pscCarton: 1,
    size: "200 KVA",
    image: groupe5,
    tag: "Groupe Électrogène"
  },
];
  


const filterDivision = ["Division Pièces de Rechange Automobile", "Division Industrielle", "Division Marine", "Division Travaux Publics"];
const filterSousDivision1 = ["Moteur", "Groupe Électrogène"]


const Breadcrumb = () => (
  <nav style={styles.breadcrumb}>
    <span style={styles.breadLink}>catalogue</span>
    <span style={styles.breadSep}> &gt; </span>
    <span style={styles.breadLink}>Division Travaux Publics</span>
    <span style={styles.breadSep}> &gt; </span>
    <span style={styles.breadLink}>Moteur et groupe électrogéne</span>
    
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
      breadcrumbContainer: {
    width: "100%",
    background: "#f8f8f8",
    borderBottom: "1px solid #eaeaea",
    marginBottom: 24,
  },
  breadcrumbInner: { maxWidth: 1140, margin: "0 auto", padding: "0 20px" },
  breadcrumb: {
    padding: "16px 0",
    fontSize: 14,
    color: "#888",
  },
  breadLink: { color: "#888", textDecoration: "none" },
  breadSep: { margin: "0 8px", color: "#ccc" },
  breadActive: { color: "#C00000", fontWeight: "600" },



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