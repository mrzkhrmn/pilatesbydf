import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ShopContent } from "@/components/sections/shop/ShopContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.shop");
  return { title: t("title"), description: t("description") };
}

export default function ShopPage() {
  return <ShopContent />;
}
