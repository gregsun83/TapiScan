"use client";

import type { CSSProperties } from "react";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { siteCopy } from "@/content/marketing";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";

function IconRoom() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 17v-4h6v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 2L3 6h14L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function IconPool() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconLounge() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 12V8a1 1 0 011-1h12a1 1 0 011 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 12h16v3H2z" stroke="currentColor" strokeWidth="1.5" rx="1" />
      <path d="M5 15v2M15 15v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconAmenities() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2l1.8 3.6L16 6.4l-3 2.9.7 4.1L10 11.3l-3.7 2 .7-4.1L4 6.4l4.2-.8L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

interface Zone {
  id: string;
  labelEn: string;
  labelEs: string;
  descEn: string;
  descEs: string;
  requestEn: string;
  requestEs: string;
  Icon: () => JSX.Element;
  color: string;
}

const zones: Zone[] = [
  {
    id: "room",
    labelEn: "Room 412",
    labelEs: "Hab. 412",
    descEn: "Tap on the desk or bedside touchpoint",
    descEs: "Toque en el escritorio o junto a la cama",
    requestEn: "Extra towels requested",
    requestEs: "Solicitud de toallas extra",
    Icon: IconRoom,
    color: "var(--blue-soft)"
  },
  {
    id: "pool",
    labelEn: "Poolside",
    labelEs: "Piscina",
    descEn: "Tap at the lounger service point",
    descEs: "Toque en el punto de servicio de la silla",
    requestEn: "Pool menu opened",
    requestEs: "Menú de piscina abierto",
    Icon: IconPool,
    color: "var(--aqua)"
  },
  {
    id: "lounge",
    labelEn: "Lounge",
    labelEs: "Lounge",
    descEn: "Tap at the table touchpoint",
    descEs: "Toque en el punto de la mesa",
    requestEn: "Cocktail service requested",
    requestEs: "Solicitud de cócteles enviada",
    Icon: IconLounge,
    color: "var(--mint)"
  },
  {
    id: "spa",
    labelEn: "Spa",
    labelEs: "Spa",
    descEn: "Tap at the spa reception stand",
    descEs: "Toque en el stand del spa",
    requestEn: "Treatment booking started",
    requestEs: "Reserva de tratamiento iniciada",
    Icon: IconAmenities,
    color: "var(--amber)"
  }
];

function ZoneCard({
  zone,
  locale,
  index,
  isInView,
  shouldReduce
}: {
  zone: Zone;
  locale: string;
  index: number;
  isInView: boolean;
  shouldReduce: boolean | null;
}) {
  const label = locale === "en" ? zone.labelEn : zone.labelEs;
  const desc = locale === "en" ? zone.descEn : zone.descEs;
  const request = locale === "en" ? zone.requestEn : zone.requestEs;
  const Icon = zone.Icon;

  return (
    <motion.div
      className="hf-zone-card"
      initial={shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.52, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ "--zone-color": zone.color } as CSSProperties}
    >
      <div className="hf-zone-head">
        <div className="hf-zone-icon">
          <Icon />
        </div>
        <div>
          <span className="hf-zone-label">{label}</span>
          <p className="hf-zone-desc">{desc}</p>
        </div>
      </div>

      <div className="hf-tap-row" aria-hidden="true">
        <div className="hf-nfc-dot">
          <div className="hf-nfc-ring hf-ring-a" />
          <div className="hf-nfc-ring hf-ring-b" />
          <div className="hf-nfc-core" />
        </div>
        <div className="hf-tap-beam" />
      </div>

      <motion.div
        className="hf-result-card"
        initial={shouldReduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : undefined}
        transition={{
          duration: 0.42,
          delay: index * 0.1 + 0.38,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <span className="hf-result-label">
          {locale === "en" ? "Hotel receives" : "El hotel recibe"}
        </span>
        <strong>{request}</strong>
        <div className="hf-result-zone">
          {locale === "en" ? "Zone: " : "Zona: "}
          {label}
        </div>
      </motion.div>
    </motion.div>
  );
}

const flowCaption = {
  en: ["Guest taps the zone", "The right page opens", "Hotel receives the context"],
  es: ["El huésped toca la zona", "Se abre la página correcta", "El hotel recibe el contexto"]
};

export function HotelFlow() {
  const { locale } = useLanguage();
  const copy = siteCopy[locale];
  const page = copy.hotels;
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-shell hf-section" ref={ref}>
      <div className="content-shell">
        <SectionHeader
          eyebrow={page.zonesEyebrow}
          title={page.zonesTitle}
          text={page.zonesText}
          align="center"
        />

        <motion.div
          className="hf-flow-caption"
          initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.44, delay: 0.1 }}
        >
          {flowCaption[locale].map((label, index) => (
            <span key={label} className="hf-caption-step">
              {index > 0 && (
                <span className="hf-caption-arrow" aria-hidden="true">
                  {"->"}
                </span>
              )}
              {label}
            </span>
          ))}
        </motion.div>

        <div className="hf-zones-grid">
          {zones.map((zone, index) => (
            <ZoneCard
              key={zone.id}
              zone={zone}
              locale={locale}
              index={index}
              isInView={isInView}
              shouldReduce={shouldReduce}
            />
          ))}
        </div>

        <motion.p
          className="hf-bottom-note"
          initial={shouldReduce ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.44, delay: 0.72 }}
        >
          {locale === "en"
            ? "No app download. No front desk call. No guessing where the request came from."
            : "Sin descargar app. Sin llamar a recepción. Sin adivinar de dónde llegó la solicitud."}
        </motion.p>
      </div>
    </section>
  );
}
