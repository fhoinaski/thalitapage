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
        
      </motion.div>
    </div>
  </motion.section>
);