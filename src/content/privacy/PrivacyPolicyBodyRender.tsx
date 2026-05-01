import type { PrivacyBodyKey } from "@/lib/privacy-body-key";
import { PrivacyBodyEn } from "@/content/privacy/bodies/en";
import { PrivacyBodyFr } from "@/content/privacy/bodies/fr";
import { PrivacyBodyPtPt } from "@/content/privacy/bodies/pt-pt";
import { PrivacyBodyPtBr } from "@/content/privacy/bodies/pt-br";
import { PrivacyBodyEsEs } from "@/content/privacy/bodies/es-es";
import { PrivacyBodyEsMx } from "@/content/privacy/bodies/es-mx";
import { PrivacyBodyZhTw } from "@/content/privacy/bodies/zh-tw";
import { PrivacyBodyZhCn } from "@/content/privacy/bodies/zh-cn";
import { PrivacyBodyDe } from "@/content/privacy/bodies/de";
import { PrivacyBodyRu } from "@/content/privacy/bodies/ru";
import { PrivacyBodyIt } from "@/content/privacy/bodies/it";
import { PrivacyBodyJa } from "@/content/privacy/bodies/ja";
import { PrivacyBodyKo } from "@/content/privacy/bodies/ko";
import { PrivacyBodyVi } from "@/content/privacy/bodies/vi";
import { PrivacyBodyTh } from "@/content/privacy/bodies/th";
import { PrivacyBodyId } from "@/content/privacy/bodies/id";
import { PrivacyBodyTr } from "@/content/privacy/bodies/tr";
import { PrivacyBodyHi } from "@/content/privacy/bodies/hi";
import { PrivacyBodyUr } from "@/content/privacy/bodies/ur";
import { PrivacyBodyAr } from "@/content/privacy/bodies/ar";

export function PrivacyPolicyBodyRender({
  bodyKey,
}: {
  bodyKey: PrivacyBodyKey;
}) {
  switch (bodyKey) {
    case "en":
      return <PrivacyBodyEn />;
    case "fr":
      return <PrivacyBodyFr />;
    case "pt-pt":
      return <PrivacyBodyPtPt />;
    case "pt-br":
      return <PrivacyBodyPtBr />;
    case "es-es":
      return <PrivacyBodyEsEs />;
    case "es-mx":
      return <PrivacyBodyEsMx />;
    case "zh-tw":
      return <PrivacyBodyZhTw />;
    case "zh-cn":
      return <PrivacyBodyZhCn />;
    case "de":
      return <PrivacyBodyDe />;
    case "ru":
      return <PrivacyBodyRu />;
    case "it":
      return <PrivacyBodyIt />;
    case "ja":
      return <PrivacyBodyJa />;
    case "ko":
      return <PrivacyBodyKo />;
    case "vi":
      return <PrivacyBodyVi />;
    case "th":
      return <PrivacyBodyTh />;
    case "id":
      return <PrivacyBodyId />;
    case "tr":
      return <PrivacyBodyTr />;
    case "hi":
      return <PrivacyBodyHi />;
    case "ur":
      return <PrivacyBodyUr />;
    case "ar":
      return <PrivacyBodyAr />;
  }
}
