import React from 'react'

export default function Services() {
  return (
  <div classname="font-sans">
    <section className='relative h-[500px] flex flex-col items-center justify-center text-white text-center'
    style={{
      backgroundImage: 'url(...)',
      backgroundSize: 'cover',
      backgroundPosition:'center',
    }}>
    <div className='absolute inset-0 bg-black opacity-80'></div>
    <div className='relative z-10'>
      <h1 className='text-6xl font-extrabold  mb-4'style={{fontFamily:'Montserrat'}}><span style={{ color:'#C00000'}}>NOS</span> SERVICES</h1>
      <p className='text-lg text-gray-50' font-bold  style={{fontFamily:'Montserrat'}}>Avec SIA, vous trouvez une chaîne de valeur complète</p>

    </div>
     <div className="absolute bottom-[-45px]  right-10 transform 
                        bg-gray-50 text-gray-800 shadow-xl rounded-lg px-12 py-4
                        flex gap-10 z-20">
          <div className="text-center">
            <p className=" font-semibold text-2xl"style={{ color:'#C00000',fontFamily:'Montserrat'}}>+200</p>
            <p className="text-sm "style={{fontFamily:'Montserrat',color:'#C00000'}}>collaborateurs</p>
          </div>
          <div className="border-l border-gray-300"></div>
          <div className="text-center">
            <p className=" font-bold text-2xl"style={{fontFamily:'Montserrat',color:'#C00000'}}>XX k</p>
            <p className="text-sm "style={{fontFamily:'Montserrat',color:'#C00000'}}>clients satisfaits</p>
          </div>
          <div className="border-l border-gray-300"></div>
          <div className="text-center">
            <p className=" font-bold text-2xl"style={{fontFamily:'Montserrat',color:'#C00000'}}>XX ans</p>
            <p className="text-sm"style={{fontFamily:'Montserrat',color:'#C00000'}}>expérience</p>
          </div>
      </div>



    </section>

    </div>
    )
}
