import {
  UserCheck,
  BookOpenCheck,
  FileText,
  RefreshCcw,
  Stethoscope,
  TrendingUp,
} from "lucide-react";
import Reveal from "./Reveal";

const differentials = [
  { icon: UserCheck, title: "Atendimento individualizado" },
  { icon: BookOpenCheck, title: "Medicina baseada em evidências" },
  { icon: FileText, title: "Plano personalizado" },
  { icon: RefreshCcw, title: "Acompanhamento contínuo" },
  { icon: Stethoscope, title: "Avaliação clínica completa" },
  { icon: TrendingUp, title: "Foco em resultados sustentáveis" },
];

export default function Differentials() {
  return (
    <section className="bg-azul-profundo py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Diferenciais</span>
          <h2 className="heading-lg mt-4 !text-texto-claro">
            Por que escolher um acompanhamento especializado
          </h2>
          <div className="section-divider mt-6" />
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-dourado/40">
                  <item.icon size={20} className="text-dourado" strokeWidth={1.75} />
                </div>
                <p className="font-body text-base font-medium text-texto-claro/90">
                  {item.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
