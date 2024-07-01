import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colors = {
  gold: '#D4AF37',
  cream: '#FFFDD0',
  charcoal: '#36454F',
  pearl: '#FDEEF4',
  background: '#000000',
};

const LuxuriousOpeningEffect = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 4.5 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: colors.background,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            overflow: 'hidden',
          }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              duration: 1.5,
            }}
            style={{
              position: 'absolute',
              width: '150%',
              height: '150%',
              background: `radial-gradient(circle, ${colors.gold} 10%, transparent 60%)`,
              opacity: 0.2,
            }}
          />
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h1
              style={{
                color: colors.gold,
                fontSize: '3.5rem',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '1rem',
                textShadow: `0 0 10px ${colors.gold}, 0 0 20px ${colors.gold}, 0 0 30px ${colors.gold}`,
                fontFamily: 'Cinzel, serif',
              }}
            >
              THALITA CRISTINA
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <h2
              style={{
                color: colors.pearl,
                fontSize: '2.2rem',
                fontWeight: 'normal',
                textAlign: 'center',
                letterSpacing: '0.2em',
                fontFamily: 'Cormorant Garamond, serif',
              }}
            >
              STUDIO & ACADEMY
            </h2>
          </motion.div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 1.5, delay: 2.5, times: [0, 0.7, 1] }}
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: `2px solid ${colors.gold}`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '2rem',
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: colors.gold,
                opacity: 0.7,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LuxuriousOpeningEffect;