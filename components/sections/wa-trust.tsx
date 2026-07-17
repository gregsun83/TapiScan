"use client";

import { useLanguage } from "@/components/providers/language-provider";

const copy = {
  es: {
    eyebrow: "Qué esperar",
    h2: "Qué puede esperar tu restaurante",
    always: {
      title: "Siempre",
      items: [
        "Responde con la información del restaurante",
        "Confirma solo dentro de las reglas configuradas",
        "Pasa al humano lo que no puede resolver",
        "Funciona en español e inglés",
      ],
    },
    never: {
      title: "Nunca",
      items: [
        "No inventa respuestas",
        "No reemplaza tu POS",
        "No procesa pagos ni delivery",
        "No guarda datos de tarjetas ni información de pago",
      ],
    },
  },
  en: {
    eyebrow: "What to expect",
    h2: "What your restaurant can expect",
    always: {
      title: "Always",
      items: [
        "Responds with your restaurant's information",
        "Confirms only within your configured rules",
        "Escalates to you what it cannot resolve",
        "Works in Spanish and English",
      ],
    },
    never: {
      title: "Never",
      items: [
        "Does not invent answers",
        "Does not replace your POS",
        "Does not process payments or delivery",
        "Does not store card data or payment information",
      ],
    },
  },
};

export function WaTrust() {
  const { locale } = useLanguage();
  const c = copy[locale];

  return (
    <section className="wa-section">
      <div className="wa-container">
        <span className="wa-eyebrow">{c.eyebrow}</span>
        <h2 className="wa-h2" style={{ maxWidth: "44rem" }}>{c.h2}</h2>
        <div className="wa-trust-grid">
          <div className="wa-trust-col">
            <div className="wa-trust-col-header">
              <CheckCircle color="#16A34A" />
              {c.always.title}
            </div>
            {c.always.items.map((item, i) => (
              <div className="wa-trust-item" key={i}>
                <Check />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="wa-trust-col">
            <div className="wa-trust-col-header">
              <XCircle color="#DC2626" />
              {c.never.title}
            </div>
            {c.never.items.map((item, i) => (
              <div className="wa-trust-item" key={i}>
                <X />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckCircle({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );
}
function XCircle({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
    </svg>
  );
}
function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
function X() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}
