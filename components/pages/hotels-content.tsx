"use client";

import Image from "next/image";

import { FlowSequence, type FlowSequenceCopy } from "@/components/marketing/flow-sequence";
import { useLanguage } from "@/components/providers/language-provider";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeader } from "@/components/ui/section-header";
import { demoHref, siteCopy } from "@/content/marketing";

const HOTEL_FRAMES = Array.from(
  { length: 8 },
  (_, index) => `/reference-assets/tap-flow-hotel/${index + 1}.png`
);

const hotelSequenceCopy: FlowSequenceCopy = {
  en: {
    kicker: "Hotel flow",
    title: "Every zone becomes a service page.",
    stepsLabel: "Hotel tap-flow steps",
    steps: [
      { title: "Guest taps or scans", text: "The guest uses NFC or QR in a room, pool, spa, lounge, or service zone." },
      { title: "Guest services open", text: "The right hotel page opens without an app." },
      { title: "Room or zone is identified", text: "The request starts with the right location already known." },
      { title: "Guest views hotel services", text: "Wi-Fi, room info, amenities, pool, spa, and concierge stay easy to find." },
      { title: "Room service, spa, or concierge", text: "The guest can request food, book spa support, or contact concierge." },
      { title: "Housekeeping or help request", text: "Cleaning, towels, maintenance, and help requests can go to the right team." },
      { title: "Checkout or bill support", text: "The page can guide checkout, account questions, or next steps." },
      { title: "Hotel receives the context", text: "The hotel sees what was requested and where it came from." }
    ]
  },
  es: {
    kicker: "Flujo para hoteles",
    title: "Cada zona abre servicios.",
    stepsLabel: "Pasos del flujo para hoteles",
    steps: [
      { title: "El huésped toca o escanea", text: "El huésped usa NFC o QR en habitación, piscina, spa, lounge o zona de servicio." },
      { title: "Se abren sus servicios", text: "La página correcta del hotel se abre sin descargar app." },
      { title: "Habitación o zona identificada", text: "La solicitud empieza con la ubicación correcta." },
      { title: "Consulta servicios del hotel", text: "Wi-Fi, información, amenidades, piscina, spa y concierge quedan claros." },
      { title: "Pide comida, spa o concierge", text: "El huésped puede pedir room service, apoyo de spa o contactar concierge." },
      { title: "Solicita limpieza o ayuda", text: "Limpieza, toallas, mantenimiento y ayuda llegan al equipo correcto." },
      { title: "Revisa salida o cuenta", text: "La página puede guiar checkout, cuenta o siguientes pasos." },
      { title: "El hotel recibe el contexto", text: "El hotel ve qué se pidió y desde dónde llegó." }
    ]
  }
};

const heroCopy = {
  en: {
    eyebrow: "Hotels",
    title: "The room becomes a guide to services.",
    text: "A room stand, poolside tag, spa desk, or concierge point opens the right guest page.",
    chips: ["Room access", "Service zones", "No app required"]
  },
  es: {
    eyebrow: "Hoteles",
    title: "La habitación se convierte en una guía de servicios.",
    text: "Un stand en habitación, piscina, spa o concierge abre la página correcta.",
    chips: ["Acceso en habitación", "Zonas de servicio", "Sin descargar app"]
  }
};

const serviceCopy = {
  en: {
    eyebrow: "Service zones",
    title: "Hotel-specific, not a restaurant flow with hotel words.",
    text: "Each physical point can open a focused guest page for the room, amenity, or service zone where the guest actually is.",
    zones: [
      "Room access",
      "Wi-Fi",
      "Room service",
      "Pool menu",
      "Spa",
      "Concierge",
      "Feedback",
      "Checkout help"
    ]
  },
  es: {
    eyebrow: "Zonas de servicio",
    title: "Pensado para hotel, no como restaurante renombrado.",
    text: "Cada punto físico puede abrir una página del huésped para la habitación, amenidad o zona donde está.",
    zones: [
      "Habitación",
      "Wi-Fi",
      "Room service",
      "Menú de piscina",
      "Spa",
      "Concierge",
      "Feedback",
      "Ayuda con salida"
    ]
  }
};

export function HotelsContent() {
  const { locale } = useLanguage();
  const copy = siteCopy[locale];
  const hero = heroCopy[locale];
  const services = serviceCopy[locale];

  return (
    <>
      <section className="premium-hero subpage-hero lean-subpage-hero hotel-hero-premium">
        <div className="hero-brand-wash" aria-hidden="true" />
        <div className="premium-hero-inner lean-subpage-hero-inner">
          <div className="premium-hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p>{hero.text}</p>
            <div className="hero-actions">
              <ButtonLink href={demoHref[locale]}>{copy.cta.demo}</ButtonLink>
              <ButtonLink href="/other-industries" variant="secondary">
                {copy.cta.industries}
              </ButtonLink>
            </div>
            <div className="hero-mini-proof">
              {hero.chips.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <figure className="lean-hero-image">
            <Image
              src="/images/use-cases/tapiscan-hotel.png"
              alt={
                locale === "en"
                  ? "Hotel room with TapiScan guest service access."
                  : "Habitación de hotel con acceso de servicios TapiScan."
              }
              fill
              priority
              sizes="(max-width: 900px) 100vw, 44vw"
              className="usecase-image"
            />
          </figure>
        </div>
      </section>

      <section className="section-shell sequence-section">
        <div className="content-shell sequence-shell">
          <FlowSequence
            frames={HOTEL_FRAMES}
            copy={hotelSequenceCopy}
            imageAlt={
              locale === "en"
                ? "Hotel tap flow showing guest services opening from a room or service zone."
                : "Flujo de hotel donde se abren servicios del huésped desde una habitación o zona."
            }
            dense
          />
        </div>
      </section>

      <section className="section-shell surface-band lean-support-section">
        <div className="content-shell hotel-lean-grid">
          <figure className="lean-detail-image">
            <Image
              src="/images/use-cases/tapiscan-hotel-closeup.png"
              alt={
                locale === "en"
                  ? "Close-up of hotel guest services including Wi-Fi, room service, pool, spa, concierge, and feedback."
                  : "Detalle de servicios del hotel con Wi-Fi, room service, piscina, spa, concierge y feedback."
              }
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className="usecase-image"
            />
          </figure>

          <div>
            <SectionHeader eyebrow={services.eyebrow} title={services.title} text={services.text} />
            <div className="lean-chip-grid">
              {services.zones.map((zone) => (
                <span key={zone}>{zone}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell final-cta lean-final-cta">
        <div className="content-shell compact-center">
          <p className="eyebrow">{locale === "en" ? "Hotel demo" : "Demo para hoteles"}</p>
          <h2 className="section-title">
            {locale === "en" ? "Turn guest spaces into service points." : "Convierte espacios del hotel en puntos de servicio."}
          </h2>
          <p className="section-copy">
            {locale === "en"
              ? "Use rooms, pools, spas, lounges, and concierge areas to open the right guest page."
              : "Usa habitaciones, piscina, spa, lounge y concierge para abrir la página correcta del huésped."}
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
