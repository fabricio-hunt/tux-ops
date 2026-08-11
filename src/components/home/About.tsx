"use client";

import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const count = 1000;

  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 relative bg-black overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ParticleField />
        </Canvas>
      </div>
      
      {/* Overlay Gradient for readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Top: Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl mb-16 relative"
        >
          {/* Video Box */}
          <div className="relative aspect-video border border-white/10 overflow-hidden bg-black/50 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
            <iframe 
              className="absolute inset-0 w-full h-full pointer-events-none"
              src="https://www.youtube.com/embed/Vg-EQ7MOu6I?autoplay=1&mute=1&loop=1&controls=0&playlist=Vg-EQ7MOu6I&showinfo=0&rel=0&modestbranding=1&disablekb=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
            {/* Overlays */}
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Bottom: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl text-center flex flex-col items-center"
        >
          <h2 className="font-teko text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6">
            Nós somos a <span className="text-primary">TuxOps</span>
          </h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          
          <div className="space-y-6 font-inter text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
            <p>
              A TuxOps não é apenas uma consultoria de TI. Somos arquitetos de infraestrutura, engenheiros de plataforma e especialistas em automação dedicados a construir as bases tecnológicas das empresas do futuro.
            </p>
            <p>
              Inspirados pelos mais altos padrões da engenharia aeroespacial e de software, aplicamos DevOps, Cloud Computing e Inteligência Artificial para eliminar ineficiências e acelerar o crescimento dos nossos clientes.
            </p>
            <p>
              Nosso compromisso é entregar soluções robustas, escaláveis e sob medida, permitindo que você foque na inovação enquanto nós gerenciamos a complexidade operacional.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
