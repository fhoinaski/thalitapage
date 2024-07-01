import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ImpressiveLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    initial: { background: '#000000' },
    animate: { 
      background: ['#000000', '#3498db', '#e74c3c', '#2ecc71', '#ffffff'],
      transition: { duration: 4, ease: 'easeInOut' }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 3.5,
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const circleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: [0, 1.2, 1],
      opacity: [0, 1, 0],
      transition: { 
        duration: 3,
        times: [0, 0.7, 1],
        ease: 'easeInOut',
        repeat: Infinity
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {loading ? (
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="absolute rounded-full border-4 border-white"
              style={{
                width: `${(index + 1) * 100}px`,
                height: `${(index + 1) * 100}px`,
              }}
              variants={circleVariants}
              initial="initial"
              animate="animate"
              custom={index * 0.2}
            />
          ))}
        </motion.div>
      ) : (
        <motion.h1
          className="text-4xl font-bold text-gray-800"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          Bem-vindo ao seu melhor momento
        </motion.h1>
      )}
    </motion.div>
  );
};

export default ImpressiveLoader;