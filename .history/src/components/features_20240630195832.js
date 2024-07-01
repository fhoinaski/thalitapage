import React from 'react';
import { motion } from 'framer-motion';

const colors = {
  primary: '#f8dbc5',
  secondary: '#CE9D81',
  terciary: '#333333',
  'text-white': '#fff8f2',
  text: '#C09C81',
  background: '#FFF8F2',
  accent: '#CD853F',
};

const ServiceCard = ({ title, description, image, info, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
    style={{ backgroundColor: colors.background }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2" style={{ color: colors.terciary }}>{title}</h3>
      <p className="text-sm mb-4" style={{ color: colors.text }}>{description}</p>
      <div className="text-xs" style={{ color: colors.secondary }}>
        <strong>Detalhes:</strong> {info}
      </div>
    </div>
  </motion.div>
);

const ServicesGrid = ({ children }) => (
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {children}
  </div>
);

const LuxuryBeautyServicesShowcase = () => {
  const services = [
    {
      title: "Volume Brasileiro",
      description: "Técnica que proporciona um olhar mais volumoso e natural, ideal para quem busca realçar os cílios sem exageros.",
      image: "/api/placeholder/400/300", // Substitua por uma imagem real de cílios com volume brasileiro
      info: "Aplicação de múltiplos cílios finos em cada cílio natural, criando volume e definição."
    },
    {
      title: "Volume Diamante",
      description: "O ápice do glamour para seus cílios, oferecendo um visual deslumbrante e sofisticado.",
      image: "/api/placeholder/400/300", // Substitua por uma imagem de cílios com volume diamante
      info: "Técnica avançada que utiliza cílios ultrafinos para máximo volume e brilho."
    },
    {
      title: "Efeito Sirena",
      description: "Um toque de magia para seus olhos, com extensões que criam um efeito de olhar alongado e sedutor.",
      image: "/api/placeholder/400/300", // Substitua por uma imagem de cílios com efeito sirena
      info: "Extensões aplicadas no canto externo dos olhos para um efeito dramático e alongado."
    },
    {
      title: "Fox Eyes",
      description: "Técnica que eleva o olhar, criando um efeito lifting natural e sofisticado.",
      image: "/api/placeholder/400/300", // Substitua por uma imagem de cílios com efeito fox eyes
      info: "Combinação de extensões e design que elevam o canto externo dos olhos."
    },
    {
      title: "Design de Sobrancelhas com Henna",
      description: "Realce a beleza natural das suas sobrancelhas com um design personalizado e duradouro.",
      image: "https://th.bing.com/th/id/R.608310af8551f6f177add4a0a6ddbbdb?rik=J4bu6bhqhtcKqg&pid=ImgRaw&r=0", // Substitua por uma imagem de sobrancelhas com henna
      info: "Inclui higienização, esfoliação, design personalizado e aplicação de henna para um efeito duradouro."
    },
    {
      title: "Design de Sobrancelhas Clássico",
      description: "Um design meticuloso que harmoniza suas sobrancelhas com os traços do seu rosto.",
      image: "https://th.bing.com/th/id/OIP.dwjuH6CWXlXDD5q283ftGQHaE4?w=640&h=422&rs=1&pid=ImgDetMain", // Substitua por uma imagem de design de sobrancelhas
      info: "Processo completo de higienização, modelagem e finalização para sobrancelhas perfeitamente delineadas."
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: colors.background }}>
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
          style={{ color: colors.terciary }}
        >
          Nossos Serviços Exclusivos
        </motion.h1>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </ServicesGrid>
      </div>
    </section>
  );
};

export default LuxuryBeautyServicesShowcase;