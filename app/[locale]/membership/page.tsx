import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { MembershipContent } from "@/components/sections/membership/MembershipContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.membership");
  return { title: t("title"), description: t("description") };
}

export default function MembershipPage() {
  return <MembershipContent />;
}
