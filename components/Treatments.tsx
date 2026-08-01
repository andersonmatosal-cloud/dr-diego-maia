import {
  Scale,
  Syringe,
  Brain,
  Droplet,
  Activity,
  FlaskConical,
  Utensils,
  Dumbbell,
  Pill,
} from "lucide-react";
import Reveal from "./Reveal";

const treatments = [
  {
    icon: Scale,
    title: "Emagrecimento e obesidade",
    description:
      "Tratamento baseado em evidências para perda de peso com saúde e resultados duradouros.",
  },
  {
    icon: Syringe,
    title: "Canetas para emagrecimento",
    description:
      "Avaliação criteriosa da indicação de análogos de GLP-1 e acompanhamento médico contínuo.",
  },
  {
    icon: Brain,
    title: "Compulsão alimentar",
    description:
      "Controle da fome emocional e melhora da relação com a comida.",
  },
  {
    icon: Droplet,
    title: "Lipedema",
    description:
      "Abordagem clínica individualizada para reduzir sintomas e melhorar a qualidade de vida.",
  },
  {
    icon: Activity,
    title: "Diabetes e resistência à insulina",
    description: "Prevenção e tratamento das alterações metabólicas.",
  },
  {
    icon: FlaskConical,
    title: "Esteatose hepática",
    description:
      "Tratamento focado na redução da gordura no fígado e na recuperação da saúde metabólica.",
  },
  {
    icon: Utensils,
    title: "Reeducação alimentar",
    description: "Mudanças sustentáveis, sem dietas restritivas ou modismos.",
  },
  {
    icon: Dumbbell,
    title: "Suplementação esportiva",
    description:
      "Estratégias nutricionais personalizadas para otimizar desempenho, recuperação e composição corporal.",
  },
  {
    icon: Pill,
    title: "Reposição de vitaminas no pós-bariátrico",
    description:
      "Prevenção e tratamento de deficiências nutricionais para promover saúde e qualidade de vida.",
  },
];

export default function Treatments() {
  return (
    <section id="tratamentos" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Principais tratamentos</span>
          <h2 className="heading-lg mt-4">
            Cuidado clínico completo, em cada etapa
          </h2>
          <div className="section-divider mt-6" />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06}>
              <div className="card-elegant h-full !p-6 md:!p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-azul-profundo/5">
                  <item.icon size={20} className="text-dourado" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 font-heading text-lg leading-snug text-azul-profundo">
                  {item.title}
                </h3>
                <p className="body-text mt-2 !text-[0.9rem] leading-snug">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
