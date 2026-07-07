import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="pt-32 pb-xl min-h-[60vh] flex items-center">
      <Container className="text-center">
        <h1 className="font-display-lg text-display-lg text-primary mb-md">{t("title")}</h1>
        <p className="font-body-lg text-on-surface-variant mb-lg max-w-md mx-auto">
          {t("description")}
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-on-primary px-8 py-4 rounded-full font-label-lg hover:opacity-90 transition-all"
        >
          {t("cta")}
        </Link>
      </Container>
    </div>
  );
}
