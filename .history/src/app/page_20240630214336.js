'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimate, stagger } from 'framer-motion';
import { Star, MapPin, Phone, Instagram, Facebook, Menu, X } from 'lucide-react';
import ServicosComponent from '@/components/servicosComponent';
import LuxuryBeautyServicesShowcase from '@/components/features';
import ImpressiveLoader from '@/components/loading';
import BackgroundVideo from '@/components/BackgroundVideo';


const colors = {
  primary: '#f8dbc5',
  secondary: '#CE9D81',
  terciary: '#333333',
  'text-white': '#fff8f2',
  text: '#C09C81',
  background: '#FFF8F2',
  accent: '#CD853F',
  'icon-facebook': '#3b5998',
  'icon-instagram': '#e4405f',
  'icon-whatsapp': '#25d366',
};

const buttonColors = {
  color: "#CE9D81",
  hover: "#c09c81",
  text: "#fff8f2",
};

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="w-16 h-16 border-4 border-t-4 border-secondary rounded-full"
    />
  </div>
);

const Path = ({ d, variants, isOpen, ...rest }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={isOpen ? "#FFFFFF" : "#CE9D81"}
    strokeLinecap="round"
    initial="closed"
    animate={isOpen ? "open" : "closed"}
    d={d}
    variants={variants}
    {...rest}
  />
);

const MenuToggle = ({ toggle, isOpen }) => (
  <button
    onClick={toggle}
    className={`w-12 h-12 rounded-full p-2 focus:outline-none z-50 transition-all duration-300 ${
      isOpen ? 'bg-transparent' : 'bg-transparent'
    }`}
  >
    <svg width="23" height="18" viewBox="0 0 23 18">
      <Path
        isOpen={isOpen}
        d="M 2 2.5 L 20 2.5"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        isOpen={isOpen}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
      />
      <Path
        isOpen={isOpen}
        d="M 2 16.346 L 20 16.346"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const menuItems = ['Sobre', 'Serviços', 'Galeria', 'Contato'];

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav.mobile-nav",
            { transform: "translateX(0%)" },
            { ease: [0.10, 0.65, 0.53, 1], duration: 0.8 },
          ],
          [
            "nav.mobile-nav li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "nav.mobile-nav li",
            { transform: "scale(0.8)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.08, { from: "last" }), at: "<" },
          ],
          ["nav.mobile-nav", { transform: "translateX(100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        ".top-path",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      [".middle-path", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        ".bottom-path",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen, animate]);

  const renderMenuItems = (isMobile = false) => (
    <ul className={`${isMobile ? 'flex flex-col gap-2.5' : 'flex space-x-6'}`}>
      {menuItems.map((item) => (
        <li key={item} className={`${isMobile ? 'mb-4' : ''}`}>
          <motion.a
            href={`#${item.toLowerCase()}`}
            className={`text-sm uppercase tracking-wider transition-colors duration-300 ${
              isMobile ? 'block font-bold text-4xl p-4' : ''
            }`}
            style={{ color: isMobile ? colors.terciary : colors['text-white'] }}
            whileHover={{ color: colors.accent }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.toLowerCase());
            }}
          >
            {item}
          </motion.a>
        </li>
      ))}
    </ul>
  );

  const renderSocialIcons = () => (
    <div className="flex space-x-4 border px-3 py-2 rounded-lg">
      <motion.a 
        href="https://www.instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Instagram size={20} color={colors['icon-instagram']} />
      </motion.a>
      <motion.a 
        href="https://www.facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Facebook size={20} color={colors['icon-facebook']} />
      </motion.a>
      <motion.a 
        href="https://wa.me/yourphonenumber" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={colors['icon-whatsapp']}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </motion.a>
    </div>
  );

  return (
    <motion.header
      ref={scope}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-opacity-90 bg-black opacity-75 fixed w-full z-50 shadow-md"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-serif font-bold" style={{ color: colors['text-white'] }}>
            Thalita Cristina
          </h1>
          <nav className="hidden md:flex items-center space-x-6">
            {renderMenuItems()}
            {renderSocialIcons()}
          </nav>
          <div className="md:hidden">
            <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={toggleMenu}
            />
            <motion.nav
              className="mobile-nav fixed top-0 right-0 bottom-0 w-64 bg-[#f8dbc5] pt-24 z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="absolute top-4 right-4">
                <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
              </div>
              {renderMenuItems(true)}
              <div className="mt-8 flex justify-center">
                {renderSocialIcons()}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};




const Hero = () => (
  <motion.section 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1 }}
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute w-full h-full object-cover"
    >
      <source src="http://talita.conectando.site/wp-content/uploads/2024/06/lash_art.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="relative z-10 text-center p-8 bg-white bg-opacity-10 rounded-lg shadow-xl"
    >
      <h2 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: colors.secondary }}>
        Beleza Além do Olhar
      </h2>
      <p className="text-xl md:text-2xl mb-8" style={{ color: colors.text }}>
        Descubra a arte da transformação com Thalita Cristina
      </p>
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: buttonColors.hover }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-full text-white text-lg shadow-lg transition-colors duration-300"
        style={{ backgroundColor: buttonColors.color, color: buttonColors.text }}
      >
        Agende sua Transformação
      </motion.button>
    </motion.div>
  </motion.section>
);

const About = () => (
  <motion.section 
    id="sobre" 
    className="py-20" 
    style={{ backgroundColor: colors.background }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto px-4">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-6" style={{ color: colors.secondary }}>
          Sobre Thalita Cristina
        </h2>
        <p className="text-lg mb-8" style={{ color: colors.text }}>
          Com anos de experiência e uma paixão inabalável pela beleza, Thalita Cristina se destaca como uma artista do olhar. 
          Sua técnica refinada e atenção aos detalhes transformam cada cliente em uma obra de arte viva.
        </p>
        <motion.img 
          src="http://talita.conectando.site/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-30-at-12.13.15.jpeg" 
          alt="Thalita Cristina" 
          className="rounded-full w-48 h-48 mx-auto mb-8 shadow-lg" 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  </motion.section>
);

const Services = () => {
  const services = [
    { name: "Volume Brasileiro", price: "R$180,00", description: "Cílios volumosos e naturais" },
    { name: "Volume Diamante", price: "R$180,00", description: "Brilho e sofisticação para seu olhar" },
    { name: "Volume Brown", price: "R$200,00", description: "Efeito natural com fios marrom" },
    { name: "Efeito Sirena", price: "R$150,00", description: "Extensão no canto externo para um olhar felino" },
    { name: "Efeito Molhado", price: "R$190,00", description: "Aparência brilhante e sedutora" },
    { name: "Fox Eyes", price: "R$220,00", description: "O queridinho das celebridades" },
  ];

  return (
    <motion.section 
      id="serviços" 
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12" style={{ color: colors.secondary }}>
          Nossos Serviços de Luxo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.secondary }}>{service.name}</h3>
              <p className="text-lg font-light mb-4" style={{ color: colors.accent }}>{service.price}</p>
              <p className="text-sm" style={{ color: colors.text }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Gallery = () => {
  const images = Array(6).fill('/api/placeholder/400/300');

  return (
    <motion.section 
      id="galeria" 
      className="py-20" 
      style={{ backgroundColor: colors.background }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12" style={{ color: colors.secondary }}>
          Galeria de Transformações
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={src} alt={`Transformation ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Contact = () => (
  <motion.section 
    id="contato" 
    className="py-20"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-serif text-center mb-12" style={{ color: colors.secondary }}>
        Entre em Contato
      </h2>
      <motion.div 
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2" style={{ color: colors.secondary }}>Localização</h3>
            <p className="flex items-center" style={{ color: colors.text }}>
              <MapPin className="mr-2" size={18} />
              Rua Patrício Farias, 55, Vitória Eco Office sala 409, Florianópolis/ Itacorubi
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: colors.secondary }}>Contato</h3>
            <p className="flex items-center mb-2" style={{ color: colors.text }}>
              <Phone className="mr-2" size={18} />
              (XX) XXXX-XXXX
            </p>
            <p className="flex items-center" style={{ color: colors.text }}>
              <Instagram className="mr-2" size={18} />
              @thalitacristina_studio
            </p>
          </div>
        </div>
        <form>
          <div className="mb-4">
            <input type="text" placeholder="Seu Nome" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Seu Email" className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Sua Mensagem" className="w-full p-2 border border-gray-300 rounded" rows="4"></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: buttonColors.hover }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded text-white text-lg shadow-lg transition-colors duration-300"
            style={{ backgroundColor: buttonColors.color }}
          >
            Enviar Mensagem
          </motion.button>
        </form>
      </motion.div>
    </div>
  </motion.section>
);

const Footer = () => (
  <footer className="py-8 text-center" style={{ backgroundColor: colors.secondary, color: colors.background }}>
    <p>&copy; 2024 Thalita Cristina Studio & Academy. Todos os direitos reservados.</p>
  </footer>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulating loading time
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <ImpressiveLoader />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="font-sans"
        >
          <BackgroundVideo videoSrc="http://talita.conectando.site/wp-content/uploads/2024/06/lash_art.mp4" />
          <Header />
          <Hero />
          <About />
          <LuxuryBeautyServicesShowcase />
          <Gallery />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default App;