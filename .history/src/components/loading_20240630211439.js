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