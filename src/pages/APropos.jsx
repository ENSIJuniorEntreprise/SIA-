import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, ShieldCheck, Users, Globe } from 'lucide-react';
import { Plus, Minus } from 'lucide-react';



export default function APropos() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "DISTRIBUEZ-VOUS UNIQUEMENT AUX PROFESSIONNELS ?",
      answer: "Oui, SIA s'adresse principalement au secteur industriel et aux professionnels. Nous fournissons des solutions adaptées aux exigences de production à grande échelle."
    },
    {
      question: "QUELS SONT VOS DÉLAIS DE LIVRAISON ?",
      answer: "Grâce à notre stock stratégique à Sfax, nous assurons des livraisons rapides sous 24/48h pour les pièces en stock sur tout le territoire tunisien."
    },
    {
      question: "LES PIÈCES SONT-ELLES GARANTIES ?",
      answer: "Absolument. Toutes nos pièces sont certifiées d'origine et bénéficient de la garantie constructeur, accompagnée de notre support technique local."
    },
    {
      question: "PUIS-JE COMMANDER UNE PIÈCE SPÉCIFIQUE NON LISTÉE ?",
      answer: "Bien sûr. Notre équipe d'experts peut sourcer des composants spécifiques via notre réseau international de partenaires pour répondre à vos besoins sur mesure."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [activeTab, setActiveTab] = useState('vision');

  const content = {
    identite: {
      title: "Une identité forgée par l'excellence",
      text: "Depuis 1994, SIA s'impose comme le partenaire de confiance pour les solutions industrielles. Notre héritage est celui d'une rigueur technique inégalée.",
      tags: ["Histoire", "Expertise", "Confiance"],
      image: "/src/assets/mission.jpg" 
    },
    vision: {
      title: "SIA l'expérience industrielle qui dure",
      text: "Nous refusons la médiocrité. Nous voyons un monde où chaque interaction compte. Notre but n'est pas de suivre les tendances, mais de les dicter. L'excellence n'est pas une option, c'est notre point de départ.",
      tags: ["Innovation", "Leadership", "Futur"],
      image: "/src/assets/mission.jpg" 
    },
    mission: {
      title: "Propulser votre performance",
      text: "Notre mission est simple : fournir les composants et l'assistance technique nécessaires pour que votre production ne s'arrête jamais. Votre succès est notre mesure de performance.",
      tags: ["Service", "Qualité", "Partenariat"],
      image: "/src/assets/mission.jpg"
    }
  };
  const valeurs = [
    {
      id: 1,
      titre: "PRÉCISION",
      description: "Chaque détail compte. Identification rigoureuse.",
      icon: <Target className="w-10 h-10 text-sia-red-claire" />,
      // Icône décorative en arrière-plan
      ghostIcon: <Target className="w-32 h-32 text-gray-300 absolute -top-4 -right-4 opacity-50" />
    },
    {
      id: 2,
      titre: "INTÉGRITÉ",
      description: "Transparence totale et certification d'origine.",
      icon: <ShieldCheck className="w-10 h-10 text-sia-red-claire" />,
      ghostIcon: <ShieldCheck className="w-32 h-32 text-gray-300 absolute -top-4 -right-4 opacity-50" />
    },
    {
      id: 3,
      titre: "ENGAGEMENT",
      description: "Impliqués personnellement dans votre réussite.",
      icon: <Users className="w-10 h-10 text-sia-red-claire" />,
      ghostIcon: <Users className="w-32 h-32 text-gray-300 absolute -top-4 -right-4 opacity-50" />
    },
    {
      id: 4,
      titre: "INNOVATION",
      description: "Toujours à l'affût des technologies de demain.",
      icon: <Globe className="w-10 h-10 text-sia-red-claire" />,
      ghostIcon: <Globe className="w-32 h-32 text-gray-300 absolute -top-4 -right-4 opacity-50" />
    }
  ];
  return (
    <>
     <section className="relative w-full min-h-screen overflow-hidden bg-black">

       <div
         className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
         style={{ 
           backgroundImage: "url('/src/assets/bgr.jpg')", 
         }}
       >
       
         <div className="absolute inset-0 bg-black/60"></div>
       </div>
       
       
       <div className="relative z-10 h-[100dvh] w-full flex flex-col justify-center px-6 md:px-20 pt-32 pb-16">
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="w-8 md:w-12 h-[2px] bg-red-600"></div>
          <span className="text-sia-red font-bold tracking-[0.2em] text-xs md:text-sm">DEPUIS 1994</span>
        </div>
         <div className="max-w-5xl">
           <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-6">
             L’ART DE<br />
             <span className="text-sia-red-claire">L’INDUSTRIE.</span>
           </h1>
 
           <p className="max-w-xl text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed">
             Plus qu'un distributeur SIA Sfaxienne Industrielle et Automobile, nous sommes le moteur
             de votre performance industrielle. Expertise,
             rigueur et innovation au service de la Tunisie.
           </p> 
 
           <div className="flex flex-col sm:flex-row gap-4 relative z-10">
             <button className="bg-sia-red-claire text-white w-full sm:w-auto px-8 md:px-10 py-4 font-bold uppercase hover:bg-white hover:text-sia-red-claire transition-all text-sm md:text-base text-center">
               NOTRE EXPERTISE
             </button>
             <Link to="/divisions" className="border-2 border-white text-white w-full sm:w-auto px-8 md:px-10 py-4 font-bold uppercase hover:bg-sia-red-claire hover:text-white hover:border-sia-red-claire transition-all text-sm md:text-base text-center">
               VOIR LE CATALOGUE
             </Link>
           </div>
         </div>

         {/* Bloc du Siège Social intégré dans la 1ère section */}
         <div className="mt-8 md:mt-0 md:absolute md:bottom-10 md:right-10 z-20 flex items-stretch">
           <div className="bg-sia-red-claire p-6 md:p-8 shadow-2xl">
             <p className="text-xs uppercase tracking-widest opacity-80 mb-1 text-white">Siège Social</p>
             <p className="text-xl md:text-3xl font-bold text-white">Sfax, Tunisie</p>
           </div>
         </div>
       </div>
       
     </section>
     <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* En-tête de la section */}
        <div className="text-center mb-12 md:mb-20">
          <h4 className="text-sia-red-claire font-bold tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm uppercase mb-2 md:mb-3">
            L'ADN SIA
          </h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tight">
            Nos Valeurs
          </h2>
        </div>

        {/* Grille des valeurs avec bordures fines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-gray-200">
          {valeurs.map((item, index) => (
            <div 
              key={item.id}
              className={`relative p-8 md:p-12 group overflow-hidden transition-all duration-300 hover:bg-gray-50
                ${index % 2 !== 0 ? 'sm:border-l border-gray-200' : ''}
                ${index > 1 ? 'sm:border-t lg:border-t-0 border-gray-200' : ''}
                ${index !== 0 && index < 2 ? 'border-t sm:border-t-0 border-gray-200' : ''}
                ${index > 0 ? 'lg:border-l border-gray-200' : ''}`}
            >
              {/* Icône Fantôme en arrière-plan */}
              <div className="absolute top-0 right-0 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-x-2 group-hover:translate-y-2">
                {item.ghostIcon}
              </div>

              {/* Contenu textuel */}
              <div className="relative z-10">
                <div className="mb-8 transform transition-transform duration-300 group-hover:scale-110 origin-left">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tighter">
                  {item.titre}
                </h3>
                
                <p className="text-black font-medium leading-relaxed max-w-[200px]">
                  {item.description}
                </p>
              </div>

              {/* Petite barre de progression rouge décorative au survol */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-sia-red transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Barre d'onglets (Tabs) */}
        <div className="flex flex-wrap mb-0 border-b border-gray-200">
          {Object.keys(content).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-[120px] px-4 md:px-8 py-3 md:py-4 text-xs md:text-sm font-bold uppercase tracking-wider border-t border-l border-r border-gray-200 transition-all duration-300 ${
                activeTab === tab 
                ? 'bg-sia-red-claire text-white border-red-600' 
                : 'bg-white text-slate-800 hover:bg-gray-50 border-gray-200'
              }`}
            >
              Notre {tab === 'identite' ? 'identité' : tab}
            </button>
          ))}
        </div>

        {/* Contenu de l'onglet */}
        <div className="border border-sia-red relative overflow-hidden flex flex-col md:flex-row min-h-[450px]">
          
          {/* Texte (Côté gauche) */}
          <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-16 z-10 flex flex-col justify-center bg-white relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-sia-red-claire leading-tight mb-4 md:mb-6 uppercase">
              {content[activeTab].title}
            </h2>
            
            <div className="w-12 md:w-16 h-1 md:h-1.5 bg-black mb-6 md:mb-8"></div>
            
            <p className="text-black text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-medium">
              {content[activeTab].text}
            </p>

            {/* Tags et Bouton */}
            <div className="flex flex-col gap-8 mt-auto">
              <div className="flex flex-wrap gap-3 md:gap-6">
                {content[activeTab].tags.map(tag => (
                  <span key={tag} className="text-sia-red-claire font-bold text-sm md:text-xl">{tag}</span>
                ))}
              </div>
              
              <Link to="/divisions" className="bg-black text-white px-5 py-3 font-bold uppercase text-xs sm:text-sm tracking-widest hover:bg-sia-red-claire transition-colors w-full sm:w-max text-center z-20">
                Decouvrir nos solutions
              </Link>
            </div>
          </div>

          {/* Image (Côté droit avec fondu) */}
          <div className="w-full md:w-1/2 relative h-60 md:h-auto">
            <img 
              src={content[activeTab].image}  
              className="w-full h-full object-cover grayscale opacity-80"
            />
            {/* Gradient pour l'effet de fondu vers le texte */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* En-tête */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black">
            Notre Univers
          </h2>
          <button className="bg-sia-red-claire text-white px-6 py-3 md:py-2 font-bold uppercase text-xs md:text-sm hover:bg-black transition-all w-full sm:w-auto text-center">
            visite guidée
          </button>
        </div>

        {/* Grille Bento - Hauteur fixe pour bloquer la disposition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
          
          {/* 1. GRANDE IMAGE GAUCHE */}
          <div className="md:col-span-7 h-[400px] md:h-full relative overflow-hidden bg-gray-100">
            <img 
              src="/src/assets/usine-longue.jpg" 
              alt="Industrie" 
              className="w-full h-full object-cover" // <-- FORCE LE REMPLISSAGE SANS DÉFORMER
            />
          </div>

          {/* COLONNE DROITE */}
          <div className="md:col-span-5 flex flex-col gap-4 h-full">
            
            {/* 2. IMAGE HAUT DROITE */}
            <div className="h-[200px] md:h-1/2 relative overflow-hidden bg-gray-100">
              <img 
                src="/src/assets/fer.jpg" 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* 3. DEUX IMAGES BAS DROITE */}
            <div className="h-[200px] md:h-1/2 grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden bg-gray-100">
                <img 
                  src="/src/assets/expert.jpg" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="relative overflow-hidden bg-gray-100">
                <img 
                  src="/src/assets/usinage.jpg" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* En-tête */}
        <div className="text-center mb-10 md:mb-16">
          <h4 className="text-sia-red-claire font-bold tracking-[0.3em] md:tracking-[0.5em] text-xs uppercase mb-2 md:mb-3">
            Support & Info
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase">
            FAQ
          </h2>
        </div>

        {/* Liste des Accordéons */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-slate-800 tracking-wide text-sm md:text-base uppercase">
                  {faq.question}
                </span>
                
                {/* Icône dynamique + / - */}
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-sia-red-claire" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Contenu rétractable */}
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                  ? 'max-h-48 opacity-100 border-t border-gray-50' 
                  : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 md:p-8 text-gray-600 leading-relaxed bg-gray-50/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
   );
}
