import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';

const colors = {
  primary: '#f8dbc5',
  secondary: '#CE9D81',
  terciary: '#333333',
  'text-white': '#fff8f2',
  text: '#C09C81',
  background: '#FFF8F2',
};

const Particle = ({ delay }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'scale(0) translate3d(0,0,0)' },
    to: async (next) => {
      await new Promise(resolve => setTimeout(resolve, delay));
      await next({ opacity: 1, transform: 'scale(1) translate3d(0,0,0)' });
      await next({ opacity: 0, transform: 'scale(0) translate3d(0,0,0)' });
    },
    config: { tension: 200, friction: 10 },
    loop: true,
  });

  return (
    <animated.div
      style={{
        ...props,
        position: 'absolute',
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: colors.secondary,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );
};

const AnimatedText = ({ children, delay }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay,
    config: config.molasses,
  });

  return <animated.div style={props}>{children}</animated.div>;
};

const SpectacularOpeningEffect = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onComplete) onComplete();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const fadeOut = useSpring({
    opacity: visible ? 1 : 0,
    config: { duration: 1000 },
  });

  if (!visible) return null;

  return (
    <animated.div style={{
      ...fadeOut,
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
    }}>
      {[...Array(50)].map((_, i) => (
        <Particle key={i} delay={i * 100} />
      ))}
      <AnimatedText delay={1000}>
        <h1 style={{
          color: colors.terciary,
          fontSize: '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '1rem',
        }}>
          THALITA CRISTINA
        </h1>
      </AnimatedText>
      <AnimatedText delay={1500}>
        <h2 style={{
          color: colors.text,
          fontSize: '2rem',
          fontWeight: 'normal',
          textAlign: 'center',
        }}>
          STUDIO & ACADEMY
        </h2>
      </AnimatedText>
    </animated.div>
  );
};

export default SpectacularOpeningEffect;