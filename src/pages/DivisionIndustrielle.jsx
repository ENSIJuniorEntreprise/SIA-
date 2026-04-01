import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import logoImage from "./assets/logo-sia.png";

/* ═══════════════════════════════════════════════════════════════
   IMPORTS IMAGES LOCALES
═══════════════════════════════════════════════════════════════ */
import imgHero          from "./assets/images-division-industrielle/hero-industrial.jpg";
import imgTransmission  from "./assets/images-division-industrielle/transmission.jpg";
import imgMotorisation  from "./assets/images-division-industrielle/motorisation.jpg";
import imgRoulement     from "./assets/images-division-industrielle/roulement.jpg";
import imgCourroie      from "./assets/images-division-industrielle/courroie.webp";
import imgBande         from "./assets/images-division-industrielle/bande.webp";
import imgChaine        from "./assets/images-division-industrielle/chaine.png";
import imgAccouplement  from "./assets/images-division-industrielle/accouplement.jpg";
import imgMotoreducteur from "./assets/images-division-industrielle/motoreducteur.png";
import imgMoteur        from "./assets/images-division-industrielle/moteur.jpg";
import imgVariateur     from "./assets/images-division-industrielle/variateur.jpg";
import imgPalier        from "./assets/images-division-industrielle/palier.jpg";
import imgRoulBille     from "./assets/images-division-industrielle/roul-bille.jpg";
import imgRoulRouleau   from "./assets/images-division-industrielle/roul-rouleau.jpg";
import imgSupport       from "./assets/images-division-industrielle/support.jpg";

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
export default function DivisionIndustrielle() {
  const [activeCat,     setActiveCat]     = useState(null);
  const [activeSousCat, setActiveSousCat] = useState(null);

  const heroRef     = useRef(null);
  const { scrollY } = useScroll();
  const heroY       = useTransform(scrollY, [0,500], [0,-80]);
  const heroOp      = useTransform(scrollY, [0,400], [1,0.4]);

  const currentCat      = categories.find(c => c.id === activeCat);
  const currentSousCat  = currentCat?.sousCategories.find(s => s.id === activeSousCat);
  const currentProduits = activeSousCat ? (produits[activeSousCat] || []) : [];

  return (
    <div style={{ fontFamily:"'Montserrat', sans-serif", background:"#f3f3f3", minHeight:"100vh" }}>

      <DivisionNav />

      {/* ── HERO ── */}
      <div ref={heroRef} style={{ position:"relative", height:280, overflow:"hidden" }}>
        <motion.div style={{
          position:"absolute", inset:0,
          backgroundImage:`url('${imgHero}')`,
          backgroundSize:"cover", backgroundPosition:"center",
          y:heroY, opacity:heroOp, scale:1.08,
        }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(155deg,rgba(0,0,0,0.82) 0%,rgba(0,0,0,0.44) 60%,rgba(226,6,19,0.20) 100%)" }} />
        <motion.div
          style={{ position:"absolute", bottom:0, left:0, right:0, height:3, background:"#e20613", transformOrigin:"left" }}
          initial={{ scaleX:0 }} animate={{ scaleX:1 }}
          transition={{ duration:1.2, ease:[0.22,1,0.36,1], delay:0.5 }}
        />
        <div style={{ position:"relative", zIndex:2, height:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:16, textAlign:"center", padding:"0 24px", paddingTop:64 }}>
          <motion.h1
            initial={{ opacity:0, y:38, skewY:2 }} animate={{ opacity:1, y:0, skewY:0 }}
            transition={{ duration:0.82, ease:[0.22,1,0.36,1], delay:0.1 }}
            style={{ margin:0, fontSize:"clamp(26px,4.5vw,48px)", fontWeight:600, letterSpacing:"-0.6px", color:"#fff", lineHeight:1.13 }}
          >
            Division <span style={{ color:"#e20613", fontWeight:800 }}>Industrielle</span>
          </motion.h1>
          <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.65, ease:[0.22,1,0.36,1], delay:0.45 }}
            style={{ width:52, height:3, background:"#e20613", borderRadius:2 }} />
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.7, duration:0.6 }}
            style={{ margin:0, color:"rgba(255,255,255,0.65)", fontSize:13, fontWeight:500, letterSpacing:"0.06em", textTransform:"uppercase" }}>
            Transmission · Motorisation · Roulement
          </motion.p>
        </div>
      </div>

      {/* ── BREADCRUMB ── */}
      <div style={{ background:"#fff", borderBottom:"1px solid #e8e8e8", padding:"11px 0" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px", display:"flex", alignItems:"center", gap:7, fontSize:12, color:"#999" }}>
          <Link to="/" style={{ color:"#999", textDecoration:"none" }}>Accueil</Link>
          <span style={{ color:"#e20613" }}>›</span>
          <span style={{ cursor:"pointer", color: activeCat ? "#999" : "#e20613", fontWeight: activeCat ? 400 : 700 }}
            onClick={() => { setActiveCat(null); setActiveSousCat(null); }}>
            Division Industrielle
          </span>
          {currentCat && (
            <>
              <span style={{ color:"#e20613" }}>›</span>
              <span style={{ cursor:"pointer", color: activeSousCat ? "#999" : "#e20613", fontWeight: activeSousCat ? 400 : 700 }}
                onClick={() => setActiveSousCat(null)}>
                {currentCat.label}
              </span>
            </>
          )}
          {currentSousCat && (
            <>
              <span style={{ color:"#e20613" }}>›</span>
              <span style={{ color:"#e20613", fontWeight:700 }}>{currentSousCat.label}</span>
            </>
          )}
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"36px 24px 64px" }}>
        <AnimatePresence mode="wait">

          {/* NIVEAU 0 : catégories */}
          {!activeCat && (
            <motion.div key="cats"
              initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-18 }}
              transition={{ duration:0.46, ease:[0.22,1,0.36,1] }}
            >
              <AnimSection style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
                {categories.map((cat) => (
                  <motion.button key={cat.id} variants={fadeUp}
                    onClick={() => { setActiveCat(cat.id); setActiveSousCat(null); }}
                    whileHover={{ y:-8, boxShadow:"0 28px 60px rgba(0,0,0,0.18)", transition:{ type:"spring", stiffness:260, damping:20 } }}
                    whileTap={{ scale:0.97 }}
                    style={{ background:"#fff", border:"1px solid #e5e5e5", borderRadius:20, overflow:"hidden", cursor:"pointer", textAlign:"left", padding:0, fontFamily:"inherit", display:"flex", flexDirection:"column", boxShadow:"0 6px 24px rgba(0,0,0,0.07)" }}
                  >
                    <div style={{ height:220, overflow:"hidden", position:"relative" }}>
                      <img src={cat.image} alt={cat.label}
                        style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.6s ease" }}
                        onMouseEnter={e=>e.target.style.transform="scale(1.1)"}
                        onMouseLeave={e=>e.target.style.transform="scale(1)"}
                      />
                      <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg,rgba(0,0,0,0.05) 0%,rgba(0,0,0,0.62) 100%)" }} />
                      <div style={{ position:"absolute", top:0, left:0, right:0, height:5, background:"linear-gradient(90deg,#e20613,#ff4444)" }} />
                      <div style={{ position:"absolute", top:18, right:18, background:"rgba(226,6,19,0.92)", backdropFilter:"blur(4px)", borderRadius:20, padding:"4px 12px", fontSize:11, fontWeight:800, color:"#fff", letterSpacing:"0.05em" }}>
                        {cat.sousCategories.length} familles
                      </div>
                      <div style={{ position:"absolute", bottom:18, left:20, right:20 }}>
                        <h3 style={{ margin:0, fontSize:18, fontWeight:800, color:"#fff", lineHeight:1.25, textShadow:"0 2px 8px rgba(0,0,0,0.4)" }}>{cat.label}</h3>
                      </div>
                    </div>
                    <div style={{ padding:"16px 20px 18px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                      <span style={{ fontSize:12, fontWeight:600, color:"#888" }}>
                        {cat.sousCategories.map(s => s.label.split(" ")[0]).join(" · ")}
                      </span>
                      <div style={{ width:34, height:34, borderRadius:"50%", background:"#fff1f1", display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e20613" strokeWidth="2.5"><polyline points="9,18 15,12 9,6"/></svg>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </AnimSection>
            </motion.div>
          )}

          {/* NIVEAU 1 : sous-catégories */}
          {activeCat && !activeSousCat && (
            <motion.div key="souscats"
              initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-18 }}
              transition={{ duration:0.46, ease:[0.22,1,0.36,1] }}
            >
              <BackButton label="Retour aux catégories" onClick={() => { setActiveCat(null); setActiveSousCat(null); }} />
              <div style={{ position:"relative", borderRadius:18, overflow:"hidden", marginBottom:32, height:140 }}>
                <img src={currentCat?.image} alt={currentCat?.label} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg,rgba(0,0,0,0.78) 0%,rgba(0,0,0,0.22) 100%)" }} />
                <div style={{ position:"absolute", top:0, left:0, right:0, height:5, background:"linear-gradient(90deg,#e20613,#ff4444)" }} />
                <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", padding:"0 32px" }}>
                  <div>
                    <p style={{ margin:"0 0 6px", fontSize:11, fontWeight:700, color:"rgba(255,255,255,0.55)", letterSpacing:"0.14em", textTransform:"uppercase" }}>Sous-divisions</p>
                    <h2 style={{ margin:0, fontSize:22, fontWeight:800, color:"#fff" }}>{currentCat?.label}</h2>
                  </div>
                </div>
              </div>
              <AnimSection style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:20 }}>
                {currentCat?.sousCategories.map((sc) => (
                  <SousCatCard key={sc.id} sc={sc} onClick={() => setActiveSousCat(sc.id)} />
                ))}
              </AnimSection>
            </motion.div>
          )}

          {/* NIVEAU 2 : produits */}
          {activeCat && activeSousCat && (
            <motion.div key="products"
              initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-18 }}
              transition={{ duration:0.46, ease:[0.22,1,0.36,1] }}
            >
              <BackButton label={`Retour à ${currentCat?.label}`} onClick={() => setActiveSousCat(null)} />
              <div style={{ position:"relative", borderRadius:18, overflow:"hidden", marginBottom:32, height:120 }}>
                <img src={currentSousCat?.image || currentCat?.image} alt={currentSousCat?.label} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.22) 100%)" }} />
                <div style={{ position:"absolute", top:0, left:0, right:0, height:5, background:"linear-gradient(90deg,#e20613,#ff4444)" }} />
                <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 32px" }}>
                  <div>
                    <p style={{ margin:"0 0 4px", fontSize:10, fontWeight:700, color:"rgba(255,255,255,0.5)", letterSpacing:"0.14em", textTransform:"uppercase" }}>Catalogue produits</p>
                    <h2 style={{ margin:0, fontSize:20, fontWeight:800, color:"#fff" }}>{currentSousCat?.label}</h2>
                  </div>
                  <span style={{ background:"rgba(255,255,255,0.15)", backdropFilter:"blur(6px)", borderRadius:20, padding:"6px 16px", fontSize:13, fontWeight:700, color:"#fff" }}>
                    {currentProduits.length} produit{currentProduits.length > 1 ? "s" : ""}
                  </span>
                </div>
              </div>
              {currentProduits.length > 0 ? (
                <AnimSection style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:22 }}>
                  {currentProduits.map((p) => <ProductCard key={p.id} product={p} />)}
                </AnimSection>
              ) : (
                <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }}
                  style={{ textAlign:"center", padding:"70px 0", color:"#bbb", fontSize:14 }}>
                  Produits à venir — contactez-nous pour plus d'informations.
                </motion.div>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* ── CTA BANNER ── */}
      <div style={{ background:"linear-gradient(135deg,#c00000,#e20613,#cc0000)", padding:"48px 0", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.06, backgroundImage:"repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize:"24px 24px" }} />
        <AnimSection style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px", display:"flex", alignItems:"center", justifyContent:"space-between", gap:24, position:"relative", zIndex:1 }}>
          <motion.div variants={fadeUp}>
            <p style={{ margin:"0 0 8px", fontSize:10, fontWeight:800, letterSpacing:"0.22em", color:"rgba(255,255,255,0.6)", textTransform:"uppercase" }}>
              Besoin d'une solution industrielle ?
            </p>
            <h2 style={{ margin:0, fontSize:"clamp(16px,2.2vw,24px)", fontWeight:700, color:"#fff", lineHeight:1.3 }}>
              Notre équipe technique est disponible pour vous conseiller.
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} style={{ display:"flex", gap:12, flexShrink:0, flexWrap:"wrap" }}>
            <motion.button style={{ padding:"13px 24px", background:"#fff", color:"#e20613", border:"none", borderRadius:7, fontSize:12, fontWeight:800, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap" }}
              whileHover={{ y:-2, boxShadow:"0 10px 24px rgba(0,0,0,0.22)" }} whileTap={{ scale:0.97 }}>
              +216 27 314 100
            </motion.button>
            <motion.button style={{ padding:"13px 24px", background:"transparent", color:"#fff", border:"2px solid rgba(255,255,255,0.7)", borderRadius:7, fontSize:12, fontWeight:800, cursor:"pointer", fontFamily:"inherit", whiteSpace:"nowrap" }}
              whileHover={{ y:-2, background:"rgba(255,255,255,0.12)" }} whileTap={{ scale:0.97 }}>
              Demander un devis
            </motion.button>
          </motion.div>
        </AnimSection>
      </div>

    </div>
  );
}