import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.doctorName} | Nutrologia baseada em evidências`,
    template: `%s | ${siteConfig.doctorName}`,
  },
  description:
    "Consultas com Dr. Diego Maia, médico com foco em Nutrologia, atuando em obesidade, emagrecimento saudável e medicina baseada em evidências. Agende sua avaliação individualizada.",
  keywords: [
    "nutrologia",
    "médico com foco em nutrologia",
    "emagrecimento saudável",
    "tratamento da obesidade",
    "caneta emagrecedora",
    "resistência à insulina",
    "diabetes",
    "esteatose hepática",
    "lipedema",
    "compulsão alimentar",
    "suplementação esportiva",
    "reposição de vitaminas pós-bariátrica",
    "síndrome metabólica",
    "Dr. Diego Maia",
  ],
  authors: [{ name: siteConfig.doctorName }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.siteUrl,
    siteName: siteConfig.doctorName,
    title: `${siteConfig.doctorName} | Nutrologia baseada em evidências`,
    description:
      "Tratamento individualizado para obesidade, compulsão alimentar, lipedema e doenças metabólicas, baseado nas melhores evidências científicas.",
    images: [
      {
        url: "/images/dr-diego-og.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.doctorName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.doctorName} | Nutrologia baseada em evidências`,
    description:
      "Tratamento individualizado para obesidade, compulsão alimentar, lipedema e doenças metabólicas, baseado nas melhores evidências científicas.",
    images: ["/images/dr-diego-og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Diego Maia",
  medicalSpecialty: "Nutrology",
  description:
    "Médico com foco em Nutrologia, atuando em obesidade, emagrecimento saudável e medicina baseada em evidências.",
  image: `${siteConfig.siteUrl}/images/dr-diego-hero.jpg`,
  url: siteConfig.siteUrl,
  telephone: siteConfig.phoneDisplay,
  address: siteConfig.locations.map((loc) => ({
    "@type": "PostalAddress",
    streetAddress: `${loc.address}, ${loc.complement}`,
    addressLocality: "Fortaleza",
    addressRegion: "CE",
    addressCountry: "BR",
  })),
  sameAs: [siteConfig.instagram],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-fundo-claro antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
