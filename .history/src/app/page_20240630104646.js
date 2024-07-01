'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Phone } from 'lucide-react';

const Header = () => (
  <header className="bg-pink-100 p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-pink-800">Thalita Cristina Studio & Academy</h1>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#about" className="text-pink-800 hover:text-pink-600">Sobre</a></li>
        <li><a href="#services" className="text-pink-800 hover:text-pink-600">Serviços</a></li>
        <li><a href="#contact" className="text-pink-800 hover:text-pink-600">Contato</a></li>
      </ul>
    </nav>
  </header>
);

const Hero = () => (
  <motion.section 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1 }}
    className="bg-pink-200 text-center py-20"
  >
    <h2 className="text-4xl font-bold text-pink-800 mb-4">Bem-vinda ao Olhar Perfeito</h2>
    <p className="text-xl text-pink-700">Descubra a beleza dos seus olhos com Thalita Cristina</p>
  </motion.section>
);

const About = () => (
  <motion.section 
    initial={{ x: -100, opacity: 0 }} 
    animate={{ x: 0, opacity: 1 }} 
    transition={{ duration: 0.8 }}
    id="about" 
    className="bg-white py-16"
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-pink-800 mb-6">Sobre Nós</h2>
      <p className="text-lg text-pink-700">
        Thalita Cristina é especialista no embelezamento do olhar. Nosso estúdio oferece um espaço aconchegante e procedimentos de excelência para realçar sua beleza natural e aumentar sua autoestima.
      </p>
    </div>
  </motion.section>
);

const Features = () => {
  const features = [
    "Ambiente acolhedor",
    "Profissionais especializados",
    "Técnicas avançadas",
    "Produtos de alta qualidade",
  ];

  return (
    <section className="bg-pink-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-pink-800 mb-6">Nossos Diferenciais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-lg text-pink-700">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { name: "Volume Brasileiro", price: "R$180,00" },
    { name: "Volume Diamante", price: "R$180,00" },
    { name: "Volume Brown fio marrom", price: "R$200,00" },
    { name: "Efeito Sirena", price: "R$150,00" },
    { name: "Efeito Molhado", price: "R$190,00" },
    { name: "Fox Eyes", price: "R$220,00" },
  ];

  return (
    <section id="services" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-pink-800 mb-6">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-pink-100 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-pink-800 mb-2">{service.name}</h3>
              <p className="text-lg text-pink-700">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { name: "Maria", text: "Adorei o resultado! Superou minhas expectativas." },
    { name: "Ana", text: "Profissionalismo e qualidade impecáveis." },
    { name: "Carla", text: "Minha autoestima melhorou muito após o procedimento." },
  ];

  return (
    <section className="bg-pink-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-pink-800 mb-6">Avaliações</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ y: 50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-pink-700 mb-4">"{testimonial.text}"</p>
              <p className="text-pink-800 font-semibold">- {testimonial.name}</p>
              <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="bg-white py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-pink-800 mb-6">Contato</h2>
      <div className="flex flex-col md:flex-row justify-between items-start">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold text-pink-800 mb-2">Localização</h3>
          <p className="text-pink-700 flex items-center">
            <MapPin className="mr-2" /> 
            Rua Patrício Farias, 55, Vitória Eco Office sala 409, Florianópolis/ Itacorubi
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-pink-800 mb-2">Contato</h3>
          <p className="text-pink-700 flex items-center">
            <Phone className="mr-2" /> 
            (XX) XXXX-XXXX
          </p>
        </div>
      </div>
    </div>
  </section>
);

const HireButton = () => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="fixed bottom-4 right-4 bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-colors duration-300"
  >
    Agende Agora
  </motion.button>
);

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Features />
      <Services />
      <Testimonials />
      <Contact />
      <HireButton />
    </div>
  );
};

export default App;