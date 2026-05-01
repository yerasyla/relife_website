import type { PrivacyPolicySlug } from "@/lib/privacy-locales";
import type { PrivacyPageSlug } from "@/lib/privacy-ui-translations";

/** One translated policy document per language family */
export type PrivacyBodyKey =
  | "en"
  | "pt-pt"
  | "pt-br"
  | "es-es"
  | "es-mx"
  | "fr"
  | "zh-tw"
  | "zh-cn"
  | "de"
  | "ru"
  | "it"
  | "ja"
  | "ko"
  | "vi"
  | "th"
  | "id"
  | "tr"
  | "hi"
  | "ur"
  | "ar";

export function slugToPrivacyBodyKey(slug: PrivacyPageSlug): PrivacyBodyKey {
  if (slug === "en" || slug === "en-au" || slug === "en-ca") return "en";
  if (slug === "fr-fr" || slug === "fr-ca") return "fr";
  return slug as PrivacyBodyKey;
}

export function privacySlugUsesRtl(slug: PrivacyPageSlug): boolean {
  if (slug === "en") return false;
  return slug === "ar" || slug === "ur";
}

export function privacySlugToDocLang(slug: PrivacyPageSlug): string {
  if (slug === "en") return "en";
  const map: Partial<Record<PrivacyPolicySlug, string>> = {
    "pt-pt": "pt-PT",
    "pt-br": "pt-BR",
    "es-es": "es",
    "es-mx": "es-MX",
    "fr-fr": "fr-FR",
    "fr-ca": "fr-CA",
    "zh-tw": "zh-Hant",
    "zh-cn": "zh-Hans",
    "en-au": "en-AU",
    "en-ca": "en-CA",
    ru: "ru-RU",
  };
  return map[slug as PrivacyPolicySlug] ?? slug;
}
