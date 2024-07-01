import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const colors = {
  primary: '#f8dbc5',
  secondary: '#CE9D81',
  terciary: '#333333',
  'text-white': '#fff8f2',
  text: '#C09C81',
  background: '#FFF8F2',
};

const LuxuryLoader = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const subTextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(containerRef.current, 
      { backgroundColor: colors.background },
      { backgroundColor: colors.primary, duration: 2, ease: "power2.inOut" }
    );

    tl.fromTo(logoRef.current, 
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.3)" },
      "-=1.5"
    );

    tl.fromTo(textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    );

    tl.fromTo(subTextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.75"
    );

    // Animate out
    tl.to([logoRef.current, textRef.current, subTextRef.current], {
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 3,
    });

    return () => tl.kill();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: colors.background }}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZjhkYmM1Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiNDRTlEODEiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      <div ref={logoRef} className="mb-8 relative">
        <div className="w-32 h-32 rounded-full border-4 flex items-center justify-center" style={{ borderColor: colors.secondary }}>
          <span className="text-5xl font-serif" style={{ color: colors.text }}>TC</span>
        </div>
        <div className="absolute -inset-2 opacity-25 blur-md rounded-full" style={{ backgroundColor: colors.secondary }}></div>
      </div>
      <h1 ref={textRef} className="text-4xl font-serif text-center px-4 relative mb-2" style={{ color: colors.text }}>
        THALITA CRISTINA
        <div className="absolute inset-0 opacity-25 blur-sm -z-10" style={{ backgroundColor: colors.secondary }}></div>
      </h1>
      <h2 ref={subTextRef} className="text-2xl font-serif text-center px-4 relative" style={{ color: colors.terciary }}>
        STUDIO & ACADEMY
        <div className="absolute inset-0 opacity-25 blur-sm -z-10" style={{ backgroundColor: colors.secondary }}></div>
      </h2>
    </div>
  );
};

export default LuxuryLoader;