"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import { siteCopy } from "@/content/marketing";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";

const flowPanels = {
  en: [
    {
      title: "Guest menu",
      tag: "Table 12",
      lines: ["Bilingual categories", "Menu items and notes", "No app required"]
    },
    {
      title: "Staged request",
      tag: "Review gate",
      lines: ["Guest request prepared", "Table context attached", "Staff decides next step"]
    },
    {
      title: "POS and kitchen",
      tag: "Operations",
      lines: ["POS accepts the request", "Kitchen receives the ticket", "Reports and payments stay aligned"]
    }
  ],
  es: [
    {
      title: "Menú del cliente",
      tag: "Mesa 12",
      lines: ["Categorías bilingües", "Ítems y notas", "Sin descargar app"]
    },
    {
      title: "Solicitud preparada",
      tag: "Revisión",
      lines: ["Solicitud lista", "Mesa identificada", "El equipo decide el siguiente paso"]
    },
    {
      title: "POS y cocina",
      tag: "Operaciones",
      lines: ["POS acepta la solicitud", "Cocina recibe el ticket", "Pagos y reportes quedan alineados"]
    }
  ]
};

export function RestaurantFlowAnimated() {
  const { locale } = useLanguage();
  const copy = siteCopy[locale];
  const page = copy.restaurants;
  const panels = flowPanels[locale];
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-shell rfa-section rfa-section-premium" ref={ref}>
      <div className="content-shell">
        <SectionHeader eyebrow={page.flowEyebrow} title={page.flowTitle} text={page.flowText} />

        <div className="rfa-stage">
          {panels.map((panel, index) => (
            <div key={panel.title} className="rfa-stage-group">
              <motion.article
                className={`rfa-stage-card${index === 2 ? " is-ops" : ""}`}
                initial={shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : undefined}
                transition={{
                  duration: 0.52,
                  delay: index * 0.14 + 0.06,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <span className="rfa-stage-tag">{panel.tag}</span>
                <h3>{panel.title}</h3>
                <div className="rfa-stage-lines">
                  {panel.lines.map((line) => (
                    <div key={line} className="rfa-stage-line">
                      <span>{line}</span>
                      <span className="rfa-stage-dot" />
                    </div>
                  ))}
                </div>
              </motion.article>

              {index < panels.length - 1 ? (
                <div className="rfa-stage-connector" aria-hidden="true">
                  <motion.div
                    className="rfa-stage-beam"
                    initial={shouldReduce ? { scaleX: 1 } : { scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : undefined}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.16 + 0.32,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{ originX: 0 }}
                  />
                  <div className="rfa-stage-packet" style={{ animationDelay: `${index * 0.4}s` }} />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <motion.p
          className="rfa-note"
          initial={shouldReduce ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.48, delay: 0.82 }}
        >
          {locale === "en"
            ? "The guest never bypasses operations. TapiScan keeps the menu fast for the customer and the review gate clear for the business."
            : "El cliente no salta la operación. TapiScan mantiene el menú rápido para el cliente y la revisión clara para el negocio."}
        </motion.p>
      </div>
    </section>
  );
}
