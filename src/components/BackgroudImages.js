import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundImages = ({ images, sectionHeights }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      let totalHeight = 0;
      for (let i = 0; i < sectionHeights.length; i++) {
        totalHeight += sectionHeights[i];
        if (window.scrollY < totalHeight) {
          setCurrentImageIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionHeights]);

  const opacity = useTransform(
    scrollY,
    [0, sectionHeights[0]],
    [1, 0.3]
  );

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity,
      }}
    >
      {images.map((src, index) => (
        <motion.img
          key={src}
          src={src}
          alt={`Background ${index + 1}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: currentImageIndex === index ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        />
      ))}
    </motion.div>
  );
};

export default BackgroundImages;