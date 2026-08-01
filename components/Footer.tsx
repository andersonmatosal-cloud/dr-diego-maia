import Image from "next/image";
import { Instagram, Phone, MapPin } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-[#0F172E] py-16">
      <div className="container-page grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Image
            src="/images/logo-full.png"
            alt="Logomarca Dr. Diego Maia — Nutrologia, Obesidade e Transtornos Alimentares"
            width={900}
            height={384}
            className="h-14 w-auto md:h-16"
          />
          <p className="mt-4 font-body text-xs text-texto-claro/40">
            {siteConfig.crm}
          </p>
        </div>

        <div>
          <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-dourado">
            Contato
          </h3>
          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-texto-claro/75 hover:text-texto-claro"
              >
                <Phone size={16} className="text-dourado" />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-texto-claro/75 hover:text-texto-claro"
              >
                <Instagram size={16} className="text-dourado" />
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-dourado">
            Endereços
          </h3>
          <div className="mt-4 flex flex-col gap-4">
            {siteConfig.locations.map((loc) => (
              <p
                key={loc.name}
                className="flex items-start gap-2 font-body text-sm text-texto-claro/75"
              >
                <MapPin size={16} className="mt-0.5 shrink-0 text-dourado" />
                <span>
                  {loc.address} — {loc.complement}
                  <br />
                  {loc.name}, {loc.neighborhood}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page mt-12 border-t border-texto-claro/10 pt-6">
        <p className="font-body text-xs text-texto-claro/40">
          © {new Date().getFullYear()} {siteConfig.doctorName}. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
