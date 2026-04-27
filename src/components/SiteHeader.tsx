"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import styles from "./SiteHeader.module.css";

const navItems = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label={`${siteConfig.name} — home`}>
          {/* <img> avoids Next/Image optimization cache so logo updates deploy immediately */}
          <img
            src="/brand/relife-logo.png"
            alt=""
            width={36}
            height={36}
            className={styles.logo}
            decoding="async"
            fetchPriority="high"
          />
          <span className={styles.brandName}>{siteConfig.name}</span>
        </Link>

        <nav className={styles.nav} aria-label="Site">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
