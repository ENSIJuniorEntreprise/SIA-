import React from 'react'
import { FaUsers, FaThumbsUp } from 'react-icons/fa'

export default function Marques() {
  return (<div className='font-sans'>
    <section className='relative h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px] flex flex-col items-center justify-center text-white text-center px-4'
    style={{backgroundImage: 'url("...")',backgroundSize:'cover',backgroundPosition:'center'}}>
      <div className='absolute inset-0 bg-black opacity-60'></div>
          <div className='relative z-10 px-4'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-2 md:mb-4'style={{fontFamily:'Montserrat'}}><span style={{ color:'#C00000'}}>NOS</span> MARQUES</h1>
            <p className='text-sm sm:text-base md:text-xl text-gray-50' font-bold  style={{fontFamily:'Montserrat'}}>SIA : L'excellence mondiale, disponible localement.</p>
          </div>
          <div className='absolute bottom-[-95px] left-1/2 transform -translate-x-1/2 flex z-20 w-[100%] max-w-7xl h-[150px] flex gap-3'>
           <div className='flex-1 bg-white px-6 py-5 justify-center items-center text-center' style={{border:'1px solid #C00000',borderRadius: '30px 30px 30px 30px',}} >
              <div className='flex text-center gap-3'>
                    <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-1'style={{ backgroundColor: '#C00000' ,marginTop: '-40px',}}>
                                  <FaUsers className='text-white text-xs sm:text-sm md:text-xl '/>
                      </div>
                  
                <div className='text-center'>
                  <p className='font-black text-sm text-center uppercase text-gray-900'> Produits 100% Authentiques</p>
                  <p className='text-xs text-gray-500  text-center mt-1'>Garantie constructeur préservée</p>
                </div>
              </div>
           </div>
           <div className='flex-1 bg-white px-6 py-5' style={{border:'1px solid #C00000',borderRadius: '30px 30px 30px 30px',}}>
              <div className='flex items-start gap-3'>
                  <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-1'style={{ backgroundColor: '#C00000' ,marginTop: '-40px',}}>
                      <FaUsers className='text-white text-xs sm:text-sm md:text-xl '/>
                  </div>
  
                  <div>
                    <p className='font-black text-sm uppercase text-gray-900'> Leaders Mondiaux</p>
                    <p className='text-xs text-gray-500 mt-1'>Stock permanent à Sfax</p>
                  </div>
              </div>
           </div>
           <div className='flex-1 bg-white px-6 py-5 text-center' style={{border:'1px solid #C00000',borderRadius: '30px 30px 30px 30px',}}>
              <div className='flex items-start gap-3'>
                  <div className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto mb-1'style={{ backgroundColor: '#C00000' ,marginTop: '-40px',}}>
                      <FaUsers className='text-white text-xs sm:text-sm md:text-xl '/>
                  </div>

                  <div>
                    <p className='font-black text-sm uppercase text-gray-900'> Disponibilité Immédiate</p>
                    <p className='text-xs text-gray-500 mt-1'>+50 marques de références disponible chez SIA</p>
                  </div>
              </div>
           </div>
            
           
           
           



         

    </div>

    </section>

  </div>)
}
