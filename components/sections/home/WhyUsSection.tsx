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
    <section className="py-xl bg-surface-container-low">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <RevealOnScroll>
            <div className="aspect-[4/5] rounded-2xl relative overflow-hidden shadow-xl">
              <Image
                src={images.home.whyUs}
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <h2 className="font-display-lg text-display-lg text-primary mb-md">
              {t("title")}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg leading-relaxed italic">
              &ldquo;{t("quote")}&rdquo;
            </p>
            <div className="space-y-md">
              {features.map((i) => (
                <div
                  key={i}
                  className="flex gap-md p-md rounded-xl hover:bg-surface-bright transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <Icon name={t(`features.${i}.icon`)} />
                  </div>
                  <div>
                    <h4 className="font-label-lg text-on-surface mb-xs">
                      {t(`features.${i}.title`)}
                    </h4>
                    <p className="text-on-surface-variant">
                      {t(`features.${i}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
