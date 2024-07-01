import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

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

const services = [
  // ... (seu array de serviços permanece o mesmo)
];

const ServiceCard = ({ service, openModal }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2" style={{ color: colors.secondary }}>{service.name}</h3>
        <p className="font-bold mb-2" style={{ color: colors.accent }}>{service.price}</p>
        <p className="text-sm mb-4" style={{ color: colors.text }}>{service.info}</p>
        <motion.button
          onClick={() => openModal(service)}
          className="py-2 px-4 rounded-full font-semibold text-sm"
          style={{ backgroundColor: buttonColors.color, color: buttonColors.text }}
          whileHover={{ backgroundColor: buttonColors.hover }}
          whileTap={{ scale: 0.95 }}
        >
          Mais detalhes
        </motion.button>
      </div>
    </motion.div>
  );
};

const Modal = ({ service, closeModal }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="bg-white rounded-lg max-w-md w-full p-6 relative"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
        >
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.secondary }}>{service.name}</h2>
          <p className="font-bold mb-2" style={{ color: colors.accent }}>{service.price}</p>
          <p className="text-sm mb-4" style={{ color: colors.text }}>{service.description}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ServiceCategory = ({ category, services, openModal }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="mb-24" // Increased bottom margin for more spacing
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full rounded-lg shadow-lg p-4 flex justify-between items-center"
        style={{ backgroundColor: colors.primary }}
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-2xl font-bold" style={{ color: colors.terciary }}>{category}</h2>
        {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </motion.button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} openModal={openModal} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ThalitaCristinaServicesComponent = () => {
  const [modalService, setModalService] = useState(null);

  const openModal = (service) => {
    setModalService(service);
  };

  const closeModal = () => {
    setModalService(null);
  };

  const categories = [...new Set(services.map(service => service.category))];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-4xl font-extrabold text-center mb-4"
          style={{ color: colors['text-white'] }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Thalita Cristina Studio & Academy
        </motion.h1>
        <motion.p 
          className="text-center mb-24" // Increased bottom margin for more spacing
          style={{ color: colors['text-white'] }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Especialista no embelezamento do Olhar
        </motion.p>
        {categories.map((category) => (
          <ServiceCategory
            key={category}
            category={category}
            services={services.filter(service => service.category === category)}
            openModal={openModal}
          />
        ))}
        <Modal service={modalService} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default ThalitaCristinaServicesComponent;