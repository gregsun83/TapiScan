"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/providers/language-provider";

type Msg = { side: "out" | "in"; text: string; time: string };

const demoMessages: Msg[] = [
  { side: "out", text: "Hi, do you have a table for 4 tomorrow at 8pm?",                                                                                         time: "7:58 p.m." },
  { side: "in",  text: "Of course. I have availability tomorrow at 8:00 p.m. May I have a name for the reservation?",                                            time: "7:58 p.m." },
  { side: "out", text: "Sarah.",                                                                                                                                  time: "7:59 p.m." },
  { side: "in",  text: "Thank you, Sarah. May I have a phone number for the reservation?",                                                                        time: "7:59 p.m." },
  { side: "out", text: "6123-4567.",                                                                                                                              time: "8:00 p.m." },
  { side: "in",  text: "Perfect, Sarah. Your table for 4 is confirmed for tomorrow at 8:00 p.m. Reservation code RSV-1042. We look forward to seeing you.",       time: "8:00 p.m." },
];

const copy = {
  es: {
    eyebrow: "En acción",
    h2: "De mensaje a reserva confirmada — en minutos.",
    lead: "TapiScan también atiende en inglés — sin que cambies nada.",
    panelHeader: "Panel de reservas",
    panelBadge: "Nueva reserva",
    panelDetail: "4 personas · mañana 8:00 p.m.",
    panelStatus: "Confirmada automaticamente",
    chatStatus: "en línea",
  },
  en: {
    eyebrow: "In action",
    h2: "From message to confirmed reservation — in minutes.",
    lead: "TapiScan handles English natively — no setup needed.",
    panelHeader: "Reservations dashboard",
    panelBadge: "New reservation",
    panelDetail: "4 guests · tomorrow 8:00 p.m.",
    panelStatus: "Auto-confirmed",
    chatStatus: "online",
  },
};

export function WaDemo() {
  const { locale } = useLanguage();
  const c = copy[locale];
  const chatRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    hasRun.current = false;
    const container = chatRef.current;
    const panel = panelRef.current;
    if (!container || !panel) return;
    container.innerHTML = "";
    if (panel) {
      panel.style.opacity = "0";
      panel.style.transform = "translateY(10px)";
    }
  }, [locale]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun.current) {
          hasRun.current = true;
          runChat();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [locale]);

  function runChat() {
    const container = chatRef.current;
    const panel = panelRef.current;
    if (!container) return;
    let cancelled = false;
    let i = 0;

    function addBubble(msg: Msg) {
      if (cancelled || !container) return;
      const div = document.createElement("div");
      div.className = `wa-bubble ${msg.side}`;
      div.textContent = msg.text;
      const time = document.createElement("div");
      time.className = "wa-time";
      time.textContent = msg.time;
      div.appendChild(time);
      container.appendChild(div);
      container.scrollTop = container.scrollHeight;
    }

    function next() {
      if (!container) return;
      if (cancelled || i >= demoMessages.length) {
        if (!cancelled && panel) {
          setTimeout(() => {
            panel.classList.add("visible");
          }, 500);
        }
        return;
      }
      const msg = demoMessages[i];
      if (msg.side === "in") {
        const typing = document.createElement("div");
        typing.className = "wa-typing";
        typing.innerHTML = "<span></span><span></span><span></span>";
        container.appendChild(typing);
        container.scrollTop = container.scrollHeight;
        setTimeout(() => {
          if (cancelled) return;
          typing.remove();
          addBubble(msg);
          i++;
          setTimeout(next, 850);
        }, 1350);
      } else {
        setTimeout(() => {
          if (cancelled) return;
          addBubble(msg);
          i++;
          setTimeout(next, 950);
        }, i === 0 ? 600 : 400);
      }
    }

    next();
    return () => { cancelled = true; };
  }

  return (
    <section className="wa-section wa-section-soft" id="reserva-demo" ref={sectionRef}>
      <div className="wa-container">
        <span className="wa-eyebrow">{c.eyebrow}</span>
        <h2 className="wa-h2" style={{ maxWidth: "52rem" }}>{c.h2}</h2>
        <p className="wa-lead">{c.lead}</p>

        <div className="wa-mockup-grid">
          {/* Phone */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="wa-phone-outer wa-phone-outer--tall" aria-hidden="true">
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

          {/* Panel */}
          <div className="wa-panel">
            <div className="wa-panel-header">
              <span className="wa-panel-dot" />
              {c.panelHeader}
            </div>
            <div
              className="wa-panel-notif"
              ref={panelRef}
              style={{ opacity: 0, transform: "translateY(10px)" }}
            >
              <div className="wa-panel-badge">{c.panelBadge}</div>
              <div className="wa-panel-name">Sarah</div>
              <div className="wa-panel-detail">{c.panelDetail}</div>
              <div className="wa-panel-code">RSV-1042</div>
              <div className="wa-panel-status">{c.panelStatus}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
