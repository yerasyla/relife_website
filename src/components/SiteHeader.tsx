import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          <Image
            src="/brand/relife-logo.png"
            alt=""
            width={34}
            height={34}
            className={styles.logo}
            priority
          />
          <span className={styles.brandName}>{siteConfig.name}</span>
        </Link>
        <nav className={styles.nav} aria-label="Site">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </div>
    </header>
  );
}
