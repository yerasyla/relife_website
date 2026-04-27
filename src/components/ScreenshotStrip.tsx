import Image from "next/image";
import styles from "@/app/home.module.css";

/** One AI Guide shot only; other product screens kept distinct. */
const shots = [
  {
    src: "/screenshots/tasks.png",
    alt: "ReLife tasks and lists",
    caption: "Tasks & lists",
  },
  {
    src: "/screenshots/quickadd.png",
    alt: "ReLife quick add for new tasks",
    caption: "Quick add",
  },
  {
    src: "/screenshots/habits.png",
    alt: "ReLife habits",
    caption: "Habits",
  },
  {
    src: "/screenshots/stats.png",
    alt: "ReLife stats and life-area progress",
    caption: "Stats & XP",
  },
  {
    src: "/screenshots/progress.png",
    alt: "ReLife progress overview",
    caption: "Progress",
  },
  {
    src: "/screenshots/arc.png",
    alt: "ReLife arc view",
    caption: "Life arc",
  },
  {
    src: "/screenshots/ai.png",
    alt: "ReLife AI Guide for productivity help",
    caption: "AI Guide",
  },
] as const;

export function ScreenshotStrip() {
  return (
    <div className={styles.stripWrap}>
      <ul className={styles.strip} aria-label="App screenshots">
        {shots.map((item) => (
          <li key={item.src} className={styles.stripItem}>
            <div className={styles.stripFrame}>
              <div className={styles.stripShot}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 720px) 78vw, 268px"
                  className={styles.stripImg}
                />
              </div>
            </div>
            <p className={styles.caption}>{item.caption}</p>
          </li>
        ))}
      </ul>
      <p className={styles.stripHint}>
        <span className={styles.stripHintIcon} aria-hidden>
          →
        </span>
        Swipe for more
      </p>
    </div>
  );
}
