export const siteConfig = {
  name: "ReLife",
  /** Browser + Open Graph title */
  metaTitle: "ReLife: ToDo & Habit Tracker — Level up your life daily",
  description:
    "Gamify your life with XP, levels, and AI guidance. ReLife is a to-do list, habit tracker, and gamified planner—earn XP, level up, and grow across Vitality, Intellect, Emotions, Spirit, Social, and Discipline. Offline-friendly with secure sync.",
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
    "https://apps.apple.com/us/app/relife-todo-habit-tracker/id6749513808",
  playStoreUrl:
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
    "https://play.google.com/store/apps/details?id=com.yerasyl.todoapp",
  /** Solana Mobile — Seeker dApp Store */
  seekerStoreUrl:
    process.env.NEXT_PUBLIC_SEEKER_STORE_URL ?? "https://solanamobile.com/",
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
