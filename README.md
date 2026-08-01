# Landing Page — Dr. Diego Maia | Nutrologia

Landing page premium, responsiva e orientada à conversão via WhatsApp, construída com **Next.js 14 (App Router)**, **Tailwind CSS**, **Framer Motion** e **Lucide Icons**.

---

## 🚀 Como rodar o projeto localmente

**Pré-requisitos:** Node.js 18.17 ou superior.

```bash
# 1. Instale as dependências
npm install

# 2. Rode o servidor de desenvolvimento
npm run dev

# 3. Acesse
http://localhost:3000
```

Para gerar a versão de produção:

```bash
npm run build
npm run start
```

---

## 🖼️ Imagens e logomarca

Todas as imagens já estão em `public/images/`, usando as fotos reais e a logomarca original do Dr. Diego Maia enviadas para este projeto — nada nesta pasta é placeholder.

| Arquivo | Usado em |
|---|---|
| `public/images/dr-diego-hero.jpg` | Seção Hero (topo) |
| `public/images/dr-diego-sobre.jpg` | Seção Sobre o Médico |
| `public/images/dr-diego-cta.jpg` | CTA Final (bloco escuro) |
| `public/images/dr-diego-og.jpg` | Open Graph (compartilhamento em redes sociais) |
| `public/images/logo-icon.png` | Cabeçalho (ícone com fundo transparente) | PNG, fundo transparente |
| `public/images/logo-full.png` | Rodapé (ícone + nome + especialidade, fundo transparente) | PNG, fundo transparente |
| `public/favicon.ico` | Aba do navegador (placeholder — recomenda-se gerar um a partir da logo) |
| `public/apple-touch-icon.png` | Ícone iOS (placeholder — recomenda-se gerar um a partir da logo) |

Caso queira trocar alguma foto no futuro, basta substituir o arquivo correspondente mantendo o mesmo nome — não é necessário alterar nenhum código, pois o recorte (`object-cover`) é feito automaticamente pelo CSS para cada formato de seção.

> **Favicon e apple-touch-icon:** por serem ícones muito pequenos, foram gerados como placeholders simples no padrão de cores da marca. Para um resultado perfeito, gere-os a partir da logomarca original (ex.: via [favicon.io](https://favicon.io) ou [realfavicongenerator.net](https://realfavicongenerator.net)) e substitua os arquivos em `public/`.

---

## 📱 Configurando o WhatsApp e demais dados

Toda a informação de contato está centralizada em **`lib/site-config.ts`**:

```ts
export const siteConfig = {
  doctorName: "Dr. Diego Maia",
  specialty: "Nutrologia | Obesidade | Transtornos Alimentares",
  crm: "CRM 00000 | RQE 00000",

  whatsappNumber: "55XXXXXXXXXXX", // <-- coloque o número real aqui (DDI+DDD+número, só dígitos)
  whatsappDefaultMessage: "Olá, Dr. Diego! Gostaria de agendar uma consulta.",

  instagram: "https://instagram.com/dr.diegomaia",
  phoneDisplay: "(85) 90000-0000",

  address: { ... },
  siteUrl: "https://www.drdiegomaia.com.br",
};
```

Edite esse arquivo para atualizar, em um único lugar, o número de WhatsApp, Instagram, telefone, endereço e URL do site em toda a página (header, hero, cards, CTA final, rodapé e botão flutuante).

---

## 🎨 Identidade visual

A paleta de cores está definida em `tailwind.config.ts` e segue exatamente o padrão solicitado:

| Cor | Hex | Uso |
|---|---|---|
| Azul profundo | `#17233F` | Cor principal / textos de destaque |
| Azul secundário | `#24385F` | Apoio |
| Azul de apoio | `#3A4C73` | Textos de corpo |
| Dourado | `#C9AE74` | Detalhes, botões, ícones |
| Texto claro | `#F5F5F2` | Textos sobre fundo escuro |
| Cinza elegante | `#8E9094` | Textos auxiliares |
| Fundo claro | `#FAFAF8` | Fundo geral do site |

**Tipografia:** Playfair Display (títulos) + Inter (corpo de texto), carregadas via `next/font/google` em `app/layout.tsx`.

---

## 📁 Estrutura do projeto

```
dr-diego-maia/
├── app/
│   ├── layout.tsx        # Layout raiz, fontes, metadata/SEO, JSON-LD (Schema.org)
│   ├── page.tsx          # Composição das seções da landing page
│   ├── sitemap.ts         # Geração automática de sitemap.xml
│   └── globals.css        # Estilos globais e utilitários Tailwind
├── components/
│   ├── Header.tsx          # Menu fixo com logo e navegação
│   ├── Hero.tsx             # Seção principal (Hero)
│   ├── About.tsx            # Sobre o médico
│   ├── Treatments.tsx       # Cards de tratamentos
│   ├── Differentials.tsx    # Diferenciais
│   ├── BMICalculator.tsx    # Calculadora de IMC interativa
│   ├── Timeline.tsx         # Linha do tempo "Como funciona a consulta"
│   ├── FAQ.tsx              # Acordeão de perguntas frequentes
│   ├── FinalCTA.tsx         # Bloco final de conversão
│   ├── Footer.tsx           # Rodapé
│   ├── WhatsAppButton.tsx   # Botão flutuante do WhatsApp
│   └── Reveal.tsx           # Wrapper de animação scroll-reveal reutilizável
├── lib/
│   └── site-config.ts      # Configuração central (WhatsApp, contato, endereço)
├── public/
│   ├── images/               # Fotos e logomarca (ver seção acima)
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── robots.txt
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## ✅ Funcionalidades incluídas

- Totalmente responsivo (mobile, tablet, desktop)
- Menu fixo com efeito de blur ao rolar
- Animações de entrada (scroll reveal) com Framer Motion, respeitando `prefers-reduced-motion`
- Calculadora de IMC interativa com classificação e CTA para agendamento
- Acordeão de FAQ animado
- Botão flutuante do WhatsApp com pulso, sempre visível
- SEO: metadata completa, Open Graph, Twitter Card, dados estruturados (Schema.org `Physician`), `robots.txt` e `sitemap.xml`
- Acessibilidade: `alt` em imagens, `aria-label`/`aria-expanded`, navegação por teclado, contraste elevado

---

## ⚠️ Observações

- A seção de depoimentos foi removida por enquanto (os textos usados anteriormente eram fictícios, o que não é seguro para publicação — a Resolução CFM nº 2.336/2023 veda a divulgação de conteúdo inverídico). Quando houver depoimentos reais de pacientes, com autorização por escrito e linguagem sóbria (sem promessa de resultados), a seção pode ser recriada com base no componente antigo (removido do projeto, mas disponível no histórico de versões anteriores).
- `whatsappNumber` já está configurado com o número real: `5585985243974`.
- Os dois locais de atendimento (Uno Medical & Office e Duets Office - Torre Sul) já estão configurados em `lib/site-config.ts` e exibidos na seção "Locais de atendimento" e no rodapé.
- Atualize `crm` em `lib/site-config.ts` com o CRM/RQE reais antes de publicar (ainda está como placeholder).
