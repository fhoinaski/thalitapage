import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram } from 'lucide-react';

const colors = {
  secondary: '#ceac94',
  text: '#C09C81',
};

const buttonColors = {
  color: '#CE9D81',
  hover: '#c09c81',
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(response);
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <motion.section
      id="contato"
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
          Entre em Contato
        </h2>
        <motion.div
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="mb-6 md:mb-0">
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: colors.secondary }}
              >
                Localização
              </h3>
              <p className="flex items-center" style={{ color: colors.text }}>
                <MapPin className="mr-2" size={18} />
                Infinity Office, Sala 606, Rua Patrício Farias, número 101, Florianópolis/ Itacorubi 88034-132
              </p>
            </div>
            <div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: colors.secondary }}
              >
                Contato
              </h3>
              <p
                className="flex items-center mb-2"
                style={{ color: colors.text }}
              >
                <Phone className="mr-2" size={18} />
                (XX) XXXX-XXXX
              </p>
              <p className="flex items-center" style={{ color: colors.text }}>
                <Instagram className="mr-2" size={18} />
                @thalitacilioscursos
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu Nome"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu Email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Sua Mensagem"
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05, backgroundColor: buttonColors.hover }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded text-white text-lg shadow-lg transition-colors duration-300"
              style={{ backgroundColor: buttonColors.color }}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </motion.button>
          </form>
          {submitStatus === 'success' && (
            <p className="mt-4 text-green-600">Mensagem enviada com sucesso!</p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-4 text-red-600">Erro ao enviar mensagem. Por favor, tente novamente.</p>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;