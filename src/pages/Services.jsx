import React ,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUsers, FaThumbsUp } from 'react-icons/fa'
import { MdOutlineWork } from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa'
import { FaCar, FaCog, FaTint, FaBolt, FaShip, FaTruck, FaTools } from 'react-icons/fa'
import cover from '../assets/image/cover-page-service.jpg'
import Équipementsmarins from '../assets/image/Équipements marins.jpg'
import Équipementsmoteurs from '../assets/image/Équipements moteurs et énergie_page_service.jpg'
import Logistique from '../assets/image/Logistique et disponibilité.jpg'
import Lubrifiants from '../assets/image/Lubrifiants et graisses_page_service.jpg'
import Piècesderechange from '../assets/image/Pièces de rechange automobile.jpg'
import Solutionsindustrielles from '../assets/image/Solutions industrielles_page_service.jpg'
import Supporttechnique from '../assets/image/Support technique et SAV.jpg'
import ahmed from '../assets/image/ahmed.jpg'
import Garantie from '../assets/image/Garantie qualité.jpg'
import Livraisons  from '../assets/image/Livraisons rapides.jpg'
import Support  from '../assets/image/Support technique.jpg'
import Marques from '../assets/image/Marques premium .jpg'
import SAVt  from '../assets/image/SAV professionnel.jpg'
import Sourcing  from '../assets/image/Sourcing international.jpg'


const services = [
  {
    id: 1,
    titre: "Pièces de rechange automobile",
    icone: <FaCar />,
    description: "Vente de pièces de rechange pour véhicules : optiques, embrayage, freinage, suspension, moteurs et autres composants mécaniques.",
    image: Piècesderechange
  },
  {
    id: 2,
    titre: "Solutions industrielles",
    icone:<FaCog />,
    description: "Fourniture de composants pour l'industrie : bandes transporteuses PVC et PU, courroies dentées, pignons, chaînes, moteurs électriques, moto-réducteurs, variateurs, roulements et tapis modulaires.",
    image: Solutionsindustrielles
  },
  {
    id: 3,
    titre: "Lubrifiants et graisses",
    icone:<FaTint />,
    description: "Distribution de lubrifiants et de graisses pour applications automobiles et industrielles. Nous proposons notamment la marque Coften, reconnue pour la qualité de ses huiles industrielles et graisses techniques.",
    image: Lubrifiants
  },
  {
    id: 4,
    titre: "Équipements moteurs et énergie",
    icone:<FaBolt />, 
    description: "Distribution de moteurs diesel, moteurs essence et groupes électrogènes pour applications industrielles et professionnelles.",
    image: Équipementsmoteurs
  },
  {
    id: 5,
    titre: "Équipements marine",
    icone:<FaShip />, 
    description: "Solutions et équipements pour le secteur maritime, incluant groupes électrogènes marins et pièces associées.",
    image: Équipementsmarins
  },
  {
    id: 6,
    titre: "Logistique et disponibilité",
    icone:<FaTruck />,
    description: "Stock disponible et réseau de fournisseurs internationaux permettant une livraison rapide ou sur commande selon les besoins.",
    image: Logistique
  },
  {
    id: 7,
    titre: "Support technique et SAV",
    icone:<FaTools />, 
    description: "Assistance technico-commerciale, préparation et jonction de bandes transporteuses, installation et maintenance de groupes électrogènes.",
    image: Supporttechnique
  },
]
const distinctions = [
  {
    id: 1,
    titre: "Garantie qualité :",
    description: "Nous sélectionnons des produits fiables auprès de fabricants reconnus. Notre gamme comprend différentes solutions afin de proposer le meilleur équilibre entre qualité, performance et prix adapté au marché tunisien.",
    image: Garantie
  },
  {
    id: 2,
    titre: "Livraisons rapides :",
    description: "Nous disposons d'un stock important pour répondre rapidement aux besoins de nos clients. Certains produits sont disponibles immédiatement, tandis que d'autres peuvent être fournis sur commande avec des délais adaptés selon les fournisseurs.",
    image: Livraisons 
  },
  {
    id: 3,
    titre: "Support technique :",
    description: "Une équipe technico-commerciale qualifiée est à votre écoute pour vous orienter dans l'identification et la sélection des pièces adaptées à vos besoins.",
    image: Support
  },
  {
    id: 4,
    titre: "Marques premium :",
    description: "Partenariats officiels avec les grandes marques internationales pour une offre authentique et certifiée.",
    image: Marques
  },
  {
    id: 5,
    titre: "SAV professionnel :",
    description: "Notre service technique intervient pour la préparation et la jonction des bandes transporteuses ainsi que des courroies plates. Nous assurons aussi l'installation, la mise en service et la réparation des groupes électrogènes Kohler.",
    image: SAVt 
  },
  {
    id: 6,
    titre: "Sourcing international :",
    description: "Grâce à notre réseau de partenaires et de fournisseurs internationaux, nous pouvons rechercher et fournir des produits spécifiques selon les besoins de nos clients.",
    image: Sourcing 
  },
]
const temoignages = [
  {
    id: 1,
    nom: "Ahmed ",
    titre: "XXX",
    texte: <>excellent service et support,<br/> je suis très satisfait du résultat</>,
    image: ahmed 
  },
  {
    id: 2,
    nom: "Sarra ",
    titre: "XXX",
    texte: "Une équipe professionnelle et réactive, je recommande vivement leurs services.",
    image:"..."
  },
  {
    id: 3,
    nom: "Karim ",
    titre: "XXX",
    texte: "Qualité des produits irréprochable et livraison dans les délais. Très satisfait.",
    image:"..."
  },
]
export default function Services() {
    const [hoveredCard, setHoveredCard] = useState(null)
    const [currentTemoignage, setCurrentTemoignage] = useState(0)
    const [hoveredDistinction, setHoveredDistinction] = useState(null)
    const navigate = useNavigate()
  return (
  <div className="overflow-x-hidden font-sans">
    <section className='relative flex h-[320px] flex-col items-center justify-center px-4 text-center text-white sm:h-[380px] md:h-[450px] lg:h-[500px]'
    style={{

      backgroundImage: `url(${cover})`,
      backgroundSize: 'cover',
      backgroundPosition:'center',
    }}>
    <div className='absolute inset-0 bg-white opacity-10'></div>
    <div className='relative z-10 px-4'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-2 md:mb-4'style={{fontFamily:'Montserrat'}}><span style={{ color:'#C00000'}}>NOS</span> SERVICES</h1>
      <p className='text-sm sm:text-base md:text-xl text-gray-50' font-bold  style={{fontFamily:'Montserrat'}}>Avec SIA, vous trouvez une chaîne de valeur complète</p>

    </div>
    <div className='absolute bottom-[-56px] left-1/2 z-20 flex w-[min(94%,980px)] -translate-x-1/2 flex-row overflow-hidden bg-gray-50 pt-3 shadow-xl md:bottom-[-64px] md:pt-4' style={{ border: '1px solid #C00000', borderRadius: '32px 32px 0 0' }}>
          <div className='flex-1 px-2 py-3 text-center md:py-4'>
            <div className='mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full sm:h-10 sm:w-10 md:h-12 md:w-12'style={{ backgroundColor: '#C00000' ,marginTop: '0',}}>
                <FaUsers className='text-white text-xs sm:text-sm md:text-xl '/>
           </div>
            <p className='font-semibold text-sm sm:text-base md:text-2xl'style={{ color:'#C00000',fontFamily:'Montserrat',}}>+100</p>
            <p className='text-xs 'style={{fontFamily:'Montserrat',color:'#C00000',}}>collaborateurs</p>
          </div>
          <div className="border-l border-gray-300"></div>
          <div className='flex-1 px-2 py-3 text-center md:py-4'>
            <div className='mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full sm:h-10 sm:w-10 md:h-12 md:w-12'style={{ backgroundColor: '#C00000',marginTop: '0', }}>
                <FaThumbsUp className='text-white text-xs sm:text-sm md:text-xl'/>   
            </div>
            <p className='font-bold text-sm sm:text-base md:text-2xl'style={{fontFamily:'Montserrat',color:'#C00000'}}>+5 000</p>
            <p className="text-xs "style={{fontFamily:'Montserrat',color:'#C00000'}}>clients satisfaits</p>
          </div>
          <div className="border-l border-gray-300"></div>
              <div className='flex-1 px-2 py-3 text-center md:py-4'>
               <div className='mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-full sm:h-10 sm:w-10 md:h-12 md:w-12'style={{ backgroundColor: '#C00000',marginTop: '0',}}>
                 <MdOutlineWork className='text-white text-xs sm:text-sm md:text-xl'/>
           </div>
            <p className='font-bold text-sm sm:text-base md:text-2xl'style={{fontFamily:'Montserrat',color:'#C00000'}}>+50 ans</p>
            <p className="text-xs "style={{fontFamily:'Montserrat',color:'#C00000'}}>expérience</p>
          </div>
      </div>
    </section>
      <section className='px-1 pb-16 pt-20 sm:px-2 sm:pt-24 md:px-4 md:pt-24 lg:px-6 mx-auto w-full max-w-[95%] md:max-w-5xl lg:max-w-6xl xl:max-w-[1300px]' >
      <div className='flex items-center gap-3 mb-8 md:mb-10'>
        <div className='w-2 h-7' style={{ backgroundColor: '#C00000', borderRadius:'4px' }}></div>
        <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800'style={{fontFamily:'Montserrat',}}>Nous offrons</h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((service)=>(
          <div key={service.id}
          className='rounded-lg overflow-hidden shadow-sm cursor-pointer transition-all duration-300 flex flex-col'
          style={{border: '1px solid #c00000',
                backgroundColor: hoveredCard === service.id ? '#C00000' : '#f9fafb'}}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}>
            <div className='relative'>
              <img src={service.image} alt={service.titre} className='w-full h-48 object-cover'/>
                <div className='absolute inset-0 transition-all duration-300'
                  style={{
                    backgroundColor: hoveredCard === service.id ? 'rgba(192, 0, 0, 0.5)' : 'transparent'
                  }}>
               </div>
              <div className='absolute bottom-[-20px] left-1/2 -translate-x-1/2  w-10 h-10 rounded-full flex items-center justify-center'style={{backgroundColor: hoveredCard === service.id ? '#f9fafb' : '#C00000',}}>
                <span className="text-lg"
                        style={{ color: hoveredCard === service.id ? '#C00000' : '#f9fafb' }}>
                        {service.icone}
                </span>
                  

                
              </div>
          

            </div>
            <div  className='p-6 pt-10 flex flex-col flex-1'>
              <h3 className='font-extrabold text-xl mb-2 text-center' style={{color: hoveredCard === service.id ? '#f9fafb' : '#1f2937',fontFamily:'Montserrat'}}>{service.titre}</h3>
              <p className='text-lg mb-6 text-center mt-5' style={{color: hoveredCard === service.id ? 'rgba(255,255,255,0.85)' : '#6b7280',}}>{service.description}</p>
              <div className='w-9 h-9 rounded-full flex items-center justify-center cursor-pointer mt-auto mx-auto  ' style={{backgroundColor: hoveredCard === service.id ? '#f9fafb' : '#C00000',}}onClick={() => navigate('/contact')}>
                  <FaArrowRight
                    className="text-sm"
                    style={{
                      color: hoveredCard === service.id ? '#C00000' : 'white',
                    }}
                  />

              </div>

            </div>
          </div>
        ))}
          <div className='py-8 md:py-16 text-center col-span-1 sm:col-span-2 lg:col-span-2 justify-center items-center rounded-lg flex flex-col min-h-[300px] md:min-h-[480px]' style={{ backgroundColor: '#f9fafb',border: '1px solid #e5e7eb' }}>
            <h2 className='text-xl sm:text-xl lg:text-5xl font-bold mb-3' style={{ fontFamily: 'Montserrat' }}>BESOIN D'UNE SOLUTION SPÉCIFIQUE?</h2>
            <p className ='text-gray-500 mb-8 text-sm md:text-lg font-bold' style={{fontFamily:'Montserrat'}}>N'hésitez pas à nous contacter afin d'obtenir votre solution spécifique</p>
            <button     className='px-6 md:px-8 py-3 text-white font-bold rounded-full transition-all duration-300 text-sm md:text-xl' style={{ backgroundColor: '#C00000', fontFamily: 'Montserrat' }}onMouseEnter={(e) => e.target.style.backgroundColor = '#900000'}onMouseLeave={(e) => e.target.style.backgroundColor = '#C00000'} onClick={() => navigate('/contact')}>
              Nous contacter
            </button>
          </div>
      </div>
    </section>
    <section className='px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-20' style={{ backgroundColor: '#f9fafb' }}>        <div className="mx-auto w-full max-w-[90%] md:max-w-4xl lg:max-w-5xl">      <div className='text-center mb-10 md:mb-16'>
        <h2 className='text-2xl sm:text-3xl lg:text-7xl font-extrabold'style={{ fontFamily: 'Montserrat' }} >Ce qui nous <span style={{ color: '#C00000' }}>distingue </span></h2>
        <p className='text-gray-500 mt-1 font-bold text-sm md:text-xl' style={{ fontFamily: 'Montserrat' }}>
          Nous offrons des services de haute qualité
        </p>
      </div>
      <div className='flex flex-col gap-8 md:gap-16'>
             {distinctions.map((item) => (
                 <div key={item.id} className='flex flex-col md:flex-row items-stretch relative rounded-lg  shadow-md cursor-pointer transition-all duration-300'
                                style={{ border: hoveredDistinction === item.id ? '1px solid #C00000' : '1px solid #e5e7eb',
                                          transform: hoveredDistinction === item.id ? 'scale(1.02)' : 'scale(1)',
                                          boxShadow: hoveredDistinction === item.id ? '0 10px 30px rgba(192,0,0,0.2)' : '', }}
                                          onMouseEnter={() => setHoveredDistinction(item.id)}
                                          onMouseLeave={() => setHoveredDistinction(null)}
                                          onClick={() => navigate('/contact')}>
                      <span
                        className='absolute text-[80px] md:text-[150px] font-bold select-none z-10'
                        style={{  color: '#C00000',
                                opacity: '0.06',
                                
                                top: item.id % 2 !== 0 ? '-30px' : 'auto',
                                left: item.id % 2 !== 0 ? '-20px' : 'auto',
                                right: item.id % 2 === 0 ? '-10px' : 'auto',
                                lineHeight: '1',
                                                        
                          
                        }}
                      >
                        {String(item.id).padStart(2, '0')}
                      </span>
                      {item.id % 2 === 0 && (
                        <div className='w-full md:w-1/2  relative overflow-hidden rounded-l-lg'>
                          <img src={item.image} alt={item.titre} className='w-full h-48 md:h-full object-cover' />
                              <div className="absolute inset-0 transition-all duration-300"
                                                style={{ backgroundColor: hoveredDistinction === item.id ? 'rgba(192,0,0,0.3)' : 'transparent' }}>
                                            </div>
                        </div>
                      )}
                      <div className='w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center relative overflow-hidden ' style={{ backgroundColor: 'white' }} >
                        <h3 className='text-xl md:text-3xl font-bold mb-3 relative z-10' style={{ color: '#C00000', fontFamily: 'Montserrat', }}>
                          {item.titre}
                        </h3>
                        <p className='text-gray-600 text-lg leading-relaxed relative z-10'>
                          {item.description}
                        </p>
                      </div>
                      {item.id % 2 !== 0 && (
                        <div className='w-full md:w-1/2 relative overflow-hidden rounded-l-lg'>
                          <img src={item.image} alt={item.titre} className='w-full h-48 md:h-full object-cover'/>
                              <div className="absolute inset-0 transition-all duration-300"
                                  style={{ backgroundColor: hoveredDistinction === item.id ? 'rgba(192,0,0,0.3)' : 'transparent' }}>
                              </div>
                        </div>
                      )}

       </div>
         ))}
        </div>
        </div>
    </section>

   
      

    
    </div>
    )
}
