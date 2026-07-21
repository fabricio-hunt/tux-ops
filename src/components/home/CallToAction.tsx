"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section id="contact" className="relative py-32 bg-black border-t border-white/5 overflow-hidden flex items-center justify-center">
      {/* Abstract Background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-teko text-6xl md:text-8xl font-bold uppercase tracking-tight text-white mb-6">
            Pronto para <span className="text-primary">Evoluir?</span>
          </h2>
          <p className="font-inter text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Vamos discutir como nossa engenharia pode transformar seus desafios operacionais em vantagem competitiva.
          </p>
          
          <a
            href="mailto:contato@tuxops.com.br"
            className="inline-block relative px-12 py-5 bg-white text-black font-teko text-2xl tracking-widest uppercase hover:bg-primary transition-colors duration-300"
          >
            Iniciar Projeto
            {/* Deco lines */}
            <span className="absolute top-0 left-0 w-2 h-full bg-primary/50 mix-blend-multiply"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
