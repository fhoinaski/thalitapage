import React from 'react';
import { motion } from 'framer-motion';

const colors = {
  primary: "#f8dbc5",
  secondary: "#ceac94",
  terciary: "#333333",
  "text-white": "#fff8f2",
  text: "#C09C81",
  background: "#FFF8F2",
  accent: "#CD853F",
};

const StudioGallery = () => {
  const media = [
    { type: 'video', src: '/studio/video1.mp4', alt: 'Vídeo do studio', className: 'col-span-2 row-span-2' },
    { type: 'image', src: '/studio/image2.jpg', alt: 'Ambiente de mentoria 1', className: 'col-span-1 row-span-1' },
    { type: 'image', src: '/studio/image3.jpg', alt: 'Ambiente de atendimento 2', className: 'col-span-1 row-span-2' },
    { type: 'image', src: '/studio/image5.jpg', alt: 'Ambiente de mentoria 2', className: 'col-span-1 row-span-1' },
    { type: 'image', src: '/studio/image7.jpg', alt: 'Ambiente de atendimento 3', className: 'col-span-2 row-span-1' },
    { type: 'image', src: '/studio/image8.jpg', alt: 'Ambiente de mentoria 3', className: 'col-span-1 row-span-2' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-10"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container w-full mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-serif text-center mb-12"
          style={{ color: colors.secondary }}
        >
          Conheça Nosso Studio
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 scale-">
          {media.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg shadow-lg ${item.className}`}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm md:text-lg font-semibold text-center px-2">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StudioGallery;