import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

export function HomeHero() {
  return (
    <section className="hero-section home-hero">
      <div className="hero-media" aria-hidden="true">
        <Image
          src="/images/phone-hand-scanning.png"
          alt=""
          fill
          className="hero-phone object-contain object-right-bottom"
          priority
          sizes="(min-width: 900px) 58vw, 100vw"
        />
        <Image
          src="/images/nfc-stand-generic.png"
          alt=""
          width={520}
          height={780}
          className="hero-stand"
          priority
        />
      </div>
      <div className="hero-scrim" />
      <div className="hero-content">
        <p className="eyebrow">NFC + QR smart access</p>
        <h1>Turn every physical touchpoint into a digital service path.</h1>
        <p>
          TapiScan helps restaurants and hospitality teams launch branded menus, table-aware experiences, and operational upgrades without forcing everything into one system on day one.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/restaurants-hospitality">See hospitality setup</ButtonLink>
          <ButtonLink href="/other-industries" variant="secondary">
            Explore other industries
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
