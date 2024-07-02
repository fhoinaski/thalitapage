import React, { useState, useEffect } from 'react';

const colors = {
  primary: '#f8dbc5',
  secondary: '#ceac94',
  terciary: '#333333',
  'text-white': '#fff8f2',
  text: '#C09C81',
  background: '#FFF8F2',
};

const loaderStyles = `
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @keyframes scaleUp {
    0% { transform: scale(0.8); }
    100% { transform: scale(1); }
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.background};
    z-index: 9999;
  }

  .loader-content {
    text-align: center;
    animation: fadeIn 1s ease-out;
  }

  .loader-spinner {
    width: 60px;
    height: 60px;
    border: 5px solid ${colors.primary};
    border-top: 5px solid ${colors.secondary};
    border-radius: 50%;
    animation: rotate 1s linear infinite;
    margin: 0 auto 20px;
  }

  .loader-text {
    font-size: 24px;
    font-weight: bold;
    color: ${colors.terciary};
    animation: scaleUp 0.5s ease-out;
  }

  .loader-subtext {
    font-size: 18px;
    color: ${colors.text};
    margin-top: 10px;
    animation: scaleUp 0.5s ease-out 0.2s both;
  }
`;

const ElegantLoader = ({ onComplete }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkLastShown = () => {
      const lastShown = localStorage.getItem('loaderLastShown');
      const currentTime = new Date().getTime();
      
      if (!lastShown || currentTime - parseInt(lastShown, 10) > 12 * 60 * 60 * 1000) {
        localStorage.setItem('loaderLastShown', currentTime.toString());
        setVisible(true);
        const timer = setTimeout(() => {
          setVisible(false);
          if (onComplete) onComplete();
        }, 3000); // Loader durará 3 segundos
        return () => clearTimeout(timer);
      } else {
        if (onComplete) onComplete();
      }
    };

    checkLastShown();
  }, [onComplete]);

  if (!visible) return null;

  return (
    <>
      <style>{loaderStyles}</style>
      <div className="loader-container">
        <div className="loader-content">
          <div className="loader-spinner"></div>
          <div className="loader-text">THALITA CRISTINA</div>
          <div className="loader-subtext">STUDIO & ACADEMY</div>
        </div>
      </div>
    </>
  );
};

export default ElegantLoader;