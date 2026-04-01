import React, { useState } from 'react';

const FacebookIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-1/2 right-0 z-50 hidden -translate-y-1/2 flex-col items-end gap-4 md:flex">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#e30613] text-white p-3 rounded-l-md shadow-lg hover:bg-sia-red transition-all duration-300"
      >
        {isOpen ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </button>

      <div className={`flex flex-col gap-6 p-3 bg-white/90 backdrop-blur-sm rounded-l-lg shadow-md transition-all duration-500 mr-2 ${
        isOpen 
          ? 'opacity-100 scale-100 translate-x-0' 
          : 'opacity-0 scale-50 translate-x-10 pointer-events-none absolute'
      }`}>
        <a href="#" className="text-gray-700 hover:text-[#e30613] transition-colors">
          <FacebookIcon />
        </a>
        <a href="#" className="text-gray-700 hover:text-[#e30613] transition-colors">
          <LinkedinIcon />
        </a>
        <a href="#" className="text-gray-700 hover:text-[#e30613] transition-colors">
          <PhoneIcon />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;

