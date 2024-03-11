import Image from "next/image";
import Link from "next/link";
import { BtnAndModalContact } from "./components/ui/btn-and-modal-contact";
import { InViewOpacityTransform } from "./components/global/in-view-opacity-transform";
import { ActionBtn } from "./components/global/ActionBtn";
import { SwiperAutoFlow } from "./components/global/swiper-auto-flow";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Image
        className="fixed-bg-img"
        priority
        src="/gallery/9.jpg"
        alt="Hero image for home page- a glistening pool."
        width={900}
        height={598}
        style={{
          // opacity: anim ? 1 : 0,
          // transition: "opacity 1s ease",
          objectPosition: "50% 100%",
        }}
      />

      <section className={styles.heroSection}>
        <div className={styles.flexWrap}>
          <div className={styles.heroHeaderWrap}>
            <h1 className={styles.heroHeader}>
              We Are Boise&apos;s Highly Rated Pool & Spa Service Professionals
            </h1>
          </div>

          <ul className={styles.heroServicesList}>
            <li>Cleaning</li>
            <li>Maintenance</li>
            <li>Technical Services</li>
            <li>Openings and Closings</li>
          </ul>
        </div>

        <h2 className={styles.heroStatement}>
          Providing Service to the{" "}
          <span
            style={{ textTransform: "uppercase", textDecoration: "underline" }}
          >
            Boise Metro Area
          </span>{" "}
          since 2019.
        </h2>
      </section>

      <BtnAndModalContact />

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.headerWrap}>
            <InViewOpacityTransform opacitySpeed="1s">
              <h2 className={styles.header}>Pool Openings</h2>
            </InViewOpacityTransform>
          </div>

          <div className={styles.contentWrap}>
            <div className={styles.content}>
              <div className={styles.statement}>
                <InViewOpacityTransform
                  transformSpeed="500ms"
                  translateY="100px"
                  threshold={0.1}
                >
                  <h3>
                    As the warmer days approach, the anticipation of diving into
                    a clear, sparkling pool becomes irresistible.
                    <br />
                    <br />
                    At Boise Pool Pros, we specialize in turning that
                    anticipation into reality with our professional pool opening
                    services.
                  </h3>
                </InViewOpacityTransform>

                <Link
                  className={styles.sectionLink}
                  href="/services#pool-openings"
                >
                  <ActionBtn text="Learn More" />
                </Link>
              </div>

              <Image
                className={styles.logo}
                src="/globals/cpo.jpg"
                alt="CPO Logo"
                width={426}
                height={426}
              />
            </div>

            <Image
              className={styles.bgImg}
              src="/gallery/10.jpg"
              alt="A shallow pool/spa with a large pool in the background"
              width={1024}
              height={2164}
              style={{
                objectPosition: "50% 55%",
              }}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.headerWrap}>
            <InViewOpacityTransform opacitySpeed="1s">
              <h2 className={styles.header}>
                Residential and Commercial Pool Services
              </h2>
            </InViewOpacityTransform>
          </div>

          <div className={styles.contentWrap}>
            <div className={styles.content}>
              <div className={styles.statement}>
                <InViewOpacityTransform
                  transformSpeed="500ms"
                  translateY="100px"
                  threshold={0.1}
                >
                  <h3>
                    At Boise Pool Pros, we specialize in providing top-tier pool
                    services.
                    <br />
                    <br />
                    Our pool & spa services are tailored to both residential and
                    commercial clients.
                  </h3>
                </InViewOpacityTransform>

                <Link className={styles.sectionLink} href="/services">
                  <ActionBtn text="Learn More" />
                </Link>
              </div>
            </div>

            <Image
              className={styles.bgImg}
              src="/home/pool-1024.jpg"
              alt="A shallow pool/spa with a large pool in the background"
              width={1024}
              height={2164}
              style={{
                objectPosition: "50% 20%",
              }}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.headerWrap}>
            <InViewOpacityTransform opacitySpeed="1s">
              <h2 className={styles.header}>Technical Services</h2>
            </InViewOpacityTransform>
          </div>

          <div className={styles.contentWrap}>
            <div className={styles.content}>
              <div className={styles.statement}>
                <InViewOpacityTransform
                  transformSpeed="500ms"
                  translateY="100px"
                  threshold={0.1}
                >
                  <h3>
                    Our specialized pool technical services are designed to
                    address, maintain, and enhance the mechanical and structural
                    aspects of your pool.
                    <br />
                    <br />
                    Ensuring it operates smoothly and efficiently.
                  </h3>
                </InViewOpacityTransform>
                <Link
                  className={styles.sectionLink}
                  href="/services#technical-services"
                >
                  <ActionBtn text="Learn More" />
                </Link>
              </div>

              <Image
                className={styles.logo}
                src="/globals/pentair.jpg"
                alt="Pentair Service Professional Logo"
                width={512}
                height={512}
              />
            </div>

            <Image
              className={styles.bgImg}
              src="/home/tech-1024.jpg"
              alt="Several pool pumps and filters fit snugly in a small room."
              width={1024}
              height={1365}
              style={{
                objectPosition: "50% 90%",
              }}
            />
          </div>
        </div>
      </section>

      <SwiperAutoFlow styles={styles} />
    </>
  );
}
