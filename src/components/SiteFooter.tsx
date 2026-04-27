import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { StoreButtons } from "@/components/StoreButtons";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.row}>
          <div className={styles.links}>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <a href={`mailto:${siteConfig.supportEmail}`}>Contact</a>
          </div>
          <StoreButtons variant="compact" tone="onDark" />
        </div>
        <p className={styles.meta}>
          © {year} {siteConfig.legalEntity}. {siteConfig.name} is on the{" "}
          <a href={siteConfig.appStoreUrl}>App Store</a>,{" "}
          <a href={siteConfig.playStoreUrl}>Google Play</a>, and the{" "}
          <a href={siteConfig.seekerStoreUrl}>
            Seeker dApp Store (Solana Mobile)
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
