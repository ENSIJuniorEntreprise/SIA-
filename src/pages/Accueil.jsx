import React from 'react'
import Hero from '../components/Hero';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
const brands = [
  { name: 'Invertek Drives', logo: 'src/assets/invertek.png' },
  { name: 'Valeo', logo: 'src/assets/valeo.svg' },
  { name: 'OCAP Group', logo: 'src/assets/ocap.png' },
  { name: 'Misfat Filtration', logo: 'src/assets/misfsat.png' },
  { name: 'OMEC', logo: 'src/assets/omec.png' },
  { name: 'lpr', logo: 'src/assets/lpr.jpg' },
  { name: 'cofran', logo: 'src/assets/cofran.png' },
  { name: 'SNR', logo: 'src/assets/SNR.jpg' },
];
const services = [
  {
    id: "01.",
    title: "GARANTIE QUALITÉ",
    description: "Nous sélectionnons des produits fiables auprès de fabricants reconnus. Notre gamme comprend différentes solutions afin de proposer le meilleur équilibre entre qualité, performance et prix adapté au marché tunisien.",
    image:"src/assets/tech.jpg",
    isRed: false
  },
  {
    id: "02.",
    title: "LIVRAISON RAPIDE",
    description: "Nous disposons d'un stock important pour répondre rapidement aux besoins de nos clients. Certains produits sont disponibles immédiatement, tandis que d'autres peuvent être fournis sur commande avec des délais adaptés selon les fournisseurs.",
    image:"src/assets/chariot.jpg",
    isRed: false
  },
  {
    id: "03.",
    title: "SUPPORT TECHNIQUE",
    description: "Une équipe technico-commerciale qualifiée est à votre écoute pour vous orienter dans l'identification et la sélection des pièces adaptées à vos besoins.",
    image:"src/assets/interv.jpg",
    isRed: false
  },
  {
    id: "04.",
    title: "MARQUES PREMIUM",
    description: "Partenariats officiels avec les grandes marques internationales pour une offre authentique et certifiée.",
    image:"src/assets/partenaire.jpg",
    isRed: true,
  },
  {
    id: "05.",
    title: "SAV PROFESSIONNEL",
    description: "Notre service technique intervient pour la préparation et la jonction des bandes transporteuses ainsi que des courroies plates. Nous assurons aussi l'installation, la mise en service et la réparation des groupes électrogènes Kohler.",
    image:"src/assets/profi.jpg",
    isRed: false
  },
  {
    id: "06.",
    title: "SOURCING INTERNATIONAL",
    image:"src/assets/monde.jpg",
    description: "Grâce à notre réseau de partenaires et de fournisseurs internationaux, nous pouvons rechercher et fournir des produits spécifiques selon les besoins de nos clients.",
    isRed: false
  }
];

const divisions = [
  {
    title: "DIVISION PIÈCES DE RECHANGE AUTOMOBILE",
    description: "Large gamme de pièces de rechange pour tous véhicules.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=800", 
    link: "#"
  },
  {
    title: "DIVISION INDUSTRIELLE",
    description:"Solutions techniques et équipements pour la maintenance industrielle.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800", 
    link: "#"
  },
  {
    title: "DIVISION TRAVAUX PUBLICS",
    description:"Matériels de chantier et pièces pour engins de génie civil.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800", 
    link: "#"
  },
  {
    title: "DIVISION MARINE",
    description:"Équipements et pièces pour la motorisation et la sécurité maritime.",
    image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?q=80&w=800", 
    link: "#"
  }
];
const StatCard = ({ number, suffix, title, subtitle }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  

  return (
    <div 
      ref={ref} 
      className="bg-white p-8 shadow-lg border-t-4 border-sia-red-claire flex flex-col items-center justify-center text-center min-w-[250px] transition-transform hover:-translate-y-2 duration-300"
    >
      <h3 className="text-5xl font-bold text-[#4a0a0d] mb-2">
        {suffix}
        {inView ? <CountUp end={number} duration={2.5} separator=" " /> : "0"}
      </h3>
      <p className="font-bold text-black uppercase text-sm tracking-wide">{title}</p>
      <p className="text-gray-400 text-[10px] uppercase mt-1 leading-tight">{subtitle}</p>
    </div>
  );
};


export default function Accueil() {
  return (
    <main className="w-full min-h-screen">
     
      <Hero />

    
      <section className="w-full py-40 bg-[#F8F9FA]">  
        <div className="container mx-auto px-6">
          
         
          <div className="text-center mb-16">
            <h2 className="text-sia-red-claire text-5xl font-bold uppercase border-b-2 border-sia-red-claire inline-block pb-1">
              Chiffres Clés
            </h2>
            <p className="text-black font-bold uppercase text-3xs mt-4 tracking-widest">
              SIA en quelques chiffres
            </p>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              suffix="+" 
              number={50} 
              title="Années" 
              subtitle="D'expérience industrielle" 
            />
            <StatCard 
              suffix="+" 
              number={150} 
              title="Partenaires" 
              subtitle="Fournisseurs & Distributeurs" 
            />
            <StatCard 
              suffix="+" 
              number={5000} 
              title="Références" 
              subtitle="Produits en catalogue" 
            />
            <StatCard 
              number={4} 
              title="Divisions" 
              subtitle="Couverture Nationale" 
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-sia-red-claire text-3xl md:text-4xl font-bold uppercase pb-2">À PROPOS DE SIA</h2>
            <div className="w-100 h-1 bg-sia-red-claire mx-auto"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          
          <div className="relative w-full lg:w-1/2">
            
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-sia-red-claire z-0"></div>
            
            
            <div className="relative z-10 shadow-2xl">
              <img 
                src="src/assets/apropos.jpg" 
                className="w-full h-auto object-cover"
              />
              
              
              <div className="absolute bottom-0 right-0 bg-sia-red-claire text-white p-4 md:px-14 md:py-7 text-center">
                <p className="text-3xl md:text-5xl font-bold leading-none">50+</p>
                <p className="text-[9px] md:text-xs uppercase font-bold tracking-tighter mt-1">
                  Années <br /> d'expertise
                </p>
              </div>
            </div>
          </div>

          
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl font-bold text-black leading-tight mb-6">
              Un partenaire industriel de <br />
              <span className="text-sia-red-claire">confiance</span>
            </h3>
            
            <div className="text-gray-600 space-y-4 text-sm leading-relaxed mb-10">
              <p>
                La Sfaxienne Industrielle Automobile (SIA Ben Djemaa & Cie) est un distributeur de référence basé à Tunis et Sfax, en Tunisie. Depuis plus de cinq décennies, nous accompagnons les professionnels dans leurs besoins en pièces de rechange et équipements techniques.
              </p>
              <p>
                Notre savoir-faire s'étend sur quatre secteurs stratégiques: l'automobile, l'industrie, les travaux publics et le maritime. Grâce à un réseau de partenaires internationaux rigoureusement sélectionnés,nous garantissons qualité, disponibilité et réactivité.
              </p>
            </div>

            
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-10 border-t border-gray-100 pt-8">
              <div className="border-l-2 border-sia-red-claire pl-4">
                <p className="font-bold text-black uppercase text-sm">Tunisie</p>
                <p className="text-[10px] text-gray-400 uppercase">Fondée à Sfax</p>
              </div>
              <div className="border-l-2 border-sia-red-claire pl-4">
                <p className="font-bold text-black uppercase text-sm">4 Divisions</p>
                <p className="text-[10px] text-gray-400 uppercase">Secteur Couvert</p>
              </div>
              <div className="border-l-2 border-sia-red-claire pl-4">
                <p className="font-bold text-black uppercase text-sm">Nationale</p>
                <p className="text-[10px] text-gray-400 uppercase">Distribution</p>
              </div>
              <div className="border-l-2 border-sia-red-claire pl-4">
                <p className="font-bold text-black uppercase text-sm">Certifié</p>
                <p className="text-[10px] text-gray-400 uppercase">SAV Professionnel</p>
              </div>
            </div>

            
            <button className="bg-sia-red hover:bg-white hover:text-sia-red text-white font-bold py-3 px-8 text-xs uppercase tracking-widest transition-colors">
              En savoir plus sur SIA
              <span className="ml-1 group-hover:translate-x-1 transition-transform">›</span>
            </button>
          </div>

        </div>
      </div>
    </section>
    <section className="max-w-7xl mx-auto px-6 py-20 font-sans text-center">
      <div className="inline-block relative">
            <h2 className="text-sia-red-claire text-3xl md:text-4xl font-bold uppercase pb-2">NOS DIVISIONS</h2>
            <div className="w-100 h-1 bg-sia-red-claire mx-auto"></div>
          </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-black border-l-4 border-sia-red-claire pl-4">4 Pôles d'expertise</h2>
          <Link to="/division" className="bg-sia-red text-white px-6 py-3 uppercase text-4xs font-bold flex items-center hover:bg-white hover:text-sia-red-claire hover:border-sia-red-claire transition-all group">
            Voir toutes les divisions
            <span className="ml-1 group-hover:translate-x-1 transition-transform">›</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {divisions.map((item, index) => (
            <div
              key={index} 
              href={item.link} 
              
              className="relative h-72 md:h-96 overflow-hidden rounded-xl group shadow-lg transition-all">
              
              <div 
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                style={{ backgroundImage: `url(${item.image})` }}/>
              
              <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 opacity-100 group-hover:opacity-0" />
              
              <div className="absolute inset-0 bg-sia-red-claire transition-opacity duration-500 opacity-0 group-hover:opacity-100 shadow-sia-red-claire/30 shadow-2xl" />
              
              <div className="absolute inset-0 flex flex-col items-start justify-end p-8 md:p-12 transition-all">
                
                <h3 className="text-white text-xl md:text-2xl font-extrabold text-left leading-tight uppercase drop-shadow-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-white text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:block hidden delay-100">
                  {item.description}
                </p>

                <Link to="/Division " className="mt-8 border-2 border-white text-white font-bold py-3 px-8 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:block hidden delay-200 hover:bg-white hover:text-[#CC0000] cursor-pointer">
                  EXPLORER
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-6">
        
       
        <div className="text-center mb-16 ">
          <div className="inline-block relative mb-4">
            <h2 className="text-sia-red-claire text-3xl md:text-4xl font-bold uppercase pb-2">NOS SERVICES</h2>
            <div className="w-100 h-1 bg-sia-red-claire mx-auto"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-Montserrat font-bold text-black uppercase mb-4 tracking-tight">CE QUE NOUS APPORTONS</h2>
          <div className="w-24 h-1 bg-sia-red mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed ">
           SIA offre bien plus que des produits. Notre engagement couvre l'ensemble de la<br></br>chaine de valeur, du conseil technique à la livraison.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative p-10 h-[300px]  flex flex-col justify-start overflow-hidden group shadow-lg transition-all duration-300 hover:shadow-2xl bg-gray-900 "
            >
              
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
             
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300 z-10" />

             
              <div className="relative z-20">
                
                <span className="text-4xl font-black block mb-6 text-sia-red">
                  {service.id}
                </span>
                <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-wider">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-20 bg-white">

  <div className="container mx-auto px-6 text-center mb-12">
    <h2 className="inline-block relative text-sia-red-claire text-4xl font-bold uppercase pb-2">
      NOS MARQUES
      <div className="w-full h-[4px] bg-sia-red-claire mt-1"></div>
    </h2>
  </div>

  <div className="full-bleed bg-[#D1D5DB] py-12 overflow-hidden border-y border-gray-300">
    <div className="marquee-content">
      {[...brands, ...brands, ...brands].map((brand, index) => (
        <div key={index} className="flex-none mx-12 w-48 flex items-center justify-center">
          <img 
            src={brand.logo} 
            alt={brand.name} 
            className="h-16 w-auto object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}