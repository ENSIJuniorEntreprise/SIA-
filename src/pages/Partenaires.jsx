import { useEffect, useRef, useState, useCallback } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import "./Partenaires.css";
import heroHeaderImage from "../assets/headerbackground.jpg";
import logoImage from "../assets/logo.png";

const HERO_BG_IMAGE = heroHeaderImage;
const LOGO_IMAGE = logoImage;

/* ════════════════════════════════════════════════════════════════
   LOGOS LOCAUX — COLLE LE CHEMIN DE TON FICHIER ICI
   Tous les fichiers sont dans : src/assets/brands/
   Format accepté : .png / .svg / .jpg / .webp
   Si un logo est null → fallback automatique (initiales en rouge)
════════════════════════════════════════════════════════════════ */

// ── TRANSMISSION ──────────────────────────────────────────────
import logoOmec            from "../assets/brands/omec.jpg";
import logoOptibelt        from "../assets/brands/optibelt.svg";
import logoAmmeraal        from "../assets/brands/ammeral-beltech.png";
import logoBkGears         from "../assets/brands/b.k-gear.jpg";
import logoInvertek        from "../assets/brands/invertek.svg";
import logoNord            from "../assets/brands/nord.svg";

// ── ROULEMENTS ────────────────────────────────────────────────
import logoSnr             from "../assets/brands/snr.png";
import logoUbc             from "../assets/brands/ubc.png";
import logoRegina          from "../assets/brands/regina.png";
import logoChiaravalli     from "../assets/brands/chiaravalli.png";
import logoZmc             from "../assets/brands/zmc.webp";

// ── AUTOMOBILE ────────────────────────────────────────────────
import logoValeo           from "../assets/brands/Valeo.svg";
import logoLpr             from "../assets/brands/lpr.jpg";
import logoOcap            from "../assets/brands/ocap.png";
import logoImp             from "../assets/brands/imp.png";
import logoRa              from "../assets/brands/r2a.webp";
import logoFare            from "../assets/brands/fare.png";
import logoTecno           from "../assets/brands/tecno.png";
import logoEanes           from "../assets/brands/misfat.png";

// ── MOTEUR ────────────────────────────────────────────────────
import logoChampion        from "../assets/brands/champion.png";
import logoCofran          from "../assets/brands/cofran.svg";

/* ════════════════════════════════════════════════════════════════
   TABLE DE CORRESPONDANCE  nom-marque → logo importé
   Si tu n'as pas encore un logo → remplace par null
════════════════════════════════════════════════════════════════ */
const BRAND_LOGOS = {
  // ── Transmission
  OMEC:               logoOmec,
  OPTIBELT:           logoOptibelt,
  "AMMERAAL BELTECH": logoAmmeraal,
  "B.K. GEARS":       logoBkGears,
  INVERTEK:           logoInvertek,
  NORD:               logoNord,
  // ── Roulements
  SNR:                logoSnr,
  UBC:                logoUbc,
  REGINA:             logoRegina,
  CHIARAVALLI:        logoChiaravalli,
  ZMC:                logoZmc,
  // ── Automobile
  VALEO:              logoValeo,
  LPR:                logoLpr,
  OCAP:               logoOcap,
  IMP:                logoImp,
  "R&A":              logoRa,
  FARE:               logoFare,
  SIARECROD:          null,
  TECNO:              logoTecno,
  "EANES / MISFAT":   logoEanes,
  // ── Moteur
  CHAMPION:           logoChampion,
  GLYCO:              null,
  PAYEN:              null,
  GOETZE:             null,
  "NÜRAL":            null,
  COFRAN:             logoCofran,
};

/* ─── DONNÉES ─────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { id: "accueil",     label: "Accueil",     href: "#hero"       },
  { id: "divisions",   label: "Divisions",   href: "#categories" },
  { id: "partenaires", label: "Partenaires", href: "#categories" },
  { id: "contact",     label: "Contact",     href: "#footer"     },
];

const stats = [
  { unit: "Pays",     text: "Couverture mondiale en Europe, Asie et Amérique.",         icon: "", value: 11    },
  { unit: "Produits", text: "Gamme complète de solutions techniques et industrielles.", icon: "", value: 13230 },
  { unit: "Marques",  text: "Leaders mondiaux dans leurs domaines respectifs.",         icon: "", value: 30    },
];

const categories = [
  { id: "transmission", title: "Transmission & Motorisation",        image: "https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: "roulements",   title: "Roulements & Composants Mécaniques", image: "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: "automobile",   title: "Automobiles & Poids lourds",         image: "https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: "moteur",       title: "Moteur & Maintenance",               image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1200" },
];

const transmissionBrands = [
  { name: "OMEC",             country: "Pays-Bas",          desc: "Moteurs électriques" },
  { name: "OPTIBELT",         country: "Allemagne",          desc: "Courroies trapézoïdales, dentées, striées, variateurs, agricoles" },
  { name: "AMMERAAL BELTECH", country: "Suisse / Pays-Bas", desc: "Bandes transporteuses PVC et PU, courroies plates" },
  { name: "B.K. GEARS",       country: "Chine",              desc: "Réducteurs" },
  { name: "INVERTEK",         country: "Angleterre",         desc: "Variateurs de fréquence" },
  { name: "NORD",             country: "Allemagne",          desc: "Motoréducteurs, réducteurs" },
];
const roulementBrands = [
  { name: "SNR",         country: "France", desc: "Roulements, manchons, paliers" },
  { name: "UBC",         country: "Chine",  desc: "Roulements, manchons, paliers" },
  { name: "REGINA",      country: "Italie", desc: "Chaînes, tapis modulaires" },
  { name: "CHIARAVALLI", country: "Italie", desc: "Accouplements, chaînes, poulies, pignons" },
  { name: "ZMC",         country: "Italie", desc: "Chaînes" },
];
const automobileBrands = [
  { name: "VALEO",          country: "France",          desc: "Optiques, embrayages, refroidissement, pompes à eau, comodos" },
  { name: "LPR",            country: "Italie / France", desc: "Systèmes de freinage" },
  { name: "OCAP",           country: "Italie",          desc: "Pièces de suspension" },
  { name: "IMP",            country: "Italie",          desc: "Cosses électriques" },
  { name: "R&A",            country: "Italie",          desc: "Pare-chocs" },
  { name: "FARE",           country: "Espagne",         desc: "Silentblocs, durites" },
  { name: "SIARECROD",      country: "Tunisie",         desc: "Amortisseurs" },
  { name: "TECNO",          country: "Tunisie",         desc: "Soupapes moteur" },
  { name: "EANES / MISFAT", country: "Tunisie",         desc: "Filtres" },
];
const moteurBrands = [
  { name: "CHAMPION", country: "Belgique", desc: "Bougies de préchauffage/allumage, balais d'essuie-glace" },
  { name: "GLYCO",    country: "Belgique", desc: "Coussinets de bielle et vilebrequin" },
  { name: "PAYEN",    country: "Belgique", desc: "Pochettes de joints, joints de culasse" },
  { name: "GOETZE",   country: "Belgique", desc: "Jeux de segments, chemises moteur" },
  { name: "NÜRAL",    country: "Belgique", desc: "Pistons" },
  { name: "COFRAN",   country: "France",   desc: "Lubrifiants" },
];

const brandsByCategory = {
  transmission: { title: "Transmission & Motorisation",        description: "Solutions complètes pour la transmission de puissance, motorisation électrique et diesel, variateurs de fréquence.", brands: transmissionBrands },
  roulements:   { title: "Roulements & Composants Mécaniques", description: "Roulements de précision, manchons, paliers, chaînes, poulies et pignons pour applications industrielles exigeantes.", brands: roulementBrands },
  automobile:   { title: "Automobiles & Poids lourds",         description: "Composants automobiles complets : optiques, embrayages, freinage, suspension, filtres et soupapes moteur.", brands: automobileBrands },
  moteur:       { title: "Moteur & Maintenance",               description: "Gamme complète pour la maintenance moteur : bougies, coussinets, segments, pistons, lubrifiants.", brands: moteurBrands },
};

/* ─── VARIANTS ────────────────────────────────────────────────── */
const heroContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};
const heroWordVariants = {
  hidden:  { opacity: 0, y: 60, skewY: 4 },
  visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};
const heroSubtitleVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 } },
};
const heroLineVariants = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 } },
};
const sectionVariants   = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUpVariants    = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
const panelVariants     = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }, exit: { opacity: 0, y: -20, transition: { duration: 0.28 } } };
const cardGridVariants  = { hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } };
const brandCardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

/* ─── HOOKS ───────────────────────────────────────────────────── */
function useReducedMotion() {
  const [r, setR] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setR(mq.matches);
    const h = () => setR(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);
  return r;
}

function useCounter(target, active, duration = 1800) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let t0 = null;
    const tick = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setN(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return n;
}

/* ─── BRAND LOGO avec fallback initiales ─────────────────────── */
function BrandLogo({ name }) {
  const [failed, setFailed] = useState(false);
  const url = BRAND_LOGOS[name];
  const initials = name.replace(/[^A-Z]/g, "").slice(0, 2) || name.slice(0, 2).toUpperCase();

  if (!url || failed) {
    return <div className="brand-logo brand-logo--fallback">{initials}</div>;
  }
  return (
    <img
      src={url}
      alt={`Logo ${name}`}
      className="brand-logo"
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}



/* ─── STAT CARD ───────────────────────────────────────────────── */
function StatCard({ item, reduced }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count  = useCounter(item.value, inView && !reduced);

  return (
    <motion.article ref={ref} className="stat-card" variants={fadeUpVariants}
      whileHover={reduced ? undefined : { y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
    >
      <div className="stat-icon">
        <motion.div className="stat-icon__ring"
          animate={inView ? { scale: [1, 1.18, 1], opacity: [0.4, 0.15, 0.4] } : {}}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="stat-icon__emoji">{item.icon}</span>
      </div>
      <div className="stat-count">
        <span className="stat-count__number">{count.toLocaleString("fr-FR")}</span>
        <span className="stat-count__plus">+</span>
        <span className="stat-count__unit"> {item.unit}</span>
      </div>
      <p>{item.text}</p>
      <motion.div className="stat-card__bar"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
    </motion.article>
  );
}

/* ─── BRAND CARD ──────────────────────────────────────────────── */
function BrandCard({ brand, reduced }) {
  return (
    <motion.article className="brand-card" variants={brandCardVariants}
      whileHover={reduced ? undefined : { y: -5, boxShadow: "0 20px 34px rgba(226,6,19,0.14)", transition: { type: "spring", stiffness: 320, damping: 22 } }}
      whileTap={reduced ? undefined : { scale: 0.98 }}
    >
      <motion.div className="brand-card__accent"
        initial={{ scaleY: 0, originY: 0 }} whileInView={{ scaleY: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* ── LOGO RÉEL ── */}
      <div className="brand-card__logo-wrap">
        <BrandLogo name={brand.name} />
        <span className="brand-card__badge">✓</span>
      </div>

      <h3 className="brand-card__title">{brand.name}</h3>
      <p className="brand-card__country"><span className="brand-card__dot" /> {brand.country}</p>
      <p className="brand-card__description">{brand.desc}</p>

      {/* Shimmer au hover */}
      <motion.div className="brand-card__shimmer"
        initial={{ x: "-110%" }}
        whileHover={reduced ? undefined : { x: "110%", transition: { duration: 0.55, ease: "easeInOut" } }}
      />
    </motion.article>
  );
}

/* ─── BRAND GRID ──────────────────────────────────────────────── */
function BrandGrid({ categoryId, onBack, reduced }) {
  const data = brandsByCategory[categoryId];
  if (!data) return null;
  return (
    <motion.section className="partners-section" variants={panelVariants} initial="hidden" animate="visible" exit="exit">
      <motion.button type="button" className="back-link" onClick={onBack}
        whileHover={reduced ? undefined : { x: -4, transition: { type: "spring", stiffness: 400, damping: 25 } }}
        whileTap={reduced ? undefined : { scale: 0.97 }}
      >
        ← Retour aux catégories
      </motion.button>

      <motion.div className="section-title-row"
        initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span className="section-title-accent"
          initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <h2>{data.title}</h2>
      </motion.div>

      <motion.p className="section-subtitle"
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {data.description}
      </motion.p>

      <motion.div className="brands-grid" variants={cardGridVariants} initial="hidden" animate="visible">
        {data.brands.map((b) => <BrandCard key={b.name} brand={b} reduced={reduced} />)}
      </motion.div>
    </motion.section>
  );
}

/* ─── ANIMATED SECTION ────────────────────────────────────────── */
function AnimatedSection({ children, className = "", id }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-90px" });
  return (
    <motion.section ref={ref} id={id} className={className}
      variants={sectionVariants} initial="hidden" animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.section>
  );
}

/* ─── APP ─────────────────────────────────────────────────────── */
export default function App() {
  const reduced                             = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeNav,      setActiveNav]      = useState("accueil");
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [scrolled,       setScrolled]       = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const { scrollY } = useScroll();
  const heroY       = useTransform(scrollY, [0, 500], [0, -80]);
  const handleCat   = useCallback((id) => setActiveCategory((c) => (c === id ? null : id)), []);

  return (
    <div className="partners-page">
      {/* ── HERO ── */}
      <motion.header className="partners-hero"
        style={{ backgroundImage: `url("${HERO_BG_IMAGE}")`, y: reduced ? 0 : heroY }}
      >
        <div className="hero-overlay" />

        {/* NAVBAR */}
        <motion.div
          className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
          animate={scrolled
            ? { backgroundColor: "rgba(0,0,0,0.72)", backdropFilter: "blur(12px)" }
            : { backgroundColor: "transparent",      backdropFilter: "blur(0px)"  }}
          transition={{ duration: 0.4 }}
        >
          <div className="navbar__left">
            <motion.img src={LOGO_IMAGE} alt="SIA" className="navbar__logo-image"
              whileHover={reduced ? undefined : { rotate: -6, scale: 1.06 }}
              whileTap={reduced ? undefined : { scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            />
          </div>

          <button type="button" className="navbar__mobile-toggle"
            onClick={() => setMobileOpen((v) => !v)} aria-label="Menu"
          >
            <motion.span animate={{ rotate: mobileOpen ? 90 : 0 }} transition={{ duration: 0.25 }}>
              {mobileOpen ? "✕" : "☰"}
            </motion.span>
          </button>

          <nav className="navbar__links desktop-nav">
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={item.href}
                className={activeNav === item.id ? "nav-active" : ""}
                onClick={() => setActiveNav(item.id)}
              >
                {item.label}
                {activeNav === item.id && (
                  <motion.span layoutId="nav-indicator" className="nav-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <motion.button className="navbar__btn" type="button"
            whileHover={reduced ? undefined : { y: -2, backgroundColor: "var(--red)", borderColor: "var(--red)" }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            DEMANDER UN DEVIS
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav className="mobile-nav"
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: reduced ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.a key={item.id} href={item.href}
                  initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => { setActiveNav(item.id); setMobileOpen(false); }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        <motion.div id="hero" className="hero-content"
          variants={heroContainerVariants} initial="hidden" animate="visible"
        >
          <motion.h1 className="hero-title" aria-label="NOS PARTENAIRES">
            <motion.span variants={heroWordVariants} className="hero-title-white hero-word">NOS</motion.span>
            <motion.span variants={heroWordVariants} className="hero-title-red hero-word">PARTENAIRES</motion.span>
          </motion.h1>

          <motion.div className="hero-divider" variants={heroLineVariants} initial="hidden" animate="visible" />

          <motion.p className="hero-subtitle" variants={heroSubtitleVariants}>
            SIA fédère les plus grands noms du domaine pour vous garantir performance, sécurité et longévité.{" "}
          </motion.p>

          <motion.div className="hero-scroll-hint" variants={heroSubtitleVariants}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
          </motion.div>
        </motion.div>
      </motion.header>

      {/* ── STATS ── */}
      <AnimatedSection className="stats-section">
        <div className="container">
          <motion.div className="stats-grid" variants={sectionVariants}>
            {stats.map((s) => <StatCard key={s.unit} item={s} reduced={reduced} />)}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── CATÉGORIES ── */}
      <AnimatedSection id="categories" className="categories-section">
        <div className="container">
          <motion.div className="section-header" variants={fadeUpVariants}>
            <span className="section-eyebrow">Explorez notre réseau</span>
            <h2 className="main-section-title">Nos Catégories</h2>
            <motion.div className="section-title-bar"
              initial={{ scaleX: 0, originX: 0 }} whileInView={{ scaleX: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />
            <p className="main-section-subtitle">Sélectionnez une catégorie pour explorer nos partenaires.</p>
          </motion.div>

          <motion.div className="categories-grid" variants={cardGridVariants}>
            {categories.map((cat, i) => (
              <motion.button key={cat.id} type="button"
                className={`category-card ${activeCategory === cat.id ? "is-active" : ""}`}
                style={{ backgroundImage: `url(${cat.image})` }}
                variants={fadeUpVariants} custom={i}
                whileHover={reduced ? undefined : { y: -8, scale: 1.015, transition: { type: "spring", stiffness: 280, damping: 22 } }}
                whileTap={reduced ? undefined : { scale: 0.975 }}
                onClick={() => handleCat(cat.id)}
              >
                <motion.div className="category-card__hover-overlay"
                  initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                />
                <div className="category-card__content">
                  <motion.h3
                    initial={{ y: 8, opacity: 0.85 }}
                    whileHover={reduced ? undefined : { y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {cat.title}
                  </motion.h3>
                  <motion.span className="category-card__cta"
                    whileHover={reduced ? undefined : { x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                  </motion.span>
                </div>
                {activeCategory === cat.id && (
                  <motion.div className="category-card__active-border" layoutId="active-border"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ── PANEL MARQUES ── */}
      <div className="container">
        <AnimatePresence mode="wait">
          {activeCategory && (
            <BrandGrid key={activeCategory} categoryId={activeCategory}
              onBack={() => setActiveCategory(null)} reduced={reduced}
            />
          )}
        </AnimatePresence>
      </div>

      {/* ── CTA ── */}
      <AnimatedSection className="partner-cta-top">
        <div className="container partner-cta-top__inner">
          <motion.span className="cta-eyebrow" variants={fadeUpVariants}>Opportunité exclusive</motion.span>
          <motion.h2 variants={fadeUpVariants}>DEVENIR PARTENAIRE ?</motion.h2>
          <motion.p variants={fadeUpVariants}>
            Vous représentez une marque premium et souhaitez intégrer notre réseau de distribution en Tunisie ?
          </motion.p>
          <motion.button type="button" className="cta-btn" variants={fadeUpVariants}
            whileHover={reduced ? undefined : { y: -3, boxShadow: "0 14px 28px rgba(226,6,19,0.35)", transition: { type: "spring", stiffness: 300, damping: 20 } }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
          >
            <span>Nous contacter</span>
            <motion.span className="cta-btn__arrow"
              animate={{ x: [0, 4, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >→</motion.span>
          </motion.button>
        </div>
      </AnimatedSection>

      {/* ── BANNER ── */}
      <AnimatedSection className="partner-banner">
        <div className="container partner-banner__inner">
          <motion.div variants={fadeUpVariants}>
            <motion.span className="partner-banner__mini"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.22em" }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              COLLABORONS ENSEMBLE
            </motion.span>
            <h2>Des pièces d'une qualité irréprochable, pensées pour durer et à la hauteur de ce que vous méritez vraiment.</h2>
          </motion.div>
          <motion.div className="partner-banner__actions" variants={fadeUpVariants}>
            {[
              { label: "+216 27 314 100",  cls: "white-btn"   },
              { label: "DEMANDER UN DEVIS", cls: "outline-btn" },
            ].map(({ label, cls }) => (
              <motion.button key={label} type="button" className={cls}
                whileHover={reduced ? undefined : { y: -3, transition: { type: "spring", stiffness: 320, damping: 20 } }}
                whileTap={reduced ? undefined : { scale: 0.97 }}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
