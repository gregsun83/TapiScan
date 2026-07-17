"use client";

import Image from "next/image";

import { FlowSequence, type FlowSequenceCopy } from "@/components/marketing/flow-sequence";
import { useLanguage } from "@/components/providers/language-provider";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeader } from "@/components/ui/section-header";
import { demoHref, siteCopy } from "@/content/marketing";

const OTHER_FRAMES = Array.from(
  { length: 8 },
  (_, index) => `/reference-assets/tap-flow-other/T${index + 1}.png`
);

const otherSequenceCopy: FlowSequenceCopy = {
  en: {
    kicker: "Other industries",
    title: "The same tap logic adapts to the place.",
    stepsLabel: "Other industry tap-flow steps",
    steps: [
      { title: "Showroom product tag", text: "A product tag opens dimensions, materials, finishes, pricing, or quote steps." },
      { title: "Museum exhibit label", text: "An exhibit label opens bilingual context, audio direction, or related pieces." },
      { title: "Spa or wellness reception", text: "A reception point opens services, booking, intake, or private feedback." },
      { title: "Real estate display", text: "A property stand opens gallery, floor plan, price, amenities, and contact." },
      { title: "Trade show booth", text: "A booth point opens company info, demo paths, meetings, brochures, or lead capture." },
      { title: "Clinic reception", text: "A desk stand can guide check-in, prep instructions, forms, or follow-up." },
      { title: "Vehicle showroom", text: "A car display can open specs, trims, financing, inventory, or test-drive requests." },
      { title: "Retail product display", text: "A shelf tag can open product details, comparisons, inventory, or purchase steps." }
    ]
  },
  es: {
    kicker: "Otras industrias",
    title: "La misma lógica se adapta al lugar.",
    stepsLabel: "Pasos del flujo para otras industrias",
    steps: [
      { title: "Etiqueta de producto", text: "Una etiqueta abre medidas, materiales, acabados, precio o cotización." },
      { title: "Exhibición de museo", text: "Una etiqueta abre contexto bilingüe, audio o piezas relacionadas." },
      { title: "Recepción de spa", text: "Un punto en recepción abre servicios, reserva, formulario o feedback privado." },
      { title: "Propiedad o modelo", text: "Un stand abre galería, plano, precio, amenidades y contacto." },
      { title: "Booth de evento", text: "Un punto abre empresa, demo, reunión, brochure o captura de prospecto." },
      { title: "Recepción clínica", text: "Un stand guía registro, preparación, formularios o seguimiento." },
      { title: "Showroom de vehículos", text: "Un vehículo abre ficha, versiones, financiamiento, inventario o prueba de manejo." },
      { title: "Producto en tienda", text: "Una etiqueta abre detalles, comparación, inventario o compra." }
    ]
  }
};

const heroCopy = {
  en: {
    eyebrow: "Other industries",
    title: "Physical points open the right digital page.",
    text: "Use NFC and QR for products, exhibits, clinics, real estate, events, vehicles, retail, and more.",
    chips: ["Physical point", "Correct page", "Next action"]
  },
  es: {
    eyebrow: "Otras industrias",
    title: "El punto físico abre la página correcta.",
    text: "Usa NFC y QR para productos, exhibiciones, clínicas, propiedades, eventos, vehículos, retail y más.",
    chips: ["Punto físico", "Página correcta", "Siguiente acción"]
  }
};

const cardsCopy = {
  en: {
    eyebrow: "Use cases",
    title: "One pattern, many contexts.",
    text: "Each use case stays simple: place the access point where attention already exists, open the relevant page, and guide the next action.",
    labels: ["Physical point", "What opens", "Next action", "Why it matters"],
    cards: [
      {
        title: "Furniture showroom",
        image: "/images/use-cases/tapiscan-sofa.png",
        values: ["Product tag", "Specifications and finishes", "Quote or AR preview", "Sales questions are answered at the display"]
      },
      {
        title: "Museum or exhibit",
        image: "/images/use-cases/tapiscan-museum.png",
        values: ["Exhibit label", "Bilingual guide", "Keep exploring", "The object stays clean while context gets richer"]
      },
      {
        title: "Spa or wellness",
        image: "/images/use-cases/tapiscan-spa.png",
        values: ["Reception stand", "Services and booking", "Reserve or complete intake", "The front desk feels calmer"]
      },
      {
        title: "Real estate",
        image: "/images/use-cases/tapiscan-real-estate.png",
        values: ["Property display", "Listing and floor plan", "Schedule a viewing", "Interest becomes a serious next step"]
      },
      {
        title: "Events and booths",
        image: "/images/use-cases/tapiscan-booth.png",
        values: ["Booth counter", "Company and demo path", "Book or save lead", "The booth keeps working after the conversation"]
      }
    ]
  },
  es: {
    eyebrow: "Casos de uso",
    title: "Un patrón, muchos contextos.",
    text: "Cada caso se mantiene simple: coloca el acceso donde ya existe atención, abre la página relevante y guía el siguiente paso.",
    labels: ["Punto físico", "Se abre", "Siguiente acción", "Por qué importa"],
    cards: [
      {
        title: "Showroom de muebles",
        image: "/images/use-cases/tapiscan-sofa.png",
        values: ["Etiqueta de producto", "Ficha y acabados", "Cotización o vista AR", "Responde preguntas en la exhibición"]
      },
      {
        title: "Museo o exhibición",
        image: "/images/use-cases/tapiscan-museum.png",
        values: ["Etiqueta de exhibición", "Guía bilingüe", "Seguir explorando", "La pieza queda limpia y el contexto crece"]
      },
      {
        title: "Spa o wellness",
        image: "/images/use-cases/tapiscan-spa.png",
        values: ["Stand en recepción", "Servicios y reserva", "Reservar o completar formulario", "La recepción trabaja con menos fricción"]
      },
      {
        title: "Bienes raíces",
        image: "/images/use-cases/tapiscan-real-estate.png",
        values: ["Display de propiedad", "Ficha y plano", "Agendar visita", "El interés se convierte en siguiente paso"]
      },
      {
        title: "Eventos y booths",
        image: "/images/use-cases/tapiscan-booth.png",
        values: ["Counter del booth", "Empresa y demo", "Agendar o guardar prospecto", "El booth sigue trabajando después de hablar"]
      }
    ]
  }
};

export function IndustriesContent() {
  const { locale } = useLanguage();
  const copy = siteCopy[locale];
  const hero = heroCopy[locale];
  const useCases = cardsCopy[locale];

  return (
    <>
      <section className="premium-hero subpage-hero lean-subpage-hero industries-hero-premium">
        <div className="hero-brand-wash" aria-hidden="true" />
        <div className="premium-hero-inner lean-subpage-hero-inner">
          <div className="premium-hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p>{hero.text}</p>
            <div className="hero-actions">
              <ButtonLink href={demoHref[locale]}>{copy.cta.demo}</ButtonLink>
              <ButtonLink href="/restaurants" variant="secondary">
                {copy.cta.restaurants}
              </ButtonLink>
            </div>
            <div className="hero-mini-proof">
              {hero.chips.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="lean-industry-collage" aria-hidden="true">
            {useCases.cards.slice(0, 3).map((card, index) => (
              <figure key={card.title} className={`lean-collage-card card-${index + 1}`}>
                <Image src={card.image} alt="" fill sizes="(max-width: 900px) 100vw, 18vw" className="usecase-image" />
                <figcaption>{card.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell sequence-section">
        <div className="content-shell sequence-shell">
          <FlowSequence
            frames={OTHER_FRAMES}
            copy={otherSequenceCopy}
            imageAlt={
              locale === "en"
                ? "Tap flow examples for showrooms, museums, spas, real estate, events, clinics, vehicles, and retail displays."
                : "Ejemplos de flujo para showrooms, museos, spas, bienes raíces, eventos, clínicas, vehículos y retail."
            }
            dense
          />
        </div>
      </section>

      <section className="section-shell surface-band lean-support-section">
        <div className="content-shell">
          <SectionHeader eyebrow={useCases.eyebrow} title={useCases.title} text={useCases.text} />
          <div className="industry-card-grid">
            {useCases.cards.map((card) => (
              <article key={card.title} className="industry-lean-card">
                <figure>
                  <Image src={card.image} alt="" fill sizes="(max-width: 720px) 100vw, 22vw" className="usecase-image" />
                </figure>
                <div>
                  <h3>{card.title}</h3>
                  <dl>
                    {useCases.labels.map((label, index) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{card.values[index]}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell final-cta lean-final-cta">
        <div className="content-shell compact-center">
          <p className="eyebrow">{locale === "en" ? "Expansion path" : "Camino de expansión"}</p>
          <h2 className="section-title">
            {locale === "en" ? "Map the physical point to the right page." : "Conecta el punto físico con la página correcta."}
          </h2>
          <p className="section-copy">
            {locale === "en"
              ? "Start with one use case, then reuse the same tap logic across more spaces."
              : "Empieza con un caso y reutiliza la misma lógica en más espacios."}
          </p>
          <div className="center-actions">
            <ButtonLink href={demoHref[locale]}>{copy.cta.demo}</ButtonLink>
            <ButtonLink href="mailto:info@tapiscan.com" variant="secondary">
              {copy.cta.email}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
