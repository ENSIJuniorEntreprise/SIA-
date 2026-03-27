import React from 'react'
import Hero from '../components/Hero';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const StatCard = ({ number, suffix, title, subtitle }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div 
      ref={ref} 
      className="flex w-full flex-col items-center justify-center border-t-4 border-sia-red-claire bg-white p-8 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2"
    >
      <h3 className="mb-2 text-3xl font-bold text-[#4a0a0d] sm:text-4xl md:text-5xl">
        {suffix}
        {inView ? <CountUp end={number} duration={2.5} separator=" " /> : "0"}
      </h3>
      <p className="text-xs font-bold uppercase tracking-wide text-black sm:text-sm">{title}</p>
      <p className="mt-1 text-[10px] uppercase leading-tight text-gray-400 sm:text-xs">{subtitle}</p>
    </div>
  );
};


export default function Accueil() {
  return (
    <div className="w-full min-h-screen">
     
      <Hero />

    
      <section className="w-full bg-[#F8F9FA] py-24 md:py-32">
        <div className="container mx-auto px-6">
          
         
          <div className="text-center mb-16">
            <h2 className="inline-block border-b-2 border-sia-red-claire pb-1 text-3xl font-bold uppercase text-sia-red-claire sm:text-4xl md:text-5xl">
              Chiffres Clés
            </h2>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-black">
              SIA en quelques chiffres
            </p>
          </div>

          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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

      
    </div>
  );
}
