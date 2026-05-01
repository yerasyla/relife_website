import type { PrivacyPageSlug } from "@/lib/privacy-ui-translations";
import { PrivacyPolicyBodyRender } from "@/content/privacy/PrivacyPolicyBodyRender";
import {
  privacySlugToDocLang,
  privacySlugUsesRtl,
  slugToPrivacyBodyKey,
} from "@/lib/privacy-body-key";

export function PrivacyPolicy({ locale }: { locale: PrivacyPageSlug }) {
  const bodyKey = slugToPrivacyBodyKey(locale);
  const rtl = privacySlugUsesRtl(locale);
  const lang = privacySlugToDocLang(locale);

  return (
    <div lang={lang} dir={rtl ? "rtl" : "ltr"}>
      <PrivacyPolicyBodyRender bodyKey={bodyKey} />
    </div>
  );
}
