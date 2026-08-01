"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site-config";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "IMC", href: "#imc" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-fundo-claro/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Início">
          <Image
            src="/images/logo-icon.png"
            alt="Ícone da marca Dr. Diego Maia"
            width={400}
            height={349}
            priority
            className="h-9 w-auto md:h-10"
          />
          <span className="font-heading text-lg leading-none text-azul-profundo md:text-xl">
            Dr. Diego Maia
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm font-medium tracking-wide text-azul-profundo/80 transition-colors hover:text-azul-profundo"
            >
              {item.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !px-6 !py-2.5 text-sm"
          >
            Agendar Consulta
          </a>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-azul-profundo lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-azul-profundo/10 bg-fundo-claro lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Menu mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-body text-base font-medium text-azul-profundo hover:bg-azul-profundo/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2 justify-center"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
