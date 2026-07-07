"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/ui/SectionHeading";
import { ChipGroup } from "@/components/ui/Chip";
import { Icon } from "@/components/ui/Icon";
import { VideoCard } from "@/components/sections/training/VideoCard";
import { images } from "@/lib/images";

export function TrainingContent() {
  const t = useTranslations("training");
  const [activeFilter, setActiveFilter] = useState(0);
  const filters = t.raw("filters") as string[];
  const videos = t.raw("videos") as Array<{
    title: string;
    description: string;
    duration: string;
    level: string;
  }>;

  return (
    <div className="pt-32 pb-xl">
      <Container>
        <PageHeader title={t("title")} description={t("description")} />

        <section className="mb-lg space-y-md">
          <div className="flex md:hidden items-center bg-surface-container px-4 py-3 rounded-xl">
            <Icon name="search" className="text-outline mr-3" />
            <input
              className="bg-transparent border-none focus:ring-0 text-body-md w-full outline-none"
              placeholder={t("searchPlaceholder")}
              type="text"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <ChipGroup
              items={filters}
              activeIndex={activeFilter}
              onChange={setActiveFilter}
            />
            <div className="hidden md:flex ml-auto items-center space-x-4">
              <span className="font-label-sm text-label-sm text-outline uppercase">
                {t("sortLabel")}
              </span>
              <select className="bg-transparent border-none focus:ring-0 text-label-lg font-label-lg text-primary cursor-pointer outline-none">
                {(t.raw("sortOptions") as string[]).map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md lg:gap-lg">
          {videos.map((video, index) => (
            <VideoCard
              key={video.title}
              {...video}
              image={images.training[index]}
            />
          ))}
        </div>

        <div className="mt-xl flex justify-center items-center space-x-4">
          <button
            type="button"
            className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-surface-container transition-colors disabled:opacity-30"
            disabled
          >
            <Icon name="chevron_left" />
          </button>
          <span className="font-label-lg text-label-lg text-primary">
            {t("pagination", { current: 1, total: 4 })}
          </span>
          <button
            type="button"
            className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-surface-container transition-colors"
          >
            <Icon name="chevron_right" />
          </button>
        </div>
      </Container>
    </div>
  );
}
