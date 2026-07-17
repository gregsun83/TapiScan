"use client";

import Link from "next/link";

import { TapFlowAnimation } from "@/components/marketing/tap-flow-animation";
import { useLanguage } from "@/components/providers/language-provider";

const homeCopy = {
  en: {
    eyebrow: "NFC + QR smart access",
    title: "Tap once. Open the right page.",
    text: "TapiScan connects physical touchpoints to simple digital experiences for restaurants, hotels, and other spaces.",
    pathsLabel: "Choose where to start",
    paths: [
      {
        title: "Restaurants",
        text: "Menus and table-aware service.",
        href: "/restaurants"
      },
      {
        title: "Hotels",
        text: "Rooms, zones, and guest services.",
        href: "/hotels"
      },
      {
        title: "Other Industries",
        text: "Products, exhibits, events, and more.",
        href: "/other-industries"
      }
    ]
  },
  es: {
    eyebrow: "Acceso inteligente NFC + QR",
    title: "Toca una vez. Se abre la página correcta.",
    text: "TapiScan conecta puntos físicos con experiencias digitales simples para restaurantes, hoteles y otros espacios.",
    pathsLabel: "Elige dónde empezar",
    paths: [
      {
        title: "Restaurantes",
        text: "Menús y servicio con contexto de mesa.",
        href: "/restaurants"
      },
      {
        title: "Hoteles",
        text: "Habitaciones, zonas y servicios para huéspedes.",
        href: "/hotels"
      },
      {
        title: "Otras industrias",
        text: "Productos, exhibiciones, eventos y más.",
        href: "/other-industries"
      }
    ]
  }
};

export function HeroMotion() {
  const { locale } = useLanguage();
  const copy = homeCopy[locale];

  return (
    <main className="simple-home">
      <section className="simple-home-hero" aria-labelledby="simple-home-title">
        <div className="simple-home-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 id="simple-home-title">{copy.title}</h1>
          <p>{copy.text}</p>
        </div>

        <TapFlowAnimation />

        <nav className="simple-home-paths" aria-label={copy.pathsLabel}>
          {copy.paths.map((path) => (
            <Link key={path.href} href={path.href} className="simple-home-path">
              <span>{path.title}</span>
              <small>{path.text}</small>
            </Link>
          ))}
        </nav>
      </section>
    </main>
  );
}
