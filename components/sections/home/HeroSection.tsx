import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Icon } from "@/components/ui/Icon";
import { images } from "@/lib/images";

export async function HeroSection() {
  const t = await getTranslations("home.hero");

  return (
    <header className="relative min-h-[75vh] md:min-h-[90vh] flex items-center pt-20 pb-lg md:pb-0">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={images.home.hero}
          alt=""
          fill
          className="absolute right-0 top-0 w-full md:w-2/3 h-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/45 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 md:via-surface/60 to-transparent z-10" />
      </div>
      <Container className="relative z-20 w-full">
        <RevealOnScroll className="max-w-2xl">
          <span className="inline-block px-3 py-1 md:px-4 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm uppercase tracking-widest mb-sm md:mb-md">
            {t("badge")}
          </span>
          <h1 className="font-display-lg text-[2rem] sm:text-[2.5rem] md:text-[64px] leading-[1.15] mb-sm md:mb-md text-primary">
            {t.rich("title", {
              br: () => <br />,
            })}
          </h1>
          <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-on-surface-variant mb-md md:mb-lg leading-relaxed">
            {t.rich("description", {
              br: () => <span className="block h-3 md:h-4" aria-hidden />,
              nl: () => <br />,
            })}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-sm md:gap-md">
            <Link
              href="/membership"
              className="bg-primary text-on-primary px-6 py-3 md:px-8 md:py-4 rounded-full font-label-lg hover:opacity-90 transition-all flex items-center justify-center gap-sm active:scale-95"
            >
              {t("ctaPrimary")}
              <Icon name="arrow_forward" />
            </Link>
            <Link
              href="/training"
              className="border border-primary text-primary px-6 py-3 md:px-8 md:py-4 rounded-full font-label-lg hover:bg-primary/5 transition-all text-center"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </RevealOnScroll>
      </Container>
    </header>
  );
}
