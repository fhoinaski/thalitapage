import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Eye } from 'lucide-react';

const colors = {
  primary: '#f8dbc5',
  secondary: '#CE9D81',
  terciary: '#333333',
  'text-white': '#fff8f2',
  text: '#C09C81',
  background: '#FFF8F2',
  accent: '#CD853F',
};

const buttonColors = {
  color: "#CE9D81",
  hover: "#c09c81",
  text: "#fff8f2",
};

const ServiceCard = ({ title, price, description, icon: Icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
    style={{ backgroundColor: colors.background }}
  >
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Icon className="mr-3" size={24} color={colors.accent} />
          <h3 className="text-xl font-semibold" style={{ color: colors.terciary }}>{title}</h3>
        </div>
        <span className="text-lg font-bold" style={{ color: colors.secondary }}>{price}</span>
      </div>
      {description && <p className="text-sm" style={{ color: colors.text }}>{description}</p>}
    </div>
    <div className="px-6 py-4 bg-opacity-10" style={{ backgroundColor: colors.primary }}>
      <button
        className="w-full py-2 px-4 rounded transition duration-300 ease-in-out"
        style={{
          backgroundColor: buttonColors.color,
          color: buttonColors.text,
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = buttonColors.hover}
        onMouseLeave={(e) => e.target.style.backgroundColor = buttonColors.color}
      >
        Agendar
      </button>
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
    { title: "Volume Brasileiro", price: "R$180,00", icon: Eye },
    { title: "Manutenção 15 dias", price: "R$110,00", icon: Eye },
    { title: "Manutenção 21 dias", price: "R$130,00", icon: Eye },
    { title: "Volume Diamante", price: "R$180,00", icon: Eye },
    { title: "Volume Brown fio marrom", price: "R$200,00", icon: Eye },
    { title: "Efeito Sirena", price: "R$150", description: "(extensão no canto externo)", icon: Eye },
    { title: "Efeito Molhado", price: "R$190", icon: Eye },
    { title: "Fox Eyes", price: "R$220,00", icon: Eye },
    { title: "Design de Sobrancelhas com Henna", price: "R$50", description: "Higienização, esfoliação, tonificação, design personalizado, aplicação de henna, finalização com gel calmante e pasta mágica.", icon: Scissors },
    { title: "Design de Sobrancelhas", price: "R$40", description: "Higienização, esfoliação, tonificação, design personalizado, finalização com gel calmante e pasta mágica.", icon: Scissors },
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
          Nossos Serviços de Luxo
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