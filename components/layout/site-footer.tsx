import Link from "next/link";
import { navItems } from "@/content/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-line bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <div>
          <p className="eyebrow">Demo ready</p>
          <h2 className="max-w-2xl text-3xl font-semibold text-white md:text-4xl">
            Start with smart access. Add the operational layers when the venue is ready.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
            TapiScan is being shaped for real hospitality deployments in Panama first, with a modular path for menus, service, POS, hardware, feedback, and analytics.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <a className="footer-contact" href="mailto:info@tapiscan.com">
            info@tapiscan.com
          </a>
          <div className="flex flex-wrap gap-4 md:justify-end">
            {navItems.map((item) => (
              <Link className="text-sm text-white/58 transition hover:text-mint" key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
