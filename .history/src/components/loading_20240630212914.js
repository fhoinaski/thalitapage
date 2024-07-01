import React, { useCallback, useEffect, useState } from 'react';
import { Stage, Container, Text, useTick, useApp } from '@inlet/react-pixi';
import * as PIXI from 'pixi.js';

const colors = {
  primary: 0xf8dbc5,
  secondary: 0xCE9D81,
  terciary: 0x333333,
  'text-white': 0xfff8f2,
  text: 0xC09C81,
  background: 0xFFF8F2,
};

const Particles = () => {
  const app = useApp();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 200; i++) {
      newParticles.push({
        x: Math.random() * app.screen.width,
        y: Math.random() * app.screen.height,
        scale: 0.1 + Math.random() * 0.3,
        speed: 0.1 + Math.random() * 0.5,
        direction: Math.random() * Math.PI * 2,
      });
    }
    setParticles(newParticles);
  }, [app.screen.width, app.screen.height]);

  useTick((delta) => {
    setParticles(prevParticles =>
      prevParticles.map(particle => ({
        ...particle,
        x: (particle.x + Math.cos(particle.direction) * particle.speed * delta) % app.screen.width,
        y: (particle.y + Math.sin(particle.direction) * particle.speed * delta) % app.screen.height,
      }))
    );
  });

  return (
    <>
      {particles.map((particle, index) => (
        <PIXI.Sprite
          key={index}
          texture={PIXI.Texture.WHITE}
          x={particle.x}
          y={particle.y}
          scale={particle.scale}
          tint={colors.secondary}
          alpha={0.6}
        />
      ))}
    </>
  );
};

const AnimatedText = ({ text, x, y, fontSize, fontWeight, color, delay }) => {
  const [alpha, setAlpha] = useState(0);
  const [scale, setScale] = useState(0.5);

  useTick((delta) => {
    if (delay > 0) {
      delay -= delta;
    } else {
      setAlpha(prev => Math.min(prev + 0.05 * delta, 1));
      setScale(prev => prev + (1 - prev) * 0.1 * delta);
    }
  });

  return (
    <Text
      text={text}
      x={x}
      y={y}
      style={{
        fontSize,
        fontWeight,
        fill: color,
        align: 'center',
      }}
      anchor={0.5}
      alpha={alpha}
      scale={scale}
    />
  );
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

  const onContextCreate = useCallback((app) => {
    app.renderer.backgroundColor = colors.background;
  }, []);

  if (!visible) return null;

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      options={{ backgroundColor: colors.background }}
      onMount={onContextCreate}
    >
      <Container>
        <Particles />
        <AnimatedText
          text="THALITA CRISTINA"
          x={window.innerWidth / 2}
          y={window.innerHeight / 2 - 50}
          fontSize={48}
          fontWeight="bold"
          color={colors.terciary}
          delay={30}
        />
        <AnimatedText
          text="STUDIO & ACADEMY"
          x={window.innerWidth / 2}
          y={window.innerHeight / 2 + 50}
          fontSize={32}
          fontWeight="normal"
          color={colors.text}
          delay={60}
        />
      </Container>
    </Stage>
  );
};

export default SpectacularOpeningEffect;