"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Info } from "lucide-react";
import Reveal from "./Reveal";
import { getWhatsAppLink } from "@/lib/site-config";

type BMIResult = {
  value: number;
  category: string;
  message: string;
  tone: "info" | "good" | "warning" | "alert";
};

function classify(bmi: number): Omit<BMIResult, "value"> {
  if (bmi < 18.5) {
    return {
      category: "Abaixo do peso",
      message:
        "Uma avaliação nutrológica pode ajudar a identificar a melhor estratégia para atingir um peso saudável.",
      tone: "info",
    };
  }
  if (bmi < 25) {
    return {
      category: "Peso adequado",
      message:
        "Parabéns! Manter o acompanhamento médico ajuda a preservar sua saúde metabólica a longo prazo.",
      tone: "good",
    };
  }
  if (bmi < 30) {
    return {
      category: "Sobrepeso",
      message:
        "Um plano personalizado pode prevenir a evolução para quadros metabólicos mais complexos.",
      tone: "warning",
    };
  }
  if (bmi < 35) {
    return {
      category: "Obesidade Grau I",
      message:
        "Uma avaliação médica individualizada é o primeiro passo para um tratamento seguro e eficaz.",
      tone: "warning",
    };
  }
  if (bmi < 40) {
    return {
      category: "Obesidade Grau II",
      message:
        "O acompanhamento nutrológico é essencial para reduzir riscos à saúde e conduzir o tratamento com segurança.",
      tone: "alert",
    };
  }
  return {
    category: "Obesidade Grau III",
    message:
      "Recomendamos uma avaliação médica o quanto antes para iniciar um cuidado individualizado e seguro.",
    tone: "alert",
  };
}

const toneStyles: Record<BMIResult["tone"], string> = {
  info: "border-azul-secundario/30 bg-azul-secundario/5",
  good: "border-emerald-600/25 bg-emerald-50",
  warning: "border-dourado/40 bg-dourado/10",
  alert: "border-rose-700/25 bg-rose-50",
};

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<BMIResult | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    const w = parseFloat(weight.replace(",", "."));
    const hRaw = parseFloat(height.replace(",", "."));
    const h = hRaw > 3 ? hRaw / 100 : hRaw; // accept cm or meters

    if (!w || !h || w <= 0 || h <= 0) {
      setError("Preencha peso e altura com valores válidos.");
      setResult(null);
      return;
    }

    setError("");
    const bmi = w / (h * h);
    const classification = classify(bmi);
    setResult({ value: Math.round(bmi * 10) / 10, ...classification });
  };

  return (
    <section id="imc" className="bg-white py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Calculadora</span>
          <h2 className="heading-lg mt-4">Calcule seu IMC</h2>
          <p className="body-text mt-4">
            Uma primeira referência sobre seu peso corporal — o diagnóstico
            completo é sempre feito em consulta.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-2xl">
          <div className="rounded-xl2 border border-azul-profundo/10 bg-fundo-claro p-8 shadow-soft md:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="font-body text-sm font-medium text-azul-profundo">
                  Peso (kg)
                </span>
                <input
                  type="number"
                  inputMode="decimal"
                  min={0}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Ex: 78"
                  className="mt-2 w-full rounded-lg border border-azul-profundo/15 bg-white px-4 py-3 font-body text-base text-azul-profundo outline-none transition-colors focus:border-dourado"
                  aria-label="Peso em quilogramas"
                />
              </label>
              <label className="block">
                <span className="font-body text-sm font-medium text-azul-profundo">
                  Altura (cm)
                </span>
                <input
                  type="number"
                  inputMode="decimal"
                  min={0}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Ex: 172"
                  className="mt-2 w-full rounded-lg border border-azul-profundo/15 bg-white px-4 py-3 font-body text-base text-azul-profundo outline-none transition-colors focus:border-dourado"
                  aria-label="Altura em centímetros"
                />
              </label>
            </div>

            {error && (
              <p className="mt-4 font-body text-sm text-rose-700">{error}</p>
            )}

            <button
              onClick={handleCalculate}
              className="btn-gold mt-7 w-full sm:w-auto"
            >
              <Calculator size={18} />
              Calcular IMC
            </button>

            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 12, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-8 overflow-hidden"
                >
                  <div
                    className={`rounded-xl2 border p-6 ${toneStyles[result.tone]}`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-heading text-4xl text-azul-profundo">
                        {result.value}
                      </span>
                      <span className="font-body text-base font-semibold text-azul-profundo">
                        {result.category}
                      </span>
                    </div>
                    <p className="body-text mt-3 !text-[0.95rem]">
                      {result.message}
                    </p>
                  </div>

                  <a
                    href={getWhatsAppLink(
                      "Olá, Dr. Diego! Calculei meu IMC no site e gostaria de agendar uma avaliação."
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold mt-6 w-full sm:w-auto"
                  >
                    Agendar minha avaliação
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6 flex items-start gap-2 text-cinza-elegante">
              <Info size={16} className="mt-0.5 shrink-0" />
              <p className="font-body text-xs leading-relaxed">
                Este cálculo possui caráter informativo e não substitui uma
                avaliação médica.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
