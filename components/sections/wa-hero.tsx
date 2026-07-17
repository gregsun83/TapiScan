"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { demoHref } from "@/content/marketing";
import { useLanguage } from "@/components/providers/language-provider";

const copy = {
  es: {
    eyebrow: "Tu restaurante, siempre disponible",
    h1a: "TapiScan atiende el WhatsApp",
    h1b: "de tu restaurante, 24/7.",
    lead: "Responde preguntas frecuentes, muestra tu menú bilingüe y confirma reservas en español e inglés — para que no pierdas clientes cuando estás ocupado.",
    tagline: "TapiScan answers your WhatsApp, serves your bilingual menu, and books reservations 24/7.",
    cta1: "Pedir demo con mi menú",
    cta2: "Cómo funciona",
    chatStatus: "en línea",
  },
  en: {
    eyebrow: "Your restaurant, always available",
    h1a: "TapiScan manages your restaurant's",
    h1b: "WhatsApp, 24/7.",
    lead: "Answers common questions, shows your bilingual menu, and confirms reservations in Spanish and English — so you never miss a customer when you're busy.",
    tagline: "",
    cta1: "Request demo with my menu",
    cta2: "How it works",
    chatStatus: "online",
  },
};

type Message = { side: "out" | "in"; es: string; en: string; time: string };

const heroMessages: Message[] = [
  { side: "out", es: "Hola, ¿tienen mesa para 2 esta noche?",                                                    en: "Hi, do you have a table for 2 tonight?",                                                           time: "8:14 p.m." },
  { side: "in",  es: "Claro. ¿A qué hora les gustaría venir?",                                                   en: "Of course. What time would you like to come in?",                                                  time: "8:14 p.m." },
  { side: "out", es: "A las 8.",                                                                                   en: "At 8.",                                                                                            time: "8:15 p.m." },
  { side: "in",  es: "Tengo disponibilidad a las 8:00 p.m. ¿A nombre de quién hago la reserva?",                 en: "I have availability at 8:00 p.m. May I have a name for the reservation?",                          time: "8:15 p.m." },
  { side: "out", es: "Ana.",                                                                                       en: "Ana.",                                                                                             time: "8:16 p.m." },
  { side: "in",  es: "Gracias, Ana. ¿Me compartes un número de teléfono para la reserva?",                       en: "Thank you, Ana. May I have a phone number for the reservation?",                                   time: "8:16 p.m." },
  { side: "out", es: "6123-4567.",                                                                                 en: "6123-4567.",                                                                                       time: "8:17 p.m." },
  { side: "in",  es: "Perfecto, Ana. Tu mesa para 2 queda confirmada para hoy a las 8:00 p.m. Código RSV-0941.", en: "Perfect, Ana. Your table for 2 is confirmed for tonight at 8:00 p.m. Reservation code RSV-0941.", time: "8:17 p.m." },
];

export function WaHero() {
  const { locale } = useLanguage();
  const c = copy[locale];
  const chatRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const container = chatRef.current;
    if (!container) return;
    container.innerHTML = "";

    function clearTimer() {
      if (timerRef.current) clearTimeout(timerRef.current);
    }

    function addBubble(msg: Message) {
      if (cancelled || !container) return;
      const div = document.createElement("div");
      div.className = `wa-bubble ${msg.side}`;
      div.textContent = locale === "en" ? msg.en : msg.es;
      const time = document.createElement("div");
      time.className = "wa-time";
      time.textContent = msg.time;
      div.appendChild(time);
      container.appendChild(div);
      container.scrollTop = container.scrollHeight;
    }

    function run(index: number) {
      if (!container) return;
      if (cancelled) return;
      if (index >= heroMessages.length) {
        timerRef.current = setTimeout(() => {
          if (!cancelled && container) {
            container.innerHTML = "";
            run(0);
          }
        }, 4500);
        return;
      }
      const msg = heroMessages[index];
      if (msg.side === "in") {
        const typing = document.createElement("div");
        typing.className = "wa-typing";
        typing.innerHTML = "<span></span><span></span><span></span>";
        container.appendChild(typing);
        container.scrollTop = container.scrollHeight;
        timerRef.current = setTimeout(() => {
          if (cancelled) return;
          typing.remove();
          addBubble(msg);
          timerRef.current = setTimeout(() => run(index + 1), 850);
        }, 1350);
      } else {
        timerRef.current = setTimeout(() => {
          addBubble(msg);
          timerRef.current = setTimeout(() => run(index + 1), 950);
        }, index === 0 ? 800 : 400);
      }
    }

    run(0);
    setTick(t => t + 1);

    return () => {
      cancelled = true;
      clearTimer();
    };
  }, [locale]);

  return (
    <section className="wa-hero">
      <div className="wa-container wa-hero-inner">
        {/* Copy */}
        <div className="wa-hero-copy">
          <span className="wa-eyebrow">{c.eyebrow}</span>
          <h1 className="wa-h1">
            {c.h1a}{" "}
            <span style={{ color: "#25D366" }}>{c.h1b}</span>
          </h1>
          <p className="wa-lead">{c.lead}</p>
          {c.tagline && <p className="wa-en-tagline">{c.tagline}</p>}
          <div className="wa-cta-row">
            <a
              href={demoHref[locale]}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-btn-primary"
            >
              <WaIcon />
              {c.cta1}
            </a>
            <Link href="#como-funciona" className="wa-btn-secondary">
              {c.cta2} ↓
            </Link>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="wa-phone-outer" aria-hidden="true">
          <div className="wa-phone-screen">
            <div className="wa-chat-header">
              <div className="wa-chat-avatar">TS</div>
              <div>
                <div className="wa-chat-info-name">TapiScan</div>
                <div className="wa-chat-info-status">{c.chatStatus}</div>
              </div>
            </div>
            <div className="wa-messages" ref={chatRef} />
          </div>
        </div>
      </div>
    </section>
  );
}

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
