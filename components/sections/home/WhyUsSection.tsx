import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Icon } from "@/components/ui/Icon";
import { images } from "@/lib/images";

export async function WhyUsSection() {
  const t = await getTranslations("home.whyUs");
  const features = [0, 1, 2] as const;

  return (
    <section className="py-lg md:py-xl bg-surface-container-low overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg md:gap-xl items-center">
          <RevealOnScroll from="left">
            <div className="aspect-[4/5] max-h-[420px] md:max-h-none rounded-2xl relative overflow-hidden shadow-xl">
              <Image
                src={images.home.whyUs}
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>
          </RevealOnScroll>

          <div>
            <RevealOnScroll from="right" delay={100}>
              <h2 className="font-display-lg text-[clamp(1.2rem,4.2vw,2.5rem)] whitespace-nowrap text-primary mb-sm md:mb-md leading-tight">
                {t("title")}
              </h2>
            </RevealOnScroll>

            <RevealOnScroll from="right" delay={220}>
              <p className="font-body-lg text-lg md:text-xl text-on-surface-variant mb-md md:mb-lg leading-relaxed italic">
                &ldquo;{t("quote")}&rdquo;
              </p>
            </RevealOnScroll>

            <div className="space-y-sm md:space-y-md">
              {features.map((i) => (
                <RevealOnScroll
                  key={i}
                  from="right"
                  delay={200 + i * 220}
                  className="fade-slide"
                >
                  <div className="flex gap-sm md:gap-md p-sm md:p-md rounded-xl hover:bg-surface-bright transition-colors group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name={t(`features.${i}.icon`)} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-label-lg text-on-surface mb-xs">
                        {t(`features.${i}.title`)}
                      </h4>
                      <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                        {t(`features.${i}.description`)}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
