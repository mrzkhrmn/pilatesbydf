import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Icon } from "@/components/ui/Icon";
import { images } from "@/lib/images";

export async function AppDownloadSection() {
  const t = await getTranslations("home.app");
  const features = [0, 1, 2] as const;

  return (
    <section className="py-xl relative overflow-hidden">
      <Container className="relative z-10">
        <div className="bg-primary rounded-[40px] overflow-hidden p-lg md:p-xl flex flex-col md:flex-row items-center gap-xl text-on-primary">
          <RevealOnScroll className="flex-1">
            <h2 className="font-display-lg text-display-lg mb-md">{t("title")}</h2>
            <ul className="space-y-md mb-xl">
              {features.map((i) => (
                <li key={i} className="flex items-center gap-md">
                  <Icon name="check_circle" className="text-primary-fixed" />
                  <span className="font-body-lg">{t(`features.${i}`)}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-md">
              <button
                type="button"
                className="bg-surface text-on-surface px-8 py-4 rounded-xl flex items-center gap-md hover:scale-105 transition-transform"
              >
                <Icon name="phone_iphone" className="text-3xl" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest leading-none mb-1 opacity-60">
                    {t("downloadFrom")}
                  </p>
                  <p className="font-bold leading-none">{t("appStore")}</p>
                </div>
              </button>
              <button
                type="button"
                className="bg-surface text-on-surface px-8 py-4 rounded-xl flex items-center gap-md hover:scale-105 transition-transform"
              >
                <Icon name="play_arrow" className="text-3xl" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest leading-none mb-1 opacity-60">
                    {t("getOn")}
                  </p>
                  <p className="font-bold leading-none">{t("googlePlay")}</p>
                </div>
              </button>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={200} className="flex-1 relative">
            <div className="relative z-10 w-full max-w-xs mx-auto">
              <div className="aspect-[9/19] relative rounded-[3rem] border-[8px] border-surface shadow-2xl overflow-hidden">
                <Image
                  src={images.home.appPhone}
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary-fixed/30 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-fixed/20 blur-3xl rounded-full" />
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
