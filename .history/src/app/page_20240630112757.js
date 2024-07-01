
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Phone, Instagram } from 'lucide-react';

const colors = {
  primary: '#f8dbc5',
  secondary: '#CE9D81',
  text: '#C09C81',
  background: '#FFF8F2',
  accent: '#CD853F',
};
const buttonColors = {
  color: "#333333",
  'hover': "#c09c81",
  'text': "#fff8f2",
  
}

const Header = () => (
  <header className="bg-opacity-90 bg-white fixed w-full z-50 shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl md:text-3xl font-serif font-bold" style={{ color: colors.secondary }}>
        Thalita Cristina
      </h1>
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          {['Sobre', 'Serviços', 'Galeria', 'Contato'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm uppercase tracking-wider hover:text-opacity-75 transition-colors duration-300"
                style={{ color: colors.text }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <motion.section 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1 }}
    className="min-h-screen flex items-center justify-center bg-cover bg-center"
    style={{ 
      backgroundImage: "url('/api/placeholder/1920/1080')", 
      backgroundColor: colors.background
    }}
  >
    <div className="text-center p-8 bg-white bg-opacity-80 rounded-lg shadow-xl">
      <h2 className="text-4xl md:text-5xl font-serif mb-4" style={{ color: colors.secondary }}>
        Beleza Além do Olhar
      </h2>
      <p className="text-xl md:text-2xl mb-8" style={{ color: colors.text }}>
        Descubra a arte da transformação com Thalita Cristina
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-full text-white text-lg shadow-lg transition-colors duration-300"
        style={{ backgroundColor: buttonVariants['background-color'] }}
      >
        Agende sua Transformação
      </motion.button>
    </div>
  </motion.section>
);

const About = () => (
  <section id="sobre" className="py-20" style={{ backgroundColor: colors.background }}>
    <div className="container mx-auto px-4">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-serif mb-6" style={{ color: colors.secondary }}>
          Sobre Thalita Cristina
        </h2>
        <p className="text-lg mb-8" style={{ color: colors.text }}>
          Com anos de experiência e uma paixão inabalável pela beleza, Thalita Cristina se destaca como uma artista do olhar. 
          Sua técnica refinada e atenção aos detalhes transformam cada cliente em uma obra de arte viva.
        </p>
        <img src="/api/placeholder/400/400" alt="Thalita Cristina" className="rounded-full w-48 h-48 mx-auto mb-8 shadow-lg" />
      </motion.div>
    </div>
  </section>
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
    <section id="serviços" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12" style={{ color: colors.secondary }}>
          Nossos Serviços de Luxo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.secondary }}>{service.name}</h3>
              <p className="text-lg font-light mb-4" style={{ color: colors.accent }}>{service.price}</p>
              <p className="text-sm" style={{ color: colors.text }}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  // Placeholder for gallery images
  const images = Array(6).fill('/api/placeholder/400/300');

  return (
    <section id="galeria" className="py-20" style={{ backgroundColor: colors.background }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12" style={{ color: colors.secondary }}>
          Galeria de Transformações
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={src} alt={`Transformation ${index + 1}`} className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contato" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-serif text-center mb-12" style={{ color: colors.secondary }}>
        Entre em Contato
      </h2>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded text-white text-lg shadow-lg transition-colors duration-300"
            style={{ backgroundColor: colors.accent }}
          >
            Enviar Mensagem
          </motion.button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 text-center" style={{ backgroundColor: colors.secondary, color: colors.background }}>
    <p>&copy; 2024 Thalita Cristina Studio & Academy. Todos os direitos reservados.</p>
  </footer>
);

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;