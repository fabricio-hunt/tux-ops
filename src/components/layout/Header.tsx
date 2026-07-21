"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-black/70 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Usamos filter invert(1) para transformar o fundo branco em preto e o logo preto em branco. O bico amarelo vai ficar levemente azulado, combinando com o tema! */}
          <img 
            src="/logo.jpg" 
            alt="TuxOps Logo" 
            className="h-10 md:h-12 object-contain"
            style={{ filter: "invert(1) hue-rotate(180deg) brightness(1.2)" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-inter text-sm font-medium tracking-wide">
          <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
            QUEM SOMOS
          </Link>
          <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
            SERVIÇOS
          </Link>
          <Link href="#workflow" className="text-gray-300 hover:text-white transition-colors">
            COMO TRABALHAMOS
          </Link>
          <Link href="#tech" className="text-gray-300 hover:text-white transition-colors">
            TECNOLOGIAS
          </Link>
          <Link
            href="#contact"
            className="border border-white/20 hover:border-primary text-white hover:text-primary px-5 py-2 rounded transition-all duration-300"
          >
            FALE CONOSCO
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 py-6 px-6 flex flex-col gap-6 md:hidden font-inter text-sm"
          >
            <Link href="#about" className="text-gray-300" onClick={() => setMobileMenuOpen(false)}>
              QUEM SOMOS
            </Link>
            <Link href="#services" className="text-gray-300" onClick={() => setMobileMenuOpen(false)}>
              SERVIÇOS
            </Link>
            <Link href="#workflow" className="text-gray-300" onClick={() => setMobileMenuOpen(false)}>
              COMO TRABALHAMOS
            </Link>
            <Link href="#tech" className="text-gray-300" onClick={() => setMobileMenuOpen(false)}>
              TECNOLOGIAS
            </Link>
            <Link
              href="#contact"
              className="text-primary font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              FALE CONOSCO
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
