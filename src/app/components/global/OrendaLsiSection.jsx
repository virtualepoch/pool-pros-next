import styles from "./orenda-lsi.module.css";

const sources = {
  lsiBlog: "https://blog.orendatech.com/langelier-saturation-index",
  calculatorWeb: "https://www.orendatech.com/pool-dosing-calculator/",
  appStore: "https://apps.apple.com/us/app/orenda/id1171005221",
  playStore:
    "https://play.google.com/store/apps/details?id=com.elitecrest.orenda",
  calculatorHelp: "https://ask.orendatech.com/knowledge/how-to-use-the-orenda-calculator",
};

export const OrendaLsiSection = () => {
  return (
    <section className={styles.wrap} aria-labelledby="orenda-lsi-heading">
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <div className={styles.titleBlock}>
            <p className={styles.kicker}>Water balance</p>
            <h2 className={styles.title} id="orenda-lsi-heading">
              LSI-first chemistry with the Orenda Calculator®
            </h2>
            <p className={styles.subtitle}>
              All of the pool and spa service technicians here at Boise Pool Pros use the Langelier Saturation Index (LSI) through
              the free Orenda app. This allows us to ensure that your water stays in the safe zone for
              plaster, vinyl liners, and equipment—never guessing from isolated
              test numbers alone.
            </p>
          </div>
        </div>

        <div className={styles.body}>
          <p>
            The <strong>Langelier Saturation Index</strong>{" "}
            (LSI) is a standard way to predict whether pool water will{" "}
            <strong>dissolve</strong> calcium carbonate (aggressive, corrosive
            tendency) or <strong>deposit</strong> it as scale. It was developed
            for water treatment in the 1930s and is widely used today because
            it combines <strong>pH, temperature, alkalinity, calcium hardness,</strong>{" "}
            and <strong>TDS</strong> (including salt) into one number—how those
            factors interact matters as much as each reading on its own.
          </p>
          <p>
            Water constantly seeks equilibrium around calcium carbonate. When
            the LSI is too low, water can draw calcium from plaster and grout,
            stress vinyl and fiberglass, and accelerate wear on heaters and
            metal components. When the LSI is too high, excess calcium
            carbonate can plate out as scale on tile, plumbing, salt cells, and
            heat exchangers. Industry guidance commonly targets roughly{" "}
            <strong>-0.30 to +0.30</strong> on the index so water is neither
            aggressively hungry nor oversaturated—see also{" "}
            <a
              className={styles.link}
              href={sources.lsiBlog}
              target="_blank"
              rel="noopener noreferrer"
            >
              Orenda&apos;s overview of the LSI
            </a>
            .
          </p>
          <p>
            On every service visit we treat your pool as a complete system: we
            record honest test values, plug them into the{" "}
            <strong>Orenda Calculator®</strong> on mobile, and adjust dosing
            toward an LSI that protects finishes and equipment. The app shows
            an LSI color band in real time while you set current chemistry on
            the left and goals on the right, then provides step-by-step dosing
            after you tap Calculate—details in{" "}
            <a
              className={styles.link}
              href={sources.calculatorHelp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Orenda&apos;s calculator guide
            </a>
            .
          </p>
        </div>

        <div className={styles.highlightBox}>
          <h3 className={styles.highlightTitle}>
            How the Orenda app displays LSI (color bands)
          </h3>
          <p className={styles.legendIntro}>
            The mobile app color-codes the LSI value at the bottom of the
            calculator so you can see balance at a glance. The bands below
            match how Orenda describes its calculator in public documentation
            (not a screenshot).
          </p>
          <div className={styles.legendBar}>
            <div className={styles.legendRow}>
              <span
                className={`${styles.swatch} ${styles.swatchPurple}`}
                aria-hidden="true"
              ></span>
              <p className={styles.legendText}>
                <span className={styles.legendRange}>Purple (about +0.31 and up):</span>{" "}
                oversaturated—scale-forming; water needs to shed calcium
                carbonate to rebalance.
              </p>
            </div>
            <div className={styles.legendRow}>
              <span
                className={`${styles.swatch} ${styles.swatchGreen}`}
                aria-hidden="true"
              ></span>
              <p className={styles.legendText}>
                <span className={styles.legendRange}>Green (about 0.00 to +0.30):</span>{" "}
                ideal LSI balance for satisfied water in most pools.
              </p>
            </div>
            <div className={styles.legendRow}>
              <span
                className={`${styles.swatch} ${styles.swatchYellow}`}
                aria-hidden="true"
              ></span>
              <p className={styles.legendText}>
                <span className={styles.legendRange}>Yellow (about -0.30 to -0.01):</span>{" "}
                acceptable; pH can still drift upward, so the LSI may move toward
                green—or higher—over time.
              </p>
            </div>
            <div className={styles.legendRow}>
              <span
                className={`${styles.swatch} ${styles.swatchRed}`}
                aria-hidden="true"
              ></span>
              <p className={styles.legendText}>
                <span className={styles.legendRange}>Red (about -0.31 and below):</span>{" "}
                aggressive water hungry for calcium—risk to cement, vinyl,
                fiberglass, and equipment until corrected.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.body}>
          <p>
            <strong>See the real app UI:</strong>{" "}
            Apple&apos;s App Store and
            Google Play listings for &quot;Orenda&quot; include official
            phone screenshots and update notes from the developer. You can also
            try the same LSI math in your browser with Orenda&apos;s{" "}
            <a
              className={styles.link}
              href={sources.calculatorWeb}
              target="_blank"
              rel="noopener noreferrer"
            >
              free web-based Orenda Calculator®
            </a>
            .
          </p>
          <div className={styles.storeRow}>
            <a
              className={styles.storeLink}
              href={sources.appStore}
              target="_blank"
              rel="noopener noreferrer"
            >
              Orenda on the App Store
            </a>
            <a
              className={`${styles.storeLink} ${styles.storeLinkSecondary}`}
              href={sources.playStore}
              target="_blank"
              rel="noopener noreferrer"
            >
              Orenda on Google Play
            </a>
          </div>
          <p className={styles.note}>
            Orenda®, Orenda Calculator®, and related branding are trademarks of
            their respective owners. Boise Pool Pros is not affiliated with
            Orenda; we use their publicly available calculator app as a
            professional tool to serve our customers.
          </p>
        </div>
      </div>
    </section>
  );
};
