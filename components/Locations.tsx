import { MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site-config";

export default function Locations() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Onde atendemos</span>
          <h2 className="heading-lg mt-4">Locais de atendimento</h2>
          <div className="section-divider mt-6" />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {siteConfig.locations.map((loc, i) => (
            <Reveal key={loc.name} delay={i * 0.1}>
              <div className="flex h-full flex-col justify-center rounded-xl2 bg-azul-profundo p-9 shadow-soft md:p-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-dourado/50">
                  <MapPin size={20} className="text-dourado" strokeWidth={1.75} />
                </div>
                <p className="mt-6 font-heading text-xl text-texto-claro md:text-2xl">
                  {loc.address}
                </p>
                <p className="mt-4 font-body text-sm text-texto-claro/70 md:text-base">
                  {loc.name}
                  <br />
                  {loc.complement}
                </p>
                <p className="eyebrow mt-5">{loc.neighborhood}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
