import React from 'react';
import { motion } from 'framer-motion';
import { Star, Calendar, Clock, CreditCard, Book, Coffee, Users, CheckCircle } from 'lucide-react';

const CourseSubpage = () => {
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
    <div className="bg-[#FFF8F2] min-h-screen">
      <motion.div 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-8" style={{ color: colors.secondary }}>
          Curso Iniciante de Extensão de Cílios
        </h1>
        <p className="text-xl text-center mb-12" style={{ color: colors.text }}>
          Por Thalita Cristina - Uma nova história que inicia hoje!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4" style={{ color: colors.secondary }}>O que o curso oferece</h2>
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
            <h2 className="text-2xl font-semibold mb-4" style={{ color: colors.secondary }}>Conteúdo Programático</h2>
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

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4" style={{ color: colors.secondary }}>Programação do Curso</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.accent }}>1º Dia</h3>
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
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: colors.accent }}>2º Dia</h3>
              <ul className="space-y-2">
                <li>Coffee Break</li>
                <li>Esclarecimento de dúvidas</li>
                <li>Aula prática em modelo</li>
                <li>Foto do trabalho feito pela aluna</li>
                <li>Entrega de certificado</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4" style={{ color: colors.secondary }}>Investimento</h2>
          <p className="text-lg mb-4" style={{ color: colors.text }}>
            Com Material de qualidade incluso: <br />
            <span className="font-bold">12x de R$134,96 ou R$1400,00 à vista</span>
          </p>
          <p className="text-lg mb-4" style={{ color: colors.text }}>
            Sem material: <br />
            <span className="font-bold">12x de R$107,70 ou R$1100,00 à vista</span>
          </p>
          <div className="mt-8">
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
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CourseSubpage;