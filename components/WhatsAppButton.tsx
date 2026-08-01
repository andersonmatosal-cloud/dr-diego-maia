"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/site-config";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg transition-transform hover:scale-105 md:h-16 md:w-16"
    >
      <span className="absolute inset-0 -z-10 animate-pulse-slow rounded-full bg-emerald-500/50" />
      <MessageCircle size={28} strokeWidth={1.75} />
    </a>
  );
}
