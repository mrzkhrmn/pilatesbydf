"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { images } from "@/lib/images";

export function ShopContent() {
  const t = useTranslations("shop");
  const [activeFilter, setActiveFilter] = useState(0);
  const filters = t.raw("filters") as string[];
  const products = t.raw("products") as Array<{
    name: string;
    variant: string;
    price: string;
  }>;

  return (
    <div className="pt-32 pb-xl">
      <Container>
        <div className="mb-xl text-center">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-base block">
            {t("badge")}
          </span>
          <h1 className="font-display-lg text-display-lg text-primary mb-md">{t("title")}</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-sm mb-lg">
          {filters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(index)}
              className={`px-md py-xs rounded-full font-label-sm transition-all ${
                activeFilter === index
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-low text-secondary hover:bg-secondary-container"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden product-card-shadow transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-surface-container-low">
                <Image
                  src={images.shop[index]}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {index === 0 && (
                  <div className="absolute top-4 left-4 bg-surface/90 px-3 py-1 rounded-full font-label-sm text-primary">
                    {t("newArrival")}
                  </div>
                )}
              </div>
              <div className="p-md flex flex-col flex-grow">
                <h3 className="font-headline-md text-headline-md text-primary mb-xs">
                  {product.name}
                </h3>
                <p className="font-label-sm text-label-sm text-outline-variant uppercase mb-base">
                  {product.variant}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="font-body-lg text-body-lg text-on-surface">
                    {product.price}
                  </span>
                  <button
                    type="button"
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-outline hover:bg-primary hover:text-on-primary hover:border-primary transition-all duration-300"
                    aria-label="Add to cart"
                  >
                    <Icon name="add_shopping_cart" size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="lg:col-span-2 group flex flex-col bg-surface-container-lowest rounded-lg overflow-hidden product-card-shadow transition-transform duration-500 hover:-translate-y-2">
            <div className="grid grid-cols-2 h-full min-h-[280px]">
              <div className="relative overflow-hidden bg-surface-container-low h-full min-h-[200px]">
                <Image
                  src={images.shop[6]}
                  alt={t("featuredProduct.name")}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-lg flex flex-col justify-center">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-xs">
                  {t("featured")}
                </span>
                <h3 className="font-headline-lg text-headline-lg text-primary mb-sm leading-tight">
                  {t("featuredProduct.name")}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                  {t("featuredProduct.description")}
                </p>
                <div className="mt-auto flex justify-between items-center flex-wrap gap-2">
                  <span className="font-body-lg text-body-lg text-on-surface">
                    {t("featuredProduct.price")}
                  </span>
                  <button
                    type="button"
                    className="bg-primary text-on-primary px-lg py-xs rounded-full font-label-lg hover:opacity-90 transition-all"
                  >
                    {t("addToCart")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-xl relative min-h-[360px] md:min-h-[400px] rounded-xl overflow-hidden group">
          <Image
            src={images.shop[7]}
            alt={t("collection.title")}
            fill
            className="object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]" />
          <div className="relative z-10 flex min-h-[360px] md:min-h-[400px] flex-col items-center justify-center px-gutter py-xl text-center">
            <h2 className="font-display-lg text-display-lg text-white mb-md drop-shadow-sm max-w-2xl">
              {t("collection.title")}
            </h2>
            <p className="font-body-lg text-body-lg text-white/90 mb-lg w-full max-w-xl text-pretty">
              {t("collection.description")}
            </p>
            <button
              type="button"
              className="bg-white text-primary px-xl py-base rounded-full font-label-lg hover:bg-surface transition-all scale-100 hover:scale-105 active:scale-95 shrink-0"
            >
              {t("collection.cta")}
            </button>
          </div>
        </section>
      </Container>
    </div>
  );
}
