'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Phone, Instagram } from 'lucide-react';

const colors = {
  primary: '#f8dbc5',
  secondary: '#CE9D81',
  text: '#C09C81',
  background: '#FFF8F2',
  accent: '#CD853F',
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

const Header = () => (
  <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="bg-opacity-90 bg-white opacity-80 fixed w-full z-50 shadow-md"
  >
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl md:text-3xl font-serif font-bold" style={{ color: colors.secondary }}>
        Thalita Cristina
      </h1>
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          {['Sobre', 'Serviços', 'Galeria', 'Contato'].map((item) => (
            <li key={item}>
              <motion.a
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-wider transition-colors duration-300"
                style={{ color: colors.text }}
                whileHover={{ color: colors.accent }}
              >
                {item}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </motion.header>
);

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
          src="/api/placeholder/400/400" 
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
        <LoadingScreen />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="font-sans"
        >
          <Header />
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default App;