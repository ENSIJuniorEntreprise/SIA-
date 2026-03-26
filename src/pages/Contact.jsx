import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import heroBg from "./assets/hero-contact-B8gcb4I0.jpg";

const stagger     = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const cardVariant = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } };

const infoCards = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:22,height:22}}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>,
    label: "TELEPHONE", line1: "+216 74 123 456", line2: "Lun - Sam: 8h - 18h",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:22,height:22}}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    label: "EMAIL", line1: "auto.sfax@gmail.com", line2: "Réponse sous 24h",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:22,height:22}}><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
    label: "HORAIRES", line1: "Lun - Sam: 8h - 18h", line2: "Dimanche: Fermé",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:22,height:22}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    label: "ADRESSE", line1: "Sfax, Tunisie", line2: "Route de Tunis km 4",
  },
];

const maps = [
  {
    label: "Siège — Tunis",
    address: "Q5WP+VJ9, Tunis",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.8!2d10.1658!3d36.8190!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0x9f3e6d8e0f3a6c1a!2sTunis%2C+Tunisie!5e0!3m2!1sfr!2stn!4v1700000001",
  },
  {
    label: "Agence — Sfax",
    address: "220 Av. des Martyrs, Sfax 3000",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.2!2d10.7580!3d34.7406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301b5b7b5c5c5c5%3A0xaabbccddeeff0011!2s220+Av.+des+Martyrs%2C+Sfax+3000!5e0!3m2!1sfr!2stn!4v1700000002",
  },
];

const baseInput = {
  width: "100%", padding: "12px 16px", borderRadius: 10,
  background: "#f5f5f5", border: "1.5px solid transparent",
  fontSize: 13, color: "#333", outline: "none",
  fontFamily: "inherit", transition: "all 0.2s", boxSizing: "border-box",
};

function Field({ label, children }) {
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:7 }}>
      <label style={{ fontSize:12, fontWeight:700, color:"#1a1a1a", letterSpacing:"0.04em", textTransform:"uppercase" }}>{label}</label>
      {children}
    </div>
  );
}

function Input({ type="text", name, value, onChange, placeholder, required }) {
  const [f, setF] = useState(false);
  return (
    <input type={type} name={name} value={value} onChange={onChange}
      placeholder={placeholder} required={required}
      onFocus={() => setF(true)} onBlur={() => setF(false)}
      style={{ ...baseInput, borderColor: f?"#e20613":"transparent", background: f?"#fff":"#f5f5f5", boxShadow: f?"0 0 0 3px rgba(226,6,19,0.1)":"none" }}
    />
  );
}

function Select({ name, value, onChange, children }) {
  const [f, setF] = useState(false);
  return (
    <div style={{ position:"relative" }}>
      <select name={name} value={value} onChange={onChange}
        onFocus={() => setF(true)} onBlur={() => setF(false)}
        style={{ ...baseInput, appearance:"none", cursor:"pointer", paddingRight:40, borderColor: f?"#e20613":"transparent", background: f?"#fff":"#f5f5f5", boxShadow: f?"0 0 0 3px rgba(226,6,19,0.1)":"none" }}
      >{children}</select>
      <div style={{ position:"absolute", right:14, top:"50%", transform:"translateY(-50%)", pointerEvents:"none", color:"#999" }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6,9 12,15 18,9"/></svg>
      </div>
    </div>
  );
}

function Textarea({ name, value, onChange, placeholder, required }) {
  const [f, setF] = useState(false);
  return (
    <textarea name={name} value={value} onChange={onChange} rows={5}
      placeholder={placeholder} required={required}
      onFocus={() => setF(true)} onBlur={() => setF(false)}
      style={{ ...baseInput, resize:"none", lineHeight:1.6, borderColor: f?"#e20613":"transparent", background: f?"#fff":"#f5f5f5", boxShadow: f?"0 0 0 3px rgba(226,6,19,0.1)":"none" }}
    />
  );
}

function AnimSection({ children, style }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-60px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView?"visible":"hidden"} style={style}>
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [form, setForm]           = useState({ nom:"", email:"", telephone:"", sujet:"", type:"", organisation:"", division:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const heroRef     = useRef(null);
  const { scrollY } = useScroll();
  const heroY       = useTransform(scrollY, [0,500], [0,-100]);
  const heroOpacity = useTransform(scrollY, [0,400], [1,0.35]);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500); };
  const reset = () => { setSubmitted(false); setForm({ nom:"", email:"", telephone:"", sujet:"", type:"", organisation:"", division:"", message:"" }); };

  return (
    <div style={{ fontFamily:"'Montserrat', sans-serif", minHeight:"100vh" }}>

      {/* ══════ HERO ══════ */}
      <div ref={heroRef} style={{ position:"relative", height:320, overflow:"hidden" }}>
        <motion.div style={{
          position:"absolute", inset:0,
          backgroundImage:`url(${heroBg})`, backgroundSize:"cover", backgroundPosition:"center",
          y:heroY, opacity:heroOpacity, scale:1.1,
        }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg,rgba(0,0,0,0.62) 0%,rgba(0,0,0,0.32) 55%,rgba(226,6,19,0.14) 100%)" }} />
        <motion.div
          style={{ position:"absolute", bottom:0, left:0, right:0, height:3, background:"#e20613", transformOrigin:"left" }}
          initial={{ scaleX:0 }} animate={{ scaleX:1 }}
          transition={{ duration:1.1, ease:[0.22,1,0.36,1], delay:0.7 }}
        />
        <motion.div
          style={{ position:"absolute", bottom:"-40px", right:"8%", width:220, height:220, borderRadius:"50%", background:"radial-gradient(circle,rgba(226,6,19,0.16) 0%,transparent 70%)", pointerEvents:"none" }}
          animate={{ scale:[1,1.15,1], opacity:[0.5,1,0.5] }}
          transition={{ duration:4, repeat:Infinity, ease:"easeInOut" }}
        />

        <div style={{ position:"relative", zIndex:2, height:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:14, textAlign:"center", padding:"0 24px" }}>
          <motion.p
            initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.55, ease:[0.22,1,0.36,1] }}
            style={{ margin:0, fontSize:10, fontWeight:600, letterSpacing:"0.26em", color:"rgb(179, 177, 177)", textTransform:"uppercase" }}
          >
            Société Industrielle Automobile
          </motion.p>

          {/* TITRE : petit + poids léger */}
          <motion.h1
            initial={{ opacity:0, y:36, skewY:2 }} animate={{ opacity:1, y:0, skewY:0 }}
            transition={{ duration:0.8, ease:[0.22,1,0.36,1], delay:0.12 }}
            style={{ margin:0, fontSize:"clamp(28px,4vw,46px)", fontWeight:500, letterSpacing:"-0.5px", color:"#fff", lineHeight:1.1 }}
          >
            CONTACTEZ-<span style={{ color:"#e20613", fontWeight:700 }}>NOUS</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX:0 }} animate={{ scaleX:1 }}
            transition={{ duration:0.65, ease:[0.22,1,0.36,1], delay:0.48 }}
            style={{ width:48, height:3, background:"#e20613", borderRadius:2 }}
          />

          <motion.p
            initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6, ease:[0.22,1,0.36,1], delay:0.35 }}
            style={{ margin:0, fontSize:13, color:"rgba(255, 255, 255, 0.96)", fontWeight:400, maxWidth:460 }}
          >
            Notre équipe est disponible pour répondre à toutes vos questions
          </motion.p>


        </div>
      </div>

      {/* ══════ DARK SECTION ══════ */}
      <div style={{
        backgroundImage:`linear-gradient(rgba(10,10,10,0.59),rgba(10,10,10,0.59)),url(${heroBg})`,
        backgroundSize:"cover", backgroundPosition:"center", backgroundAttachment:"fixed",
      }}>

        {/* ── FORM CARD — max-width élargi ── */}
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"56px 24px 44px" }}>
          <motion.div
            initial={{ opacity:0, y:44 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
            style={{ background:"#fff", borderRadius:20, boxShadow:"0 40px 100px rgba(0,0,0,0.55)", overflow:"hidden" }}
          >
            {/* Header */}
            <div style={{ padding:"22px 32px 18px", borderBottom:"1px solid #f0f0f0", display:"flex", alignItems:"center", gap:14 }}>
              <motion.div
                style={{ width:40, height:40, borderRadius:10, background:"#fff1f1", display:"flex", alignItems:"center", justifyContent:"center", color:"#e20613", flexShrink:0 }}
                whileHover={{ rotate:-8, scale:1.08 }} transition={{ type:"spring", stiffness:300, damping:18 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
              </motion.div>
              <h2 style={{ margin:0, fontSize:14, fontWeight:800, letterSpacing:"0.08em", color:"#111", textTransform:"uppercase" }}>
                Envoyez-nous un message
              </h2>
            </div>

            {/* Body */}
            <div style={{ padding:"28px 32px 36px" }}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="ok"
                    initial={{ opacity:0, scale:0.94 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }}
                    style={{ display:"flex", flexDirection:"column", alignItems:"center", padding:"48px 0", gap:14 }}
                  >
                    <motion.div
                      initial={{ scale:0 }} animate={{ scale:1 }}
                      transition={{ type:"spring", stiffness:280, damping:18, delay:0.1 }}
                      style={{ width:64, height:64, borderRadius:"50%", background:"#f0fdf4", display:"flex", alignItems:"center", justifyContent:"center" }}
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>
                    </motion.div>
                    <h3 style={{ margin:0, fontSize:18, fontWeight:800, color:"#111" }}>Message envoyé !</h3>
                    <p style={{ margin:0, fontSize:13, color:"#777", textAlign:"center", maxWidth:320, lineHeight:1.6 }}>
                      Nous avons bien reçu votre message. Notre équipe vous répondra dans les 24h.
                    </p>
                    <motion.button onClick={reset}
                      style={{ marginTop:10, padding:"11px 28px", background:"#e20613", color:"#fff", border:"none", borderRadius:8, fontSize:12, fontWeight:800, cursor:"pointer", fontFamily:"inherit", letterSpacing:"0.05em" }}
                      whileHover={{ y:-2, boxShadow:"0 10px 24px rgba(226,6,19,0.35)" }} whileTap={{ scale:0.97 }}
                    >Nouveau message</motion.button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} exit={{ opacity:0 }}
                    style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px 28px" }}
                  >
                    <Field label="Nom complet">
                      <Input name="nom" value={form.nom} onChange={handleChange} placeholder="Votre nom" required />
                    </Field>
                    <Field label="Email">
                      <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="example@email.com" required />
                    </Field>
                    <Field label="Téléphone">
                      <Input type="tel" name="telephone" value={form.telephone} onChange={handleChange} placeholder="+216 74 123 456" />
                    </Field>
                    <Field label="Sujet">
                      <Input name="sujet" value={form.sujet} onChange={handleChange} placeholder="Choisir votre sujet" />
                    </Field>
                    <Field label="Type de demande">
                      <Select name="type" value={form.type} onChange={handleChange}>
                        <option value="" disabled>— choisir —</option>
                        <option>Demande de devis</option>
                        <option>Information produit</option>
                        <option>Partenariat commercial</option>
                        <option>Support technique</option>
                        <option>Autre demande</option>
                      </Select>
                    </Field>
                    <Field label="Organisation">
                      <Select name="organisation" value={form.organisation} onChange={handleChange}>
                        <option value="" disabled>— choisir —</option>
                        <option>Entreprise</option>
                        <option>Autre</option>
                        <option>Personnel</option>
                      </Select>
                    </Field>
                    <div style={{ gridColumn:"1 / -1" }}>
                      <Field label="Division">
                        <Select name="division" value={form.division} onChange={handleChange}>
                          <option value="" disabled>— choisir —</option>
                          <option>Division Marine</option>
                          <option>Division Travaux Publics</option>
                          <option>Division Industrielle</option>
                          <option>Division Pièce de rechange automobile</option>
                        </Select>
                      </Field>
                    </div>
                    <div style={{ gridColumn:"1 / -1" }}>
                      <Field label="Message">
                        <Textarea name="message" value={form.message} onChange={handleChange}
                          placeholder="Décrivez la pièce recherchée, la marque et le modèle de votre véhicule" required />
                      </Field>
                    </div>
                    <div style={{ gridColumn:"1 / -1", display:"flex", justifyContent:"center", paddingTop:6 }}>
                      <motion.button type="submit" disabled={loading}
                        style={{ padding:"13px 44px", background:"#e20613", color:"#fff", border:"none", borderRadius:8, fontSize:12, fontWeight:800, letterSpacing:"0.1em", cursor:"pointer", fontFamily:"inherit", display:"flex", alignItems:"center", gap:10 }}
                        whileHover={{ y:-3, boxShadow:"0 14px 30px rgba(226,6,19,0.4)" }}
                        whileTap={{ scale:0.97 }}
                        transition={{ type:"spring", stiffness:300, damping:20 }}
                      >
                        <AnimatePresence mode="wait">
                          {loading ? (
                            <motion.span key="s" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} style={{ display:"flex", alignItems:"center", gap:8 }}>
                              <motion.svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                                animate={{ rotate:360 }} transition={{ duration:0.8, repeat:Infinity, ease:"linear" }}>
                                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="30" strokeDashoffset="10"/>
                              </motion.svg>
                              Envoi en cours...
                            </motion.span>
                          ) : (
                            <motion.span key="t" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}>
                              envoyer le message →
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* ── INFO CARDS ── */}
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px 52px" }}>
          <AnimSection style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16 }}>
            {infoCards.map((card, i) => (
              <motion.div key={card.label} variants={cardVariant} custom={i}
                whileHover={{ y:-7, boxShadow:"0 24px 48px rgba(0,0,0,0.38)", transition:{ type:"spring", stiffness:300, damping:20 } }}
                style={{ background:"#fff", borderRadius:16, padding:"22px 18px", boxShadow:"0 10px 36px rgba(0,0,0,0.28)", display:"flex", flexDirection:"column", gap:10 }}
              >
                <motion.div
                  style={{ width:44, height:44, borderRadius:11, background:"#fff1f1", display:"flex", alignItems:"center", justifyContent:"center", color:"#e20613" }}
                  whileHover={{ rotate:-8, scale:1.1 }} transition={{ type:"spring", stiffness:300, damping:18 }}
                >
                  {card.icon}
                </motion.div>
                <p style={{ margin:0, fontSize:10, fontWeight:900, letterSpacing:"0.14em", color:"#111", textTransform:"uppercase" }}>{card.label}</p>
                <p style={{ margin:0, fontSize:13, fontWeight:700, color:"#222" }}>{card.line1}</p>
                <p style={{ margin:0, fontSize:12, color:"#999" }}>{card.line2}</p>
              </motion.div>
            ))}
          </AnimSection>
        </div>

        {/* ── TWO MAPS ── */}
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px 80px" }}>
          <AnimSection style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
            {maps.map((map, i) => (
              <motion.div key={map.label} variants={cardVariant} custom={i}
                whileHover={{ y:-4, transition:{ type:"spring", stiffness:300, damping:20 } }}
              >
                {/* Map label */}
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
                  <div style={{ width:4, height:22, background:"#e20613", borderRadius:2 }} />
                  <div>
                    <p style={{ margin:0, fontSize:13, fontWeight:800, color:"#fff", letterSpacing:"0.04em" }}>{map.label}</p>
                    <p style={{ margin:0, fontSize:11, color:"rgba(255,255,255,0.45)", marginTop:2 }}>{map.address}</p>
                  </div>
                </div>
                {/* Map iframe */}
                <div style={{ borderRadius:16, overflow:"hidden", boxShadow:"0 20px 56px rgba(0,0,0,0.5)", height:300, border:"2px solid rgba(226,6,19,0.25)" }}>
                  <iframe
                    title={map.label}
                    src={map.src}
                    width="100%" height="100%"
                    style={{ border:0, display:"block" }}
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            ))}
          </AnimSection>
        </div>

      </div>
    </div>
  );
}
