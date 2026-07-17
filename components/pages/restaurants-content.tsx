"use client";

import { FlowSequence, type FlowSequenceCopy } from "@/components/marketing/flow-sequence";
import { useLanguage } from "@/components/providers/language-provider";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeader } from "@/components/ui/section-header";
import { demoHref, siteCopy } from "@/content/marketing";

const RESTAURANT_FRAMES = Array.from(
  { length: 8 },
  (_, index) => `/reference-assets/tap-flow-restaurant/${index + 1}.png`
);

const restaurantSequenceCopy: FlowSequenceCopy = {
  en: {
    kicker: "Restaurant flow",
    title: "From table tap to staff review.",
    stepsLabel: "Restaurant tap-flow steps",
    steps: [
      { title: "Guest taps or scans", text: "NFC or QR opens the restaurant experience from the table." },
      { title: "Menu opens", text: "The guest sees the correct menu without downloading an app." },
      { title: "Table is identified", text: "The table or service zone travels with the visit." },
      { title: "Guest browses items", text: "Categories, items, notes, and languages stay easy to scan." },
      { title: "Request or order is prepared", text: "The guest can ask, request service, or prepare an order." },
      { title: "Staff reviews", text: "The team receives the request with table context before it moves forward." },
      { title: "POS keeps control", text: "Cashier and waiter workflows remain controlled inside the TapiScan ecosystem." },
      { title: "Kitchen and payment align", text: "Kitchen routing, payment, hardware, and rollout stay organized by phase." }
    ]
  },
  es: {
    kicker: "Flujo para restaurantes",
    title: "De la mesa al equipo.",
    stepsLabel: "Pasos del flujo para restaurantes",
    steps: [
      { title: "El cliente toca o escanea", text: "NFC o QR abre la experiencia del restaurante desde la mesa." },
      { title: "El menú se abre", text: "El cliente ve el menú correcto sin descargar app." },
      { title: "La mesa queda identificada", text: "La mesa o zona de servicio viaja con la visita." },
      { title: "El cliente revisa productos", text: "Categorías, productos, notas e idiomas se leen con facilidad." },
      { title: "Agrega o solicita", text: "El cliente puede consultar, pedir servicio o preparar una orden." },
      { title: "El equipo revisa", text: "El equipo recibe la solicitud con la mesa correcta antes de avanzar." },
      { title: "El POS mantiene control", text: "Caja y meseros trabajan dentro del mismo ecosistema TapiScan." },
      { title: "Cocina y cobro se alinean", text: "Cocina, cobro, hardware y despliegue se ordenan por fases." }
    ]
  }
};

const heroCopy = {
  en: {
    eyebrow: "Restaurants",
    title: "Every table opens the right menu.",
    text: "Guests tap, browse, and send requests with table context already included.",
    chips: ["No app required", "Bilingual menu", "POS-ready flow"],
    summary: [
      { title: "Access", text: "NFC and QR at tables, counters, rooms, or zones." },
      { title: "Request", text: "Orders and service requests arrive with context." },
      { title: "Control", text: "Staff review, POS, kitchen, payment, and rollout stay phased." }
    ]
  },
  es: {
    eyebrow: "Restaurantes",
    title: "Cada mesa abre el menú correcto.",
    text: "El cliente toca, revisa y envía solicitudes con la mesa ya identificada.",
    chips: ["Sin descargar app", "Menú bilingüe", "Flujo listo para POS"],
    summary: [
      { title: "Acceso", text: "NFC y QR en mesas, barras, salones o zonas." },
      { title: "Solicitud", text: "Pedidos y consultas llegan con el contexto correcto." },
      { title: "Control", text: "Equipo, POS, cocina, cobro y despliegue avanzan por fases." }
    ]
  }
};

const supportCopy = {
  en: {
    eyebrow: "What stays organized",
    title: "A restaurant path that stays light for guests and controlled for staff.",
    text: "TapiScan can start as a menu and grow into service requests, staff review, POS, kitchen, payment, and hardware without forcing every feature on day one.",
    cards: [
      { title: "Customer and menu", text: "A simple tap opens the menu, languages, notes, categories, and service actions." },
      { title: "Waiter and cashier", text: "The team can review requests before they become operational work." },
      { title: "Kitchen and payment", text: "Routing, printers, payment, and reporting can be introduced when the restaurant is ready." },
      { title: "Hardware rollout", text: "NFC, QR, stands, tablets, printers, and POS pieces can be phased by location." }
    ]
  },
  es: {
    eyebrow: "Lo que queda ordenado",
    title: "Un flujo ligero para el cliente y controlado para el equipo.",
    text: "TapiScan puede empezar como menú y crecer hacia solicitudes, revisión, POS, cocina, cobro y hardware sin activar todo desde el primer día.",
    cards: [
      { title: "Cliente y menú", text: "Un toque abre el menú, idiomas, notas, categorías y acciones de servicio." },
      { title: "Mesero y caja", text: "El equipo revisa solicitudes antes de convertirlas en trabajo operativo." },
      { title: "Cocina y cobro", text: "Ruteo, impresoras, pagos y reportes pueden entrar cuando el restaurante esté listo." },
      { title: "Despliegue de hardware", text: "NFC, QR, stands, tablets, impresoras y POS se pueden implementar por fases." }
    ]
  }
};

export function RestaurantsContent() {
  const { locale } = useLanguage();
  const copy = siteCopy[locale];
  const hero = heroCopy[locale];
  const support = supportCopy[locale];

  return (
    <>
      <section className="premium-hero subpage-hero lean-subpage-hero restaurant-hero-premium">
        <div className="hero-brand-wash" aria-hidden="true" />
        <div className="premium-hero-inner lean-subpage-hero-inner">
          <div className="premium-hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p>{hero.text}</p>
            <div className="hero-actions">
              <ButtonLink href={demoHref[locale]}>{copy.cta.demo}</ButtonLink>
              <ButtonLink href="/hotels" variant="secondary">
                {copy.cta.hotels}
              </ButtonLink>
            </div>
            <div className="hero-mini-proof">
              {hero.chips.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="lean-hero-summary" aria-label={locale === "en" ? "Restaurant flow summary" : "Resumen del flujo para restaurantes"}>
            {hero.summary.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell sequence-section">
        <div className="content-shell sequence-shell">
          <FlowSequence
            frames={RESTAURANT_FRAMES}
            copy={restaurantSequenceCopy}
            imageAlt={
              locale === "en"
                ? "Restaurant tap flow showing a guest opening a menu, browsing items, and sending a request to staff."
                : "Flujo de restaurante donde el cliente abre el menú, revisa productos y envía una solicitud al equipo."
            }
            dense
          />
        </div>
      </section>

      <section className="section-shell surface-band lean-support-section">
        <div className="content-shell">
          <SectionHeader eyebrow={support.eyebrow} title={support.title} text={support.text} />
          <div className="lean-support-grid">
            {support.cards.map((card, index) => (
              <article key={card.title} className="lean-support-card">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell final-cta lean-final-cta">
        <div className="content-shell compact-center">
          <p className="eyebrow">{locale === "en" ? "Restaurant demo" : "Demo para restaurantes"}</p>
          <h2 className="section-title">
            {locale === "en" ? "See the restaurant path with your menu." : "Mira el flujo con tu menú."}
          </h2>
          <p className="section-copy">
            {locale === "en"
              ? "Start with access and menu clarity, then add the POS and kitchen pieces when the operation is ready."
              : "Empieza con acceso y menú claro, luego agrega POS y cocina cuando la operación esté lista."}
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
