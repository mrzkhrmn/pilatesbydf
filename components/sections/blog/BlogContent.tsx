"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { images } from "@/lib/images";

export function BlogContent() {
  const t = useTranslations("blog");
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = t.raw("categories") as string[];
  const articles = t.raw("articles") as Array<{
    category: string;
    title: string;
    excerpt: string;
    readTime: string;
  }>;
  const trendingItems = t.raw("trending.items") as string[];

  return (
    <div className="pt-20">
      <section className="relative py-lg md:py-xl overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row gap-lg md:gap-xl items-stretch lg:items-center">
            <div className="flex-1 min-w-0 w-full space-y-sm md:space-y-md">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary bg-secondary-container px-sm py-xs rounded-full inline-block">
                {t("hero.badge")}
              </span>
              <h1 className="font-display-lg text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] lg:text-[64px] leading-tight text-on-background">
                {t("hero.title")}
              </h1>
              <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-on-surface-variant w-full max-w-[36rem] leading-relaxed">
                {t("hero.description")}
              </p>
              <div className="flex items-center gap-sm md:gap-md pt-sm flex-wrap">
                <div className="flex items-center gap-sm min-w-0">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container relative shrink-0">
                    <Image
                      src={images.blog.author}
                      alt={t("hero.author")}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-label-lg text-label-lg text-on-surface">
                      {t("hero.author")}
                    </p>
                    <p className="font-label-sm text-label-sm text-outline">
                      {t("hero.role")}
                    </p>
                  </div>
                </div>
                <span className="text-outline-variant hidden sm:inline">|</span>
                <p className="font-label-sm text-label-sm text-outline uppercase tracking-widest">
                  {t("hero.readTime")}
                </p>
              </div>
            </div>
            <div className="flex-1 w-full min-w-0 relative max-w-lg lg:max-w-none mx-auto lg:mx-0">
              <div className="aspect-[4/5] max-h-[520px] lg:max-h-none rounded-xl overflow-hidden soft-shadow relative">
                <Image
                  src={images.blog.hero}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-md left-md right-md sm:-left-md sm:right-auto bg-surface p-md rounded-lg soft-shadow border border-surface-container max-w-[240px] hidden sm:block">
                <p className="font-label-sm text-label-sm text-primary mb-xs uppercase tracking-widest">
                  Discussion
                </p>
                <p className="font-body-md text-on-surface italic">
                  &ldquo;{t("hero.discussion")}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-container-low/30 py-md mb-lg md:mb-xl">
        <Container className="flex items-center justify-between overflow-x-auto no-scrollbar gap-md">
          <div className="flex gap-sm md:gap-md items-center whitespace-nowrap">
            {categories.map((cat, index) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(index)}
                className={`px-md py-sm rounded-full font-label-lg transition-all ${
                  activeCategory === index
                    ? "bg-primary text-on-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="flex items-center gap-xs text-outline font-label-lg border border-outline-variant/50 px-md py-sm rounded-full shrink-0"
          >
            <Icon name="tune" size={20} />
            {t("filter")}
          </button>
        </Container>
      </section>

      <section className="mb-lg md:mb-xl">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
            <article className="md:col-span-8 group cursor-pointer min-w-0">
              <div className="rounded-xl overflow-hidden aspect-video mb-md relative">
                <Image
                  src={images.blog.large}
                  alt={articles[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-md left-md bg-surface/80 backdrop-blur-sm px-md py-xs rounded-full">
                  <span className="font-label-sm text-label-sm text-primary uppercase">
                    {articles[0].category}
                  </span>
                </div>
              </div>
              <div className="px-xs">
                <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-sm group-hover:text-primary transition-colors">
                  {articles[0].title}
                </h2>
                <p className="text-on-surface-variant font-body-md text-body-md mb-md">
                  {articles[0].excerpt}
                </p>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-widest">
                  {articles[0].readTime}
                </span>
              </div>
            </article>

            <aside className="md:col-span-4 space-y-md min-w-0">
              <h3 className="font-label-lg text-primary uppercase tracking-widest mb-md">
                {t("trending.title")}
              </h3>
              <div className="flex gap-sm overflow-x-auto no-scrollbar pb-sm md:flex-col md:overflow-visible">
                {trendingItems.map((item) => (
                  <div
                    key={item}
                    className="shrink-0 md:shrink bg-surface-container-low p-md rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-colors cursor-pointer min-w-[200px] md:min-w-0"
                  >
                    <p className="font-body-md text-on-surface">{item}</p>
                  </div>
                ))}
              </div>
            </aside>

            {articles.slice(1).map((article) => (
              <article
                key={article.title}
                className="md:col-span-4 group cursor-pointer bg-surface-container-lowest rounded-xl overflow-hidden soft-shadow min-w-0"
              >
                <div className="aspect-[16/10] bg-surface-dim relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                </div>
                <div className="p-md">
                  <span className="font-label-sm text-label-sm text-primary uppercase">
                    {article.category}
                  </span>
                  <h3 className="font-headline-md text-lg md:text-headline-md text-on-surface mt-2 mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm line-clamp-2 mb-2">
                    {article.excerpt}
                  </p>
                  <span className="font-label-sm text-label-sm text-outline">
                    {article.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-lg md:py-xl bg-primary text-on-primary">
        <Container className="text-center max-w-2xl">
          <h2 className="font-display-lg text-[1.75rem] sm:text-[2.25rem] md:text-display-lg mb-sm md:mb-md leading-tight">
            {t("newsletter.title")}
          </h2>
          <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg opacity-80 mb-md md:mb-lg">
            {t("newsletter.description")}
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-sm">
            <input
              type="email"
              placeholder={t("newsletter.placeholder")}
              className="flex-1 min-w-0 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-on-primary placeholder:text-on-primary/50 outline-none focus:ring-2 focus:ring-white/30"
            />
            <button
              type="button"
              className="bg-surface text-primary px-6 py-3 rounded-full font-label-lg hover:opacity-90 transition-all shrink-0"
            >
              {t("newsletter.cta")}
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
}
