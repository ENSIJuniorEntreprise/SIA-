import React ,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineLike } from 'react-icons/ai'
import { MdOutlineWork } from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa'
const services = [
  {
    id: 1,
    titre: "Pièces de rechange automobile",
    description: "Vente de pièces de rechange pour véhicules : optiques, embrayage, freinage, suspension, moteurs et autres composants mécaniques.",
    image: "..."
  },
  {
    id: 2,
    titre: "Solutions industrielles",
    description: "Fourniture de composants pour l'industrie : bandes transporteuses PVC et PU, courroies dentées, pignons, chaînes, moteurs électriques, moto-réducteurs, variateurs, roulements et tapis modulaires.",
    image: "..."
  },
  {
    id: 3,
    titre: "Lubrifiants et graisses",
    description: "Distribution de lubrifiants et de graisses pour applications automobiles et industrielles. Nous proposons notamment la marque Coften, reconnue pour la qualité de ses huiles industrielles et graisses techniques.",
    image: "..."
  },
  {
    id: 4,
    titre: "Équipements moteurs et énergie",
    description: "Distribution de moteurs diesel, moteurs essence et groupes électrogènes pour applications industrielles et professionnelles.",
    image: "..."
  },
  {
    id: 5,
    titre: "Équipements marine",
    description: "Solutions et équipements pour le secteur maritime, incluant groupes électrogènes marins et pièces associées.",
    image: "..."
  },
  {
    id: 6,
    titre: "Logistique et disponibilité",
    description: "Stock disponible et réseau de fournisseurs internationaux permettant une livraison rapide ou sur commande selon les besoins.",
    image: "..."
  },
  {
    id: 7,
    titre: "Support technique et SAV",
    description: "Assistance technico-commerciale, préparation et jonction de bandes transporteuses, installation et maintenance de groupes électrogènes.",
    image: "..."
  },
]
export default function Services() {
    const [hoveredCard, setHoveredCard] = useState(null)
    const navigate = useNavigate()
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
     <div className="absolute bottom-[-60px]  right-10 transform 
                        bg-gray-50 text-gray-800 shadow-xl rounded-lg 
                        flex gap- z-20" style={{border:'1px solid #C00000',borderRadius: '60px 60px 0 0', width: '450px'}}>
          <div className=" flex-1 text-center py-4 px-4">
            <div className='w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-1'style={{ backgroundColor: '#C00000' ,marginTop: '-40px',marginRight:'20px',}}>
                <FiUsers className='text-white text-xl '/>
           </div>
            <p className=" font-semibold text-2xl"style={{ color:'#C00000',fontFamily:'Montserrat',marginRight:'-20px'}}>+200</p>
            <p className="text-sm "style={{fontFamily:'Montserrat',color:'#C00000',marginRight:'-20px'}}>collaborateurs</p>
          </div>
          <div className="border-l border-gray-300"></div>
          <div className=" flex-1 text-center py-4 px-4">
            <div className='w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2z'style={{ backgroundColor: '#C00000',marginTop: '-40px', }}>
                <AiOutlineLike className='text-white text-xl'/>   
            </div>
            <p className=" font-bold text-2xl"style={{fontFamily:'Montserrat',color:'#C00000'}}>XX k</p>
            <p className="text-sm "style={{fontFamily:'Montserrat',color:'#C00000'}}>clients satisfaits</p>
          </div>
          <div className="border-l border-gray-300"></div>
          <div className="flex-1 text-center py-4 px-4">
           <div className='w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2'style={{ backgroundColor: '#C00000',marginTop: '-40px',marginLeft:'20px' }}>
                 <MdOutlineWork className='text-white text-xl'/>
           </div>
            <p className=" font-bold text-2xl"style={{fontFamily:'Montserrat',color:'#C00000'}}>XX ans</p>
            <p className="text-sm"style={{fontFamily:'Montserrat',color:'#C00000'}}>expérience</p>
          </div>
      </div>
    </section>
    <section className="px-16 pb-16" style={{ marginTop: '100px' }}>
      <div className='flex items-center gap-3 mb-10'>
        <div className='w-1 h-8' style={{ backgroundColor: '#C00000' }}></div>
        <h2 className='text-3xl font-bold'>Nous offrons</h2>
      </div>
      <div className='grid grid-cols-3 gap-6 '>
        {services.map((service)=>(
          <div key={service.id}
          className='rounded-lg overflow-hidden shadow-sm cursor-pointer transition-all duration-300'
          style={{border: '1px solid #e5e7eb',
                backgroundColor: hoveredCard === service.id ? '#C00000' : 'white', }}
          onMouseEnter={() => setHoveredCard(service.id)}
          onMouseLeave={() => setHoveredCard(null)}>
            <div className='relative'>
              <img src={service.image} alt={service.titre} className='w-full h-48 object-cover'/>
              <div className='absolute bottom-[-20px] left-6 w-10 h-10 rounded-full flex items-center justify-center'style={{backgroundColor: hoveredCard === service.id ? 'white' : '#C00000',}}>
                  <MdOutlineWork
                    className="text-lg"
                    style={{
                      color: hoveredCard === service.id ? '#C00000' : 'white',
                    }}
                  />
                
              </div>
          

            </div>
            <div  className='p-6 pt-8'>
              <h3 className='font-bold text-lg mb-2' style={{color: hoveredCard === service.id ? 'white' : 'black',}}>{services.titre}</h3>
              <p className='text-sm mb-6' style={{color: hoveredCard === service.id ? 'rgba(255,255,255,0.85)' : '#6b7280',}}>{services.description}</p>
              <div className='w-9 h-9 rounded-full flex items-center justify-center cursor-pointer' style={{backgroundColor: hoveredCard === service.id ? 'white' : '#C00000',}}onClick={() => navigate('/contact')}>
                  <FaArrowRight
                    className="text-sm"
                    style={{
                      color: hoveredCard === service.id ? '#C00000' : 'white',
                    }}
                  />

              </div>

            </div>
          </div>
        )
        )
        }
      </div>
    </section>
    </div>
    )
}
