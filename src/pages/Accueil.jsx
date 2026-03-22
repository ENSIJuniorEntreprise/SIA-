import React from 'react'
import Hero from '../components/Hero';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// 1. On définit la petite carte séparément pour pouvoir l'utiliser dans la grille
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

// 2. Le composant principal de ta page
export default function Accueil() {
  return (
    <main className="w-full min-h-screen">
      {/* Ta section HERO (Full Width) */}
      <Hero />

      {/* Ta section CHIFFRES CLÉS */}
      <section className="w-full py-24 bg-[#F8F9FA]"> {/* Un gris très léger pour faire ressortir les cartes blanches */}
        <div className="container mx-auto px-6">
          
          {/* Titre de la section */}
          <div className="text-center mb-16">
            <h2 className="text-sia-red-claire text-3xl font-bold uppercase border-b-2 border-sia-red-claire inline-block pb-1">
              Chiffres Clés
            </h2>
            <p className="text-black font-bold uppercase text-xs mt-4 tracking-widest">
              SIA en quelques chiffres
            </p>
          </div>

          {/* Grille des compteurs */}
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

      {/* Tu peux ajouter d'autres sections ici */}
    </main>
  );
}