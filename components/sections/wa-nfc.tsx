"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";

const copy = {
  es: {
    eyebrow: "QR y NFC",
    h2: "También incluye menú QR/NFC para mesas.",
    lead: "Cada mesa puede tener su propio acceso al menú digital. Sin apps, sin descarga.",
    items: [
      "El cliente escanea el QR o toca el stand NFC y el menú abre de inmediato",
      "Menú bilingüe, actualizado en tiempo real, sin imprimir nada",
      "Cada mesa puede tener su propia entrada",
      "Compatible con cualquier teléfono — sin instalar app",
    ],
  },
  en: {
    eyebrow: "QR and NFC",
    h2: "Includes QR/NFC table menus.",
    lead: "Each table gets its own digital menu access. No app, no download required.",
    items: [
      "Guest scans the QR or taps the NFC stand — menu opens instantly",
      "Bilingual menu, updated in real time, nothing to print",
      "Each table can have its own entry point",
      "Works on any phone — no app install required",
    ],
  },
};

export function WaNfc() {
  const { locale } = useLanguage();
  const c = copy[locale];

  return (
    <section className="wa-section wa-section-soft">
      <div className="wa-container">
        <div className="wa-nfc-grid">
          <div>
            <span className="wa-eyebrow">{c.eyebrow}</span>
            <h2 className="wa-h2">{c.h2}</h2>
            <p className="wa-lead">{c.lead}</p>
            <ul className="wa-nfc-list">
              {c.items.map((item, i) => (
                <li key={i}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="wa-nfc-img-wrap">
            <Image
              src="/images/nfc-stand-generic.png"
              alt=""
              width={320}
              height={420}
              style={{ maxHeight: 340, width: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
