"use client";

import { siteCopy } from "@/content/marketing";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionHeader } from "@/components/ui/section-header";

export function PosSections() {
  const { locale } = useLanguage();
  const copy = siteCopy[locale];
  const page = copy.restaurants;

  return (
    <section className="section-shell pos-intro-section">
      <div className="content-shell">
        <SectionHeader
          eyebrow={page.posEyebrow}
          title={page.posTitle}
          text={page.posText}
        />
        <div className="pos-groups-grid">
          {copy.restaurantLanes.map((lane) => (
            <article key={lane.title} className="pos-group-card">
              <p className="pos-group-eyebrow">TapiScan POS</p>
              <h3>{lane.title}</h3>
              <p>{lane.text}</p>
              <ul className="pos-feature-list">
                {lane.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
