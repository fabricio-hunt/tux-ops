"use client";

export default function Cases() {
  return (
    <section id="cases" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-teko text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-2">
              Cases de <span className="text-primary">Sucesso</span>
            </h2>
            <p className="font-inter text-gray-500 text-lg">
              Soluções reais. Resultados mensuráveis.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Placeholder 1 */}
          <div className="group relative aspect-video bg-[#0a0a0a] border border-white/10 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <div className="relative z-20 text-center px-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-teko text-primary text-xl tracking-widest uppercase mb-2 block">Fintech</span>
              <h3 className="font-teko text-3xl uppercase tracking-wider text-white mb-4">Em Breve: Migração Core Banking</h3>
              <p className="font-inter text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Aguardando finalização de NDA para publicação deste case de modernização e escalabilidade no setor financeiro.
              </p>
            </div>
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          </div>

          {/* Placeholder 2 */}
          <div className="group relative aspect-video bg-[#0a0a0a] border border-white/10 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <div className="relative z-20 text-center px-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
              <span className="font-teko text-primary text-xl tracking-widest uppercase mb-2 block">E-commerce</span>
              <h3 className="font-teko text-3xl uppercase tracking-wider text-white mb-4">Em Breve: Automação Logística</h3>
              <p className="font-inter text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Como reduzimos em 40% o tempo de processamento de pedidos através de integrações de API.
              </p>
            </div>
            {/* Minimal Grid Background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
