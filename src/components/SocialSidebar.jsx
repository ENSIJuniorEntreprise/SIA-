import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   
    <div className="fixed top-1/2 right-0 z-50 hidden -translate-y-1/2 flex-col items-end gap-4 md:flex">
      
     
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#e30613] text-white p-3 rounded-l-md shadow-lg hover:bg-sia-red transition-all duration-300"
      >
        
        {isOpen ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </button>

      
      <div className={`flex flex-col gap-6 p-3 bg-white/90 backdrop-blur-sm rounded-l-lg shadow-md transition-all duration-500 mr-2 ${
        isOpen 
          ? 'opacity-100 scale-100 translate-x-0' 
          : 'opacity-0 scale-50 translate-x-10 pointer-events-none absolute'
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