"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Calendar, Book, Coffee, Users, CheckCircle, Menu, X } from 'lucide-react';

const colors = {
  primary: "#f8dbc5",
  secondary: "#CE9D81",
  terciary: "#333333",
  "text-white": "#fff8f2",
  text: "#C09C81",
  background: "#FFF8F2",
  accent: "#CD853F",
};

const buttonColors = {
  color: "#CE9D81",
  hover: "#c09c81",
  text: "#fff8f2",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = ["Sobre o Curso", "Conteúdo", "Investimento", "Inscrição"];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-opacity-90 bg-black opacity-75 fixed w-full z-50 shadow-md"
    >
      <div className="mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1
            className="text-xl md:text-2xl font-serif font-bold"
            style={{ color: colors["text-white"] }}
          >
            Curso de Extensão de Cílios
          </h1>
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-lg uppercase tracking-wider"
                style={{ color: colors["text-white"] }}
                whileHover={{ color: colors.accent }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase().replace(/\s+/g, '-'));
                }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} color={colors["text-white"]} /> : <Menu size={24} color={colors["text-white"]} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black bg-opacity-90 p-4"
        >
          {menuItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="block py-2 text-lg uppercase tracking-wider"
              style={{ color: colors["text-white"] }}
              whileHover={{ color: colors.accent }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.toLowerCase().replace(/\s+/g, '-'));
              }}
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>
      )}
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
      className="relative z-10 text-center p-8 bg-white bg-opacity-10 rounded-lg shadow-xl"
    >
      <h2
        className="text-4xl md:text-5xl font-serif mb-4"
        style={{ color: colors.secondary }}
      >
        Curso Iniciante de Extensão de Cílios
      </h2>
      <p className="text-xl md:text-2xl mb-8" style={{ color: colors.text }}>
        Por Thalita Cristina - Uma nova história que inicia hoje!
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
          <ul className="space-y-2">
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
          <ul className="space-y-2">
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
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <CourseDetails />
      <CourseSchedule />
      <Investment />
      <Footer />
    </div>
  );
};

export default CoursePage;