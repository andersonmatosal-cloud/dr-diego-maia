"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site-config";

const stats = [
  "Atendimento Humanizado",
  "Medicina Baseada em Evidências",
  "Tratamento Personalizado",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Subtle background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-azul-secundario/5 blur-3xl"
      />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="heading-xl max-w-xl">
            Tratamento da obesidade e doenças crônicas baseado em ciência e
            totalmente personalizado.
          </h1>
          <p className="mt-4 font-body text-sm font-medium tracking-wide text-dourado/90 md:text-base">
            CRM 15522 · Clínica Médica · Pediatria · Pós-graduação em
            Nutrologia e Obesidade
          </p>
          <p className="body-text mt-6 max-w-lg">
            Tratamento individualizado para obesidade, compulsão alimentar,
            lipedema e doenças metabólicas, baseado nas melhores evidências
            científicas.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Agendar Consulta
            </a>
            <a href="#imc" className="btn-outline">
              Calcular meu IMC
            </a>
          </div>

          <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
            {stats.map((stat) => (
              <li
                key={stat}
                className="flex items-center gap-2 font-body text-sm font-medium text-azul-profundo/85"
              >
                <CheckCircle2 size={18} className="shrink-0 text-dourado" />
                {stat}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-dourado/15 via-transparent to-azul-secundario/10" />
          <div className="overflow-hidden rounded-[1.75rem] shadow-soft">
            <Image
              src="/images/dr-diego-hero.jpg"
              alt="Dr. Diego Maia, médico com foco em Nutrologia, em consultório"
              width={720}
              height={880}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
