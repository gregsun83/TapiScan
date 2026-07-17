import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeader } from "@/components/ui/section-header";

export function IndustryChoice() {
  return (
    <section className="section-shell bg-black">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Choose the right path"
          title="Hospitality stays first. Other spaces get their own story."
          text="Restaurants need menus, tables, staff workflows, and hardware. Other industries need branded access to information, products, services, and leads."
          align="center"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
          <article className="choice-panel primary-choice">
            <p className="eyebrow">Primary sales path</p>
            <h3>Restaurants & Hospitality</h3>
            <p>
              Menu access, table-specific ordering, POS upgrades, printers, tablets, payments, reviews, dish AR, and phased rollout.
            </p>
            <ButtonLink href="/restaurants-hospitality">See hospitality setup</ButtonLink>
          </article>

          <article className="choice-panel">
            <p className="eyebrow">Expansion path</p>
            <h3>Other Industries</h3>
            <p>
              Smart access for hotels, showrooms, clinics, museums, real estate, events, and service spaces.
            </p>
            <ButtonLink href="/other-industries" variant="secondary">
              Explore use cases
            </ButtonLink>
          </article>
        </div>
      </div>
    </section>
  );
}
