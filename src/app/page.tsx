import type { CSSProperties } from "react";
import Image from "next/image";
import { ScreenshotStrip } from "@/components/ScreenshotStrip";
import { StoreButtons } from "@/components/StoreButtons";
import { siteConfig } from "@/lib/site-config";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroDecor} aria-hidden>
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M60 12 L98 34 L98 78 L60 100 L22 78 L22 34 Z"
              stroke="currentColor"
              strokeWidth="2.5"
              opacity="0.9"
            />
            <path
              d="M60 28 L86 43 L86 73 L60 88 L34 73 L34 43 Z"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.45"
            />
          </svg>
        </div>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>Tasks meet progression</p>
              <h1 id="hero-heading">
                Gamified learning for your{" "}
                <span className={styles.heroGrad}>real life</span>
              </h1>
              <p>
                {siteConfig.name} turns todos into a simple progress game: finish
                meaningful tasks, get instant feedback on six skill tracks, and
                watch your radar fill in—so building habits feels rewarding, not
                like another endless list.
              </p>
              <div className={styles.heroActions}>
                <StoreButtons />
              </div>
              <div className={styles.heroTrust}>
                <span className={styles.heroTrustItem}>iOS &amp; Android</span>
                <span className={styles.heroTrustDot} aria-hidden />
                <span className={styles.heroTrustItem}>Sync-ready</span>
                <span className={styles.heroTrustDot} aria-hidden />
                <span className={styles.heroTrustItem}>Built for focus</span>
              </div>
            </div>
            <div className={styles.phone}>
              <div className={styles.phoneFrame}>
                <Image
                  src="/screenshots/stats-radar.png"
                  alt="ReLife Stats screen with radar chart for six life areas and progress"
                  width={472}
                  height={1024}
                  priority
                  sizes="(max-width: 900px) 70vw, 300px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="features-heading">
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={`${styles.kicker} ${styles.kickerCenter}`}>
              Designed for momentum
            </p>
            <h2 id="features-heading">Learn by doing—with clear rewards</h2>
            <p className={styles.lead}>
              Same psychology that makes games engaging—goals, feedback, and
              visible levels—applied to your actual week. No gimmicks: just tasks
              you already care about, tied to skills you want to grow.
            </p>
          </div>
          <div className={styles.featureGrid}>
            <article className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardNum}>01</span>
                <span className={styles.cardAccent} aria-hidden />
              </div>
              <h3>Your quest board</h3>
              <p>
                Lists, search, favorites, due times, and smart repeats set up
                small wins you can complete on purpose—then check off and feel
                forward motion.
              </p>
            </article>
            <article className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardNum}>02</span>
                <span className={styles.cardAccent} aria-hidden />
              </div>
              <h3>Six skill tracks to level</h3>
              <p>
                Everyday words in your tasks gently train six dimensions—vitality
                through growth. The radar chart is your snapshot: where you are
                strong, where you are learning next.
              </p>
              <div className={styles.areas} aria-label="Life areas">
                <span
                  className={styles.pill}
                  style={
                    { "--dot": "var(--accent-vitality)" } as CSSProperties
                  }
                >
                  Vitality
                </span>
                <span
                  className={styles.pill}
                  style={
                    { "--dot": "var(--accent-intellect)" } as CSSProperties
                  }
                >
                  Intellect
                </span>
                <span
                  className={styles.pill}
                  style={
                    { "--dot": "var(--accent-emotions)" } as CSSProperties
                  }
                >
                  Emotions
                </span>
                <span
                  className={styles.pill}
                  style={
                    { "--dot": "var(--accent-spirit)" } as CSSProperties
                  }
                >
                  Spirit
                </span>
                <span
                  className={styles.pill}
                  style={
                    { "--dot": "var(--accent-social)" } as CSSProperties
                  }
                >
                  Social
                </span>
                <span
                  className={styles.pill}
                  style={
                    { "--dot": "var(--accent-growth)" } as CSSProperties
                  }
                >
                  Growth
                </span>
              </div>
            </article>
            <article className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardNum}>03</span>
                <span className={styles.cardAccent} aria-hidden />
              </div>
              <h3>Premium: deeper progression</h3>
              <p>
                Go further with richer stats and Premium-only insight—subscribe
                on the App Store or Google Play whenever you want the full
                skill-building view.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.sectionMuted}`}
        aria-labelledby="screens-heading"
      >
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={`${styles.kicker} ${styles.kickerCenter}`}>
              Product tour
            </p>
            <h2 id="screens-heading">See the loop: plan, play, progress</h2>
            <p className={styles.lead}>
              A calm, focused UI on iOS and Android—so attention stays on your
              next move and the skills you are leveling, not on clutter.
            </p>
          </div>
          <ScreenshotStrip />
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaPanel}>
            <div className={styles.ctaInner}>
              <p className={`${styles.kicker} ${styles.kickerCenter}`}>
                Get the app
              </p>
              <h2 id="cta-heading">Start your next level</h2>
              <p>
                Download {siteConfig.name} on the App Store or Google Play and
                turn today&apos;s tasks into tomorrow&apos;s skills.
              </p>
              <div className={styles.ctaActions}>
                <StoreButtons />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
