import React ,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineLike } from 'react-icons/ai'
import { MdOutlineWork } from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa'
import { FaCar, FaCog, FaTint, FaBolt, FaShip, FaTruck, FaTools } from 'react-icons/fa'
const services = [
  {
    id: 1,
    titre: "Pièces de rechange automobile",
    icone: <FaCar />,
    description: "Vente de pièces de rechange pour véhicules : optiques, embrayage, freinage, suspension, moteurs et autres composants mécaniques.",
    image: "..."
  },
  {
    id: 2,
    titre: "Solutions industrielles",
    icone:<FaCog />,
    description: "Fourniture de composants pour l'industrie : bandes transporteuses PVC et PU, courroies dentées, pignons, chaînes, moteurs électriques, moto-réducteurs, variateurs, roulements et tapis modulaires.",
    image: "..."
  },
  {
    id: 3,
    titre: "Lubrifiants et graisses",
    icone:<FaTint />,
    description: "Distribution de lubrifiants et de graisses pour applications automobiles et industrielles. Nous proposons notamment la marque Coften, reconnue pour la qualité de ses huiles industrielles et graisses techniques.",
    image: "..."
  },
  {
    id: 4,
    titre: "Équipements moteurs et énergie",
    icone:<FaBolt />, 
    description: "Distribution de moteurs diesel, moteurs essence et groupes électrogènes pour applications industrielles et professionnelles.",
    image: "..."
  },
  {
    id: 5,
    titre: "Équipements marine",
    icone:<FaShip />, 
    description: "Solutions et équipements pour le secteur maritime, incluant groupes électrogènes marins et pièces associées.",
    image: "..."
  },
  {
    id: 6,
    titre: "Logistique et disponibilité",
    icone:<FaTruck />,
    description: "Stock disponible et réseau de fournisseurs internationaux permettant une livraison rapide ou sur commande selon les besoins.",
    image: "..."
  },
  {
    id: 7,
    titre: "Support technique et SAV",
    icone:<FaTools />, 
    description: "Assistance technico-commerciale, préparation et jonction de bandes transporteuses, installation et maintenance de groupes électrogènes.",
    image: "..."
  },
]
const distinctions = [
  {
    id: 1,
    titre: "Garantie qualité :",
    description: "Nous sélectionnons des produits fiables auprès de fabricants reconnus. Notre gamme comprend différentes solutions afin de proposer le meilleur équilibre entre qualité, performance et prix adapté au marché tunisien.",
    image: "..."
  },
  {
    id: 2,
    titre: "Livraisons rapides :",
    description: "Nous disposons d'un stock important pour répondre rapidement aux besoins de nos clients. Certains produits sont disponibles immédiatement, tandis que d'autres peuvent être fournis sur commande avec des délais adaptés selon les fournisseurs.",
    image: "..."
  },
  {
    id: 3,
    titre: "Support technique :",
    description: "Une équipe technico-commerciale qualifiée est à votre écoute pour vous orienter dans l'identification et la sélection des pièces adaptées à vos besoins.",
    image: "..."
  },
  {
    id: 4,
    titre: "Marques premium :",
    description: "Partenariats officiels avec les grandes marques internationales pour une offre authentique et certifiée.",
    image: "..."
  },
  {
    id: 5,
    titre: "SAV professionnel :",
    description: "Notre service technique intervient pour la préparation et la jonction des bandes transporteuses ainsi que des courroies plates. Nous assurons aussi l'installation, la mise en service et la réparation des groupes électrogènes Kohler.",
    image: "..."
  },
  {
    id: 6,
    titre: "Sourcing international :",
    description: "Grâce à notre réseau de partenaires et de fournisseurs internationaux, nous pouvons rechercher et fournir des produits spécifiques selon les besoins de nos clients.",
    image: "..."
  },
]
const temoignages = [
  {
    id: 1,
    nom: "Ahmed ",
    titre: "XXX",
    texte: <>excellent service et support,<br/> je suis très satisfait du résultat</>,
    image:"..."
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
    const navigate = useNavigate()
  return (
  <div className="font-sans">
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
        <div className='w-2 h-7' style={{ backgroundColor: '#C00000', borderRadius:'4px' }}></div>
        <h2 className='text-3xl font-bold text-gray-800'style={{fontFamily:'Montserrat',}}>Nous offrons</h2>
      </div>
      <div className='grid grid-cols-3 gap-6 '>
        {services.map((service)=>(
          <div key={service.id}
          className='rounded-lg overflow-hidden shadow-sm cursor-pointer transition-all duration-300 flex flex-col'
          style={{border: '1px solid #c00000',
                backgroundColor: hoveredCard === service.id ? '#C00000' : '#f9fafb'}}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}>
            <div className='relative'>
              <img src={service.image} alt={service.titre} className='w-full h-48 object-cover'/>
              <div className='absolute bottom-[-20px] left-1/2 -translate-x-1/2  w-10 h-10 rounded-full flex items-center justify-center'style={{backgroundColor: hoveredCard === service.id ? '#f9fafb' : '#C00000',}}>
                <span className="text-lg"
                        style={{ color: hoveredCard === service.id ? '#C00000' : '#f9fafb' }}>
                        {service.icone}
                </span>
                  

                
              </div>
          

            </div>
            <div  className='p-6 pt-10 flex flex-col flex-1'>
              <h3 className='font-extrabold text-lg mb-2 text-center' style={{color: hoveredCard === service.id ? '#f9fafb' : '#1f2937',fontFamily:'Montserrat'}}>{service.titre}</h3>
              <p className='text-medium mb-6 text-center mt-5' style={{color: hoveredCard === service.id ? 'rgba(255,255,255,0.85)' : '#6b7280',}}>{service.description}</p>
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
          <div className='py-16 text-center col-span-2 justify-center items-center rounded-lg flex flex-col h-full' style={{ backgroundColor: '#f9fafb' }}>
            <h2 className='text-3xl font-bold mb-3' style={{ fontFamily: 'Montserrat' }}>BESOIN D'UNE SOLUTION SPÉCIFIQUE?</h2>
            <p className ='text-gray-500 mb-8' style={{fontFamily:'Montserrat'}}>N'hésitez pas à nous contacter afin d'obtenir votre solution spécifique</p>
            <button     className='px-8 py-3 text-white font-semibold rounded-full transition-all duration-300' style={{ backgroundColor: '#C00000', fontFamily: 'Montserrat' }}onMouseEnter={(e) => e.target.style.backgroundColor = '#900000'}onMouseLeave={(e) => e.target.style.backgroundColor = '#C00000'} onClick={() => navigate('/contact')}>
              Nous contacter
            </button>
          </div>
      </div>
    </section>
    <section className='px-16 py-20' style={{ backgroundColor: '#f9fafb' }}>
      <div className='text-center mb-16'>
        <h2 className="text-4xl font-extrabold" style={{ fontFamily: 'Montserrat' }} >Ce qui nous <span style={{ color: '#C00000' }}>distingue </span></h2>
        <p className='text-gray-500 mt-1 font-bold' style={{ fontFamily: 'Montserrat' }}>
          Nous offrons des services de haute qualité
        </p>
      </div>
      <div className="flex flex-col gap-16">
             {distinctions.map((item) => (
                 <div key={item.id} className="flex items-center gap-10 relative">
                      <span
                        className="absolute text-[120px] font-bold opacity-10 select-none"
                        style={{
                          color: '#C00000',
                          top: item.id % 2 !== 0 ? '110px' : '-70px',
                          left: item.id % 2 !== 0 ? '-40px' : 'auto',
                          right: item.id % 2 === 0 ? '-40px' : 'auto',
                          
                        }}
                      >
                        {String(item.id).padStart(2, '0')}
                      </span>
                      {item.id % 2 === 0 && (
                        <div className='w-1/2'>
                          <img src={item.image} alt={item.titre} className='w-full h-64 object-cover rounded-lg shadow-md' />
                        </div>
                      )}
                      <div className='w-1/2 ' >
                        <h3 className="text-xl font-bold mb-3 " style={{ color: '#C00000', fontFamily: 'Montserrat',marginTop:'-50px' }}>
                          {item.titre}
                        </h3>
                        <p className='text-gray-600 text-sm leading-relaxed'>
                          {item.description}
                        </p>
                      </div>
                      {item.id % 2 !== 0 && (
                        <div className='w-1/2'>
                          <img src={item.image} alt={item.titre} className="w-full h-64 object-cover rounded-lg shadow-md" />
                        </div>
                      )}

       </div>
         ))}
        </div>
    </section>
    <section className='py-20 px-16 text-center' style={{ backgroundColor: '#f9fafb' }}>
      <h2 className='text-4xl font-extrabold mb-2' style={{ fontFamily: 'Montserrat' }}>Ce qu'ils <span style={{ color: '#C00000' }}>en disent</span></h2>
      <p className='text-gray-500 mb-12 font-bold' style={{ fontFamily: 'Montserrat' }}>
        Découvrez ce que nos clients pensent de nos services
      </p>
      <div className='max-w-xl mx-auto rounded-lg p-8 relative' style={{ border: '2px solid #C00000' }}>
            <div className="flex  gap-1 mb-1 " style={{marginLeft:'220px'}}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: '#C00000' }}>★</span>
                ))}
            </div>
            

              <p className='bg-gray-50 text-lg  ' style={{marginLeft:'77px',fontFamily:'Montserrat',marginBottom:'-50px'}}>
                "{temoignages[currentTemoignage].texte}"
              </p>
            
          
              
                  <div className='flex items-center items-start  gap-4 '>
                          <div className='w-20 h-20 rounded-full flex flex-shrink-0 mt-4'
                              style={{ backgroundColor: '#C00000',marginLeft:'20px', }}>
                             {temoignages[currentTemoignage].imgage}
                          </div>
                    <div >
                      <p className="font-bold" style={{ fontFamily: 'Montserrat' ,marginLeft:'120px',marginTop:'50px'}}>
                        {temoignages[currentTemoignage].nom}
                      </p>
                      <p className="text-sm bg-gray-50" style={{fontFamily: 'Montserrat' ,marginLeft:'120px'}}>
                        {temoignages[currentTemoignage].titre}
                      </p>
                    </div>
                 </div>
              
      
            <div className='flex items-center justify-center gap-4 mt-8'>
              <button onClick={() => setCurrentTemoignage(currentTemoignage === 0 ? temoignages.length - 1 : currentTemoignage - 1)}  className='w-8 h-8 rounded-full flex items-center justify-center bg-gray-50' style={{backgroundColor: '#C00000'}}> ← 

              </button>
                  {temoignages.map((_, i) => (
                    <div
                      key={i}
                      onClick={() => setCurrentTemoignage(i)}
                      className="w-2 h-2 rounded-full cursor-pointer"
                      style={{ backgroundColor: i === currentTemoignage ? '#C00000' : '#d1d5db' }}
                    />
                  ))}
                  <button
                    onClick={() => setCurrentTemoignage(
                      currentTemoignage === temoignages.length - 1 ? 0 : currentTemoignage + 1
                    )}
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50"
                    style={{ backgroundColor: '#C00000' }}>
                    →
                  </button>


           





            </div>
 


      </div>
    </section>
    </div>
    )
}
