import React from 'react';
import { Link } from 'react-router-dom';
import headerBackground from '../assets/headerbackground.jpg';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black pt-20 min-h-[100svh]">
      
      {/* BACKGROUND IMAGE - No padding, no margins */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage:`url(${headerBackground})`, 
        }}
      >
      
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      
      <div className="relative z-10 flex h-full min-h-[calc(100svh-5rem)] w-full flex-col items-center justify-center px-4 py-10 sm:py-16">
        <div className="max-w-5xl text-center">
          <h1 className="mb-6 text-7xl font-extrabold uppercase leading-tight tracking-widest text-sia-red-claire sm:text-8xl md:text-9xl lg:text-[150px]" style={{fontFamily:'Montserrat'}}>
            SIA
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-base font-medium text-white/90 sm:text-lg md:mb-10 md:text-xl">
            Leader national dans la distribution des pièces automobiles,       
            industrielle et agricole depuis plus de 40 ans.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <button className="bg-sia-red-claire px-8 py-3 text-sm font-bold uppercase text-white transition-all hover:bg-white hover:text-sia-red-claire sm:px-10 sm:py-4 sm:text-base">
              Découvrir SIA
            </button>
            <Link to="/divisions" className="border-2 border-white px-8 py-3 text-sm font-bold uppercase text-white transition-all hover:border-sia-red-claire hover:bg-sia-red-claire hover:text-white sm:px-10 sm:py-4 sm:text-base">
              Nos Divisions
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;