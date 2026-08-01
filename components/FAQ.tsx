"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const faqs = [
  {
    question: "Como funciona a consulta?",
    answer:
      "A consulta inicia com uma avaliação clínica completa: histórico de saúde, hábitos de vida e, quando necessário, análise de exames laboratoriais. A partir disso, é construído um plano terapêutico individualizado.",
  },
  {
    question: "Canetas de emagrecimento são indicadas para todos?",
    answer:
      "Não. A indicação é sempre individual, feita após avaliação médica criteriosa, considerando histórico clínico, exames e objetivos de tratamento.",
  },
  {
    question: "Quanto tempo dura o tratamento?",
    answer:
      "Varia conforme cada paciente. O acompanhamento é contínuo, com ajustes periódicos conforme a evolução clínica.",
  },
  {
    question: "O tratamento é personalizado?",
    answer:
      "Sim. Cada plano é construído de forma individual, considerando rotina, exames, histórico e metas pessoais de saúde.",
  },
  {
    question: "Aceita plano de saúde?",
    answer:
      "Não. Meu compromisso é oferecer um atendimento sem pressa, individualizado e baseado em evidências científicas. Por isso, realizo consultas exclusivamente particulares, sem as limitações de tempo e cuidado impostas pelos convênios.",
  },
  {
    question: "Atende online?",
    answer:
      "Sim, são oferecidas consultas presenciais e por telemedicina, conforme a necessidade do paciente.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="heading-lg mt-4">Tire suas dúvidas</h2>
          <div className="section-divider mt-6" />
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div className="border-b border-azul-profundo/10">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className="font-heading text-lg text-azul-profundo md:text-xl">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-dourado transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="body-text pb-6 !text-[0.95rem]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
