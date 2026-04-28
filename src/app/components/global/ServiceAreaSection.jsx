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
          Pool &amp; spa service area around Boise
        </h2>
        <p className={styles.lead}>
          Boise Pool Pros serves homeowners, HOAs, and commercial properties
          across the Boise metro and nearby communities. Whether you need weekly
          cleaning, seasonal openings and closings, or technical help with pumps,
          filters, and heaters, we plan routes and chemistry around real-world
          Idaho weather and water use—not generic national averages.
        </p>
        <p className={styles.lead}>
          Typical service coverage includes Boise, Meridian, Eagle, Garden City,
          Kuna, Nampa, Star, and Middleton. If you are just outside this radius,
          contact us anyway; we often accommodate nearby neighborhoods depending
          on schedule and drive time.
        </p>
        <ul className={styles.list}>
          <li>Residential backyard pools and attached spas</li>
          <li>Community pools and small commercial bodies of water</li>
          <li>Seasonal and year-round routes with documented visits</li>
        </ul>
        <nav className={styles.linkRow} aria-label="Related pages">
          <Link className={styles.navLink} href="/services">
            Full services list
          </Link>
          <Link className={styles.navLink} href="/services#faq">
            Service FAQ
          </Link>
          <Link className={styles.navLink} href="/testimonials">
            Customer testimonials
          </Link>
        </nav>
      </div>
    </section>
  );
};
