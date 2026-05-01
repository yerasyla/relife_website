"use client";

import { useRouter } from "next/navigation";
import type { PrivacyPageSlug } from "@/lib/privacy-ui-translations";
import { PRIVACY_POLICY_LOCALES } from "@/lib/privacy-locales";
import styles from "./PrivacyLanguageSwitcher.module.css";

type Props = {
  current: PrivacyPageSlug;
  languageLabel: string;
};

export function PrivacyLanguageSwitcher({ current, languageLabel }: Props) {
  const router = useRouter();

  return (
    <div className={styles.wrap}>
      <label className={styles.label} htmlFor="privacy-lang-select">
        {languageLabel}
      </label>
      <select
        id="privacy-lang-select"
        className={styles.select}
        value={current}
        onChange={(e) => {
          const v = e.target.value as PrivacyPageSlug;
          if (v === "en") router.push("/privacy");
          else router.push(`/privacy/${v}`);
        }}
      >
        <option value="en">English</option>
        {PRIVACY_POLICY_LOCALES.map(([slug, label]) => (
          <option key={slug} value={slug}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
