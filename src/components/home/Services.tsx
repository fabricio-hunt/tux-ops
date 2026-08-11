"use client";

import { motion } from "framer-motion";
import { Settings, Network, Search, LayoutDashboard, Database, ShoppingCart, Webhook, MonitorCheck } from "lucide-react";

const services = [
  {
    title: "Automação de Processos",
    icon: Settings,
    desc: "Elimine tarefas manuais repetitivas com fluxos de trabalho inteligentes e autônomos."
  },
  {
    title: "Integração de Sistemas",
    icon: Network,
    desc: "Conecte plataformas legadas e modernas para operar em um ecossistema unificado."
  },
  {
    title: "Integrações com APIs",
    icon: Webhook,
    desc: "Desenvolvimento e consumo de APIs seguras, escaláveis e de alta performance."
  },
  {
    title: "Sistemas de Gestão",
    icon: Database,
    desc: "Plataformas customizadas para otimizar o controle e a tomada de decisão empresarial."
  },
  {
    title: "Paineis Administrativos",
    icon: LayoutDashboard,
    desc: "Dashboards analíticos avançados para visualizar o pulso do seu negócio em tempo real."
  },
  {
    title: "Migração de E-commerce",
    icon: ShoppingCart,
    desc: "Transições complexas de plataformas de vendas com zero perda de dados ou tráfego."
  },
  {
    title: "Configuração de E-commerces",
    icon: MonitorCheck,
    desc: "Setup premium de lojas virtuais focadas em alta conversão e escalabilidade."
  },
  {
    title: "Auditoria de SEO",
    icon: Search,
    desc: "Engenharia de motores de busca e otimização técnica profunda para máximo alcance orgânico."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-teko text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="font-inter text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            Engenharia de software focada em resolver desafios operacionais complexos.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative bg-[#0a0a0a] border border-white/5 p-8 transition-all duration-300 hover:border-primary/50 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-primary mb-6">
                  <service.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="font-teko text-2xl uppercase tracking-wide text-white mb-3">
                  {service.title}
                </h3>
                <p className="font-inter text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
