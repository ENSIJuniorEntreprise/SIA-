import React from 'react';

const Hero = () => {
  return (
    // h-screen makes it 100% of the viewport height
    // w-full makes it 100% of the viewport width
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* BACKGROUND IMAGE - No padding, no margins */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/src/assets/headerbackground.jpg')", 
        }}
      >
        {/* Darker overlay to help the white text stand out */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTENT - Centered but allowed to breathe */}
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-sia-red-claire text-white px-10 py-4 font-bold uppercase hover:bg-red-700 transition-all">
              Découvrir SIA
            </button>
            <button className="border-2 border-white text-white px-10 py-4 font-bold uppercase hover:bg-white hover:text-black transition-all">
              Nos Divisions
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;