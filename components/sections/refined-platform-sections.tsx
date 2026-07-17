"use client";

import { demoHref, siteCopy } from "@/content/marketing";
import { useLanguage } from "@/components/providers/language-provider";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeader } from "@/components/ui/section-header";

const platformLanes = {
  en: [
    {
      title: "What the customer sees",
      text: "The right branded page opens from the right table, room, zone, or product.",
      items: ["NFC and QR access", "Hosted menus or pages", "Automatic context"]
    },
    {
      title: "What the business receives",
      text: "The business gets the request with the right context before anything reaches operations.",
      items: ["Service intent attached", "Staff review", "Operational handoff"]
    },
    {
      title: "What you can add later",
      text: "Once access is live, add more control, presentation, and monetization in phases.",
      items: ["POS and payment records", "Ad-free hosting", "Reviews, AR, and analytics"]
    }
  ],
  es: [
    {
      title: "Lo que ve el cliente",
      text: "La página correcta abre desde la mesa, habitación, zona o producto correcto.",
      items: ["Acceso NFC y QR", "Menús o páginas alojadas", "Contexto automático"]
    },
    {
      title: "Lo que recibe el negocio",
      text: "El negocio recibe la solicitud con el contexto correcto antes de moverla a operaciones.",
      items: ["Solicitud identificada", "Revisión del equipo", "Paso a operaciones"]
    },
    {
      title: "Lo que puedes agregar después",
      text: "Cuando el acceso ya funciona, agregas herramientas comerciales y operativas por fases.",
      items: ["POS y pagos", "Hosting sin anuncios", "Reseñas, AR y analítica"]
    }
  ]
};

export function RefinedModuleOverview() {
  const { locale } = useLanguage();
  const lanes = platformLanes[locale];
  const heading =
    locale === "en"
      ? {
          eyebrow: "Platform layers",
          title: "What the guest sees. What the business gets.",
          text: "Start with a clear tap experience. Add operations and premium tools when the venue is ready."
        }
      : {
          eyebrow: "Cómo se organiza",
          title: "Lo que ve el cliente. Lo que recibe el negocio.",
          text: "Empieza con una experiencia clara. Agrega operación y herramientas premium cuando el local esté listo."
        };

  return (
    <section className="section-shell platform-section">
      <div className="content-shell">
        <div className="split-intro split-intro-platform">
          <SectionHeader
            eyebrow={heading.eyebrow}
            title={heading.title}
            text={heading.text}
          />
          <div className="platform-lanes-grid">
            {lanes.map((lane, index) => (
              <article key={lane.title} className="platform-lane-card">
                <span className="platform-lane-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{lane.title}</h3>
                <p>{lane.text}</p>
                <ul>
                  {lane.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function RefinedIndustryChoice() {
  const { locale } = useLanguage();
  const copy = siteCopy[locale];

  const restaurantsText =
    locale === "en"
      ? "Menus, table context, staff review, POS, kitchen, payments, and hardware."
      : "Menús, mesa identificada, revisión del equipo, POS, cocina, pagos y hardware.";

  const hotelsText =
    locale === "en"
      ? "Room access, service zones, poolside, lounge, guest info, and requests."
      : "Acceso en habitación, zonas de servicio, piscina, lounge, información y solicitudes.";

  const industriesText =
    locale === "en"
      ? "Showrooms, clinics, museums, real estate, and events built on the same smart-access logic."
      : "Showrooms, clínicas, museos, bienes raíces y eventos con el mismo acceso simple.";

  return (
    <section className="section-shell path-section">
      <div className="content-shell">
        <SectionHeader
          eyebrow={copy.home.industryEyebrow}
          title={copy.home.industryTitle}
          text={copy.home.industryText}
          align="center"
        />
        <div className="path-panels">
          <article className="path-panel primary">
            <span className="path-label">01</span>
            <h3>{locale === "en" ? "Restaurants" : "Restaurantes"}</h3>
            <p>{restaurantsText}</p>
            <ButtonLink href="/restaurants">{copy.cta.restaurants}</ButtonLink>
          </article>

          <article className="path-panel">
            <span className="path-label">02</span>
            <h3>{locale === "en" ? "Hotels" : "Hoteles"}</h3>
            <p>{hotelsText}</p>
            <ButtonLink href="/hotels" variant="secondary">
              {copy.cta.hotels}
            </ButtonLink>
          </article>

          <article className="path-panel">
            <span className="path-label">03</span>
            <h3>{locale === "en" ? "Other Industries" : "Otras industrias"}</h3>
            <p>{industriesText}</p>
            <ButtonLink href="/other-industries" variant="secondary">
              {copy.cta.industries}
            </ButtonLink>
          </article>
        </div>
      </div>
    </section>
  );
}

export function RefinedFinalCta() {
  const { locale } = useLanguage();
  const copy = siteCopy[locale];

  return (
    <section className="section-shell final-cta">
      <div className="content-shell compact-center">
        <p className="eyebrow">{copy.home.finalEyebrow}</p>
        <h2 className="section-title">{copy.home.finalTitle}</h2>
        <p className="section-copy">{copy.home.finalText}</p>
        <div className="center-actions">
          <ButtonLink href={demoHref[locale]}>{copy.cta.demo}</ButtonLink>
          <ButtonLink href="mailto:info@tapiscan.com" variant="secondary">
            {copy.cta.email}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
