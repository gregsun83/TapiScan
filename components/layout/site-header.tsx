import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/content/site";
import { ButtonLink } from "@/components/ui/button-link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mint">
        <Image
          src="/images/tapiscan-logo.png"
          alt="TapiScan"
          width={126}
          height={84}
          className="h-9 w-auto object-contain"
          priority
        />
        <span className="sr-only">TapiScan home</span>
      </Link>

      <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="nav-link">
            {item.label}
          </Link>
        ))}
      </nav>

      <ButtonLink href="#contact" className="hidden md:inline-flex">
        Request demo
      </ButtonLink>
    </header>
  );
}
