import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LuxuryLoader = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(containerRef.current, 
      { backgroundColor: '#000000' },
      { backgroundColor: '#1a1a1a', duration: 2, ease: "power2.inOut" }
    );

    tl.fromTo(logoRef.current, 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.3)" },
      "-=1"
    );

    tl.fromTo(textRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    );

    // Animate out
    tl.to([logoRef.current, textRef.current], {
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 3,
    });

    return () => tl.kill();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjIyIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      <div ref={logoRef} className="mb-8 relative">
        <div className="w-32 h-32 rounded-full border-4 border-gold flex items-center justify-center" style={{borderColor: '#d4af37'}}>
          <span className="text-5xl font-serif text-gold" style={{color: '#d4af37'}}>LUX</span>
        </div>
        <div className="absolute -inset-2 bg-gold opacity-25 blur-md rounded-full" style={{backgroundColor: '#d4af37'}}></div>
      </div>
      <h1 ref={textRef} className="text-4xl font-serif text-gold text-center px-4 relative" style={{color: '#d4af37'}}>
        Bem-vindo ao seu momento de luxo
        <div className="absolute inset-0 bg-gold opacity-25 blur-sm -z-10" style={{backgroundColor: '#d4af37'}}></div>
      </h1>
    </div>
  );
};

export default LuxuryLoader;