"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";

export function MembershipContent() {
  const t = useTranslations("membership");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tiers = t.raw("tiers") as Array<{
    name: string;
    description: string;
    price: string;
    features: string[];
    cta: string;
  }>;
  const comparisonFeatures = t.raw("comparison.features") as string[];
  const basicValues = t.raw("comparison.basic") as string[];
  const premiumValues = t.raw("comparison.premium") as string[];
  const vipValues = t.raw("comparison.vip") as string[];
  const faqItems = t.raw("faq.items") as Array<{ question: string; answer: string }>;

  return (
    <div className="pt-20">
      <section className="relative py-xl">
        <Container className="text-center overflow-hidden">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-sm block">
            {t("hero.badge")}
          </span>
          <h1 className="font-display-lg text-display-lg text-on-background mb-md max-w-3xl mx-auto">
            {t("hero.title")}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-lg">
            {t("hero.description")}
          </p>
        </Container>
      </section>

      <section className="py-xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md items-end">
            {tiers.map((tier, index) => {
              const isPremium = index === 1;
              return (
                <div
                  key={tier.name}
                  className={`ambient-shadow rounded-xl p-lg flex flex-col h-full transition-transform duration-500 hover:-translate-y-2 ${
                    isPremium
                      ? "bg-primary text-on-primary relative overflow-hidden scale-105 z-20"
                      : "bg-surface-container-low border border-outline-variant/30"
                  }`}
                >
                  {isPremium && (
                    <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container px-sm py-xs rounded-full font-label-sm uppercase tracking-widest text-[10px]">
                      {t("popular")}
                    </div>
                  )}
                  <div className="mb-lg">
                    <h3 className="font-headline-md text-headline-md mb-xs">{tier.name}</h3>
                    <p className={isPremium ? "opacity-80" : "text-on-surface-variant"}>
                      {tier.description}
                    </p>
                  </div>
                  <div className="mb-lg">
                    <span className="font-display-lg text-display-lg">{tier.price}</span>
                    <span
                      className={`font-label-lg text-label-lg ${isPremium ? "opacity-60" : "text-outline"}`}
                    >
                      {t("perMonth")}
                    </span>
                  </div>
                  <ul className="space-y-md mb-xl flex-grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-sm">
                        <Icon
                          name="check_circle"
                          className={`text-[20px] ${isPremium ? "text-on-primary" : "text-primary"}`}
                        />
                        <span className={!isPremium ? "text-on-surface-variant" : ""}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={`w-full py-md font-label-lg rounded-lg transition-all duration-300 ${
                      isPremium
                        ? "bg-surface text-primary hover:opacity-90"
                        : "border border-primary text-primary hover:bg-primary hover:text-on-primary"
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-xl bg-surface-container-low">
        <Container>
          <h2 className="font-headline-lg text-headline-lg text-center text-primary mb-lg">
            {t("comparison.title")}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-outline-variant/30">
                  <th className="text-left py-md font-label-lg text-on-surface-variant" />
                  {tiers.map((tier) => (
                    <th
                      key={tier.name}
                      className="text-center py-md font-label-lg text-primary"
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr key={feature} className="border-b border-outline-variant/10">
                    <td className="py-md font-body-md text-on-surface-variant">{feature}</td>
                    <td className="py-md text-center font-body-md">{basicValues[i]}</td>
                    <td className="py-md text-center font-body-md font-semibold">
                      {premiumValues[i]}
                    </td>
                    <td className="py-md text-center font-body-md">{vipValues[i]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="py-xl">
        <Container className="max-w-3xl">
          <h2 className="font-headline-lg text-headline-lg text-center text-primary mb-lg">
            {t("faq.title")}
          </h2>
          <div className="space-y-sm">
            {faqItems.map((item, index) => (
              <div
                key={item.question}
                className="border border-outline-variant/30 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-md text-left hover:bg-surface-container-low transition-colors"
                >
                  <span className="font-label-lg text-on-surface">{item.question}</span>
                  <Icon
                    name={openFaq === index ? "expand_less" : "expand_more"}
                    className="text-primary"
                  />
                </button>
                {openFaq === index && (
                  <div className="px-md pb-md text-on-surface-variant font-body-md">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
