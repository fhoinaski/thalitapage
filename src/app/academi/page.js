"use client";
import React, { useState,useEffect } from 'react';
import { Star, Calendar, Book, Coffee, Users, CheckCircle, Menu, X } from 'lucide-react';
import BackgroundImages from '@/components/BackgroudImages';
import { motion, AnimatePresence, useAnimate, stagger } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
import StudioGallery from '@/components/StudioGallery';
import FAQ from '@/components/faqcurso';

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
const buttonVariants = {
  hover: { scale: 1.05, boxShadow: "0px 0px 8px rgb(205,133,63)" },
  tap: { scale: 0.95 },
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
  const menuItems = ["Sobre o Curso", "Conteúdo", "Investimento", "Inscrição"];

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
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
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className={`text-md md:text-md lg:text-sm uppercase tracking-wider transition-colors duration-300 ${
              isMobile ? "block font-bold text-xl p-4" : ""
            }`}
            style={{ color: isMobile ? colors.terciary : colors["text-white"] }}
            whileHover={{ color: colors.accent }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.toLowerCase().replace(/\s+/g, '-'));
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
        href="https://www.instagram.com"
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
        href="https://wa.me/yourphonenumber"
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
      <div className="mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href='/'>
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
    style={{ backgroundImage: "url('/background-lashes.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative z-10 text-center p-8 bg-white bg-opacity-10 rounded-lg shadow-xl backdrop-filter backdrop-blur-sm"
      >
        <h2 
        className="text-5xl md:text-6xl font-serif mb-4 text-white"
        style={{ color: colors.secondary }}
        >
          Mentoria Avançada em Extensão de Cílios
        </h2>
        <p className="text-2xl md:text-3xl mb-8 text-white"
        style={{ color: colors.text }}
        >
          Eleve sua arte a novos patamares com Thalita Cristina
        </p>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="px-8 py-3 rounded-lg text-white text-lg shadow-lg transition-all duration-300 bg-gradient-to-r from-[#ceac94] to-[#c09c81]"
        >
          Transforme sua Carreira Agora
        </motion.button>
      </motion.div>
  </motion.section>
);

const CourseDetails = () => {
  const courseDetails = [
    { icon: <Book size={24} />, text: "Aula teórica e prática" },
    { icon: <Star size={24} />, text: "Certificado" },
    { icon: <Book size={24} />, text: "Apostila" },
    { icon: <Coffee size={24} />, text: "Coffee Break" },
    { icon: <Users size={24} />, text: "Grupo de suporte pós-curso" },
    { icon: <Calendar size={24} />, text: "Curso de 2 dias" },
  ];

  const courseContent = [
    "Clássico fio a fio", "Fios tecnológicos", "Adesivos", "Acoplagem",
    "Direcionamento", "Top line", "Camadas", "Espessuras", "Curvaturas",
    "Mapping", "Formato de olhos", "Isolamento", "Manutenção", "Retenção",
    "Remoção química", "Materiais", "Fases do fio", "Saúde ocular",
    "Biossegurança", "Doenças oculares", "Alergias", "Cálculo de ganhos vs gastos"
  ];

  return (
    <motion.section
      id="sobre-o-curso"
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
          Sobre o Curso
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.secondary }}>O que o curso oferece</h3>
            <ul className="space-y-4">
              {courseDetails.map((detail, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2" style={{ color: colors.accent }}>{detail.icon}</span>
                  <span style={{ color: colors.text }}>{detail.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.secondary }}>Conteúdo Programático</h3>
            <ul className="grid grid-cols-2 gap-2">
              {courseContent.map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle size={16} className="mr-2" style={{ color: colors.accent }} />
                  <span style={{ color: colors.text }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const CourseSchedule = () => (
  <motion.section
    id="conteúdo"
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
        Programação do Curso
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4" style={{ color: colors.accent }}>1º Dia</h3>
          <ul className="space-y-2"
          style={{ color: colors.text }}
          >
            <li>Aula teórica (manhã)</li>
            <li>Pausa para almoço</li>
            <li>Continuação da aula teórica e dúvidas</li>
            <li>Aula prática: treino em esponja e linha</li>
            <li>Treinamento de isolamento e acoplagem na Boneca</li>
            <li>Treinamento de manutenção com remoção mecânica</li>
            <li>Treinamento com remoção química</li>
            <li>Coffee Break</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4" style={{ color: colors.accent }}>2º Dia</h3>
          <ul className="space-y-2"
          style={{ color: colors.text }}
          >
            <li>Coffee Break</li>
            <li>Esclarecimento de dúvidas</li>
            <li>Aula prática em modelo</li>
            <li>Foto do trabalho feito pela aluna</li>
            <li>Entrega de certificado</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

const Investment = () => (
  <motion.section
    id="investimento"
    
    className="py-20"
    style={{ backgroundColor: colors.background }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto px-4">
      <h2
      id="inscrição"
        className="text-3xl md:text-4xl font-serif text-center mb-12"
        style={{ color: colors.secondary }}
      >
        Investimento
      </h2>
      <motion.div 
        className="bg-white p-6 rounded-lg shadow-lg text-center max-w-2xl mx-auto"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg mb-4" style={{ color: colors.text }}>
          Com Material de qualidade incluso: <br />
          <span className="font-bold">12x de R$134,96 ou R$1400,00 à vista</span>
        </p>
        <p className="text-lg mb-8" style={{ color: colors.text }}>
          Sem material: <br />
          <span className="font-bold">12x de R$107,70 ou R$1100,00 à vista</span>
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
          Inscreva-se Agora
        </motion.button>
      </motion.div>
    </div>
  </motion.section>
);

const Footer = () => (
  <footer
    className="py-8 text-center"
    style={{ backgroundColor: colors.secondary, color: colors.background }}
  >
    <p>&copy; 2024 Thalita Cristina Studio & Academy. Todos os direitos reservados.</p>
  </footer>
);

const CoursePage = () => {
  const images = [
    '/curso/image1.jpg',
    '/curso/image2.jpg',
    '/curso/image3.jpg',
    '/curso/image4.jpg',

  ];

  const sectionHeights = [800, 600, 700, 500, 600]; 
  return (
    <div className="font-sans">
      <BackgroundImages images={images} sectionHeights={sectionHeights}/>
      <Header />
      <Hero />
      <CourseDetails />
      <CourseSchedule />
      <StudioGallery />
      <Testimonials />
      <Investment />
      <FAQ />
      <Footer />
    </div>
  );
};

export default CoursePage;