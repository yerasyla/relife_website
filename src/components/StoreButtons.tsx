import { siteConfig } from "@/lib/site-config";
import styles from "./StoreButtons.module.css";

type Props = {
  variant?: "default" | "compact";
  /** Light buttons for dark backgrounds (e.g. footer) */
  tone?: "default" | "onDark";
};

export function StoreButtons({
  variant = "default",
  tone = "default",
}: Props) {
  const groupClass = [
    styles.group,
    variant === "compact" && styles.compact,
    tone === "onDark" && styles.onDark,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={groupClass}>
      <a
        className={`${styles.btn} ${styles.primary}`}
        href={siteConfig.appStoreUrl}
        rel="noopener noreferrer"
      >
        App Store
      </a>
      <a
        className={`${styles.btn} ${styles.secondary}`}
        href={siteConfig.playStoreUrl}
        rel="noopener noreferrer"
      >
        Google Play
      </a>
    </div>
  );
}
