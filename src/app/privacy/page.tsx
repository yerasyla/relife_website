import type { Metadata } from "next";
import { PrivacyPolicy } from "@/content/PrivacyPolicy";
import { siteConfig } from "@/lib/site-config";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects personal information.`,
};

export default function PrivacyPage() {
  return (
    <article className={`container ${styles.legal}`}>
      <PrivacyPolicy />
    </article>
  );
}
