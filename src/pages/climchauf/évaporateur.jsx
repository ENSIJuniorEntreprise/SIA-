import { useState } from "react";

const heroImage = "main.png";

const products = [
  {
    id: 1,
    name: "evaporateur climatisation ",
    reference: "  818201",
    image :"/sia/climatisation chauffage/évaporateur/evaporateur climatisation ref 818201.webp",
    tag: "évaporateur",
  },
  {
    id: 3,
    name: "evaporateur climatisation   ",
    reference: " 560087",
    image :"/sia/climatisation chauffage/évaporateur/evaporateur ref 560087.webp",
    tag: "évaporateur",
  },
  {
    id: 3,
    name: "evaporateur climatisation ",
    reference: " 715295",
    image :"my-app/public/sia/climatisation chauffage/évaporateur/ref 715295.webp",
    tag: "évaporateur",
  },
];

const filterDivision = [
  "Division Pièces de Rechange Automobile",
  "Division Industrielle",
  "Division Marine",
  "Division Travaux Publics",
];
const filterSousDivision1 = ["Moteur", "Suspension", "Freinage", "Filtration"];
const filterSousDivision2 = ["Compresseur","condenseur","évaporateur",'ventillation'];
const Breadcrumb = () => (
  <nav style={styles.breadcrumb}>
    <span style={styles.breadLink}>catalogue</span>
    <span style={styles.breadSep}> &gt; </span>
    <span style={styles.breadLink}>Division Pièces de Rechange Automobile</span>
    <span style={styles.breadSep}> &gt; </span>
    <span style={styles.breadLink}>climatisation et chauffage</span>
    <span style={styles.breadSep}> &gt; </span>
    <span style={styles.breadActive}>évaporateur</span>
  </nav>
);

const FilterPanel = ({ filters, setFilters, onFilter, onReset }) => {
  const handleSelect = (key, val) =>
    setFilters((prev) => ({ ...prev, [key]: val }));

  return (
    <aside style={styles.filterPanel}>
      <h3 style={styles.filterTitle}>Chercher par</h3>

      <div style={styles.filterSection}>
        <p style={styles.filterLabel}>Sélectionner un Division</p>
        <select
          style={styles.select}
          value={filters.division}
          onChange={(e) => handleSelect("division", e.target.value)}
        >
          <option value="">-- Division --</option>
          {filterDivision.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div style={styles.filterSection}>
        <p style={styles.filterLabel}>Sélectionner un Sous-Division 1</p>
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

      <div style={styles.filterSection}>
        <p style={styles.filterLabel}>Sélectionner un Sous-Division 2</p>
        <select
          style={styles.select}
          value={filters.sousDivision2}
          onChange={(e) => handleSelect("sousDivision2", e.target.value)}
        >
          <option value="">-- Sous-Division 2 --</option>
          {filterSousDivision2.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <button style={styles.btnFilter} onClick={onFilter}>Filtrer</button>
      <button style={styles.btnReset} onClick={onReset}>réinitialiser</button>
    </aside>
  );
};

const ProductCard = ({ product, index }) => {
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
        {/* Photos gardées telles quelles — chemins locaux du projet */}
        <img src={product.image} alt={product.name} style={styles.cardImg} />
        {product.tag && <span style={styles.cardTag}>{product.tag}</span>}
      </div>
      <div style={styles.cardBody}>
        <p style={styles.cardName}>{product.name}</p>
        <div style={styles.cardMeta}>
          <span style={styles.metaLabel}>Référence :</span>
          <span style={styles.metaVal}>{product.reference}</span>
        </div>
       
       
      </div>
      <button
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

export default function MarinePage() {
  const [filters, setFilters] = useState({
    division: "",
    sousDivision1: "",
    sousDivision2: "",
  });
  const [activeFilters, setActiveFilters] = useState({
    division: "",
    sousDivision1: "",
    sousDivision2: "",
  });

  const handleFilter = () => setActiveFilters({ ...filters });
  const handleReset = () => {
    const empty = { division: "", sousDivision1: "", sousDivision2: "" };
    setFilters(empty);
    setActiveFilters(empty);
  };

  const filtered = products.filter((p) => {
    const okDivision =
      !activeFilters.division || p.name.includes(activeFilters.division);
    const okSousDiv1 =
      !activeFilters.sousDivision1 ||
      p.name.includes(activeFilters.sousDivision1);
    const okSousDiv2 =
      !activeFilters.sousDivision2 || p.tag === activeFilters.sousDivision2;
    return okDivision && okSousDiv1 && okSousDiv2;
  });

  return (
    <div style={styles.page}>
      {/* Hero Banner */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContent}>
          {/* ✅ Titre sur UNE SEULE ligne, taille augmentée */}
          <h1 style={styles.heroTitle}>
            Division piéces de rechange <div style={styles.heroTitleAccent}>Automobile</div>
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
            {filtered.length === 0 ? (
              <p style={{ color: "#888", fontSize: 14, padding: "20px 0" }}>
                Aucun produit ne correspond aux filtres sélectionnés.
              </p>
            ) : (
              <div style={styles.grid}>
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800;900&family=Source+Sans+3:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Source Sans 3', sans-serif; background: #ffffff; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const RED = "#c0141c";
const DARK = "#1a1a2e";

const styles = {
  page: {
    fontFamily: "'Source Sans 3', sans-serif",
    background: "#ffffff",
    minHeight: "100vh",
  },

  hero: {
    position: "relative",
    height: 260,
    overflow: "hidden",
    background: `linear-gradient(135deg, ${DARK} 0%, #2d2d44 100%)`,
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.75,
  },
  heroContent: {
    position: "relative",
    zIndex: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  // ✅ Une seule ligne, taille max 72px (était 50px), whiteSpace nowrap
  heroTitle: {
    fontFamily: "'Raleway', sans-serif",
    color: "#fff",
    fontSize: "clamp(38px, 6vw, 72px)",
    fontWeight: 900,
    textAlign: "center",
    lineHeight: 1.1,
    letterSpacing: "-1px",
    whiteSpace: "nowrap",
  },
  heroTitleAccent: {
    color: "#C00000",
  },

  breadcrumbContainer: {
    width: "100%",
    background: "#f8f8f8",
    borderBottom: "1px solid #eaeaea",
    marginBottom: 24,
  },
  breadcrumbInner: { maxWidth: 1140, margin: "0 auto", padding: "0 20px" },
  container: { maxWidth: 1140, margin: "0 auto", padding: "0 20px" },
  layout: {
    display: "flex",
    gap: 24,
    alignItems: "flex-start",
    paddingBottom: 48,
  },

  breadcrumb: {
    padding: "16px 0",
    fontSize: 14,
    color: "#888",
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
    alignItems: "center",
  },
  breadLink: { color: "#555", cursor: "pointer" },
  breadSep: { color: "#aaa", fontSize: 16 },
  breadActive: { color: RED, fontWeight: 600 },

  filterPanel: {
    width: 200,
    flexShrink: 0,
    background: "#fff",
    borderRadius: 10,
    padding: "20px 16px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
    position: "sticky",
    top: 20,
  },
  filterTitle: {
    fontFamily: "'Raleway', sans-serif",
    fontSize: 14,
    fontWeight: 700,
    color: DARK,
    marginBottom: 16,
  },
  filterSection: { marginBottom: 16 },
  filterLabel: {
    fontSize: 11,
    fontWeight: 600,
    color: "#999",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: 6,
  },
  select: {
    width: "100%",
    padding: "7px 10px",
    fontSize: 12,
    color: "#444",
    border: "1.5px solid #e0e0e0",
    borderRadius: 6,
    background: "#fff",
    cursor: "pointer",
    outline: "none",
  },
  btnFilter: {
    width: "100%",
    background: RED,
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "9px 0",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    marginBottom: 8,
  },
  btnReset: {
    width: "100%",
    background: "transparent",
    color: RED,
    border: `1.5px solid ${RED}`,
    borderRadius: 6,
    padding: "8px 0",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
  },

  main: { flex: 1 },
  grid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 },

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
  cardHover: { boxShadow: "0 8px 20px rgba(192,20,28,0.35)" },
  cardImgWrap: {
    position: "relative",
    background: "#fafafa",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 160,
    borderBottom: "1px solid #f0f0f0",
  },
  cardImg: { maxHeight: 130, maxWidth: "80%", objectFit: "contain" },
  cardTag: {
    position: "absolute",
    top: 8,
    right: 8,
    background: RED,
    color: "#fff",
    fontSize: 10,
    fontWeight: 700,
    padding: "2px 7px",
    borderRadius: 20,
  },
  cardBody: { padding: "12px 14px 8px", flex: 1 },
  cardName: {
    fontSize: 13,
    fontWeight: 700,
    color: DARK,
    marginBottom: 10,
    lineHeight: 1.35,
    minHeight: 36,
  },
  cardMeta: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 12,
    color: "#555",
    marginBottom: 4,
    borderBottom: "1px dashed #f0f0f0",
    paddingBottom: 4,
  },
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