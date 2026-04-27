import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { TermsOfService } from "@/content/TermsOfService";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for the ${siteConfig.name} app and related services.`,
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      updated={siteConfig.lastUpdatedTerms}
      intro={`The agreement that covers your use of ${siteConfig.name} and the services we offer alongside it.`}
    >
      <TermsOfService />
    </LegalShell>
  );
}
