import { siteConfig } from "@/lib/site-config";
import styles from "./StoreButtons.module.css";

type Props = {
  variant?: "default" | "compact";
  /** Light buttons for dark backgrounds (e.g. footer) */
  tone?: "default" | "onDark";
};

const BADGE = {
  apple: { src: "/brand/badges/app-store-en.svg", label: "Download on the App Store" },
  google: { src: "/brand/badges/google-play-en.svg", label: "Get it on Google Play" },
  solana: {
    src: "/brand/badges/solana-mobile-en.svg",
    label: "Available on Solana Mobile — Seeker dApp Store",
  },
} as const;

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
        className={styles.storeLink}
        href={siteConfig.appStoreUrl}
        rel="noopener noreferrer"
      >
        <img
          src={BADGE.apple.src}
          alt={BADGE.apple.label}
          className={styles.badge}
          decoding="async"
        />
      </a>
      <a
        className={styles.storeLink}
        href={siteConfig.playStoreUrl}
        rel="noopener noreferrer"
      >
        <img
          src={BADGE.google.src}
          alt={BADGE.google.label}
          className={styles.badge}
          decoding="async"
        />
      </a>
      <a
        className={styles.storeLink}
        href={siteConfig.seekerStoreUrl}
        rel="noopener noreferrer"
      >
        <img
          src={BADGE.solana.src}
          alt={BADGE.solana.label}
          className={styles.badge}
          decoding="async"
        />
      </a>
    </div>
  );
}
