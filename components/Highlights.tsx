import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const highlights = [
  "Consulta sem pressa",
  "Medicina baseada em evidências",
  "Tratamento individualizado",
  "Acompanhamento próximo",
  "Foco em resultados sustentáveis",
];

export default function Highlights() {
  return (
    <section className="border-y border-dourado/20 bg-dourado/5 py-10 md:py-12">
      <div className="container-page">
        <Reveal>
          <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10 sm:gap-y-4">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 font-body text-sm font-medium text-azul-profundo md:text-base"
              >
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-dourado"
                  strokeWidth={1.75}
                />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
