import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooterRefined } from "@/components/layout/site-footer-refined";
import { SiteHeaderRefined } from "@/components/layout/site-header-refined";
import { LanguageProvider } from "@/components/providers/language-provider";

export const metadata: Metadata = {
  title: "TapiScan — Chatbot de WhatsApp para restaurantes en Panamá",
  description:
    "TapiScan atiende el WhatsApp de tu restaurante, responde preguntas frecuentes, muestra tu menú bilingüe y confirma reservas en español e inglés. Hecho para restaurantes en Panamá.",
  keywords: "chatbot WhatsApp Panamá, chatbot para restaurantes, asistente WhatsApp restaurantes, recepcionista digital restaurantes, reservas por WhatsApp, menú digital bilingüe Panamá",
  metadataBase: new URL("https://www.tapiscan.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TapiScan — Chatbot de WhatsApp para restaurantes en Panamá",
    description:
      "TapiScan atiende el WhatsApp de tu restaurante, responde preguntas frecuentes, muestra tu menú bilingüe y confirma reservas en español e inglés. Hecho para restaurantes en Panamá.",
    url: "https://www.tapiscan.com/",
    siteName: "TapiScan",
    locale: "es_PA",
    type: "website",
    images: [{ url: "/Tapiscan-Logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TapiScan — Chatbot de WhatsApp para restaurantes en Panamá",
    description:
      "TapiScan atiende el WhatsApp de tu restaurante, responde preguntas frecuentes, muestra tu menú bilingüe y confirma reservas en español e inglés. Hecho para restaurantes en Panamá.",
    images: ["/Tapiscan-Logo.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TapiScan",
    url: "https://www.tapiscan.com/",
    telephone: "+50760934767",
    email: "info@tapiscan.com",
    areaServed: { "@type": "Country", name: "Panama" },
    serviceType: ["WhatsApp AI receptionist", "Bilingual digital menu", "Restaurant reservation automation"],
    description: "TapiScan atiende el WhatsApp de tu restaurante, responde preguntas frecuentes, muestra tu menú bilingüe y confirma reservas en español e inglés. Hecho para restaurantes en Panamá.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TapiScan",
    url: "https://www.tapiscan.com/",
    inLanguage: "es-PA",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Chatbot de WhatsApp para restaurantes en Panamá",
    provider: { "@type": "Organization", name: "TapiScan" },
    areaServed: { "@type": "Country", name: "Panama" },
    serviceType: "Chatbot de WhatsApp, automatización de reservas de restaurantes, menú digital bilingüe",
    description: "TapiScan atiende el WhatsApp de tu restaurante, responde preguntas frecuentes, muestra tu menú digital bilingüe y confirma reservas en español e inglés — para que no pierdas clientes cuando estás ocupado.",
  },
];

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <LanguageProvider>
          <SiteHeaderRefined />
          <main>{children}</main>
          <SiteFooterRefined />
        </LanguageProvider>
      </body>
    </html>
  );
}
