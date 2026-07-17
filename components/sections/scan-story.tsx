"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { siteCopy } from "@/content/marketing";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";

function NfcVisual() {
  return (
    <div className="nfc-visual">
      <div className="nfc-ring nfc-ring-a" />
      <div className="nfc-ring nfc-ring-b" />
      <div className="nfc-chip-label">NFC</div>
    </div>
  );
}

function TapVisual() {
  return (
    <div className="tap-visual">
      <div className="tap-particle" />
      <span className="tap-label">tap</span>
    </div>
  );
}

function PhoneVisual({ locale }: { locale: string }) {
  return (
    <div className="mini-phone">
      <p className="mini-brand">Xander&apos;s</p>
      <p className="mini-title">{locale === "en" ? "Menu" : "Menú"}</p>
      <div className="mini-context">
        {locale === "en" ? "Table 12" : "Mesa 12"}
      </div>
    </div>
  );
}

function ContextVisual({ locale }: { locale: string }) {
  return (
    <div className="context-badge">
      <span aria-hidden="true">📍</span>
      <strong>{locale === "en" ? "Table 12" : "Mesa 12"}</strong>
    </div>
  );
}

function StaffVisual({ locale }: { locale: string }) {
  return (
    <div className="mini-console">
      <p className="mini-console-label">
        {locale === "en" ? "Staff" : "Equipo"}
      </p>
      <div className="mini-console-row">
        <span>{locale === "en" ? "Location" : "Ubic."}</span>
        <strong>{locale === "en" ? "T-12" : "M-12"}</strong>
      </div>
      <div className="mini-console-row">
        <span>{locale === "en" ? "Items" : "Ítems"}</span>
        <strong>2</strong>
      </div>
      <div className="mini-console-status">
        {locale === "en" ? "Ready" : "Lista"}
      </div>
    </div>
  );
}

type VisualComponent = ({ locale }: { locale: string }) => React.JSX.Element;

const VISUALS: VisualComponent[] = [
  NfcVisual,
  TapVisual,
  PhoneVisual,
  ContextVisual,
  StaffVisual
];

function StoryStep({
  step,
  index,
  locale,
  shouldReduce
}: {
  step: { title: string; text: string };
  index: number;
  locale: string;
  shouldReduce: boolean | null;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Visual = VISUALS[index];

  return (
    <motion.article
      ref={ref}
      className="story-step"
      initial={shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{
        duration: 0.52,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      <div className="story-visual-wrap">
        <Visual locale={locale} />
      </div>
      <div className="story-step-content">
        <span className="story-step-num">{String(index + 1).padStart(2, "0")}</span>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </div>
    </motion.article>
  );
}

export function ScanStory() {
  const { locale } = useLanguage();
  const copy = siteCopy[locale];
  const shouldReduce = useReducedMotion();

  return (
    <section id="scan-story" className="section-shell scan-story-section">
      <div className="content-shell">
        <SectionHeader
          eyebrow={copy.home.explainerEyebrow}
          title={copy.home.explainerTitle}
          text={copy.home.explainerText}
          align="center"
        />
        <div className="story-steps-grid">
          {copy.explainer.steps.map((step, index) => (
            <StoryStep
              key={step.title}
              step={step}
              index={index}
              locale={locale}
              shouldReduce={shouldReduce}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
