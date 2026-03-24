import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   
    <div className="fixed bottom-10 right-2 z-50 hidden flex-col items-center gap-4 md:flex">
      
     
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#e30613] text-white p-2 rounded-sm shadow-lg hover:bg-sia-red transition-all duration-300"
      >
        
        {isOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      
      <div className={`flex flex-col gap-6 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm transition-all duration-500 ${
        isOpen 
          ? 'opacity-100 scale-100 translate-x-0' 
          : 'opacity-0 scale-50 translate-x-10 pointer-events-none'
      }`}>
        <a href="#" className="text-gray-700 hover:text-[#e30613] transition-colors">
          <Facebook size={22} strokeWidth={1.2} />
        </a>
        <a href="#" className="text-gray-700 hover:text-[#e30613] transition-colors">
          <Linkedin size={22} strokeWidth={1.2} />
        </a>
        <a href="#" className="text-gray-700 hover:text-[#e30613] transition-colors">
          <Instagram size={22} strokeWidth={1.2} />
        </a>
        <a href="#" className="text-gray-700 hover:text-[#e30613] transition-colors">
          <Phone size={22} strokeWidth={1.2} />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;