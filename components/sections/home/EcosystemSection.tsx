import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { images } from "@/lib/images";

export async function EcosystemSection() {
  const t = await getTranslations("home.ecosystem");

  return (
    <section className="py-xl">
      <Container>
        <RevealOnScroll className="mb-xl">
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-md h-auto md:h-[600px]">
          <RevealOnScroll className="md:col-span-8 group relative overflow-hidden rounded-2xl min-h-[420px] md:min-h-0">
            <div className="absolute inset-0">
              <Image
                src={images.home.training}
                alt=""
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-lg text-surface">
              <span className="font-label-sm uppercase tracking-widest bg-primary/40 backdrop-blur-md px-3 py-1 rounded mb-md inline-block">
                {t("training.badge")}
              </span>
              <h3 className="font-headline-lg text-headline-lg mb-sm">
                {t("training.title")}
              </h3>
              <p className="font-body-md max-w-2xl mb-md opacity-90">
                {t("training.description")}
              </p>
              <Link
                href="/training"
                className="inline-block bg-surface text-primary px-6 py-2 rounded-full font-label-lg hover:bg-primary-fixed transition-all"
              >
                {t("training.cta")}
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll
            delay={150}
            className="md:col-span-4 group relative overflow-hidden rounded-2xl min-h-[320px] md:min-h-0"
          >
            <div className="absolute inset-0">
              <Image
                src={images.home.recipes}
                alt=""
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-lg text-surface min-h-[200px] flex flex-col justify-end">
              <h3 className="font-headline-lg text-headline-lg mb-sm">
                {t("recipes.title")}
              </h3>
              <p className="font-body-md mb-md opacity-90">
                {t("recipes.description")}
              </p>
              <Link
                href="/recipes"
                className="text-surface font-label-lg flex items-center gap-xs hover:gap-sm transition-all"
              >
                {t("recipes.cta")} <Icon name="arrow_forward" />
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll
            delay={300}
            className="md:col-span-12 h-64 md:h-auto group relative overflow-hidden rounded-2xl"
          >
            <div className="absolute inset-0">
              <Image
                src={images.home.shop}
                alt=""
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center p-lg text-surface">
              <div className="max-w-md">
                <h3 className="font-headline-lg text-headline-lg mb-sm">
                  {t("shop.title")}
                </h3>
                <p className="font-body-md mb-md opacity-90 w-5xl">
                  {t("shop.description")}
                </p>
                <Link
                  href="/shop"
                  className="inline-block bg-primary text-on-primary px-8 py-3 rounded-full font-label-lg hover:opacity-90 transition-all text-nowrap"
                >
                  {t("shop.cta")}
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
