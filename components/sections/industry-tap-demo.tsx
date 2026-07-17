"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";

import { siteCopy } from "@/content/marketing";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";

interface IndustryCard {
  title: string;
  icon: string;
  tapItem: string;
  opens: string;
  text: string;
}

function TapDemoCard({
  card,
  locale,
  index,
  isInView,
  shouldReduce
}: {
  card: IndustryCard;
  locale: string;
  index: number;
  isInView: boolean;
  shouldReduce: boolean | null;
}) {
  const [tapped, setTapped] = useState(false);
  const tapLabel = locale === "en" ? "Tap: " : "Toca: ";
  const opensLabel = locale === "en" ? "Opens" : "Abre";

  function handleInteraction() {
    setTapped(true);
    setTimeout(() => setTapped(false), 2600);
  }

  return (
    <motion.article
      className={`itd-card${tapped ? " is-tapped" : ""}`}
      initial={shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.48, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onClick={handleInteraction}
      onMouseEnter={handleInteraction}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleInteraction();
        }
      }}
      role="button"
      aria-label={`${card.title} - ${tapLabel}${card.tapItem}`}
    >
      <div className="itd-card-head">
        <span className="itd-card-icon" aria-hidden="true">
          {card.icon}
        </span>
        <h3 className="itd-card-title">{card.title}</h3>
      </div>

      <p className="itd-tap-label">
        <span className="itd-tap-prefix">{tapLabel}</span>
        {card.tapItem}
      </p>

      <div className="itd-tap-zone" aria-hidden="true">
        <div className={`itd-nfc-ring itd-ring-a${tapped ? " is-firing" : ""}`} />
        <div className={`itd-nfc-ring itd-ring-b${tapped ? " is-firing" : ""}`} />
        <div className="itd-nfc-dot" />
        <span className="itd-nfc-label">NFC</span>
      </div>

      <AnimatePresence>
        {tapped && (
          <motion.div
            className="itd-context-card"
            initial={{ opacity: 0, scale: 0.88, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 4 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="itd-ctx-label">{opensLabel}</span>
            <p className="itd-ctx-body">{card.opens}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {!tapped && <p className="itd-card-desc">{card.text}</p>}

      <span className="itd-hint" aria-hidden="true">
        {locale === "en" ? "Tap to demo" : "Toca para ver"}
      </span>
    </motion.article>
  );
}

const stripCopy = {
  en: [
    "Place the access point",
    "Visitor taps or scans",
    "The right page opens"
  ],
  es: [
    "Coloca el punto de acceso",
    "El visitante toca o escanea",
    "Se abre la página correcta"
  ]
};

export function IndustryTapDemo() {
  const { locale } = useLanguage();
  const copy = siteCopy[locale];
  const page = copy.industries;
  const shouldReduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-shell itd-section" ref={ref}>
      <div className="content-shell">
        <SectionHeader
          eyebrow={page.modulesEyebrow}
          title={page.modulesTitle}
          text={page.modulesText}
          align="center"
        />

        <motion.div
          className="itd-universal-strip"
          initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.44, delay: 0.1 }}
        >
          {stripCopy[locale].map((step, index) => (
            <span key={step} className="itd-strip-step">
              {index > 0 && (
                <span className="itd-strip-arrow" aria-hidden="true">
                  {"->"}
                </span>
              )}
              {step}
            </span>
          ))}
        </motion.div>

        <div className="itd-grid">
          {copy.industryCards.map((card, index) => (
            <TapDemoCard
              key={card.title}
              card={card}
              locale={locale}
              index={index}
              isInView={isInView}
              shouldReduce={shouldReduce}
            />
          ))}
        </div>

        <motion.p
          className="itd-bottom-note"
          initial={shouldReduce ? { opacity: 1 } : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.44, delay: 0.72 }}
        >
          {locale === "en"
            ? "Same smart-access platform. Different context, different page, same low-friction result."
            : "El mismo acceso inteligente. Distinto contexto, distinta página, mismo resultado claro."}
        </motion.p>
      </div>
    </section>
  );
}
