import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import heroBg from "../assets/backg.png";

const infoCards = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>,
    label: "TELEPHONE", line1: "+216 74 123 456", line2: "Lun - Sam: 8h - 18h",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    label: "EMAIL", line1: "auto.sfax@gmail.com", line2: "Réponse sous 24h",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
    label: "HORAIRES", line1: "Lun - Sam: 8h - 18h", line2: "Dimanche: Fermé",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    label: "ADRESSE", line1: "sfax,tunisie", line2: "Route de Tunis km 4",
  },
];

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-bold text-black tracking-wide">{label}</label>
      {children}
    </div>
  );
}

function Input({ type="text", name, value, onChange, required }) {
  const [f, setF] = useState(false);
  return (
    <input
      type={type} name={name} value={value} onChange={onChange} required={required}
      onFocus={() => setF(true)} onBlur={() => setF(false)}
      className={`w-full p-4 rounded-lg text-sm text-gray-900 outline-none transition-all ${f ? "border-2 border-[#e30613] bg-white ring-2 ring-red-50" : "border-2 border-transparent bg-gray-100"}`}
    />
  );
}

function Select({ name, value, onChange, children }) {
  const [f, setF] = useState(false);
  return (
    <div className="relative w-full">
      <select name={name} value={value} onChange={onChange}
        onFocus={() => setF(true)} onBlur={() => setF(false)}
        className={`w-full p-4 pr-10 appearance-none rounded-lg text-sm text-gray-900 outline-none transition-all cursor-pointer ${f ? "border-2 border-[#e30613] bg-white ring-2 ring-red-50" : "border-2 border-[#e6e6e6] bg-transparent"}`}
      >
        {children}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#0066cc]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="6,9 12,15 18,9"/></svg>
      </div>
    </div>
  );
}

function Textarea({ name, value, onChange, required }) {
  const [f, setF] = useState(false);
  return (
    <textarea name={name} value={value} onChange={onChange} rows={4} required={required}
      onFocus={() => setF(true)} onBlur={() => setF(false)}
      className={`w-full p-4 rounded-lg text-sm text-gray-900 outline-none transition-all resize-none leading-relaxed ${f ? "border-2 border-[#e30613] bg-white ring-2 ring-red-50" : "border-2 border-transparent bg-gray-100"}`}
    />
  );
}

export default function Contact() {
  const [form, setForm] = useState({ nom:"", email:"", telephone:"", sujet:"", type:"", organisation:"", division:"", message:"" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => { e.preventDefault(); setLoading(true); setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500); };
  const reset = () => { setSubmitted(false); setForm({ nom:"", email:"", telephone:"", sujet:"", type:"", organisation:"", division:"", message:"" }); };

  return (
    <div className="relative min-h-screen font-['Montserrat',_sans-serif] w-full" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
      {/* OVERLAY SOMBRE G�N�RAL */}
      <div className="absolute inset-0 bg-black/75 z-0" />

      {/* CONTENU PRINCIPAL */}
      <div className="relative z-10 w-full max-w-[90%] md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto pt-40 sm:pt-48 pb-24 flex flex-col items-center">
        
        {/* TITRE HEADER */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-12 md:mb-16 text-center tracking-wider">
          CONTACTEZ-<span style={{ color: "#E30613" }}>NOUS</span>
        </h1>

        {/* CONTAINER DU FORMULAIRE */}
        <div className="w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 mb-10">
          
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-8 h-8 text-[#E30613]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              <circle cx="9" cy="12" r="1.5" fill="currentColor"/><circle cx="15" cy="12" r="1.5" fill="currentColor"/>
            </svg>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-wide text-black uppercase">
              ENVOYEZ-NOUS UN MESSAGE
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Nom complet">
                 <Input name="nom" value={form.nom} onChange={handleChange} required />
              </Field>
              <Field label="Email">
                 <Input type="email" name="email" value={form.email} onChange={handleChange} required />
              </Field>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Téléphone">
                 <Input type="tel" name="telephone" value={form.telephone} onChange={handleChange} />
              </Field>
              <Field label="Sujet">
                 <Input name="sujet" value={form.sujet} onChange={handleChange} />
              </Field>
            </div>

            <Field label="Type de demande">
               <Select name="type" value={form.type} onChange={handleChange}>
                 <option value="" disabled></option>
                 <option value="Demande de devis">Demande de devis</option>
                 <option value="Information produit">Information produit</option>
                 <option value="Partenariat commercial">Partenariat commercial</option>
                 <option value="Support technique">Support technique</option>
                 <option value="Autre demande">Autre demande</option>
               </Select>
            </Field>

            <Field label="Organisation">
               <Select name="organisation" value={form.organisation} onChange={handleChange}>
                 <option value="" disabled></option>
                 <option value="Entreprise">Entreprise</option>
                 <option value="Personnel">Personnel</option>
                 <option value="Autre">Autre</option>
               </Select>
            </Field>

            <Field label="Choix de division">
               <Select name="division" value={form.division} onChange={handleChange}>
                  <option value="" disabled></option>
                  <option value="Division Marine">Division Marine</option>
                  <option value="Division Travaux Publics">Division Travaux Publics</option>
                  <option value="Division Industrielle">Division Industrielle</option>
                  <option value="Division Piece de rechange automobile">Division Pièce de rechange automobile</option>
               </Select>
            </Field>

            <Field label="Message">
               <Textarea name="message" value={form.message} onChange={handleChange} required />
            </Field>

            <div className="flex justify-center mt-6">
              <button type="submit" disabled={loading} className="px-10 py-3.5 bg-[#E30613] text-white rounded font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all hover:bg-red-700 w-full sm:w-auto">
                 {loading ? "ENVOI EN COURS..." : "envoyer le message"}
              </button>
            </div>
          </form>
        </div>

        {/* INFO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-10">
          {infoCards.map((card, i) => (
             <div key={i} className="bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-[#ffe6e6] text-[#E30613] flex items-center justify-center mb-4">
                   {card.icon}
                </div>
                <h3 className="text-sm font-extrabold uppercase tracking-wide text-black mb-2">{card.label}</h3>
                <p className="text-sm font-bold text-black">{card.line1}</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">{card.line2}</p>
             </div>
          ))}
        </div>

        {/* MAPS (Ajust� tel qu'une image l'affiche avec 2 cartes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
           <div className="rounded-xl overflow-hidden shadow-lg h-64 sm:h-72 md:h-80 w-full">
             <iframe title="Map 1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.2!2d10.7580!3d34.7406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301b5b7b5c5c5c5%3A0xaabbccddeeff0011!2sSfax!5e0!3m2!1sfr!2stn!4v1700000002" style={{ width:"100%", height:"100%", border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
           </div>
           <div className="rounded-xl overflow-hidden shadow-lg h-64 sm:h-72 md:h-80 w-full">
             <iframe title="Map 2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.2!2d10.7580!3d34.7406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301b5b7b5c5c5c5%3A0xaabbccddeeff0011!2sSfax!5e0!3m2!1sfr!2stn!4v1700000002" style={{ width:"100%", height:"100%", border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
           </div>
        </div>

      </div>
    </div>
  );
}
