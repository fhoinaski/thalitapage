import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colors = {
  primary: "#f8dbc5",
  secondary: "#CE9D81",
  terciary: "#333333",
  "text-white": "#fff8f2",
  text: "#C09C81",
  accent: "#CD853F",
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
      question: "O que torna este curso de extensão de cílios único?",
      answer: "Nosso curso oferece uma experiência completa e prática, com 2 dias intensivos de aprendizado. Você terá aulas teóricas e práticas, incluindo treinamento em modelo real, além de um grupo de suporte pós-curso para garantir seu sucesso contínuo."
    },
    {
      question: "Quais técnicas vou aprender neste curso?",
      answer: "Você aprenderá uma ampla gama de técnicas, incluindo clássico fio a fio, fios tecnológicos, volume brasileiro, top line, e muito mais. Também cobrimos aspectos cruciais como biossegurança, saúde ocular e cálculo de ganhos vs gastos para ajudar a impulsionar seu negócio."
    },
    {
      question: "O material está incluso no preço do curso?",
      answer: "Sim! Oferecemos uma opção com material de qualidade incluso por apenas 12x de R$134,96 ou R$1400,00 à vista. Esta é uma excelente oportunidade para iniciar seu negócio com todos os recursos necessários."
    },
    {
      question: "Quanto tempo leva para eu começar a lucrar após o curso?",
      answer: "Com o conhecimento adquirido, você pode começar a lucrar imediatamente! Atendendo apenas uma cliente por mês, você já cobre a parcela do curso. Imaginando um cenário conservador de R$100 por cliente (abaixo do preço de mercado) e atendendo uma por dia de segunda a sexta, você já pode faturar R$2.000,00 mensais!"
    },
    {
      question: "Existe suporte após o término do curso?",
      answer: "Absolutamente! Oferecemos um grupo de suporte pós-curso exclusivo para nossos alunos. Lá, você poderá tirar dúvidas, compartilhar experiências e continuar aprendendo mesmo após o término das aulas."
    },
    {
      question: "O certificado é reconhecido no mercado?",
      answer: "Sim, nosso certificado é amplamente reconhecido no mercado de beleza. Ele atesta sua proficiência nas técnicas ensinadas e pode ser um diferencial importante para atrair clientes e parcerias profissionais."
    },
    {
      question: "Preciso ter experiência prévia para fazer o curso?",
      answer: "Não é necessário ter experiência prévia! Nosso curso é projetado para iniciantes e cobre desde os fundamentos até técnicas avançadas. Você sairá preparada para iniciar sua carreira como profissional de extensão de cílios."
    }
  ];

  return (
    <motion.section
      id="faq"
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