import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Icon } from "@/components/ui/Icon";
import { images } from "@/lib/images";

export async function HeroSection() {
  const t = await getTranslations("home.hero");

  return (
    <header className="relative min-h-[90vh] flex items-center pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent z-10" />
        <Image
          src={images.home.hero}
          alt=""
          fill
          className="absolute right-0 top-0 w-2/3 h-full object-cover object-center"
          priority
        />
      </div>
      <Container className="relative z-20 w-full">
        <RevealOnScroll className="max-w-2xl">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm uppercase tracking-widest mb-md">
            {t("badge")}
          </span>
          <h1 className="font-display-lg text-display-lg md:text-[64px] leading-tight mb-md text-primary">
            {t("title")}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg leading-relaxed">
            {t("description")}
          </p>
          <div className="flex flex-wrap gap-md">
            <button
              type="button"
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-label-lg hover:opacity-90 transition-all flex items-center gap-sm active:scale-95"
            >
              {t("ctaPrimary")}
              <Icon name="arrow_forward" />
            </button>
            <button
              type="button"
              className="border border-primary text-primary px-8 py-4 rounded-full font-label-lg hover:bg-primary/5 transition-all"
            >
              {t("ctaSecondary")}
            </button>
          </div>
        </RevealOnScroll>
      </Container>
    </header>
  );
}
