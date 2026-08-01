import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Agendamento",
    description: "Marque sua consulta pelo WhatsApp, no horário mais conveniente.",
  },
  {
    number: "02",
    title: "Consulta médica",
    description: "Avaliação clínica completa, histórico e objetivos do paciente.",
  },
  {
    number: "03",
    title: "Solicitação de exames",
    description: "Quando necessário, para aprofundar o diagnóstico.",
  },
  {
    number: "04",
    title: "Plano terapêutico personalizado",
    description: "Estratégia individualizada, baseada em evidências científicas.",
  },
  {
    number: "05",
    title: "Acompanhamento contínuo",
    description: "Ajustes e suporte ao longo de toda a jornada de saúde.",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">O caminho até você</span>
          <h2 className="heading-lg mt-4">Como funciona a consulta</h2>
          <div className="section-divider mt-6" />
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div
            aria-hidden
            className="absolute left-6 top-2 bottom-2 hidden w-px bg-azul-profundo/10 sm:block"
          />
          <ol className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08}>
                <li className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-dourado/50 bg-white font-heading text-lg text-azul-profundo shadow-soft">
                    {step.number}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="heading-md !text-xl">{step.title}</h3>
                    <p className="body-text mt-2 !text-[0.95rem]">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
