import Link from "next/link";
import type { ReactNode } from "react";

type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro?: string;
  children: ReactNode;
};

export function LegalPageLayout({ eyebrow, title, lastUpdated, intro, children }: LegalPageLayoutProps) {
  return (
    <div className="legal-page">
      <div className="legal-shell">
        <Link href="/" className="legal-back-link">
          ← Back to TapiScan
        </Link>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="legal-title">{title}</h1>
        <p className="legal-updated">Last updated: {lastUpdated}</p>
        {intro ? <p className="legal-intro">{intro}</p> : null}
        <div className="legal-article">{children}</div>
        <div className="legal-footer-back">
          <Link href="/" className="legal-back-link">
            ← Back to TapiScan
          </Link>
        </div>
      </div>
    </div>
  );
}
