"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/providers/language-provider";

const copy = {
  es: {
    eyebrow: "El proceso",
    h2: "Cómo funciona",
    lead: "Un ciclo completo desde el primer mensaje hasta la confirmación.",
    steps: [
      {
        title: "Cliente escribe por WhatsApp",
        body: "En español, inglés, o mezclado. No importa el horario.",
        icon: <ChatIcon />,
      },
      {
        title: "TapiScan responde de inmediato",
        body: "Horarios, menú, parqueo, preguntas frecuentes — sin esperar.",
        icon: <BoltIcon />,
      },
      {
        title: "Muestra el menú bilingüe",
        body: "En español e inglés, actualizado en tiempo real.",
        icon: <MenuIcon />,
      },
      {
        title: "Confirma la reserva si hay disponibilidad",
        body: "Dentro de las reglas del restaurante. Sin inventar ni prometer de más.",
        icon: <CalIcon />,
      },
      {
        title: "El dueño ve todo organizado",
        body: "Nueva reserva confirmada, historial completo, sin revisar el teléfono.",
        icon: <DashIcon />,
      },
    ],
  },
  en: {
    eyebrow: "The process",
    h2: "How it works",
    lead: "A complete loop from the first message to confirmed reservation.",
    steps: [
      {
        title: "Guest messages on WhatsApp",
        body: "In Spanish, English, or mixed. Anytime.",
        icon: <ChatIcon />,
      },
      {
        title: "TapiScan replies instantly",
        body: "Hours, menu, parking, FAQs — no waiting.",
        icon: <BoltIcon />,
      },
      {
        title: "Shows the bilingual menu",
        body: "In Spanish and English, updated in real time.",
        icon: <MenuIcon />,
      },
      {
        title: "Confirms the reservation if available",
        body: "Within your rules. No guessing, no overpromising.",
        icon: <CalIcon />,
      },
      {
        title: "Owner sees everything in the dashboard",
        body: "New reservation confirmed, full history, without checking the phone.",
        icon: <DashIcon />,
      },
    ],
  },
};

export function WaFlow() {
  const { locale } = useLanguage();
  const c = copy[locale];
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>(".wa-reveal");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );
    els.forEach((el, i) => { el.style.transitionDelay = `${i * 80}ms`; observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wa-section" id="como-funciona" ref={sectionRef}>
      <div className="wa-container">
        <span className="wa-eyebrow">{c.eyebrow}</span>
        <h2 className="wa-h2">{c.h2}</h2>
        <p className="wa-lead">{c.lead}</p>
        <div className="wa-flow-steps">
          {c.steps.map((step, i) => (
            <div className="wa-flow-step wa-reveal" key={i}>
              <div className="wa-flow-num">{step.icon}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
  );
}
function CalIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      <polyline points="9 16 11 18 15 14"/>
    </svg>
  );
}
function DashIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
      <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
    </svg>
  );
}
