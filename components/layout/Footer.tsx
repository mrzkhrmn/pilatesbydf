import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { images } from "@/lib/images";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  const exploreLinks = [
    { href: "/training" as const, label: nav("training") },
    { href: "/recipes" as const, label: nav("recipes") },
    { href: "/shop" as const, label: nav("shop") },
    { href: "/membership" as const, label: nav("membership") },
  ];

  return (
    <footer className="bg-surface-container border-t border-outline-variant/30 py-xl">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
          <div className="md:col-span-1">
            <div className="flex items-center gap-md mb-md">
              <Image
                src={images.logo}
                alt="Damla Filizkıran Pilates Stüdyosu"
                width={32}
                height={32}
                className="h-8 w-8 object-contain shrink-0"
              />
            </div>
            <p className="text-on-surface-variant font-body-md mb-lg">{t("tagline")}</p>
            <div className="flex gap-md">
              <a href="#" className="text-primary hover:opacity-60 transition-opacity" aria-label="Website">
                <Icon name="public" />
              </a>
              <a href="#" className="text-primary hover:opacity-60 transition-opacity" aria-label="Email">
                <Icon name="alternate_email" />
              </a>
              <a href="#" className="text-primary hover:opacity-60 transition-opacity" aria-label="Location">
                <Icon name="near_me" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest mb-md text-primary">
              {t("explore")}
            </h4>
            <ul className="space-y-sm">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest mb-md text-primary">
              {t("corporate")}
            </h4>
            <ul className="space-y-sm">
              <li>
                <span className="font-label-sm text-on-surface-variant">{t("contact")}</span>
              </li>
              <li>
                <span className="font-label-sm text-on-surface-variant">{t("careers")}</span>
              </li>
              <li>
                <span className="font-label-sm text-on-surface-variant">{t("shipping")}</span>
              </li>
              <li>
                <span className="font-label-sm text-on-surface-variant">{t("terms")}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest mb-md text-primary">
              {t("newsletter")}
            </h4>
            <p className="text-on-surface-variant font-body-md mb-md">{t("newsletterDesc")}</p>
            <div className="flex gap-xs">
              <input
                className="bg-surface px-4 py-2 rounded-lg border-none flex-1 focus:ring-1 focus:ring-primary/30"
                placeholder={t("emailPlaceholder")}
                type="email"
              />
              <button
                type="button"
                className="bg-primary text-on-primary p-2 rounded-lg"
                aria-label="Subscribe"
              >
                <Icon name="send" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-xl pt-lg border-t border-outline-variant/10 text-center">
          <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </Container>
    </footer>
  );
}
