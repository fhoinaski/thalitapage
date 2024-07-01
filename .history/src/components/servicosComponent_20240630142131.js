import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Scissors, ChevronDown, ChevronUp } from 'lucide-react';

const ServicosComponent = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const serviceCategories = [
    {
      title: "Extensão de Cílios",
      icon: Eye,
      services: [
        { name: "Volume Brasileiro", price: "R$180,00", info: "Técnica que adiciona volume e comprimento aos cílios naturais." },
        { name: "Volume Diamante", price: "R$180,00", info: "Procedimento premium para um olhar deslumbrante e sofisticado." },
        { name: "Volume Brown fio marrom", price: "R$200,00", info: "Extensões em tom marrom para um visual mais natural e suave." },
        { name: "Efeito Sirena", price: "R$150,00", info: "Extensão no canto externo para um olhar alongado e sedutor." },
        { name: "Efeito Molhado", price: "R$190,00", info: "Cílios com aparência brilhante e úmida para um visual glamouroso." },
        { name: "Fox Eyes", price: "R$220,00", info: "Técnica que eleva o olhar, criando um efeito lifting nos olhos." },
      ]
    },
    {
      title: "Design de Sobrancelhas",
      icon: Scissors,
      services: [
        { 
          name: "Design de Sobrancelhas com Henna", 
          price: "R$50,00",
          info: "Design personalizado com aplicação de henna para um efeito duradouro.",
          description: "Higienização, esfoliação, tonificação, design personalizado, aplicação de henna, finalização com gel calmante e pasta mágica."
        },
        { 
          name: "Design de Sobrancelhas", 
          price: "R$40,00",
          info: "Modelagem precisa para realçar sua beleza natural.",
          description: "Higienização, esfoliação, tonificação, design personalizado, finalização com gel calmante e pasta mágica."
        },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      className="bg-[#FFF8F2] min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          className="text-4xl font-extrabold text-center text-[#333333] mb-4"
          variants={itemVariants}
        >
          Thalita Cristina Studio & Academy
        </motion.h1>
        <motion.p 
          className="text-center text-[#C09C81] mb-12"
          variants={itemVariants}
        >
          Especialista no embelezamento do Olhar
        </motion.p>
        
        {serviceCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="mb-8"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-[#f8dbc5] rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setExpandedCategory(expandedCategory === index ? null : index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#333333] flex items-center">
                  {React.createElement(category.icon, { className: "mr-2", size: 24 })}
                  {category.title}
                </h2>
                {expandedCategory === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
            </motion.div>

            <motion.div
              initial="collapsed"
              animate={expandedCategory === index ? "expanded" : "collapsed"}
              variants={{
                expanded: { opacity: 1, height: "auto", marginTop: 16 },
                collapsed: { opacity: 0, height: 0, marginTop: 0 }
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {category.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  className="bg-white rounded-lg shadow-md p-4 mb-4"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-semibold text-[#333333] mb-2">{service.name}</h3>
                  <p className="text-[#CD853F] font-bold mb-2">{service.price}</p>
                  <p className="text-[#C09C81] text-sm">{service.info}</p>
                  {service.description && (
                    <p className="text-[#C09C81] text-xs mt-2">{service.description}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
        
        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-[#333333] mb-4">Formas de Pagamento</h3>
          <p className="text-[#C09C81] mb-8">Dinheiro, Pix, Cartão de Débito & Cartão de Crédito</p>
          
          <motion.button
            className="bg-[#CE9D81] text-[#fff8f2] py-3 px-6 rounded-full font-semibold text-lg"
            whileHover={{ scale: 1.05, backgroundColor: "#c09c81" }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar Serviço
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicosComponent;