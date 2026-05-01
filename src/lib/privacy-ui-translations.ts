import type { PrivacyPolicySlug } from "@/lib/privacy-locales";
import type { PrivacyUiStrings } from "@/lib/privacy-ui";
import { PRIVACY_UI_EN } from "@/lib/privacy-ui";

export type PrivacyPageSlug = "en" | PrivacyPolicySlug;

/** Shell + metadata strings per store locale slug (includes English variants). */
export const PRIVACY_UI_BY_SLUG: Record<PrivacyPolicySlug, PrivacyUiStrings> = {
  "pt-pt": {
    ...PRIVACY_UI_EN,
    title: "Política de Privacidade",
    intro:
      "O que o ReLife recolhe, porquê e que controlo tem sobre os seus dados.",
    metaTitle: "Política de Privacidade — ReLife",
    metaDescription:
      "Como o ReLife recolhe, utiliza e protege informações pessoais.",
    backToApp: "Voltar ao ReLife",
    lastUpdatedPrefix: "Última atualização",
    tocAriaLabel: "Secções do documento",
    tocTitle: "Nesta página",
    contactPromptPrefix: "Contacte-nos em",
    contactPromptSuffix: ". Tentamos responder em poucos dias.",
    questionsTitle: "Dúvidas?",
    backToTop: "↑ Voltar ao topo",
    languageLabel: "Idioma",
    translationNote:
      "Em caso de divergência, a Política de Privacidade em inglês em /privacy prevalece.",
  },
  id: {
    ...PRIVACY_UI_EN,
    title: "Kebijakan Privasi",
    intro:
      "Apa yang dikumpulkan ReLife, mengapa, dan kendali Anda atas data Anda.",
    metaTitle: "Kebijakan Privasi — ReLife",
    metaDescription:
      "Cara ReLife mengumpulkan, menggunakan, dan melindungi informasi pribadi.",
    backToApp: "Kembali ke ReLife",
    lastUpdatedPrefix: "Terakhir diperbarui",
    tocAriaLabel: "Bagian dokumen",
    tocTitle: "Di halaman ini",
    contactPromptPrefix: "Hubungi kami di",
    contactPromptSuffix:
      ". Kami berusaha membalas dalam beberapa hari.",
    questionsTitle: "Pertanyaan?",
    backToTop: "↑ Kembali ke atas",
    languageLabel: "Bahasa",
    translationNote:
      "Jika terjadi perbedaan, Kebijakan Privasi bahasa Inggris di /privacy yang berlaku.",
  },
  th: {
    ...PRIVACY_UI_EN,
    title: "นโยบายความเป็นส่วนตัว",
    intro:
      "ReLife เก็บข้อมูลอะไรบ้าง เพราะอะไร และคุณควบคุมข้อมูลของคุณได้อย่างไร",
    metaTitle: "นโยบายความเป็นส่วนตัว — ReLife",
    metaDescription:
      "วิธีที่ ReLife เก็บรวบรวม ใช้ และปกป้องข้อมูลส่วนบุคคล",
    backToApp: "กลับไปที่ ReLife",
    lastUpdatedPrefix: "อัปเดตล่าสุด",
    tocAriaLabel: "ส่วนต่างของเอกสาร",
    tocTitle: "ในหน้านี้",
    contactPromptPrefix: "ติดต่อเราที่",
    contactPromptSuffix: " เราพยายามตอบกลับภายในไม่กี่วัน",
    questionsTitle: "มีคำถาม?",
    backToTop: "↑ กลับด้านบน",
    languageLabel: "ภาษา",
    translationNote:
      "หากมีความขัดแย้ง ให้ยึดนโยบายความเป็นส่วนตัวภาษาอังกฤษที่ /privacy",
  },
  ur: {
    ...PRIVACY_UI_EN,
    title: "رازداری کی پالیسی",
    intro:
      "ReLife کیا اکٹھا کرتا ہے، کیوں، اور آپ کا اپنے ڈیٹا پر کنٹرول۔",
    metaTitle: "رازداری کی پالیسی — ReLife",
    metaDescription:
      "ReLife ذاتی معلومات کیسے اکٹھی، استعمال اور حفاظت کرتا ہے۔",
    backToApp: "ReLife پر واپس",
    lastUpdatedPrefix: "آخری تازہ کاری",
    tocAriaLabel: "دستاویز کے سیکشن",
    tocTitle: "اس صفحے پر",
    contactPromptPrefix: "ہم سے رابطہ کریں",
    contactPromptSuffix:
      " پر۔ ہم چند دنوں میں جواب دینے کی کوشش کرتے ہیں۔",
    questionsTitle: "سوالات؟",
    backToTop: "↑ اوپر واپس",
    languageLabel: "زبان",
    translationNote:
      "ترجموں میں اختلاف کی صورت میں انگریزی میں /privacy پر پالیسی غالب رہے گی۔",
  },
  tr: {
    ...PRIVACY_UI_EN,
    title: "Gizlilik Politikası",
    intro:
      "ReLife’ın ne topladığı, neden ve verileriniz üzerindeki kontrolleriniz.",
    metaTitle: "Gizlilik Politikası — ReLife",
    metaDescription:
      "ReLife kişisel bilgileri nasıl toplar, kullanır ve korur.",
    backToApp: "ReLife’a dön",
    lastUpdatedPrefix: "Son güncelleme",
    tocAriaLabel: "Belge bölümleri",
    tocTitle: "Bu sayfada",
    contactPromptPrefix: "Bize şu adresten ulaşın:",
    contactPromptSuffix:
      ". Birkaç gün içinde yanıtlamaya çalışıyoruz.",
    questionsTitle: "Sorularınız mı var?",
    backToTop: "↑ Yukarı dön",
    languageLabel: "Dil",
    translationNote:
      "Çeviriler farklıysa, /privacy adresindeki İngilizce Gizlilik Politikası geçerlidir.",
  },
  ja: {
    ...PRIVACY_UI_EN,
    title: "プライバシーポリシー",
    intro:
      "ReLife が収集する情報、その理由、およびお客様がデータを管理する方法。",
    metaTitle: "プライバシーポリシー — ReLife",
    metaDescription:
      "ReLife が個人情報をどのように収集・利用・保護するか。",
    backToApp: "ReLife に戻る",
    lastUpdatedPrefix: "最終更新",
    tocAriaLabel: "ドキュメントの見出し",
    tocTitle: "このページの内容",
    contactPromptPrefix: "お問い合わせ:",
    contactPromptSuffix:
      "（数日以内の返信を目指しています）",
    questionsTitle: "ご質問はありますか？",
    backToTop: "↑ ページ上部へ",
    languageLabel: "言語",
    translationNote:
      "翻訳に相違がある場合は、/privacy の英語版プライバシーポリシーが優先されます。",
  },
  ko: {
    ...PRIVACY_UI_EN,
    title: "개인정보 처리방침",
    intro:
      "ReLife가 수집하는 정보, 이유, 그리고 귀하가 데이터를 통제하는 방법입니다.",
    metaTitle: "개인정보 처리방침 — ReLife",
    metaDescription:
      "ReLife가 개인정보를 수집·이용·보호하는 방법.",
    backToApp: "ReLife로 돌아가기",
    lastUpdatedPrefix: "최종 업데이트",
    tocAriaLabel: "문서 섹션",
    tocTitle: "목차",
    contactPromptPrefix: "문의:",
    contactPromptSuffix:
      " (며칠 내 답변을 드리도록 노력합니다)",
    questionsTitle: "질문이 있으신가요?",
    backToTop: "↑ 맨 위로",
    languageLabel: "언어",
    translationNote:
      "번역 내용이 다를 경우 /privacy의 영어 버전이 우선합니다.",
  },
  vi: {
    ...PRIVACY_UI_EN,
    title: "Chính sách quyền riêng tư",
    intro:
      "ReLife thu thập gì, vì sao, và bạn kiểm soát dữ liệu như thế nào.",
    metaTitle: "Chính sách quyền riêng tư — ReLife",
    metaDescription:
      "Cách ReLife thu thập, sử dụng và bảo vệ thông tin cá nhân.",
    backToApp: "Quay lại ReLife",
    lastUpdatedPrefix: "Cập nhật lần cuối",
    tocAriaLabel: "Phần trong tài liệu",
    tocTitle: "Trên trang này",
    contactPromptPrefix: "Liên hệ tại",
    contactPromptSuffix:
      ". Chúng tôi cố gắng phản hồi trong vài ngày.",
    questionsTitle: "Câu hỏi?",
    backToTop: "↑ Về đầu trang",
    languageLabel: "Ngôn ngữ",
    translationNote:
      "Nếu bản dịch khác nhau, bản tiếng Anh tại /privacy được ưu tiên.",
  },
  it: {
    ...PRIVACY_UI_EN,
    title: "Informativa sulla privacy",
    intro:
      "Cosa raccoglie ReLife, perché e quali controlli hai sui tuoi dati.",
    metaTitle: "Informativa sulla privacy — ReLife",
    metaDescription:
      "Come ReLife raccoglie, usa e protegge le informazioni personali.",
    backToApp: "Torna a ReLife",
    lastUpdatedPrefix: "Ultimo aggiornamento",
    tocAriaLabel: "Sezioni del documento",
    tocTitle: "In questa pagina",
    contactPromptPrefix: "Scrivici a",
    contactPromptSuffix:
      ". Cerchiamo di rispondere entro pochi giorni.",
    questionsTitle: "Domande?",
    backToTop: "↑ Torna su",
    languageLabel: "Lingua",
    translationNote:
      "In caso di discrepanze, fa fede l’informativa in inglese su /privacy.",
  },
  "en-au": { ...PRIVACY_UI_EN },
  "fr-fr": {
    ...PRIVACY_UI_EN,
    title: "Politique de confidentialité",
    intro:
      "Ce que ReLife collecte, pourquoi, et les contrôles dont vous disposez.",
    metaTitle: "Politique de confidentialité — ReLife",
    metaDescription:
      "Comment ReLife collecte, utilise et protège les informations personnelles.",
    backToApp: "Retour à ReLife",
    lastUpdatedPrefix: "Dernière mise à jour",
    tocAriaLabel: "Sections du document",
    tocTitle: "Sur cette page",
    contactPromptPrefix: "Écrivez-nous à",
    contactPromptSuffix:
      ". Nous essayons de répondre sous quelques jours.",
    questionsTitle: "Des questions ?",
    backToTop: "↑ Haut de page",
    languageLabel: "Langue",
    translationNote:
      "En cas d’écart, la politique en anglais sur /privacy fait foi.",
  },
  "es-mx": {
    ...PRIVACY_UI_EN,
    title: "Política de privacidad",
    intro:
      "Qué recopila ReLife, por qué y qué control tienes sobre tus datos.",
    metaTitle: "Política de privacidad — ReLife",
    metaDescription:
      "Cómo ReLife recopila, usa y protege la información personal.",
    backToApp: "Volver a ReLife",
    lastUpdatedPrefix: "Última actualización",
    tocAriaLabel: "Secciones del documento",
    tocTitle: "En esta página",
    contactPromptPrefix: "Escríbenos a",
    contactPromptSuffix:
      ". Intentamos responder en unos días.",
    questionsTitle: "¿Preguntas?",
    backToTop: "↑ Volver arriba",
    languageLabel: "Idioma",
    translationNote:
      "Si hay diferencias, prevalece la política en inglés en /privacy.",
  },
  hi: {
    ...PRIVACY_UI_EN,
    title: "गोपनीयता नीति",
    intro:
      "ReLife क्या एकत्र करता है, क्यों, और आपके डेटा पर आपका नियंत्रण।",
    metaTitle: "गोपनीयता नीति — ReLife",
    metaDescription:
      "ReLife व्यक्तिगत जानकारी कैसे एकत्र, उपयोग और सुरक्षित करता है।",
    backToApp: "ReLife पर वापस जाएँ",
    lastUpdatedPrefix: "अंतिम अद्यतन",
    tocAriaLabel: "दस्तावेज़ खंड",
    tocTitle: "इस पृष्ठ पर",
    contactPromptPrefix: "हमसे संपर्क करें",
    contactPromptSuffix:
      " पर। हम कुछ दिनों में जवाब देने का प्रयास करते हैं।",
    questionsTitle: "प्रश्न?",
    backToTop: "↑ शीर्ष पर लौटें",
    languageLabel: "भाषा",
    translationNote:
      "अनुवादों में भेद होने पर /privacy पर अंग्रेज़ी नीति प्रभावी होगी।",
  },
  "zh-tw": {
    ...PRIVACY_UI_EN,
    title: "隱私權政策",
    intro: "ReLife 收集哪些資料、為何收集，以及您對資料有哪些掌控方式。",
    metaTitle: "隱私權政策 — ReLife",
    metaDescription: "ReLife 如何收集、使用與保護個人資訊。",
    backToApp: "返回 ReLife",
    lastUpdatedPrefix: "最後更新",
    tocAriaLabel: "文件章節",
    tocTitle: "本頁目錄",
    contactPromptPrefix: "請洽",
    contactPromptSuffix: "（我們會盡快於數日內回覆）",
    questionsTitle: "有問題？",
    backToTop: "↑ 返回頂端",
    languageLabel: "語言",
    translationNote: "若翻譯內容不一致，以 /privacy 的英文版本為準。",
  },
  "pt-br": {
    ...PRIVACY_UI_EN,
    title: "Política de Privacidade",
    intro:
      "O que o ReLife coleta, por quê e quais controles você tem sobre seus dados.",
    metaTitle: "Política de Privacidade — ReLife",
    metaDescription:
      "Como o ReLife coleta, usa e protege informações pessoais.",
    backToApp: "Voltar ao ReLife",
    lastUpdatedPrefix: "Última atualização",
    tocAriaLabel: "Seções do documento",
    tocTitle: "Nesta página",
    contactPromptPrefix: "Fale conosco em",
    contactPromptSuffix:
      ". Tentamos responder em poucos dias.",
    questionsTitle: "Dúvidas?",
    backToTop: "↑ Voltar ao topo",
    languageLabel: "Idioma",
    translationNote:
      "Em caso de divergência, a política em inglês em /privacy prevalece.",
  },
  ar: {
    ...PRIVACY_UI_EN,
    title: "سياسة الخصوصية",
    intro:
      "ما الذي تجمعه ReLife ولماذا، وما ضوابطك على بياناتك.",
    metaTitle: "سياسة الخصوصية — ReLife",
    metaDescription:
      "كيف تجمع ReLife المعلومات الشخصية وتستخدمها وتحميها.",
    backToApp: "العودة إلى ReLife",
    lastUpdatedPrefix: "آخر تحديث",
    tocAriaLabel: "أقسام المستند",
    tocTitle: "في هذه الصفحة",
    contactPromptPrefix: "تواصل معنا على",
    contactPromptSuffix:
      ". نحاول الرد خلال أيام قليلة.",
    questionsTitle: "أسئلة؟",
    backToTop: "↑ العودة للأعلى",
    languageLabel: "اللغة",
    translationNote:
      "عند التعارض، تُعتمد سياسة الخصوصية الإنجليزية على /privacy.",
  },
  /* Same UI strings as France; listing slug differs for Play Console only */
  "fr-ca": {
    ...PRIVACY_UI_EN,
    title: "Politique de confidentialité",
    intro:
      "Ce que ReLife collecte, pourquoi, et les contrôles dont vous disposez.",
    metaTitle: "Politique de confidentialité — ReLife",
    metaDescription:
      "Comment ReLife collecte, utilise et protège les informations personnelles.",
    backToApp: "Retour à ReLife",
    lastUpdatedPrefix: "Dernière mise à jour",
    tocAriaLabel: "Sections du document",
    tocTitle: "Sur cette page",
    contactPromptPrefix: "Écrivez-nous à",
    contactPromptSuffix:
      ". Nous essayons de répondre sous quelques jours.",
    questionsTitle: "Des questions ?",
    backToTop: "↑ Haut de page",
    languageLabel: "Langue",
    translationNote:
      "En cas d’écart, la politique en anglais sur /privacy fait foi.",
  },
  "de": {
    ...PRIVACY_UI_EN,
    title: "Datenschutzerklärung",
    intro:
      "Welche Daten ReLife erhebt, warum und welche Kontrollen Sie haben.",
    metaTitle: "Datenschutzerklärung — ReLife",
    metaDescription:
      "Wie ReLife personenbezogene Daten erhebt, nutzt und schützt.",
    backToApp: "Zurück zu ReLife",
    lastUpdatedPrefix: "Zuletzt aktualisiert",
    tocAriaLabel: "Dokumentabschnitte",
    tocTitle: "Auf dieser Seite",
    contactPromptPrefix: "Schreiben Sie uns unter",
    contactPromptSuffix:
      ". Wir versuchen, innerhalb weniger Tage zu antworten.",
    questionsTitle: "Fragen?",
    backToTop: "↑ Nach oben",
    languageLabel: "Sprache",
    translationNote:
      "Bei Abweichungen gilt die englische Datenschutzerklärung unter /privacy.",
  },
  ru: {
    ...PRIVACY_UI_EN,
    title: "Политика конфиденциальности",
    intro:
      "Что ReLife собирает, зачем и какие возможности управления данными у вас есть.",
    metaTitle: "Политика конфиденциальности — ReLife",
    metaDescription:
      "Как ReLife собирает, использует и защищает персональные данные.",
    backToApp: "Назад к ReLife",
    lastUpdatedPrefix: "Последнее обновление",
    tocAriaLabel: "Разделы документа",
    tocTitle: "На этой странице",
    contactPromptPrefix: "Напишите нам на",
    contactPromptSuffix:
      ". Мы стараемся ответить в течение нескольких дней.",
    questionsTitle: "Вопросы?",
    backToTop: "↑ Наверх",
    languageLabel: "Язык",
    translationNote:
      "При расхождениях приоритет имеет англоязычная политика по адресу /privacy.",
  },
  "zh-cn": {
    ...PRIVACY_UI_EN,
    title: "隐私政策",
    intro: "ReLife 收集哪些信息、为何收集，以及您对数据的控制方式。",
    metaTitle: "隐私政策 — ReLife",
    metaDescription: "ReLife 如何收集、使用和保护个人信息。",
    backToApp: "返回 ReLife",
    lastUpdatedPrefix: "最近更新",
    tocAriaLabel: "文档章节",
    tocTitle: "本页目录",
    contactPromptPrefix: "联系我们：",
    contactPromptSuffix: "（我们会尽量在几天内回复）",
    questionsTitle: "有疑问？",
    backToTop: "↑ 返回顶部",
    languageLabel: "语言",
    translationNote: "如译文不一致，以 /privacy 的英文版为准。",
  },
  "en-ca": { ...PRIVACY_UI_EN },
  "es-es": {
    ...PRIVACY_UI_EN,
    title: "Política de privacidad",
    intro:
      "Qué recopila ReLife, por qué y qué control tienes sobre tus datos.",
    metaTitle: "Política de privacidad — ReLife",
    metaDescription:
      "Cómo ReLife recopila, usa y protege la información personal.",
    backToApp: "Volver a ReLife",
    lastUpdatedPrefix: "Última actualización",
    tocAriaLabel: "Secciones del documento",
    tocTitle: "En esta página",
    contactPromptPrefix: "Escríbenos a",
    contactPromptSuffix:
      ". Intentamos responder en unos días.",
    questionsTitle: "¿Preguntas?",
    backToTop: "↑ Volver arriba",
    languageLabel: "Idioma",
    translationNote:
      "Si hay diferencias, prevalece la política en inglés en /privacy.",
  },
};

export function getPrivacyUiStrings(locale: PrivacyPageSlug): PrivacyUiStrings {
  if (locale === "en") return PRIVACY_UI_EN;
  return PRIVACY_UI_BY_SLUG[locale];
}
