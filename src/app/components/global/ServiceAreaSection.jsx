import Link from "next/link";
import styles from "./service-area.module.css";

export const ServiceAreaSection = () => {
  return (
    <section
      className={styles.section}
      aria-labelledby="service-area-heading"
    >
      <div className={styles.inner}>
        <h2 className={styles.title} id="service-area-heading">
          Where we run routes (and why it matters)
        </h2>
        <p className={styles.lead}>
          Boise Pool Pros is built around short drive times and repeat visits,
          not one-off fly-bys. Most of our week is spent on pools we already know:
          how the skimmer pulls after a windstorm, how fast pH drifts when the
          cottonwoods shed, and how your fill water behaves when irrigation season
          kicks in. That local rhythm is what keeps chemistry stable when the
          forecast swings from cool nights to triple-digit afternoons.
        </p>
        <p className={styles.lead}>
          Day-to-day routing covers Boise, Meridian, Eagle, Garden City, Kuna,
          Nampa, Star, and Middleton. If you are on the edge of town or just
          outside that ring, call anyway—we regularly pick up pockets near
          Highway 44, Lake Lowell, and the west bench when the calendar allows.
        </p>
        <ul className={styles.list}>
          <li>Backyard pools, attached spas, and small HOA bodies of water</li>
          <li>Seasonal openings and winterizations timed around Idaho freeze dates</li>
          <li>Service notes and chemistry history you can actually use (Skimmer reports)</li>
        </ul>
        <nav className={styles.linkRow} aria-label="Related pages">
          <Link className={styles.navLink} href="/services">
            Services detail
          </Link>
          <Link className={styles.navLink} href="/services#faq">
            FAQ
          </Link>
          <Link className={styles.navLink} href="/testimonials">
            Reviews
          </Link>
          <Link className={styles.navLink} href="/gallery">
            Gallery
          </Link>
        </nav>
      </div>
    </section>
  );
};
