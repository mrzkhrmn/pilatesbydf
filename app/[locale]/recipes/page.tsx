import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { RecipesContent } from "@/components/sections/recipes/RecipesContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.recipes");
  return { title: t("title"), description: t("description") };
}

export default function RecipesPage() {
  return <RecipesContent />;
}
