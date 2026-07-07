import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BlogContent } from "@/components/sections/blog/BlogContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.blog");
  return { title: t("title"), description: t("description") };
}

export default function BlogPage() {
  return <BlogContent />;
}
