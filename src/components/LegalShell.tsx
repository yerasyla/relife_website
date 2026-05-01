"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { siteConfig } from "@/lib/site-config";
import type { PrivacyUiStrings } from "@/lib/privacy-ui";
import { PRIVACY_UI_EN } from "@/lib/privacy-ui";
import styles from "./LegalShell.module.css";

type Section = { id: string; label: string };

type Props = {
  updated: string;
  /** Merged over English defaults (recommended for `/privacy`) */
  ui?: Partial<PrivacyUiStrings>;
  /** Shorthand for non-privacy documents (e.g. Terms) */
  title?: string;
  intro?: string;
  /** Extra controls below intro (e.g. language switcher) */
  headerExtra?: ReactNode;
  /** English authoritative-policy note — `/privacy` only */
  showPrivacyDisclaimer?: boolean;
  /** Shown at the top of the article */
  articleLead?: ReactNode;
  children: ReactNode;
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function LegalShell({
  ui: uiPartial,
  updated,
  title,
  intro,
  headerExtra,
  showPrivacyDisclaimer = false,
  articleLead,
  children,
}: Props) {
  const ui: PrivacyUiStrings = {
    ...PRIVACY_UI_EN,
    ...(title ? { title, metaTitle: title } : {}),
    ...(intro ? { intro } : {}),
    ...uiPartial,
  };
  const articleRef = useRef<HTMLDivElement>(null);
  const [sections, setSections] = useState<Section[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const root = articleRef.current;
    if (!root) return;
    const found: Section[] = [];
    root.querySelectorAll("h2").forEach((h2) => {
      const label = h2.textContent?.trim() ?? "";
      if (!label) return;
      const id = h2.id || slugify(label);
      h2.id = id;
      found.push({ id, label });
    });
    requestAnimationFrame(() => {
      setSections(found);
    });
  }, [children]);

  useEffect(() => {
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: [0, 1] }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const lastUpdatedISO = useMemo(() => {
    const d = new Date(`${updated} 1`);
    return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
  }, [updated]);

  return (
    <div id="top" className={styles.shell}>
      <header className={styles.hero}>
        <div className="container">
          <Link href="/" className={styles.back}>
            <span aria-hidden>←</span> {ui.backToApp}
          </Link>
          <h1 className={styles.title}>{ui.title}</h1>
          <p className={styles.meta}>
            {ui.lastUpdatedPrefix}{" "}
            <time dateTime={lastUpdatedISO}>{updated}</time>
          </p>
          <p className={styles.intro}>{ui.intro}</p>
          {headerExtra}
          {showPrivacyDisclaimer ? (
            <p className={styles.translationNote}>{ui.translationNote}</p>
          ) : null}
        </div>
      </header>

      <div className={`container ${styles.layout}`}>
        <aside className={styles.tocWrap} aria-label={ui.tocAriaLabel}>
          <nav className={styles.toc}>
            <p className={styles.tocTitle}>{ui.tocTitle}</p>
            <ol className={styles.tocList}>
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`${styles.tocLink} ${
                      activeId === s.id ? styles.tocLinkActive : ""
                    }`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article ref={articleRef} className={styles.article}>
          {articleLead}
          {children}

          <div className={styles.contact}>
            <h2 className={styles.contactTitle}>{ui.questionsTitle}</h2>
            <p>
              {ui.contactPromptPrefix}{" "}
              <a href={`mailto:${siteConfig.supportEmail}`}>
                {siteConfig.supportEmail}
              </a>
              {ui.contactPromptSuffix}
            </p>
            <a className={styles.topLink} href="#top">
              {ui.backToTop}
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
