import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text3D, Center, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const colors = {
  gold: '#D4AF37',
  cream: '#FFFDD0',
  charcoal: '#36454F',
  pearl: '#FDEEF4',
  background: '#000000',
};

const Particles = ({ count = 5000 }) => {
  const mesh = useRef();
  const light = useRef();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color = new THREE.Color();
    const n = 100, n2 = n / 2;
    for (let i = 0; i < positions.length; i += 3) {
      const x = Math.random() * n - n2;
      const y = Math.random() * n - n2;
      const z = Math.random() * n - n2;
      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;
      const vx = (x / n) + 0.5;
      const vy = (y / n) + 0.5;
      color.setRGB(vx, vy, (Math.random() * 0.5) + 0.5);
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geometry;
  }, [count]);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
      <instancedMesh ref={mesh} args={[null, null, count]} geometry={particlesGeometry}>
        <pointsMaterial size={0.1} vertexColors />
      </instancedMesh>
    </>
  );
};

const AnimatedText = ({ text, position, fontSize, color }) => {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current && visible) {
      meshRef.current.position.y = position[1] + Math.sin(clock.elapsedTime * 2) * 0.1;
      meshRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.5) * 0.1;
    }
  });

  if (!visible) return null;

  return (
    <Text3D
      ref={meshRef}
      font="/fonts/helvetiker_regular.typeface.json"
      size={fontSize}
      height={0.2}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={5}
      position={position}
    >
      {text}
      <meshPhongMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </Text3D>
  );
};

const SpectacularOpeningEffect = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 9999 }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <color attach="background" args={[colors.background]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Particles />
        <Center>
          <AnimatedText text="THALITA CRISTINA" position={[0, 1, 0]} fontSize={0.5} color={colors.gold} />
          <AnimatedText text="STUDIO & ACADEMY" position={[0, -1, 0]} fontSize={0.3} color={colors.pearl} />
        </Center>
      </Canvas>
    </div>
  );
};

export default SpectacularOpeningEffect;