import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { images } from "@/lib/images";

export async function RecipesContent() {
  const t = await getTranslations("recipes");
  const categories = t.raw("categories") as string[];
  const cards = t.raw("cards") as Array<{ badge: string; title: string; meta: string }>;
  const macroItems = t.raw("macros.items") as Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  const plan1Features = t.raw("plans.plan1.features") as string[];

  return (
    <>
      <div className="pt-20">
        <section className="py-xl">
          <Container>
            <PageHeader
              badge={t("hero.badge")}
              title={t("hero.title")}
              description={t("hero.description")}
            />
          </Container>
        </section>

        <Container className="pb-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
            <div className="lg:col-span-8 space-y-lg">
              <div className="flex justify-between items-end flex-wrap gap-md">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  {t("seasonal")}
                </h2>
                <div className="flex space-x-sm flex-wrap gap-2">
                  {categories.map((cat) => (
                    <span
                      key={cat}
                      className="bg-surface-container-high px-4 py-1 rounded-full text-label-sm font-label-sm text-secondary cursor-pointer hover:bg-secondary-container transition-colors"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="md:col-span-2 group cursor-pointer overflow-hidden rounded-xl bg-white product-card-shadow transition-all hover:-translate-y-1">
                  <div className="aspect-[21/9] w-full bg-surface-dim relative overflow-hidden">
                    <Image
                      src={images.recipes.featured}
                      alt={t("featured.title")}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-tighter font-bold text-primary">
                        {t("featured.badge")}
                      </span>
                    </div>
                  </div>
                  <div className="p-md">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline-md text-headline-md text-on-surface">
                        {t("featured.title")}
                      </h3>
                      <div className="flex items-center text-primary">
                        <Icon name="schedule" size={20} />
                        <span className="text-label-sm ml-1">{t("featured.time")}</span>
                      </div>
                    </div>
                    <p className="text-on-surface-variant mb-6 line-clamp-2">
                      {t("featured.description")}
                    </p>
                    <div className="flex gap-md border-t border-outline-variant/30 pt-4 flex-wrap">
                      {(["calories", "protein", "fat", "carbs"] as const).map((key) => (
                        <div key={key}>
                          <span className="block text-label-sm text-outline uppercase font-semibold">
                            {t(`macroLabels.${key}`)}
                          </span>
                          <span className="text-primary font-bold">
                            {t(`featured.${key}`)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {cards.map((card, i) => (
                  <div
                    key={card.title}
                    className="group cursor-pointer rounded-xl bg-white product-card-shadow transition-all hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="aspect-square bg-surface-dim relative overflow-hidden">
                      <Image
                        src={i === 0 ? images.recipes.card1 : images.recipes.card2}
                        alt={card.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-tighter font-bold text-primary">
                          {card.badge}
                        </span>
                      </div>
                    </div>
                    <div className="p-md">
                      <h3 className="font-headline-md text-[20px] text-on-surface mb-2">
                        {card.title}
                      </h3>
                      <div className="flex justify-between items-center">
                        <span className="text-on-surface-variant text-label-sm">{card.meta}</span>
                        <Icon name="arrow_forward" className="text-secondary" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-lg">
              <div className="sticky top-28">
                <div className="mb-lg">
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                    {t("plans.title")}
                  </h2>
                  <p className="text-on-surface-variant text-body-md">{t("plans.subtitle")}</p>
                </div>

                <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant/30 mb-md relative overflow-hidden group">
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                  <span className="font-label-sm text-[10px] uppercase tracking-widest text-primary font-bold block mb-2">
                    {t("plans.plan1.badge")}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                    {t("plans.plan1.title")}
                  </h3>
                  <ul className="space-y-sm mb-6">
                    {plan1Features.map((feature) => (
                      <li key={feature} className="flex items-center text-on-surface-variant text-sm">
                        <Icon name="check_circle" className="text-[18px] text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className="w-full py-3 border border-primary text-primary rounded-lg font-label-lg hover:bg-primary hover:text-on-primary transition-all duration-300"
                  >
                    {t("plans.plan1.cta")}
                  </button>
                </div>

                <div className="bg-surface-container-low p-md rounded-xl border border-outline-variant/30 mb-md group">
                  <span className="font-label-sm text-[10px] uppercase tracking-widest text-secondary font-bold block mb-2">
                    {t("plans.plan2.badge")}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                    {t("plans.plan2.title")}
                  </h3>
                  <p className="text-on-surface-variant text-sm mb-6">
                    {t("plans.plan2.description")}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-dim" />
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-variant" />
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-primary-fixed" />
                      <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white bg-surface-container text-[10px] font-bold">
                        +2.4b
                      </div>
                    </div>
                    <span className="text-label-sm text-outline">{t("plans.plan2.joined")}</span>
                  </div>
                </div>

                <div className="bg-primary p-md rounded-xl text-on-primary">
                  <h4 className="font-headline-md text-[20px] mb-2">
                    {t("plans.newsletter.title")}
                  </h4>
                  <p className="text-on-primary/70 text-sm mb-4">
                    {t("plans.newsletter.description")}
                  </p>
                  <div className="flex bg-white/10 rounded-lg p-1">
                    <input
                      className="bg-transparent border-none focus:ring-0 text-sm flex-grow placeholder:text-white/50 text-white px-2 outline-none"
                      placeholder={t("plans.newsletter.cta")}
                      type="email"
                    />
                    <button
                      type="button"
                      className="bg-white text-primary px-3 py-1 rounded text-label-sm font-bold"
                    >
                      {t("plans.newsletter.cta")}
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Container>

        <section className="bg-surface-container py-xl">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-lg">
              <h2 className="font-headline-lg text-headline-lg mb-4 text-on-surface">
                {t("macros.title")}
              </h2>
              <p className="text-on-surface-variant font-body-md">{t("macros.subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
              {macroItems.map((item) => (
                <div key={item.title} className="text-center p-md">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <Icon name={item.icon} className="text-primary text-[32px]" />
                  </div>
                  <h3 className="font-headline-md text-headline-md mb-3">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
