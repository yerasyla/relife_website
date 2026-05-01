import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { PrivacyLanguageSwitcher } from "@/components/PrivacyLanguageSwitcher";
import { PrivacyPolicy } from "@/content/PrivacyPolicy";
import { getPrivacyUiStrings } from "@/lib/privacy-ui-translations";
import { siteConfig } from "@/lib/site-config";

const privacyUiEn = getPrivacyUiStrings("en");

export const metadata: Metadata = {
  title: privacyUiEn.metaTitle,
  description: privacyUiEn.metaDescription,
};

export default function PrivacyPage() {
  const ui = privacyUiEn;

  return (
    <LegalShell
      updated={siteConfig.lastUpdatedPrivacy}
      ui={ui}
      showPrivacyDisclaimer
      headerExtra={
        <PrivacyLanguageSwitcher
          current="en"
          languageLabel={ui.languageLabel}
        />
      }
    >
      <PrivacyPolicy locale="en" />
    </LegalShell>
  );
}
