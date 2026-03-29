import type { Metadata } from "next";
import { TermsOfService } from "@/content/TermsOfService";
import { siteConfig } from "@/lib/site-config";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for the ${siteConfig.name} app and related services.`,
};

export default function TermsPage() {
  return (
    <article className={`container ${styles.legal}`}>
      <TermsOfService />
    </article>
  );
}
