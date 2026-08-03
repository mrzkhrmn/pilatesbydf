"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Icon } from "@/components/ui/Icon";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { images } from "@/lib/images";

const navItems = [
  { key: "training" as const, href: "/training" },
  // { key: "recipes" as const, href: "/recipes" }, // şimdilik pasif
  // { key: "shop" as const, href: "/shop" }, // şimdilik pasif
  { key: "membership" as const, href: "/membership" },
  { key: "blog" as const, href: "/blog" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_20px_50px_rgba(83,88,69,0.05)]">
      <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
        <Link href="/" className="flex items-center gap-md">
          <Image
            src={images.logo}
            alt="Damla Filizkıran Pilates Stüdyosu"
            width={40}
            height={40}
            className="h-16 w-16 object-contain shrink-0 rounded-full border "
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-lg">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`font-body-md text-body-md transition-colors duration-300 ${
                isActive(item.href)
                  ? "text-primary border-b-2 border-primary pb-1 font-semibold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-md">
          <div className="hidden md:block relative">
            <Icon
              name="search"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-primary"
            />
            <input
              className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-full text-body-md focus:ring-1 focus:ring-primary/30 w-48 transition-all duration-300 focus:w-64"
              type="text"
            />
          </div>
          <LocaleSwitcher />
          <button
            type="button"
            className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full font-label-lg hover:opacity-90 transition-all active:scale-95"
          >
            {t("login")}
          </button>
          <button
            type="button"
            className="md:hidden text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <Icon name={mobileOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-outline-variant/30 bg-surface px-gutter py-md space-y-sm">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 font-body-md ${
                isActive(item.href)
                  ? "text-primary font-semibold"
                  : "text-on-surface-variant"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
          <button
            type="button"
            className="w-full bg-primary text-on-primary px-6 py-2 rounded-full font-label-lg mt-md"
          >
            {t("login")}
          </button>
        </div>
      )}
    </nav>
  );
}
