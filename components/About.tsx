import Image from "next/image";
import { Instagram } from "lucide-react";
import Reveal from "./Reveal";
import { getWhatsAppLink, siteConfig } from "@/lib/site-config";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-24 md:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="overflow-hidden rounded-[1.75rem] shadow-soft">
              <Image
                src="/images/dr-diego-sobre.jpg"
                alt="Dr. Diego Maia atendendo paciente em consulta"
                width={640}
                height={760}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-azul-profundo px-7 py-5 shadow-soft md:block">
              <p className="font-heading text-2xl text-texto-claro">10+</p>
              <p className="font-body text-xs uppercase tracking-wider text-texto-claro/70">
                anos de dedicação clínica
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <span className="eyebrow">Quem vai cuidar de você</span>
          <h2 className="heading-lg mt-4">Dr. Diego Maia</h2>
          <p className="body-text mt-6">
            Acredito que cada paciente merece um tratamento que vá além de
            dietas prontas e soluções temporárias. Meu compromisso é
            identificar a causa do problema e construir uma estratégia
            personalizada, baseada nas melhores evidências científicas.
          </p>
          <p className="body-text mt-4">
            Meu objetivo não é apenas ajudar você a emagrecer, mas recuperar
            sua saúde e construir resultados que possam ser mantidos ao longo
            da vida.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Quero iniciar meu tratamento
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-body text-sm font-medium text-azul-profundo/80 transition-colors hover:text-azul-profundo"
            >
              <Instagram size={18} className="text-dourado" />
              @dr.diegormaia
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
