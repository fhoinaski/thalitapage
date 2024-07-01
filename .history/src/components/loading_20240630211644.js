import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ThreeJSLoader = () => {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

    const spheres = [];
    const numSpheres = 5;
    const radius = 2;

    for (let i = 0; i < numSpheres; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      const angle = (i / numSpheres) * Math.PI * 2;
      sphere.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        0
      );
      scene.add(sphere);
      spheres.push(sphere);
    }

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, 10);
    scene.add(light);

    let frame = 0;
    const animate = () => {
      frame += 0.02;
      spheres.forEach((sphere, index) => {
        const angle = frame + (index / numSpheres) * Math.PI * 2;
        sphere.position.x = Math.cos(angle) * radius;
        sphere.position.y = Math.sin(angle) * radius;
        sphere.scale.setScalar(0.5 + Math.sin(frame * 2 + index) * 0.2);
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    const timer = setTimeout(() => setLoading(false), 4000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      // Verifica se mountRef.current existe e contém renderer.domElement como filho antes de tentar remover
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
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
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div ref={mountRef} className="absolute inset-0" />
      {!loading && (
        <h1 className="text-4xl font-bold text-white z-10 text-center px-4">
          Bem-vindo ao seu melhor momento
        </h1>
      )}
    </div>
  );
};

export default ThreeJSLoader;