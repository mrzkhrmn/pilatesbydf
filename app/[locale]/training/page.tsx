import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { TrainingContent } from "@/components/sections/training/TrainingContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.training");
  return { title: t("title"), description: t("description") };
}

export default function TrainingPage() {
  return <TrainingContent />;
}
