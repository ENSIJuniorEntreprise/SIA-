import React, { useState } from 'react'
import { FaUsers, FaThumbsUp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import audi from '../assets/image/audi.jpg'
import benz from '../assets/image/benz.jpg'
import citroen from '../assets/image/citroen.jpg'
import fiat from '../assets/image/fiat.jpg'
import isuzu from '../assets/image/isuzu.jpg'
import opel from '../assets/image/opel.jpg'
import peugeot from '../assets/image/peugeot.jpg'
import renault from '../assets/image/renault.jpg'
import volkswagen from '../assets/image/volkswagen.jpg'
import bgArriere from '../assets/arriere (2).png'

const categories = ['Tous', 'Transmission', 'Automobile', 'Roulement', 'Motorisation', 'Industrie', 'Pneumatique']
const marques = [
  { id: 1, name: 'AUDI',        categorie: 'Automobile', origine: 'Allemagne' ,brandImages: audi},
  { id: 2, name: 'Renault',           categorie: 'Automobile',   origine: 'Allemagne' ,brandImages: renault},
  { id: 3, name: 'Isuzu',             categorie: 'Automobile',    origine: 'Suède'     ,brandImages: isuzu},
  { id: 4, name: 'Mercedes-Benz',           categorie: 'Automobile', origine: 'USA'       ,brandImages: benz},
  { id: 5, name: 'Peugeot',           categorie: 'Automobile',   origine: 'France'    ,brandImages: peugeot},
  { id: 6, name: 'Citroën',     categorie: 'Automobile',  origine: 'Allemagne' ,brandImages: citroen},
  { id: 7, name: 'Opel', categorie: 'Automobile',   origine: 'Italie'    ,brandImages: opel},
  { id: 8, name: 'Fiat',             categorie: 'Automobile', origine: 'Japon'     ,brandImages: fiat},
]

export default function Marques() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [search, setSearch] = useState('')
  const filtered = marques.filter((m) => {
    const matchCat = activeCategory === 'Tous' || m.categorie === activeCategory
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })
  const navigate = useNavigate()
  return ( <div className='font-sans pt-20 sm:pt-24 lg:pt-28 flex flex-col items-center w-full'>
              <section className='relative w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] flex flex-col justify-center items-center text-white text-center'
                style={{backgroundImage: `url("${bgArriere}")`,backgroundSize:'cover',backgroundPosition:'center'}}>
                  <div className='absolute inset-0 bg-black opacity-60'></div>
                      <div className='relative z-10 px-4'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-2 md:mb-4'style={{fontFamily:'Montserrat'}}><span style={{ color:'#C00000'}}>NOS</span> MARQUES</h1>
                        <p className='text-sm sm:text-base md:text-xl text-gray-50 font-bold' style={{fontFamily:'Montserrat'}}>SIA : L'excellence mondiale, disponible localement.</p>
                      </div>
              </section>
              
              <div className='w-full max-w-6xl px-4 flex flex-col md:flex-row z-20 gap-8 md:gap-6 -mt-8 md:-mt-16 lg:-mt-20'>
                          <div className='flex-1 bg-white px-4 py-6 md:py-8 justify-center items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300' style={{border:'1px solid #C00000',borderRadius: '30px',}} >
                              <div className=' text-center '>
                                    <div className='w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm' style={{ backgroundColor: '#C00000' ,marginTop: '-45px',}}>
                                      <FaUsers className='text-white text-xl md:text-2xl'/>
                                    </div>
                                    <div className='mt-4 md:mt-5'>
                                      <p className='font-black text-sm md:text-lg text-center uppercase text-gray-900' style={{fontFamily:'Montserrat'}}> Produits 100% Authentiques</p>
                                      <p className='text-xs md:text-sm text-gray-500 font-medium text-center mt-2' style={{fontFamily:'Montserrat'}}>Garantie constructeur préservée</p>
                                    </div>
                               </div>
                          </div>
                          <div className='flex-1 bg-white px-4 py-6 md:py-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300' style={{border:'1px solid #C00000',borderRadius: '30px',}}>
                              <div className=' items-start gap-3'>
                                  <div className='w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm' style={{ backgroundColor: '#C00000' ,marginTop: '-45px',}}>
                                      <FaUsers className='text-white text-xl md:text-2xl'/>
                                  </div>
                  
                                  <div className='mt-4 md:mt-5'>
                                    <p className='font-black text-sm md:text-lg uppercase text-gray-900'style={{fontFamily:'Montserrat'}}> Leaders Mondiaux</p>
                                    <p className='text-xs md:text-sm text-gray-500 mt-2 font-medium 'style={{fontFamily:'Montserrat'}}>Stock permanent à Sfax</p>
                                  </div>
                              </div>
                          </div>
                          <div className='flex-1 bg-white px-4 py-6 md:py-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300' style={{border:'1px solid #C00000',borderRadius: '30px',}}>
                              <div className=' items-start gap-3'>
                                  <div className='w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm' style={{ backgroundColor: '#C00000' ,marginTop: '-45px',}}>
                                      <FaUsers className='text-white text-xl md:text-2xl'/>
                                  </div>

                                  <div className='mt-4 md:mt-5'>
                                    <p className='font-black text-sm md:text-lg uppercase text-gray-900' style={{fontFamily:'Montserrat'}}> Disponibilité Immédiate</p>
                                    <p className='text-xs md:text-sm text-gray-500 mt-2 font-medium 'style={{fontFamily:'Montserrat'}}>+50 marques de références</p>
                                  </div>
                              </div>
                          </div>
              </div>
              
              <style>{`
                @keyframes fadeInRight {
                  from { opacity: 0; transform: translateX(-30px); }
                  to { opacity: 1; transform: translateX(0); }
                }
              `}</style>
              <section className='max-w-5xl mx-auto px-4 mb-20 mt-12 md:mt-24 w-full'>
                <div className='flex flex-col gap-6 md:gap-12'>
                  {marques.map((m, index) => (
                    <div key={m.id} 
                         className='relative h-[180px] md:h-[220px] overflow-visible group mb-4 mx-auto w-full'
                         style={{ animation: `fadeInRight 0.6s ease-out ${index * 0.15}s both` }}>
                          
                      {/* L'image de la marque à droite */}
                      <div className='absolute left-[20%] md:left-[25%] right-0 h-full overflow-hidden rounded-md shadow-md bg-white' style={{border: '1px solid #f3f4f6'}}>
                        <div className='absolute right-0 top-0 bottom-0 w-[45%] sm:w-[50%] md:w-[55%] p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-hidden'>
                          <div className={`w-full h-full flex items-center justify-center ${m.name === 'AUDI' ? 'scale-[1.8]' : ''}`}>
                            <img
                              src={m.brandImages}
                              alt={m.name}
                              className='w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.15]'
                            />
                          </div>
                        </div>
                      </div>

                      {/* L'encadré blanc à gauche */}
<div className='absolute top-1/2 -translate-y-1/2 left-0 h-[80%] w-[58%] md:w-[45%] bg-white shadow-xl flex items-center justify-between px-3 md:px-6 z-10 transition-all duration-300 rounded-sm'
                           style={{border: '2px solid #C00000'}}>
                        <div className='text-left flex-1 min-w-0'>
                          <p className='font-extrabold text-[15px] sm:text-lg md:text-3xl uppercase text-gray-900 tracking-wide truncate' style={{fontFamily:'Montserrat'}} title={m.name}>{m.name}</p>
                          <p className='text-[10px] sm:text-xs md:text-sm text-gray-500 font-bold mt-1 uppercase tracking-widest truncate' style={{fontFamily:'Montserrat'}}>{m.categorie}</p>
                          <p className='text-[10px] sm:text-xs md:text-sm text-gray-400 mt-1 lowercase truncate' style={{fontFamily:'Montserrat'}}>origine {m.origine}</p>
                        </div>
                        
                        {/* La flèche */}
                        <div className='text-gray-800 transition-transform duration-300 group-hover:translate-x-2'>
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
               </section>
               <section>
                    <div className='py-8 md:py-16 text-center col-span-1 sm:col-span-2 lg:col-span-2 justify-center items-center rounded-lg flex flex-col min-h-[300px] md:min-h-[480px]' style={{ backgroundColor: '#f9fafb',border: '1px solid #e5e7eb' }}>
                         <h2 className='text-xl sm:text-xl lg:text-5xl font-bold mb-3' style={{ fontFamily: 'Montserrat' }}>VOTRE MARQUES N’EST PAS LISTÉE?</h2>
                         <p className ='text-gray-500 mb-8 text-sm md:text-lg font-bold' style={{fontFamily:'Montserrat'}}>Notre sourcing spécifique peut trouver des réfèrences  spécifiques ou 
                                des marques sur commande  spéciale.</p>
                         <button    className='px-6 md:px-8 py-3 text-white font-bold rounded-full transition-all duration-300 text-sm md:text-xl' style={{ backgroundColor: '#C00000', fontFamily: 'Montserrat' }}onMouseEnter={(e) => e.target.style.backgroundColor = '#900000'}onMouseLeave={(e) => e.target.style.backgroundColor = '#C00000'} onClick={() => navigate('/contact')}>
                           Nous contacter
                         </button>
                     </div>
               </section>
            </div>)
}


