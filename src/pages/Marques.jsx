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
import { FaShieldAlt, FaMedal, FaBolt } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'
import coverr from '../assets/image/arriere marque.jpg'


const categories = ['Tous', 'Transmission', 'Automobile', 'Roulement', 'Motorisation', 'Industrie', 'Pneumatique']
const marques = [
  { id: 1, name: 'AUDI',        categorie: 'Automobile', origine: 'Allemagne' ,brandImages: audi},
  { id: 2, name: 'Renault',           categorie: 'Automobile',   origine: 'bologne' ,brandImages: renault},
  { id: 3, name: 'Isuzu',             categorie: 'Automobile',    origine: 'Japan'     ,brandImages: isuzu},
  { id: 4, name: 'Mercedes-Benz',           categorie: 'Automobile', origine: 'Allemagne'       ,brandImages: benz},
  { id: 5, name: 'Peugeot',           categorie: 'Automobile',   origine: 'France'    ,brandImages: peugeot},
  { id: 6, name: 'Citroën',     categorie: 'Automobile',  origine: 'France' ,brandImages: citroen},
  { id: 7, name: 'Opel', categorie: 'Automobile',   origine: 'Allemagne'    ,brandImages: opel},
  { id: 8, name: 'Fiat',             categorie: 'Automobile', origine: 'Italie'     ,brandImages: fiat},
  { id: 9, name: 'Volkswagen',       categorie: 'Automobile',   origine: 'Allemagne' ,brandImages: volkswagen}
]

export default function Marques() {
  


  const navigate = useNavigate()
  return ( <div className='font-sans pt-20 sm:pt-24 lg:pt-28'>
              <section className='relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] flex flex-col justify-center text-white text-center'
                style={{backgroundImage: `url(${coverr})`,backgroundSize:'cover',backgroundPosition:'center'}}>
                  <div className='absolute inset-0 bg-black opacity-60'></div>
                      <div className='relative z-10 px-4'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-2 md:mb-4'style={{fontFamily:'Montserrat'}}><span style={{ color:'#C00000'}}>NOS</span> MARQUES</h1>
                        <p className='text-sm sm:text-base md:text-xl text-gray-50 font-bold ' style={{fontFamily:'Montserrat'}}>SIA : L'excellence mondiale, disponible localement.</p>
                      </div>
                  <div className='absolute bottom-[-95px] left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 flex z-20 h-[150px] flex gap-4 md:gap-6'>
                          <div className='flex-1 bg-gray-50 px-6 py-5 justify-center items-center text-center' style={{border:'1px solid #C00000',borderRadius: '30px 30px 30px 30px',}} >
                              <div className=' text-center '>
                                    <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-1'style={{ backgroundColor: '#C00000' ,marginTop: '-40px',}}>
                                      <FaShieldAlt className='text-white text-xs sm:text-sm md:text-xl '/>
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
                                      <FaMedal className='text-white text-xs sm:text-sm md:text-xl '/>
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
                                      <FaBolt className='text-white text-xs sm:text-sm md:text-xl '/>
                                  </div>

                                  <div className='mt-6'>
                                    <p className='font-bold text-lg uppercase text-gray-900 font-bold' style={{fontFamily:'Montserrat'}}> Disponibilité Immédiate</p>
                                    <p className='text-sm text-gray-500 mt-1 font-bold 'style={{fontFamily:'Montserrat'}}>+50 marques de références disponible chez SIA</p>
                                  </div>
                              </div>
                          </div>
                  </div>
              </section>
                   <style>{`
                @keyframes fadeInRight {
                  from { opacity: 0; transform: translateX(-30px); }
                  to { opacity: 1; transform: translateX(0); }
                }
              `}</style>
              
              <section className='max-w-5xl mx-auto px-4 mb-20 mt-40 w-full'>
                
                          <div className='flex flex-col  gap-8 md:gap-12'>
                            {marques.map((m,index) => (
                              <div key={m.id} className='relative h-[180px] md:h-[220px] overflow-visible group mb-4 mx-auto w-full' style={{ animation: `fadeInRight 0.6s ease-out ${index * 0.15}s both` }}>
                                    <div className='absolute left-[20%] md:left-[30%] right-0 h-full overflow-hidden rounded-md shadow-md bg-white' style={{border: '1px solid #f3f4f6'}}>
                                      <img
                                        src={m.brandImages}
                                        alt={m.name}
                                        className='w-full h-full md:h-full object-contain transition-transform duration-500 group-hover:scale-105'
                                      />
                                    </div>

                                
                                <div className='absolute top-1/2 -translate-y-1/2 left-0 h-[80%] w-[65%] md:w-[45%] bg-white shadow-xl flex items-center justify-between px-6 z-10 transition-all duration-300 rounded-sm' style={{border:'2px solid #C00000',}}>
                                  <div className='text-center flex-1  '>
                                    <p className='font-extrabold  text-5xl  uppercase text-gray-900'style={{fontFamily:'Montserrat'}} >{m.name}</p>
                                    <p className='text-3xl text-bold text-red-600 font-semibold mt-0.5'style={{fontFamily:'Montserrat'}}>{m.categorie}</p>
                                    <p className='text-xl text-bold text-gray-400 mt-0.5'style={{fontFamily:'Montserrat'}}>origine {m.origine.toLowerCase()}</p>
                                  </div>
                                  
                                    <FaChevronRight className='text-gray-400 group-hover:text-red-600 transition-all duration-300' />
                                  
                                 
                              
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
