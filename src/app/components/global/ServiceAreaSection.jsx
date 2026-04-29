import Link from "next/link";
import styles from "./service-area.module.css";
import { ActionBtn } from "./ActionBtn";

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
          how the skimmer pulls (or doesn&apos;t pull) after a windstorm, how fast pH drifts when the
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
          <li>Backyard residential pools, attached and standalone spas, and commercial and HOA pools of all shapes and sizes</li>
          <li>Seasonal openings and winterizations timed around Idaho freeze dates</li>
          <li>Service notes and chemistry history you can actually use (Skimmer reports) and LSI-first water chemistry with the Orenda Calculator®</li>
        </ul>
        <nav className={styles.linkRow} aria-label="Related pages">
          <Link className={styles.actionLink} href="/services">
            <ActionBtn text="Services detail"></ActionBtn>
          </Link>
          <Link className={styles.actionLink} href="/services#faq">
            <ActionBtn text="FAQ"></ActionBtn>
          </Link>
          <Link className={styles.actionLink} href="/testimonials">
            <ActionBtn text="Customer Reviews"></ActionBtn>
          </Link>
          <Link className={styles.actionLink} href="/gallery">
            <ActionBtn text="Pool & Spa Service Gallery"></ActionBtn>
          </Link>
        </nav>
      </div>
    </section>
  );
};
