import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { PrivacyPolicy } from "@/content/PrivacyPolicy";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects personal information.`,
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      updated={siteConfig.lastUpdatedPrivacy}
      intro={`What ${siteConfig.name} collects, why, and the controls you have over your data.`}
    >
      <PrivacyPolicy />
    </LegalShell>
  );
}
