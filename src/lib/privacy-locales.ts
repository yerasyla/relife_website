/**
 * Google Play “Privacy Policy URL” fields per locale.
 * Base URL: https://<your-domain>/privacy/<slug>
 *
 * Example (production): https://relife.dev/privacy/pt-pt
 */
export const PRIVACY_POLICY_LOCALES = [
  ["pt-pt", "Portuguese (Portugal)"],
  ["id", "Indonesian"],
  ["th", "Thai"],
  ["ur", "Urdu"],
  ["tr", "Turkish"],
  ["ja", "Japanese"],
  ["ko", "Korean"],
  ["vi", "Vietnamese"],
  ["it", "Italian"],
  ["en-au", "English (Australia)"],
  ["fr-fr", "French (France)"],
  ["es-mx", "Spanish (Mexico)"],
  ["hi", "Hindi"],
  ["zh-tw", "Chinese (Traditional)"],
  ["pt-br", "Portuguese (Brazil)"],
  ["ar", "Arabic"],
  ["fr-ca", "French (Canada)"],
  ["de", "German"],
  ["zh-cn", "Chinese (Simplified)"],
  ["en-ca", "English (Canada)"],
  ["es-es", "Spanish (Spain)"],
] as const;

export type PrivacyPolicySlug = (typeof PRIVACY_POLICY_LOCALES)[number][0];

export const PRIVACY_POLICY_SLUGS: readonly PrivacyPolicySlug[] =
  PRIVACY_POLICY_LOCALES.map(([slug]) => slug);

export function isPrivacyPolicySlug(s: string): s is PrivacyPolicySlug {
  return (PRIVACY_POLICY_SLUGS as readonly string[]).includes(s);
}
