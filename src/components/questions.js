import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colors = {
  primary: "#f8dbc5",
  secondary: "#CE9D81",
  terciary: "#333333",
  "text-white": "#fff8f2",
  text: "#C09C81",
  background: "#FFF8F2",
  accent: "#CD853F",
  "icon-facebook": "#3b5998",
  "icon-instagram": "#e4405f",
  "icon-whatsapp": "#25d366",
};

const buttonColors = {
  color: "#CE9D81",
  hover: "#c09c81",
  text: "#fff8f2",
};
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className="mb-4 bg-white rounded-lg shadow-md overflow-hidden"
      initial={false}
      animate={{ backgroundColor: isOpen ? colors.primary : 'white' }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        className="w-full px-6 py-4 text-left flex justify-between items-center"
        onClick={toggleOpen}
        style={{ color: colors.secondary }}
        whileHover={{ backgroundColor: colors.primary }}
        transition={{ duration: 0.2 }}
      >
        <span className="font-semibold">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          ▼
        </motion.span>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              duration: 0.3, 
              ease: "easeInOut",
              opacity: { duration: 0.2 }
            }}
          >
            <div className="px-6 py-4" style={{ color: colors.text }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const faqItems = [
    {
      question: "Qual a diferença entre Volume Brasileiro e Volume Diamante?",
      answer: "O Volume Brasileiro oferece cílios volumosos e naturais, enquanto o Volume Diamante proporciona um efeito mais intenso e brilhante. Ambos requerem manutenção a cada 15 ou 21 dias."
    },
    {
      question: "Quanto tempo dura uma aplicação de cílios?",
      answer: "A duração varia conforme o tipo de aplicação, mas geralmente, recomendamos manutenção a cada 15 ou 21 dias para manter o visual perfeito."
    },
    {
      question: "O que é o efeito Sirena?",
      answer: "O efeito Sirena é uma técnica que alonga os cílios no canto externo dos olhos, criando um olhar felino e sedutor. A manutenção é recomendada até 21 dias após a aplicação."
    },
    {
      question: "Posso molhar os cílios após a aplicação?",
      answer: "Recomendamos evitar molhar os cílios nas primeiras 24-48 horas após a aplicação. Depois desse período, você pode molhá-los normalmente, mas evite esfregar ou puxar os cílios."
    },
    {
      question: "Qual a diferença entre Design de Sobrancelhas com e sem Henna?",
      answer: "O Design de Sobrancelhas com Henna inclui a aplicação de henna, que proporciona um efeito de preenchimento e coloração temporária, durando de 7 a 15 dias. O Design sem Henna foca apenas na modelagem das sobrancelhas."
    },
    {
      question: "É seguro fazer extensão de cílios durante a gravidez?",
      answer: "Para grávidas, recomendamos consultar um médico antes de realizar o procedimento. Algumas técnicas podem ser adaptadas para maior segurança durante a gestação."
    },
    {
      question: "Como devo cuidar dos meus cílios após a aplicação?",
      answer: "Evite água e umidade nas primeiras 24-48 horas, não use maquiagem oleosa, evite esfregar os olhos, use uma escova específica para pentear os cílios diariamente e siga as recomendações de manutenção."
    }
  ];

  return (
    <motion.section
      id="faq"
      className="py-20"
      // style={{ backgroundColor: colors.background }}
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
          Perguntas Frequentes
        </h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;