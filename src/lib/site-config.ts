export const siteConfig = {
  name: "ReLife",
  /** Browser + Open Graph title */
  metaTitle: "ReLife — Gamified learning for real life",
  description:
    "Turn everyday tasks into skill-building wins. ReLife uses light game mechanics—scores, six life-skill tracks, and a radar chart—so you learn consistency across vitality, intellect, emotions, spirit, social, and growth.",
  supportEmail:
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "team@relife.dev",
  /** Used for data-rights requests where specified in the Privacy Policy */
  dataRightsEmail:
    process.env.NEXT_PUBLIC_DATA_RIGHTS_EMAIL ?? "support@relife.app",
  privacyContact:
    process.env.NEXT_PUBLIC_PRIVACY_EMAIL ??
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL ??
    "team@relife.dev",
  telegramUsername: "bogenb",
  telegramUrl: "https://t.me/bogenb",
  appStoreUrl:
    process.env.NEXT_PUBLIC_APP_STORE_URL ??
    "https://apps.apple.com/us/app/relife-level-up/id6749513808",
  playStoreUrl:
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
    "https://play.google.com/apps/testing/com.yerasyl.todoapp",
  legalEntity: "ReLife",
  /** No postal address provided — general contact via email */
  legalAddress: "Contact: team@relife.dev",
  governingLaw:
    "the laws applicable in your jurisdiction, unless otherwise required by local regulations",
  lastUpdatedTerms: "February 2026",
  lastUpdatedPrivacy: "February 2026",
} as const;

export function siteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}
