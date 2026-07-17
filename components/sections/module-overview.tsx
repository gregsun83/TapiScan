import { modules } from "@/content/site";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeader } from "@/components/ui/section-header";

export function ModuleOverview() {
  return (
    <section className="section-shell surface-band">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Modular by design"
          title="Start with access. Add the pieces that fit the venue."
          text="TapiScan stays organized by keeping the guest experience, operations, hardware, and premium add-ons as clear layers."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => (
            <FeatureCard
              key={module.title}
              eyebrow={module.eyebrow}
              title={module.title}
              text={module.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
