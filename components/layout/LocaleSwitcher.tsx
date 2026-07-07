"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const next = locale === "tr" ? "en" : "tr";
    router.replace(pathname, { locale: next });
  };

  return (
    <button
      type="button"
      onClick={switchLocale}
      className="font-label-sm text-label-sm uppercase tracking-widest text-primary border border-outline-variant/50 px-3 py-1 rounded-full hover:bg-surface-container transition-colors"
      aria-label={locale === "tr" ? "Switch to English" : "Türkçe'ye geç"}
    >
      {locale === "tr" ? "EN" : "TR"}
    </button>
  );
}
