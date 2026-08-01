import Image from "next/image";
import Reveal from "./Reveal";
import { getWhatsAppLink } from "@/lib/site-config";

export default function FinalCTA() {
  return (
    <section id="contato" className="relative overflow-hidden bg-azul-profundo py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -bottom-32 h-[420px] w-[420px] rounded-full bg-dourado/5 blur-3xl"
      />
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
        <Reveal>
          <span className="eyebrow">Agende sua consulta</span>
          <h2 className="heading-lg mt-4 !text-texto-claro">
            Sua saúde merece atenção especializada.
          </h2>
          <p className="mt-5 max-w-lg font-body text-base text-texto-claro/75 md:text-lg">
            Agende sua consulta e dê o primeiro passo para uma vida mais
            saudável.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-9"
          >
            Agendar Consulta
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[1.75rem] shadow-soft">
            <Image
              src="/images/dr-diego-cta.jpg"
              alt="Dr. Diego Maia, médico com foco em Nutrologia"
              width={560}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
