"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useAnimate,
  stagger,
  useInView,
} from "framer-motion";
import {
  Star,
  MapPin,
  Info,
  Phone,
  Instagram,
  Facebook,
  Menu,
  X,
} from "lucide-react";
import ImpressiveLoader from "@/components/loading";
import BackgroundVideo from "@/components/BackgroundVideo";
import AddressMap from "@/components/AddresMap";

import Link from 'next/link'; 
import FAQ from "@/components/questions";
import VideoLoader from "@/components/VideoLoader";
import Contact from "@/components/contact";


const colors = {
  primary: "#f8dbc5",
  secondary: "#ceac94",
  terciary: "#333333",
  "text-white": "#fff8f2",
  text: "#C09C81",
  background: "#FFF8F2",
  accent: "#CD853F",
  "icon-whatsapp": "#25d366",
};

const buttonColors = {
  color: "#ceac94",
  hover: "#c09c81",
  text: "#fff8f2",
};

const Path = ({ d, variants, isOpen, ...rest }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={isOpen ? "#FFFFFF" : "#CE9D81"}
    strokeLinecap="round"
    initial="closed"
    animate={isOpen ? "open" : "closed"}
    d={d}
    variants={variants}
    {...rest}
  />
);

const MenuToggle = ({ toggle, isOpen }) => (
  <button
    onClick={toggle}
    className={`w-12 h-12 rounded-full p-2 focus:outline-none z-50 transition-all duration-300 ${
      isOpen ? "bg-transparent" : "bg-transparent"
    }`}
  >
    <svg width="23" height="18" viewBox="0 0 23 18">
      <Path
        isOpen={isOpen}
        d="M 2 2.5 L 20 2.5"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        isOpen={isOpen}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
      />
      <Path
        isOpen={isOpen}
        d="M 2 16.346 L 20 16.346"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const menuItems = ["Sobre", "Serviços", "Galeria", "Contato", "FAQ", "Academy"];

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'academy') {
      window.location.href = '/academi';
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav.mobile-nav",
            { transform: "translateX(0%)" },
            { ease: [0.1, 0.65, 0.53, 1], duration: 0.8 },
          ],
          [
            "nav.mobile-nav li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "nav.mobile-nav li",
            { transform: "scale(0.8)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.08, { from: "last" }), at: "<" },
          ],
          ["nav.mobile-nav", { transform: "translateX(100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        ".top-path",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      [".middle-path", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        ".bottom-path",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen, animate]);

 
  const renderMenuItems = (isMobile = false) => (
    <ul className={`${isMobile ? "flex flex-col gap-2.5 p-4" : "flex space-x-6"}`}>
      {menuItems.map((item) => (
        <li key={item} className={`${isMobile ? "mb-4" : ""}`}>
          <motion.a
            href={item.toLowerCase() === 'academi' ? '/academi' : `#${item.toLowerCase()}`}
            className={`text-md md:text-md lg:text-sm uppercase tracking-wider transition-colors duration-300 ${
              isMobile ? "block font-bold text-xl p-4" : ""
            }`}
            style={{ color: isMobile ? colors.terciary : colors["text-white"] }}
            whileHover={{ color: colors.accent }}
            onClick={(e) => {
              e.preventDefault();
              if (item.toLowerCase() === 'academi') {
                window.location.href = '/academi';
              } else {
                scrollToSection(item.toLowerCase());
              }
            }}
          >
            {item}
          </motion.a>
        </li>
      ))}
    </ul>
  );

  const renderSocialIcons = () => (
    <div className="flex space-x-4 px-3 py-2 rounded-lg">
      <motion.a
        href="https://www.instagram.com/thalitacilioscursos?igsh=MTRwY3Nyc3RleDVjdQ=="
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Instagram size={20} color={colors["secondary"]} />
      </motion.a>
      <motion.a
        href="https://www.facebook.com/thalita.silva.980"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Facebook size={20} color={colors["secondary"]} />
      </motion.a>
      <motion.a
        href="https://wa.me/+554896606492"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={colors["icon-whatsapp"]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </motion.a>
    </div>
  );

  return (
    <motion.header
    ref={scope}
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="bg-opacity-90 bg-black opacity-75 fixed w-full z-50 shadow-md"
  >
      <div className="  mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
          href='/'>
            <h1
              className="text-xl md:text-lg lg:text-xl font-serif font-bold"
              style={{ color: colors["text-white"] }}
            >
              THALITA CRISTINA <br />
              <span
                className="text-sm"
                style={{
                  color: colors.secondary,
                  marginTop: "-4px",
                  display: "block",
                  lineHeight: "normal",
                }}
              >
                STUDIO & ACADEMY
              </span>
            </h1>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {renderMenuItems()}
            {renderSocialIcons()}
          </nav>
          <div className="md:hidden">
            <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={toggleMenu}
            />
            <motion.nav
              className="mobile-nav fixed top-0 right-0 bottom-0 w-64 bg-[#f8dbc5] pt-24 z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="absolute top-4 right-4">
                <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
              </div>
              {renderMenuItems(true)}
              <div className="mt-8 flex justify-center">
                {renderSocialIcons()}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const Hero = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="relative z-10 text-center p-8 bg-white bg-opacity-10 rounded-lg shadow-xl"
    >
      <h2
        className="text-4xl md:text-5xl font-serif mb-4"
        style={{ color: colors.secondary }}
      >
        Beleza Além do Olhar
      </h2>
      <p className="text-xl md:text-2xl mb-8" style={{ color: colors.text }}>
        Descubra a arte da transformação com Thalita Cristina
      </p>
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: buttonColors.hover }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3 rounded-md text-white text-lg shadow-lg transition-colors duration-300"
        style={{
          backgroundColor: buttonColors.color,
          color: buttonColors.text,
        }}
      >
        Agende sua Transformação
      </motion.button>
    </motion.div>
  </motion.section>
);

const About = () => (
  <motion.section
    id="sobre"
    className="py-20"
    style={{ backgroundColor: colors.background }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2
          className="text-3xl md:text-4xl font-serif mb-6"
          style={{ color: colors.secondary }}
        >
          Sobre Thalita Cristina
        </h2>
        <p className="text-lg mb-8" style={{ color: colors.text }}>
          Com anos de experiência e uma paixão inabalável pela beleza, Thalita
          Cristina se destaca como uma artista do olhar. Sua técnica refinada e
          atenção aos detalhes transformam cada cliente em uma obra de arte
          viva.
        </p>
        <motion.img
          src="/talita.jpeg"
          alt="Thalita Cristina"
          className="rounded-full w-48 h-48 mx-auto mb-8 shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  </motion.section>
);

const services = [
  {
    name: "Volume Brasileiro",
    description: "Cílios volumosos e naturais para um olhar deslumbrante.",
    details:
      "Técnica que proporciona volume e comprimento aos cílios naturais. Manutenção recomendada a cada 15 ou 21 dias.",
  },
  {
    name: "Volume Diamante",
    description: "Intensidade e brilho para um olhar cativante.",
    details:
      "Técnica avançada que cria um efeito de cílios ultra volumosos e brilhantes. Manutenção recomendada a cada 15 ou 21 dias.",
  },
  {
    name: "Volume Brown",
    description: "Extensões de cílios em tom marrom para um efeito natural.",
    details:
      "Perfeito para quem busca um look mais suave e natural. Utiliza fios marrom. Manutenção recomendada a cada 15 ou 21 dias.",
  },
  {
    name: "Efeito Sirena",
    description: "Extensão no canto externo para um olhar felino e sedutor.",
    details:
      "Técnica que alonga os cílios no canto externo dos olhos, criando um efeito de olhar levantado. Manutenção recomendada até 21 dias.",
  },
  {
    name: "Efeito Molhado",
    description: "Aparência brilhante e sedutora para os cílios.",
    details:
      "Cria um visual de cílios sempre brilhantes e definidos, como se estivessem molhados. Manutenção recomendada a cada 15 ou 21 dias.",
  },
  {
    name: "Fox Eyes",
    description: "O queridinho das celebridades para um olhar alongado.",
    details:
      "Técnica que eleva o olhar, criando um efeito de olhos de raposa. Muito popular entre celebridades. Manutenção recomendada a cada 15 ou 21 dias.",
  },
  {
    name: "Design de Sobrancelhas com Henna",
    description:
      "Design personalizado com aplicação de henna para um resultado duradouro.",
    details:
      "Inclui higienização, esfoliação, tonificação, design personalizado, aplicação de henna, finalização com gel calmante e pasta mágica.",
  },
  {
    name: "Design de Sobrancelhas",
    description: "Design personalizado para realçar o seu olhar.",
    details:
      "Inclui higienização, esfoliação, tonificação, design personalizado, finalização com gel calmante e pasta mágica.",
  },
];

const ServiceCard = ({ service, onInfoClick }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex justify-between items-start">
        <h3
          className="text-xl font-semibold mb-2"
          style={{ color: colors.secondary }}
        >
          {service.name}
        </h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onInfoClick(service)}
        >
          <Info size={20} color={colors.accent} />
        </motion.button>
      </div>
      <p className="text-sm mb-4" style={{ color: colors.text }}>
        {service.description}
      </p>
    </motion.div>
  );
};

const Modal = ({ isOpen, onClose, service }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white p-6 rounded-lg max-w-md w-full mx-4"
        >
          <div className="flex justify-between items-start mb-4">
            <h3
              className="text-xl font-semibold"
              style={{ color: colors.secondary }}
            >
              {service.name}
            </h3>
            <button onClick={onClose}>
              <X size={24} color={colors.accent} />
            </button>
          </div>
          <p className="text-sm mb-6" style={{ color: colors.text }}>
            {service.details}
          </p>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleInfoClick = (service) => {
    setSelectedService(service);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  return (
    <motion.section
      id="serviços"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-serif text-center mb-12"
          style={{ color: colors.secondary }}
        >
          Nossos Serviços de Luxo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onInfoClick={handleInfoClick}
            />
          ))}
        </div>
      </div>
      <Modal
        isOpen={!!selectedService}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </motion.section>
  );
};

const GalleryImage = ({ src, index }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative w-full h-64"
    >
      <Image
        src={src}
        alt={`Transformation ${index + 1}`}
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      />
    </motion.div>
  );
};

const Gallery = () => {
  const imagePaths = [
    "/clientes/imagem1.png",
    "/clientes/imagem2.png",
    "/clientes/imagem3.png",
    "/clientes/imagem4.png",
    "/clientes/imagem5.png",
    "/clientes/imagem6.png",
    "/clientes/imagem7.png",
    "/clientes/imagem8.png",
  ];

  return (
    <motion.section
      id="galeria"
      className="py-20"
      style={{ backgroundColor: colors.background }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-serif text-center mb-12"
          style={{ color: colors.secondary }}
        >
          Galeria de Transformações
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imagePaths.map((src, index) => (
            <GalleryImage key={index} src={src} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// 

const Footer = () => (
  <footer
    className="py-8 text-center"
    style={{ backgroundColor: colors.secondary, color: colors.background }}
  >
    <p>
      &copy; 2024 Thalita Cristina Studio & Academy. Todos os direitos
      reservados.
    </p>
  </footer>
);


const App = () => {


  return (
    <VideoLoader videoSrc="/backgroud.mp4">
    <Header />
    <Hero />
    <About />
    <Services />
    <Gallery />
    <Contact />
    <AddressMap />
    <FAQ />
    <Footer />
  </VideoLoader>
  );
};
export default App;
