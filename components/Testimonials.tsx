import { Star } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "M. S.",
    text: "Hoje tenho muito mais disposição e consegui emagrecer de forma saudável, com acompanhamento próximo em cada etapa.",
  },
  {
    name: "R. A.",
    text: "O plano foi pensado para minha rotina real. Senti que fui ouvido em cada detalhe da consulta.",
  },
  {
    name: "C. F.",
    text: "Finalmente entendi o que estava por trás das minhas dificuldades para emagrecer. Processo seguro do início ao fim.",
  },
  {
    name: "L. P.",
    text: "Atendimento humano, exames bem interpretados e resultados consistentes ao longo dos meses.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="heading-lg mt-4">Experiências de quem já trilhou esse caminho</h2>
          <div className="section-divider mt-6" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 2) * 0.1}>
              <div className="card-elegant h-full">
                <div className="flex gap-1 text-dourado" aria-hidden>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="body-text mt-5 !text-[0.95rem] italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-5 font-body text-sm font-semibold text-azul-profundo">
                  {t.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center font-body text-xs text-cinza-elegante">
          Depoimentos ilustrativos, utilizados apenas como exemplo visual.
        </p>
      </div>
    </section>
  );
}
