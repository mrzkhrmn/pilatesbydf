import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { WhyUsSection } from "@/components/sections/home/WhyUsSection";
import { EcosystemSection } from "@/components/sections/home/EcosystemSection";
import { AppDownloadSection } from "@/components/sections/home/AppDownloadSection";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.home");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyUsSection />
      <EcosystemSection />
      <AppDownloadSection />
    </>
  );
}
