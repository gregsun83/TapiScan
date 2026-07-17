"use client";

import { localeNames, type Locale } from "@/content/marketing";
import { useLanguage } from "@/components/providers/language-provider";
import { cn } from "@/lib/utils";

const locales: Locale[] = ["en", "es"];

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="language-toggle" aria-label="Language selector">
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          className={cn("language-option", locale === item && "is-active")}
          aria-pressed={locale === item}
          onClick={() => setLocale(item)}
        >
          {localeNames[item]}
        </button>
      ))}
    </div>
  );
}
