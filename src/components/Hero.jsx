import React from 'react';

const Hero = () => {
  return (
   
    <section className="relative w-screen h-screen overflow-hidden bg-black left-1/2 right-1/2 -ml-[50vw] +mr-[50vw]">
      
      {/* BACKGROUND IMAGE - No padding, no margins */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/src/assets/headerbackground.jpg')", 
        }}
      >
      
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center px-4">
        <div className="max-w-5xl text-center">
          <h1 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-6">
            Sfaxienne <br />
            <span className="text-sia-red-claire">Industrielle</span> <br />
            et Automobile
          </h1>

          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
            Leader national dans la distribution des pièces automobiles, 
            industrielle et agricole depuis plus de 40 ans.
          </p>

          <div className="flex flex-col sm:flex-row gap-20 justify-center">
            <button className="bg-sia-red-claire text-white px-10 py-4 font-bold uppercase hover:bg-white  hover:text-sia-red-claire transition-all">
              Découvrir SIA
            </button>
            <button className="border-2 border-white text-white px-10 py-4 font-bold uppercase hover:bg-sia-red-claire hover:text-white hover:border-sia-red-claire transition-all">
              Nos Divisions
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;