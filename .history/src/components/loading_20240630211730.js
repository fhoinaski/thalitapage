import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";

const LuxuryLoader = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  useEffect(() => {
    gsap.fromTo(logoRef.current, 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "elastic.out(1, 0.3)" }
    );

    gsap.fromTo(textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 2, ease: "power2.out" }
    );

    const timer = setTimeout(() => {
      gsap.to([logoRef.current, textRef.current], {
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        onComplete: () => {
          // Here you would transition to your main content
        }
      });
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          particles: {
            number: { value: 80 },
            color: { value: "#d4af37" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outModes: "out"
            }
          }
        }}
      />
      <div ref={logoRef} className="mb-8">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#d4af37" strokeWidth="5"/>
          <text x="50" y="65" fontSize="40" fill="#d4af37" textAnchor="middle" fontFamily="serif">LUX</text>
        </svg>
      </div>
      <h1 ref={textRef} className="text-4xl font-serif text-gold text-center px-4" style={{color: '#d4af37'}}>
        Bem-vindo ao seu momento de luxo
      </h1>
    </div>
  );
};

export default LuxuryLoader;