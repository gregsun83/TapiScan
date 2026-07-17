import Image from "next/image";
import { explainerSteps } from "@/content/site";
import { SectionHeader } from "@/components/ui/section-header";

export function ExplainerFlow() {
  return (
    <section className="section-shell bg-ink">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="A scan should carry context, not just open a link."
          text="The core TapiScan story is simple: physical access, branded experience, location-aware handoff."
          align="center"
        />

        <div className="explainer-stage">
          <div className="tap-object" aria-hidden="true">
            <Image
              src="/images/stand-blank-bg.png"
              alt=""
              fill
              className="object-contain"
              sizes="260px"
            />
            <span className="signal-ring signal-ring-one" />
            <span className="signal-ring signal-ring-two" />
          </div>

          <div className="flow-line" aria-hidden="true">
            <span />
          </div>

          <div className="phone-frame" aria-label="Hosted mobile menu preview">
            <div className="phone-status">Table 12</div>
            <div className="phone-screen">
              <p className="phone-kicker">Xander&apos;s Sandwiches</p>
              <h3>Menu opened from your table.</h3>
              <div className="menu-row">
                <span>Club sandwich</span>
                <strong>$8.50</strong>
              </div>
              <div className="menu-row">
                <span>Fresh lemonade</span>
                <strong>$3.00</strong>
              </div>
              <button type="button">Stage request</button>
            </div>
          </div>

          <div className="flow-line second" aria-hidden="true">
            <span />
          </div>

          <div className="ops-panel" aria-label="Operations handoff preview">
            <p className="phone-kicker">Staff review</p>
            <h3>Request waiting</h3>
            <dl>
              <div>
                <dt>Location</dt>
                <dd>Table 12</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Ready to accept</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {explainerSteps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
