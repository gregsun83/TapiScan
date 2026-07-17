"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/providers/language-provider";

const copy = {
  es: {
    eyebrow: "Lo que incluye",
    h2: "Qué incluye TapiScan",
    cards: [
      { title: "Asistente de WhatsApp",         body: "Responde mensajes 24/7 con información real de tu restaurante.",                           icon: <WaIcon /> },
      { title: "Menú digital bilingüe",          body: "Tu menú en español e inglés, siempre actualizado, sin apps.",                             icon: <MenuIcon /> },
      { title: "Traducción profesional",         body: "Las respuestas suenan naturales en ambos idiomas, no como una traducción automática.",    icon: <GlobeIcon /> },
      { title: "Reservas confirmadas",           body: "Confirma reservas dentro de tus reglas y disponibilidad. El cliente sabe de inmediato.",  icon: <CalIcon /> },
      { title: "Pase al humano",                 body: "Lo que TapiScan no puede resolver, lo escala contigo claramente.",                       icon: <PersonIcon /> },
      { title: "QR y NFC para mesas",            body: "Incluye menú QR y soporte para tapas NFC en mesa.",                                      icon: <NfcIcon /> },
      { title: "Soporte el mismo día hábil",     body: "Si algo necesitas ajustar, lo resolvemos contigo directamente.",                         icon: <SupportIcon /> },
    ],
  },
  en: {
    eyebrow: "What's included",
    h2: "What TapiScan includes",
    cards: [
      { title: "WhatsApp assistant",            body: "Responds to messages 24/7 with your restaurant's real information.",                      icon: <WaIcon /> },
      { title: "Bilingual digital menu",        body: "Your menu in Spanish and English, always up to date, no apps needed.",                    icon: <MenuIcon /> },
      { title: "Professional translation",      body: "Responses sound natural in both languages, not like machine translation.",                icon: <GlobeIcon /> },
      { title: "Confirmed reservations",        body: "Confirms bookings within your rules and availability. The guest knows right away.",        icon: <CalIcon /> },
      { title: "Human handoff",                 body: "What TapiScan can't resolve, it escalates to you clearly.",                              icon: <PersonIcon /> },
      { title: "QR and NFC for tables",         body: "Includes QR menu and NFC table tags.",                                                   icon: <NfcIcon /> },
      { title: "Same-business-day support",     body: "If you need anything adjusted, we resolve it with you directly.",                        icon: <SupportIcon /> },
    ],
  },
};

export function WaIncludes() {
  const { locale } = useLanguage();
  const c = copy[locale];
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll<HTMLElement>(".wa-reveal");
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );
    cards.forEach((el, i) => { el.style.transitionDelay = `${i * 70}ms`; observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="wa-section" id="que-incluye" ref={sectionRef}>
      <div className="wa-container">
        <span className="wa-eyebrow">{c.eyebrow}</span>
        <h2 className="wa-h2">{c.h2}</h2>
        <div className="wa-includes-grid">
          {c.cards.map((card, i) => (
            <div className="wa-include-card wa-reveal" key={i}>
              <div className="wa-include-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
}
function MenuIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>;
}
function GlobeIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
}
function CalIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 16 11 18 15 14"/></svg>;
}
function PersonIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
}
function NfcIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>;
}
function SupportIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.84 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.18v-.26z"/></svg>;
}
