import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  image: "stand" | "phone";
};

export function PageHero({
  eyebrow,
  title,
  text,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  image
}: PageHeroProps) {
  const imageSrc =
    image === "stand" ? "/images/nfc-stand-generic.png" : "/images/phone-hand-scanning.png";

  return (
    <section className="hero-section page-hero">
      <div className="hero-media" aria-hidden="true">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-contain object-right-bottom opacity-90"
          priority
          sizes="(min-width: 900px) 60vw, 100vw"
        />
      </div>
      <div className="hero-scrim" />
      <div className="hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
          {secondaryHref && secondaryLabel ? (
            <ButtonLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
