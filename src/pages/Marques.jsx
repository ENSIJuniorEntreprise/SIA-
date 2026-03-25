import React, { useState } from 'react'
import { FaUsers, FaThumbsUp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const categories = ['Tous', 'Transmission', 'Automobile', 'Roulement', 'Motorisation', 'Industrie', 'Pneumatique']
const marques = [
  { id: 1, name: 'OPTIBELT',        categorie: 'Transmission', origine: 'Allemagne' ,brandImages:"..."},
  { id: 2, name: 'BOSCH',           categorie: 'Automobile',   origine: 'Allemagne' ,brandImages:"..."},
  { id: 3, name: 'SKF',             categorie: 'Roulement',    origine: 'Suède'     ,brandImages:"..."},
  { id: 4, name: 'GATES',           categorie: 'Transmission', origine: 'USA'       ,brandImages:"..."},
  { id: 5, name: 'VALEO',           categorie: 'Automobile',   origine: 'France'    ,brandImages:"..."},
  { id: 6, name: 'CONTINENTAL',     categorie: 'Pneumatique',  origine: 'Allemagne' ,brandImages:"..."},
  { id: 7, name: 'MAGNETI MARELLI', categorie: 'Automobile',   origine: 'Italie'    ,brandImages:"..."},
  { id: 8, name: 'NGK',             categorie: 'Motorisation', origine: 'Japon'     ,brandImages:"..."},
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
  return ( <div className='font-sans'>
              <section className='relative h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] flex flex-col  justify-center text-white text-center px-4'
                style={{backgroundImage: 'url("...")',backgroundSize:'cover',backgroundPosition:'center'}}>
                  <div className='absolute inset-0 bg-black opacity-60'></div>
                      <div className='relative z-10 px-4'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-2 md:mb-4'style={{fontFamily:'Montserrat'}}><span style={{ color:'#C00000'}}>NOS</span> MARQUES</h1>
                        <p className='text-sm sm:text-base md:text-xl text-gray-50' font-bold  style={{fontFamily:'Montserrat'}}>SIA : L'excellence mondiale, disponible localement.</p>
                      </div>
                  <div className='absolute bottom-[-95px] left-1/2 transform -translate-x-1/2 flex z-20 w-[100%] max-w-7xl h-[150px] flex gap-3'>
                          <div className='flex-1 bg-white px-6 py-5 justify-center items-center text-center' style={{border:'1px solid #C00000',borderRadius: '30px 30px 30px 30px',}} >
                              <div className=' text-center '>
                                    <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-1'style={{ backgroundColor: '#C00000' ,marginTop: '-40px',}}>
                                      <FaUsers className='text-white text-xs sm:text-sm md:text-xl '/>
                                    </div>
                                    <div className='mt-6'>
                                      <p className='font-black text-lg text-center uppercase text-gray-900 font-bold' style={{fontFamily:'Montserrat'}}> Produits 100% Authentiques</p>
                                      <p className='text-md text-gray-500 font-bold  text-center mt-1' style={{fontFamily:'Montserrat'}}>Garantie constructeur préservée</p>

                                    </div>
                               </div>
                          </div>
                          <div className='flex-1 bg-white px-6 py-5' style={{border:'1px solid #C00000',borderRadius: '30px 30px 30px 30px',}}>
                              <div className=' items-start gap-3'>
                                  <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-1'style={{ backgroundColor: '#C00000' ,marginTop: '-40px',}}>
                                      <FaUsers className='text-white text-xs sm:text-sm md:text-xl '/>
                                  </div>
                  
                                  <div className='mt-6'>
                                    <p className='font-black text-lg uppercase text-gray-900 font-bold'style={{fontFamily:'Montserrat'}}> Leaders Mondiaux</p>
                                    <p className='text-md text-gray-500 mt-1 font-bold 'style={{fontFamily:'Montserrat'}}>Stock permanent à Sfax</p>
                                  </div>
                              </div>
                          </div>
                          <div className='flex-1 bg-white px-6 py-5 ' style={{border:'1px solid #C00000',borderRadius: '30px 30px 30px 30px',}}>
                              <div className=' items-start gap-3'>
                                  <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-1'style={{ backgroundColor: '#C00000' ,marginTop: '-40px',}}>
                                      <FaUsers className='text-white text-xs sm:text-sm md:text-xl '/>
                                  </div>

                                  <div className='mt-6'>
                                    <p className='font-bold text-lg uppercase text-gray-900 font-bold' style={{fontFamily:'Montserrat'}}> Disponibilité Immédiate</p>
                                    <p className='text-sm text-gray-500 mt-1 font-bold 'style={{fontFamily:'Montserrat'}}>+50 marques de références disponible chez SIA</p>
                                  </div>
                              </div>
                          </div>
                  </div>
              </section>
              <section className=' relative px-10 sm:px-8 md:px-12 lg:px-4 pb-16' style={{ marginTop: '200px' }}>
                <div className=' flex  items-center gap-2'>
                  {categories.map((ca)=> 
                  <button 
                    key={ca} 
                    onClick={()=>setActiveCategory(ca)}
                                  className={`px-9 py-1.5 rounded-full text-md font-semibold border transition-all duration-200
                                    ${activeCategory === ca
                                      ? 'bg-red-600 text-white border-red-600'
                                      : 'bg-white text-gray-700 border-gray-300 hover:border-red-400'
                                    }`} style={{fontFamily:'Montserrat'}}>{ca}</button>
                                    )}
                                    <div className='px-9 py-1.5 rounded-full text-lg font-semibold border transition-all duration-200'>
                                          <input
                                            type="text"
                                            placeholder="Rechercher une marque..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className='text-sm outline-none w-48 text-gray-700 placeholder-gray-400 bg-transparent' style={{fontFamily:'Montserrat'}}
                                          />
                                    </div>
                                    
                </div>

              </section>
              <section className='max-w-4xl mx-auto px-4 mb-16'>
                {filtered.length === 0 ? (<p className="text-center text-gray-400 py-16">Aucune marque trouvée.</p>):(
                          <div className='flex flex-col gap-10'>
                            {filtered.map((m) => (
                              <div key={m.id} className='flex h-[200px] overflow-hidden group'>

                                
                                <div className='w-[50%] bg-white border border-gray-300 group-hover:border-red-600 transition-all duration-300  flex  items-center justify-between px-6' style={{border:'1px solid #C00000',borderRadius: '30px 30px 30px 30px'}}>
                                  <div className='text-center flex-1  '>
                                    <p className='font-extrabold  text-xl  uppercase text-gray-900'style={{fontFamily:'Montserrat'}} >{m.name}</p>
                                    <p className='text-lg text-bold text-red-600 font-semibold mt-0.5'style={{fontFamily:'Montserrat'}}>{m.categorie}</p>
                                    <p className='text-md text-bold text-gray-400 mt-0.5'style={{fontFamily:'Montserrat'}}>origine {m.origine.toLowerCase()}</p>
                                  </div>
                                  <div className="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-red-600 flex items-center justify-center transition-all duration-300">
                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="flex-1 overflow-hidden">
                                  <img
                                    src={m.brandImages}
                                    alt={m.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                                </div>

                              </div>
                            ))}
                         </div>
                        )}
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
