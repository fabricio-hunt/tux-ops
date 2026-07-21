"use client";

import { motion } from "framer-motion";

const techs = [
  "Linux", "Docker", "Kubernetes", "Azure", 
  "Terraform", "GitHub Actions", "Azure DevOps", 
  "PostgreSQL", "Redis", "Python", ".NET", 
  "React", "Node.js"
];

export default function Technologies() {
  return (
    <section id="tech" className="py-24 bg-[#050505] border-y border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-teko text-3xl md:text-5xl uppercase tracking-wider text-white mb-12">
          Poder computacional <span className="text-gray-600">por trás das operações</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-5xl mx-auto">
          {techs.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="px-6 py-3 border border-white/10 bg-black text-gray-400 font-teko text-xl tracking-wide uppercase hover:text-white hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
