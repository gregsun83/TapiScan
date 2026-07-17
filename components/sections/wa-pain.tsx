"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/providers/language-provider";

const copy = {
  es: {
    eyebrow: "El problema",
    h2: "Tu WhatsApp no espera a que termine el rush.",
    lead: "Mientras cocinas, atiendes mesas o simplemente estás fuera, los clientes escriben — y si no hay respuesta, buscan otro restaurante.",
    cards: [
      {
        title: "Reservas perdidas a medianoche",
        body: "Los clientes preguntan a las 11 p.m. Nadie responde. Mañana reservan en otro lado.",
      },
      {
        title: "Las mismas preguntas, una y otra vez",
        body: "Horarios, parqueo, menú, opciones vegetarianas. TapiScan las responde sin que intervengas.",
      },
      {
        title: "El rush es el peor momento para contestar",
        body: "Cuando más ocupado estás, más mensajes llegan. Ahora tienes una recepcionista que nunca para.",
      },
    ],
  },
  en: {
    eyebrow: "The problem",
    h2: "Your WhatsApp doesn't wait for the rush to end.",
    lead: "While you're cooking, serving tables, or simply away, customers are writing — and if there's no reply, they book somewhere else.",
    cards: [
      {
        title: "Reservations lost at midnight",
        body: "Guests ask at 11 p.m. No answer. Tomorrow they book somewhere else.",
      },
      {
        title: "The same questions, over and over",
        body: "Hours, parking, menu, vegetarian options. TapiScan handles them without you.",
      },
      {
        title: "Rush hour is the worst time to answer",
        body: "Your busiest moments are when messages flood in. Now you have a receptionist who never stops.",
      },
    ],
  },
};

const icons = [
  <svg key="clock" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  <svg key="chat" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  <svg key="zap" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
];

export function WaPain() {
  const { locale } = useLanguage();
  const c = copy[locale];
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".wa-reveal");
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    cards.forEach((el, i) => {
      el.style.transitionDelay = `${i * 90}ms`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wa-section wa-section-soft" ref={sectionRef}>
      <div className="wa-container">
        <span className="wa-eyebrow">{c.eyebrow}</span>
        <h2 className="wa-h2" style={{ maxWidth: "48rem" }}>{c.h2}</h2>
        <p className="wa-lead">{c.lead}</p>
        <div className="wa-pain-grid">
          {c.cards.map((card, i) => (
            <div className="wa-pain-card wa-reveal" key={i}>
              <div className="wa-pain-icon">{icons[i]}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
