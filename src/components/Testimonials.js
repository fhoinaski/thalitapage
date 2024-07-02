import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const colors = {
  primary: "#f8dbc5",
  secondary: "#ceac94",
  terciary: "#333333",
  "text-white": "#fff8f2",
  text: "#C09C81",
  background: "#FFF8F2",
  accent: "#CD853F",
  "icon-whatsapp": "#25d366",
};

const buttonColors = {
  color: "#ceac94",
  hover: "#c09c81",
  text: "#fff8f2",
};

const Testimonials = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const images = [
    '/curso/alunos/image1.jpg',
    '/curso/alunos/image2.jpg',
    '/curso/alunos/image3.jpg',
    '/curso/alunos/image4.jpg',
    '/curso/alunos/image5.jpg',
    '/curso/alunos/image6.jpg',
    '/curso/alunos/image7.jpg',
    '/curso/alunos/image8.jpg',
    '/curso/alunos/image9.jpg',
    '/curso/alunos/image10.jpg',
    '/curso/alunos/image11.jpg',
    '/curso/alunos/image12.jpg',
    '/curso/alunos/image13.jpg',
    '/curso/alunos/image14.jpg',
    '/curso/alunos/image15.jpg',
    '/curso/alunos/image16.jpg',
    '/curso/alunos/image17.jpg',   
  ];

  const statistics = [
    { label: 'Alunos Formados', value: '500+' },
    { label: 'Satisfação dos Alunos', value: '98%' },
    { label: 'Aumento Médio na Renda', value: '40%' },
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleManualChange = (direction) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (direction === 'next') {
      nextImage();
    } else {
      prevImage();
    }

    timerRef.current = setInterval(() => {
      nextImage();
    }, 5000);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-100 ">
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-serif text-center mb-12"
        style={{ color: colors.secondary }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Resultados dos Nossos Alunos
      </motion.h2>

      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="relative flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              className="w-full h-[600px] flex justify-center items-center overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={images[currentImage]}
                alt={`Trabalho de aluno ${currentImage + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-lg transform scale-75 sm:scale-75 md:scale-90 lg:scale-100 xl:scale-100 2xl:scale-100"
              />
            </motion.div>
          </AnimatePresence>
          
          <button
            onClick={() => handleManualChange('prev')}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10"
          >
            <ChevronLeft size={24} color={colors.secondary} />
          </button>
          <button
            onClick={() => handleManualChange('next')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10"
          >
            <ChevronRight size={24} color={colors.secondary} />
          </button>
        </div>
        <p className="text-center mt-4 text-sm" style={{ color: colors.text }}>
          Trabalhos realizados por nossos alunos após o curso
        </p>
      </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <h3 className="text-4xl font-bold mb-2" style={{ color: colors.secondary }}>
                {stat.value}
              </h3>
              <p style={{ color: colors.text }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-lg mb-8" style={{ color: colors.text }}>
            Nossos alunos têm alcançado resultados impressionantes após concluírem o curso.
            Desde o aprimoramento de suas técnicas até o aumento significativo em seus rendimentos,
            estamos orgulhosos de fazer parte de suas jornadas de sucesso.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: buttonColors.hover }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-md text-white text-lg shadow-lg transition-colors duration-300"
            style={{
              backgroundColor: buttonColors.color,
              color: buttonColors.text,
            }}
          >
            Comece Sua Jornada de Sucesso
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;