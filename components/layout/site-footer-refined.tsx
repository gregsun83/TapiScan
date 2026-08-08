"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contactEmail, demoHref, siteCopy, waNumber } from "@/content/marketing";
import { useLanguage } from "@/components/providers/language-provider";
import { ButtonLink } from "@/components/ui/button-link";

export function SiteFooterRefined() {
  const { locale } = useLanguage();
  const copy = siteCopy[locale];
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <footer id="contact" className="site-footer home-footer-minimal">
        <div className="home-footer-inner">
          <div className="footer-brand">
            <span className="footer-brand-mark">
              <Image src="/images/tapiscan-logo.png" alt="" width={120} height={80} />
            </span>
            <div>
              <strong>TapiScan</strong>
              <span>
                {locale === "en"
                  ? "WhatsApp receptionist for restaurants"
                  : "Recepcionista de WhatsApp para restaurantes"}
              </span>
            </div>
          </div>
          <div className="home-footer-contacts">
            <a
              className="home-footer-contact"
              href={demoHref[locale]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {waNumber}
            </a>
            <a className="home-footer-contact home-footer-contact--secondary" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </div>
          <div className="home-footer-legal">
            <a href="/privacy" className="home-footer-legal-link">
              {locale === "en" ? "Privacy" : "Privacidad"}
            </a>
            <a href="/terms" className="home-footer-legal-link">
              {locale === "en" ? "Terms" : "Términos"}
            </a>
            <a href="/data-deletion" className="home-footer-legal-link">
              {locale === "en" ? "Data Deletion" : "Eliminar datos"}
            </a>
            <a
              href={demoHref[locale]}
              target="_blank"
              rel="noopener noreferrer"
              className="home-footer-legal-link"
            >
              {locale === "en" ? "Contact" : "Contacto"}
            </a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer id="contact" className="site-footer">
      <div className="footer-inner">
        <div className="footer-cta">
          <p className="eyebrow">{copy.footer.eyebrow}</p>
          <h2>{copy.footer.title}</h2>
          <p>{copy.footer.text}</p>
          <div className="footer-buttons">
            <ButtonLink href={demoHref[locale]}>{copy.cta.demo}</ButtonLink>
            <ButtonLink href={`mailto:${contactEmail}`} variant="secondary">
              {copy.cta.email}
            </ButtonLink>
          </div>
        </div>

        <div className="footer-meta">
          <div className="footer-brand">
            <span className="footer-brand-mark">
              <Image src="/images/tapiscan-logo.png" alt="" width={120} height={80} />
            </span>
            <div>
              <strong>TapiScan</strong>
              <span>
                {locale === "en"
                  ? "WhatsApp receptionist for restaurants"
                  : "Recepcionista de WhatsApp para restaurantes"}
              </span>
            </div>
          </div>
          <p>{copy.footer.note}</p>
          <a className="footer-contact" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </a>
          <div className="footer-links">
            {copy.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/privacy">
              {locale === "en" ? "Privacy" : "Privacidad"}
            </Link>
            <Link href="/terms">
              {locale === "en" ? "Terms" : "Términos"}
            </Link>
            <Link href="/data-deletion">
              {locale === "en" ? "Data Deletion" : "Eliminar datos"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
