import type { CSSProperties } from "react";
import Image from "next/image";
import { ScreenshotStrip } from "@/components/ScreenshotStrip";
import { StoreButtons } from "@/components/StoreButtons";
import { siteConfig } from "@/lib/site-config";
import styles from "./home.module.css";

const lifeAreas = [
  { label: "Vitality", color: "var(--accent-vitality)" },
  { label: "Intellect", color: "var(--accent-intellect)" },
  { label: "Emotions", color: "var(--accent-emotions)" },
  { label: "Spirit", color: "var(--accent-spirit)" },
  { label: "Social", color: "var(--accent-social)" },
  { label: "Discipline", color: "var(--accent-growth)" },
] as const;

export default function Home() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroBg} aria-hidden>
          <span className={styles.heroBlobA} />
          <span className={styles.heroBlobB} />
          <span className={styles.heroGrid} />
        </div>
        <div className="container">
          <div className={styles.heroLayout}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>
                <span className={styles.kickerDot} aria-hidden />
                Productivity that levels you up
              </p>
              <h1 id="hero-heading">
                Turn daily tasks into{" "}
                <span className={styles.heroGrad}>visible growth</span>
              </h1>
              <p className={styles.heroSub}>
                {siteConfig.name} is a to-do list and habit tracker in one. Tag
                the tasks that matter, earn XP for the work that counts, and
                grow across six life areas — offline-first, with secure sync
                and an AI guide.
              </p>
              <div className={styles.heroActions}>
                <StoreButtons />
              </div>
              <div className={styles.heroTrust}>
                <span className={styles.heroTrustItem}>App Store &amp; Google Play</span>
                <span className={styles.heroTrustDot} aria-hidden />
                <a
                  className={styles.heroTrustLink}
                  href={siteConfig.seekerStoreUrl}
                  rel="noopener noreferrer"
                >
                  Seeker dApp Store
                </a>
                <span className={styles.heroTrustDot} aria-hidden />
                <span className={styles.heroTrustItem}>Offline &amp; sync</span>
              </div>
            </div>

            <div className={styles.heroStage}>
              <span className={styles.heroGlow} aria-hidden />
              <div className={styles.phoneFrame}>
                <div className={styles.phoneScreen}>
                  <Image
                    src="/screenshots/tasks.png"
                    alt="ReLife tasks and daily list"
                    fill
                    priority
                    sizes="(max-width: 900px) 78vw, 320px"
                    className={styles.phoneScreenImg}
                  />
                </div>
              </div>

              <div className={`${styles.floatCard} ${styles.floatXp}`} aria-hidden>
                <span className={styles.floatXpBurst}>+45 XP</span>
                <span className={styles.floatXpLabel}>Vitality · Morning run</span>
              </div>

              <div className={`${styles.floatCard} ${styles.floatLevel}`} aria-hidden>
                <div className={styles.floatLevelHead}>
                  <span className={styles.floatLevelTag}>Level 7</span>
                  <span className={styles.floatLevelDelta}>+4</span>
                </div>
                <div className={styles.xpTrack}>
                  <span className={styles.xpFill} />
                </div>
                <span className={styles.floatLevelMeta}>Discipline · 240 / 400</span>
              </div>

              <div className={`${styles.floatCard} ${styles.floatStreak}`} aria-hidden>
                <span className={styles.floatStreakNum}>12</span>
                <span className={styles.floatStreakLabel}>day streak</span>
              </div>
            </div>
          </div>

          <dl className={styles.heroStats} aria-label={`${siteConfig.name} highlights`}>
            <div>
              <dt>6</dt>
              <dd>life areas</dd>
            </div>
            <div>
              <dt>XP</dt>
              <dd>For meaningful work</dd>
            </div>
            <div>
              <dt>AI</dt>
              <dd>practical guidance</dd>
            </div>
            <div>
              <dt>∞</dt>
              <dd>offline-first</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="features-heading">
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={`${styles.kicker} ${styles.kickerCenter}`}>
              Built for real life
            </p>
            <h2 id="features-heading">Small steps, real progress</h2>
            <p className={styles.lead}>
              Most apps help you do more. {siteConfig.name} helps you grow — with
              instant feedback after every task, six dimensions of progress, and
              a clean, distraction-free flow inspired by the{" "}
              <a
                href={siteConfig.appStoreUrl}
                rel="noopener noreferrer"
                className={styles.inlineLink}
              >
                App Store
              </a>{" "}
              experience.
            </p>
          </div>

          <div className={styles.bento}>
            <article className={`${styles.bentoCard} ${styles.bentoStats}`}>
              <div className={styles.bentoBadge}>Six dimensions</div>
              <h3>Your life on a radar</h3>
              <p>
                Tasks nudge six dimensions — Vitality, Intellect, Emotions,
                Spirit, Social, and Discipline — so your radar reflects how you
                actually invest your week.
              </p>
              <RadarVisual />
              <div className={styles.areas} aria-label="Life areas">
                {lifeAreas.map(({ label, color }) => (
                  <span
                    key={label}
                    className={styles.pill}
                    style={{ "--dot": color } as CSSProperties}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </article>

            <article className={`${styles.bentoCard} ${styles.bentoXp}`}>
              <div className={styles.bentoBadge}>XP &amp; levels</div>
              <h3>XP for the tasks that count</h3>
              <p>
                Mark which tasks reward XP — your meaningful work fills the bar
                and lifts your stats. Routine checkboxes stay out of the score.
              </p>
              <div className={styles.xpVisual} aria-hidden>
                <div className={styles.xpRow}>
                  <span className={`${styles.xpDot} ${styles.xpDotDone}`} />
                  <span className={styles.xpRowLabel}>Morning run</span>
                  <span className={styles.xpRowGain}>+45 XP</span>
                </div>
                <div className={styles.xpRow}>
                  <span className={`${styles.xpDot} ${styles.xpDotDone}`} />
                  <span className={styles.xpRowLabel}>Read 20 pages</span>
                  <span className={styles.xpRowGain}>+30 XP</span>
                </div>
                <div className={`${styles.xpRow} ${styles.xpRowMuted}`}>
                  <span className={`${styles.xpDot} ${styles.xpDotDone}`} />
                  <span className={styles.xpRowLabel}>Reply to email</span>
                  <span className={styles.xpRowSkip}>No XP</span>
                </div>
                <div className={styles.xpBar}>
                  <span className={styles.xpBarFill} />
                </div>
                <div className={styles.xpBarMeta}>
                  <span>Level 7</span>
                  <span>620 / 800</span>
                </div>
              </div>
            </article>

            <article className={`${styles.bentoCard} ${styles.bentoAi}`}>
              <div className={`${styles.bentoBadge} ${styles.bentoBadgeOnDark}`}>
                AI Guide
              </div>
              <h3>Coach in your pocket</h3>
              <p>
                Ask how things work and get practical, no-fluff productivity
                tips tuned to your stats.
              </p>
              <div className={styles.aiChat} aria-hidden>
                <div className={`${styles.aiBubble} ${styles.aiBubbleUser}`}>
                  How do I build a reading habit?
                </div>
                <div className={`${styles.aiBubble} ${styles.aiBubbleBot}`}>
                  <svg
                    className={styles.aiSpark}
                    viewBox="0 0 16 16"
                    aria-hidden
                  >
                    <path
                      d="M8 1l1.6 4.4L14 7l-4.4 1.6L8 13l-1.6-4.4L2 7l4.4-1.6z"
                      fill="currentColor"
                    />
                  </svg>
                  Start with 10 minutes after dinner. I&apos;ll add a daily task
                  and track your Intellect stat.
                </div>
              </div>
            </article>

            <article className={`${styles.bentoCard} ${styles.bentoStreak}`}>
              <div className={styles.bentoBadge}>Habits</div>
              <h3>Streaks that stick</h3>
              <p>
                Habit-friendly rhythm with gentle reminders — consistency
                without the overwhelm.
              </p>
              <div className={styles.streak} aria-hidden>
                {[
                  { d: "Mo", state: "done" },
                  { d: "Tu", state: "done" },
                  { d: "We", state: "done" },
                  { d: "Th", state: "done" },
                  { d: "Fr", state: "done" },
                  { d: "Sa", state: "today" },
                  { d: "Su", state: "future" },
                ].map(({ d, state }, i) => (
                  <div key={`${d}-${i}`} className={styles.streakCol}>
                    <span className={styles.streakLabel}>{d}</span>
                    <div
                      className={`${styles.streakDot} ${
                        state === "done"
                          ? styles.streakDotDone
                          : state === "today"
                            ? styles.streakDotToday
                            : styles.streakDotFuture
                      }`}
                    >
                      {state === "done" && (
                        <svg
                          viewBox="0 0 16 16"
                          className={styles.streakCheckIcon}
                          aria-hidden
                        >
                          <path
                            d="M3.5 8.5l3 3 6-6.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.sectionMuted}`}
        aria-labelledby="how-heading"
      >
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={`${styles.kicker} ${styles.kickerCenter}`}>
              How it works
            </p>
            <h2 id="how-heading">Three steps. Real momentum.</h2>
            <p className={styles.lead}>
              Capture what matters, complete it, watch it shape your week.
            </p>
          </div>
          <ol className={styles.steps}>
            <li className={styles.step}>
              <span className={styles.stepNum}>01</span>
              <h3>Capture</h3>
              <p>
                Drop a task or habit in seconds. Tag it to a life area so it
                counts toward growth, not just busywork.
              </p>
              <div className={styles.stepVisual} aria-hidden>
                <div className={styles.stepTask}>
                  <span className={styles.stepTaskBox} />
                  <span className={styles.stepTaskTitle}>Plan tomorrow</span>
                  <span
                    className={styles.stepTaskTag}
                    style={
                      { "--dot": "var(--accent-growth)" } as CSSProperties
                    }
                  >
                    Discipline
                  </span>
                </div>
                <div className={styles.stepTask}>
                  <span className={`${styles.stepTaskBox} ${styles.stepTaskBoxDone}`}>
                    ✓
                  </span>
                  <span className={`${styles.stepTaskTitle} ${styles.stepDone}`}>
                    20 min walk
                  </span>
                  <span
                    className={styles.stepTaskTag}
                    style={
                      { "--dot": "var(--accent-vitality)" } as CSSProperties
                    }
                  >
                    Vitality
                  </span>
                </div>
              </div>
            </li>

            <li className={styles.step}>
              <span className={styles.stepNum}>02</span>
              <h3>Complete</h3>
              <p>
                Tap done. XP-tagged tasks fill the bar and shift your stats —
                the rest check off quietly without padding the score.
              </p>
              <div className={styles.stepVisual} aria-hidden>
                <div className={styles.stepXp}>
                  <span className={styles.stepXpLabel}>Morning run</span>
                  <span className={styles.stepXpGain}>+45 XP</span>
                </div>
                <div className={styles.xpBar}>
                  <span
                    className={styles.xpBarFill}
                    style={{ width: "72%" } as CSSProperties}
                  />
                </div>
                <div className={styles.xpBarMeta}>
                  <span>Level 7</span>
                  <span>+4 Vitality</span>
                </div>
              </div>
            </li>

            <li className={styles.step}>
              <span className={styles.stepNum}>03</span>
              <h3>Grow</h3>
              <p>
                Your radar, arc, and stats reflect what you actually did this
                week — not what you wished you had.
              </p>
              <div className={styles.stepVisual} aria-hidden>
                <RadarVisual compact />
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section
        className={styles.section}
        aria-labelledby="screens-heading"
      >
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={`${styles.kicker} ${styles.kickerCenter}`}>
              Product tour
            </p>
            <h2 id="screens-heading">{siteConfig.name} on your screen</h2>
            <p className={styles.lead}>
              The same calm UI on iPhone and Android — tasks, habits, stats,
              arc, and the AI Guide in one scrollable gallery.
            </p>
          </div>
          <ScreenshotStrip />
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaPanel}>
            <span className={styles.ctaGlow} aria-hidden />
            <div className={styles.ctaInner}>
              <p className={`${styles.kicker} ${styles.kickerCenter} ${styles.kickerOnDark}`}>
                Get the app
              </p>
              <h2 id="cta-heading">Start with one task</h2>
              <p>
                Download {siteConfig.name} from the App Store, Google Play, or
                the Seeker dApp Store on{" "}
                <a href={siteConfig.seekerStoreUrl}>Solana Mobile</a> — small
                steps, real progress.
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

function RadarVisual({ compact = false }: { compact?: boolean }) {
  const cls = compact
    ? `${styles.radar} ${styles.radarCompact}`
    : styles.radar;
  return (
    <svg
      className={cls}
      viewBox="0 0 200 200"
      role="img"
      aria-label="Six-area life radar"
    >
      <defs>
        <radialGradient id="radarFill" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(100,103,242,0.55)" />
          <stop offset="100%" stopColor="rgba(20,241,149,0.18)" />
        </radialGradient>
      </defs>
      {[0.35, 0.6, 0.85].map((r) => (
        <polygon
          key={r}
          points={hexPoints(100, 100, 70 * r)}
          fill="none"
          stroke="rgba(15,15,18,0.08)"
          strokeWidth="1"
        />
      ))}
      {hexSpokes(100, 100, 70).map(([x, y], i) => (
        <line
          key={i}
          x1="100"
          y1="100"
          x2={x}
          y2={y}
          stroke="rgba(15,15,18,0.08)"
          strokeWidth="1"
        />
      ))}
      <polygon
        points={radarShape(100, 100, 70, [0.78, 0.62, 0.85, 0.55, 0.7, 0.92])}
        fill="url(#radarFill)"
        stroke="rgba(100,103,242,0.85)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {radarPoints(100, 100, 70, [0.78, 0.62, 0.85, 0.55, 0.7, 0.92]).map(
        ([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#6467f2" />
        )
      )}
    </svg>
  );
}

function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");
}

function hexSpokes(cx: number, cy: number, r: number): [number, number][] {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as [number, number];
  });
}

function radarShape(
  cx: number,
  cy: number,
  r: number,
  values: number[]
): string {
  return values
    .map((v, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 2;
      return `${cx + r * v * Math.cos(a)},${cy + r * v * Math.sin(a)}`;
    })
    .join(" ");
}

function radarPoints(
  cx: number,
  cy: number,
  r: number,
  values: number[]
): [number, number][] {
  return values.map((v, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return [cx + r * v * Math.cos(a), cy + r * v * Math.sin(a)] as [
      number,
      number
    ];
  });
}
