"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/components/providers/language-provider";

const storyCopy = {
  en: {
    eyebrow: "How it works",
    title: "From tap to service, clearly.",
    intro: "The same simple flow works for tables, rooms, zones, and products: tap, open, continue.",
    steps: [
      {
        title: "Guest taps or scans",
        text: "A guest taps the stand or scans the QR at the touchpoint that matters.",
        status: "Touchpoint detected",
        context: "NFC stand at Table 12",
        lines: ["No app download", "Table 12 ready", "Guest on site"],
        action: "Waiting for guest"
      },
      {
        title: "Correct page opens",
        text: "The menu or service page opens immediately for that exact table, room, zone, or product.",
        status: "Menu opened",
        context: "Table 12 attached",
        lines: ["Bilingual menu", "Branded categories", "Zone-specific destination"],
        action: "Page ready"
      },
      {
        title: "Context is attached automatically",
        text: "The session already knows the table, room, zone, or product without asking the guest to explain it.",
        status: "Context attached",
        context: "Mesa / table: 12",
        lines: ["Table 12", "Lunch service", "Guest context locked"],
        action: "Context ready"
      },
      {
        title: "Guest browses, requests, or orders",
        text: "The guest can browse items, ask for help, or stage a request from that page.",
        status: "Request staged",
        context: "Club sandwich + water",
        lines: ["Menu item selected", "Add service note", "Review before sending"],
        action: "Stage request"
      },
      {
        title: "Business receives the request",
        text: "Staff receives the request with the right context before it reaches POS, kitchen, or the next operational step.",
        status: "Staff review",
        context: "Business receives",
        lines: ["Table 12 attached", "Guest request queued", "Ready for POS review"],
        action: "Send to operations"
      }
    ]
  },
  es: {
    eyebrow: "Cómo funciona",
    title: "Del toque al servicio, claro.",
    intro: "El mismo flujo simple funciona para mesas, habitaciones, zonas y productos: tocar, abrir y continuar.",
    steps: [
      {
        title: "El cliente toca o escanea",
        text: "El cliente toca el stand o escanea el QR en el punto físico que importa.",
        status: "Punto detectado",
        context: "Stand NFC en Mesa 12",
        lines: ["Sin descargar app", "Mesa 12 lista", "Cliente en sitio"],
        action: "Esperando al cliente"
      },
      {
        title: "Se abre la página correcta",
        text: "El menú o la página de servicio abre al instante para esa mesa, habitación, zona o producto.",
        status: "Menú abierto",
        context: "Mesa 12 identificada",
        lines: ["Menú bilingüe", "Categorías de marca", "Destino correcto"],
        action: "Página lista"
      },
      {
        title: "La mesa o zona queda identificada",
        text: "La sesión ya sabe la mesa, habitación, zona o producto sin pedirle al cliente que lo explique.",
        status: "Contexto listo",
        context: "Mesa: 12",
        lines: ["Mesa 12", "Servicio de almuerzo", "Contexto confirmado"],
        action: "Contexto listo"
      },
      {
        title: "El cliente consulta, pide o ordena",
        text: "El cliente puede ver ítems, pedir ayuda o preparar una solicitud desde esa página.",
        status: "Solicitud preparada",
        context: "Club sandwich + agua",
        lines: ["Ítem elegido", "Nota de servicio", "Revisión antes de enviar"],
        action: "Preparar solicitud"
      },
      {
        title: "El negocio recibe la solicitud",
        text: "El negocio recibe la solicitud con el contexto correcto antes de pasarla a POS, cocina u operaciones.",
        status: "Revisión del equipo",
        context: "Lo recibe el negocio",
        lines: ["Mesa 12 identificada", "Solicitud en cola", "Lista para revisión POS"],
        action: "Enviar a operaciones"
      }
    ]
  }
};

export function StickyScanStory() {
  const { locale } = useLanguage();
  const story = storyCopy[locale];
  const shouldReduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    if (shouldReduce) return;
    return scrollYProgress.on("change", (value) => {
      const nextStep = Math.min(story.steps.length - 1, Math.floor(value * story.steps.length));
      setActiveStep(nextStep);
    });
  }, [scrollYProgress, shouldReduce, story.steps.length]);

  const active = story.steps[activeStep];

  return (
    <section
      id="scan-story"
      className="sticky-story-outer sticky-story-premium"
      ref={containerRef}
      style={{ position: "relative" }}
    >
      <div className="sticky-story-pin">
        <div className="content-shell sticky-story-grid sticky-story-grid-premium">
          <div className="ss-left ss-left-premium">
            <p className="eyebrow">{story.eyebrow}</p>
            <h2 className="section-title ss-section-title">{story.title}</h2>
            <p className="section-copy ss-story-intro">{story.intro}</p>
            <div className="ss-step-list ss-step-list-premium">
              {story.steps.map((step, index) => (
                <div key={step.title} className={`ss-step${index === activeStep ? " is-active" : ""}`}>
                  <span className="ss-step-num">{String(index + 1).padStart(2, "0")}</span>
                  <div className="ss-step-body">
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ss-right ss-right-premium">
            <div className="ss-scene-frame ss-scene-frame-premium">
              <div className="ss-demo-surface">
                <div className="ss-demo-touchpoint">
                  <Image
                    src="/images/nfc-stand-generic.png"
                    alt=""
                    width={300}
                    height={450}
                    className="ss-demo-stand"
                    priority
                  />
                  <span className="ss-demo-ring ss-demo-ring-a" />
                  <span className="ss-demo-ring ss-demo-ring-b" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${locale}-${activeStep}`}
                    className="ss-demo-phone-shell"
                    initial={shouldReduce ? false : { opacity: 0, y: 18, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={shouldReduce ? undefined : { opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.44, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="device-topbar">
                      <span>{active.context}</span>
                      <span>{active.status}</span>
                    </div>
                    <div className="hero-phone-screen hero-phone-screen-real ss-demo-screen">
                      <p>{locale === "en" ? "Guest page" : "Página del cliente"}</p>
                      <h3>{active.status}</h3>
                      <div className="hero-demo-context-badge">{active.context}</div>
                      <div className="hero-demo-line-group">
                        {active.lines.map((line) => (
                          <div key={line} className="hero-demo-line-row">
                            <span>{line}</span>
                            <span className="hero-demo-dot" />
                          </div>
                        ))}
                      </div>
                      <button className="hero-demo-action">{active.action}</button>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="ss-demo-review-card">
                  <span>{locale === "en" ? "Business view" : "Vista del negocio"}</span>
                  <strong>{active.status}</strong>
                  <ul>
                    {active.lines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="ss-progress-track" role="presentation" aria-hidden="true">
              {story.steps.map((_, index) => (
                <div key={index} className={`ss-progress-dot${index === activeStep ? " is-active" : ""}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="ss-mobile">
        <div className="content-shell">
          <p className="eyebrow">{story.eyebrow}</p>
          <h2 className="section-title">{story.title}</h2>
          <p className="section-copy ss-mobile-intro">{story.intro}</p>
          <div className="ss-mobile-list">
            {story.steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="ss-mobile-step"
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.48, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="ss-step-num">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
