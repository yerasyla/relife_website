import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalShell } from "@/components/LegalShell";
import { PrivacyLanguageSwitcher } from "@/components/PrivacyLanguageSwitcher";
import { PrivacyPolicy } from "@/content/PrivacyPolicy";
import {
  PRIVACY_POLICY_SLUGS,
  isPrivacyPolicySlug,
} from "@/lib/privacy-locales";
import { getPrivacyUiStrings } from "@/lib/privacy-ui-translations";
import { siteConfig, siteUrl } from "@/lib/site-config";

/** Only paths from `generateStaticParams` are served (everything else → 404). */
export const dynamicParams = false;

type PageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return PRIVACY_POLICY_SLUGS.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isPrivacyPolicySlug(locale)) {
    return {};
  }

  const path = `/privacy/${locale}`;
  const ui = getPrivacyUiStrings(locale);
  const base = siteUrl();

  return {
    title: ui.metaTitle,
    description: ui.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      url: `${base}${path}`,
      title: ui.metaTitle,
      description: ui.metaDescription,
    },
  };
}

export default async function LocalizedPrivacyPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isPrivacyPolicySlug(locale)) {
    notFound();
  }

  const ui = getPrivacyUiStrings(locale);

  return (
    <LegalShell
      updated={siteConfig.lastUpdatedPrivacy}
      ui={ui}
      showPrivacyDisclaimer
      headerExtra={
        <PrivacyLanguageSwitcher
          current={locale}
          languageLabel={ui.languageLabel}
        />
      }
    >
      <PrivacyPolicy locale={locale} />
    </LegalShell>
  );
}
