"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { demoHref, siteCopy } from "@/content/marketing";
import { useLanguage } from "@/components/providers/language-provider";
import { ButtonLink } from "@/components/ui/button-link";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { cn } from "@/lib/utils";

export function SiteHeaderRefined() {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const copy = siteCopy[locale];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const descriptor =
    locale === "en" ? "WhatsApp receptionist for restaurants" : "Recepcionista de WhatsApp para restaurantes";

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <Link href="/" className="brand-lockup" aria-label="TapiScan home" onClick={closeMenu}>
        <span className="brand-logo-shell">
          <Image
            src="/images/tapiscan-logo.png"
            alt=""
            width={180}
            height={120}
            className="brand-logo"
            priority
          />
        </span>
        <span className="brand-text">
          <strong>TapiScan</strong>
          <span>{descriptor}</span>
        </span>
        <span className="brand-chip">
          WhatsApp
        </span>
      </Link>

      <nav aria-label="Primary navigation" className="site-nav">
        {copy.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn("nav-link", pathname === item.href && "is-active")}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <LanguageToggle />
        <ButtonLink href={demoHref[locale]} className="hidden md:inline-flex wa-header-cta">
          {copy.cta.demo}
        </ButtonLink>
        <button
          className={cn("mobile-menu-button", isMenuOpen && "is-open")}
          type="button"
          aria-label={isMenuOpen ? copy.header.closeMenu : copy.header.openMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn("mobile-nav-panel", isMenuOpen && "is-open")}
      >
        <nav aria-label="Mobile navigation" className="mobile-nav-links">
          {copy.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("mobile-nav-link", pathname === item.href && "is-active")}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink href={demoHref[locale]} className="mobile-nav-cta">
          {copy.cta.demo}
        </ButtonLink>
      </div>
    </header>
  );
}
