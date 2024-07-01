import {
  motion,
  AnimatePresence,
  useAnimate,
  stagger,
  useInView,
} from "framer-motion";

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