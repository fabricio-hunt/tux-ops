"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Diagnóstico", desc: "Análise profunda da arquitetura atual e mapeamento de gargalos." },
  { id: "02", title: "Arquitetura", desc: "Desenho da solução ideal, escolhendo as tecnologias mais adequadas." },
  { id: "03", title: "Implementação", desc: "Codificação rigorosa seguindo as melhores práticas de engenharia." },
  { id: "04", title: "Automação", desc: "Criação de pipelines CI/CD e fluxos de trabalho autônomos." },
  { id: "05", title: "Monitoramento", desc: "Observabilidade total com dashboards em tempo real." },
  { id: "06", title: "Evolução Contínua", desc: "Refatoração e otimização constante para crescimento em escala." }
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="mb-24 text-center md:text-left md:flex justify-between items-end">
          <div>
            <h2 className="font-teko text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-4">
              Como <span className="text-primary">Trabalhamos</span>
            </h2>
            <p className="font-inter text-gray-500 text-base md:text-lg max-w-xl">
              Metodologia baseada em ciclos rápidos, segurança intrínseca e infraestrutura como código.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Main Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center lg:items-start group"
              >
                <div className="text-primary font-teko text-6xl opacity-30 group-hover:opacity-100 transition-opacity duration-300 lg:mb-16">
                  {step.id}
                </div>
                
                {/* Node Point */}
                <div className="hidden lg:block w-3 h-3 bg-black border-2 border-primary rounded-full mb-16 relative group-hover:scale-150 transition-transform duration-300">
                  <div className="absolute inset-0 bg-primary/50 blur-sm rounded-full"></div>
                </div>
                
                <h3 className="font-teko text-2xl text-white uppercase tracking-wider mb-2 text-center lg:text-left">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-gray-500 text-center lg:text-left">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
