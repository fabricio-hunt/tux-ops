import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 font-inter">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img 
                src="/logo.jpg" 
                alt="TuxOps Logo" 
                className="h-14 object-contain"
                style={{ filter: "invert(1) hue-rotate(180deg) brightness(1.2)" }}
              />
            </Link>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              We Build Intelligent Operations. Construímos a infraestrutura do futuro com engenharia, DevOps e Inteligência Artificial.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-teko text-xl tracking-wide mb-6 uppercase">Links Úteis</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link href="#about" className="hover:text-primary transition-colors">Quem Somos</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Serviços</Link></li>
              <li><Link href="#workflow" className="hover:text-primary transition-colors">Como Trabalhamos</Link></li>
              <li><Link href="#cases" className="hover:text-primary transition-colors">Cases de Sucesso</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-teko text-xl tracking-wide mb-6 uppercase">Contato</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400 mb-6">
              <li>contato@tuxops.com.br</li>
              <li>São Paulo, SP - Brasil</li>
            </ul>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MapPin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} TuxOps. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
