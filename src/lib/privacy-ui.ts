/** UI strings for `/privacy` rendered inside LegalShell + language switcher */
export type PrivacyUiStrings = {
  title: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  backToApp: string;
  lastUpdatedPrefix: string;
  tocAriaLabel: string;
  tocTitle: string;
  contactPromptPrefix: string;
  contactPromptSuffix: string;
  questionsTitle: string;
  backToTop: string;
  languageLabel: string;
  /** Shown under language selector */
  translationNote: string;
};

export const PRIVACY_UI_EN: PrivacyUiStrings = {
  title: "Privacy Policy",
  intro:
    "What ReLife collects, why, and the controls you have over your data.",
  metaTitle: "Privacy Policy",
  metaDescription:
    "How ReLife collects, uses, and protects personal information.",
  backToApp: "Back to ReLife",
  lastUpdatedPrefix: "Last updated",
  tocAriaLabel: "Document sections",
  tocTitle: "On this page",
  contactPromptPrefix: "Reach out at",
  contactPromptSuffix: ". We try to respond within a few days.",
  questionsTitle: "Questions?",
  backToTop: "↑ Back to top",
  languageLabel: "Language",
  translationNote:
    "If translations differ, the English Privacy Policy on /privacy is authoritative.",
};
