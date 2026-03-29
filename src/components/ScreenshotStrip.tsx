import Image from "next/image";
import styles from "@/app/home.module.css";

const shots = [
  {
    src: "/screenshots/tasks-home.png",
    alt: "ReLife tasks screen with lists, search, and due dates for daily quests",
    caption: "Queue up your daily “quests”",
  },
  {
    src: "/screenshots/tasks-new.png",
    alt: "Creating a new task with due time and repeat options",
    caption: "Set goals with deadlines & rhythm",
  },
  {
    src: "/screenshots/tasks-repeat.png",
    alt: "Repeat options for a task",
    caption: "Build streaks with recurrence",
  },
  {
    src: "/screenshots/stats-radar.png",
    alt: "Stats radar chart showing skill levels across six life areas",
    caption: "Radar: your six skill dimensions",
  },
  {
    src: "/screenshots/stats-how.png",
    alt: "How task keywords map to leveling each life area",
    caption: "Learn which words level which skills",
  },
] as const;

export function ScreenshotStrip() {
  return (
    <div className={styles.stripWrap}>
      <ul className={styles.strip} aria-label="App screenshots">
        {shots.map((item) => (
          <li key={item.src} className={styles.stripItem}>
            <div className={styles.stripFrame}>
              <Image
                src={item.src}
                alt={item.alt}
                width={472}
                height={1024}
                sizes="(max-width: 720px) 78vw, 260px"
              />
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
