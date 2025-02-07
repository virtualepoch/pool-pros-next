import Image from "next/image";
import Link from "next/link";
import { BtnAndModalContact } from "./components/ui/btn-and-modal-contact";
import { InViewOpacityTransform } from "./components/global/in-view-opacity-transform";
import { BgImgFixed } from "./components/global/bg-img-fixed";
import { ActionBtn } from "./components/global/ActionBtn";
import { SwiperAutoFlow } from "./components/global/swiper-auto-flow";
import styles from "./page.module.css";
import { WhyChooseGuarantee } from "./components/global/WhyChooseGuarantee";
import { TimeRenderedComponent } from "./components/global/TimeRenderedComponent";
import { SectionPoolOpenings } from "./components/global/sections/SectionPoolOpenings";
import { SkimmerAppInfo } from "./components/global/SkimmerAppInfo";

export default function Home() {
  return (
    <>
      <BgImgFixed
        src="/images/0.jpg"
        alt="Hero image for home page- a glistening pool."
        width={900}
        height={598}
        objectPosition="50% 50%"
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

      <TimeRenderedComponent month1={3} day1={1} month2={6} day2={7}>
        <SectionPoolOpenings styles={styles} />
      </TimeRenderedComponent>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <div className={styles.headerWrap}>
            <InViewOpacityTransform opacitySpeed="1s">
              <h2 className={styles.header}>
                Residential & Commercial Services
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
                    At Boise Pool Pros, we always aspire to provide top-tier
                    service.
                    <br />
                    <br />
                    Our pool & spa services are tailored to both residential and
                    commercial clients.
                    <br />
                    <br />
                    You can also rest assured because we are licensed Pentair
                    technicians and fully insured.
                  </h3>
                </InViewOpacityTransform>

                <Link className={styles.sectionLink} href="/services">
                  <ActionBtn text="Learn More" />
                </Link>
              </div>
            </div>

            <Image
              className={styles.bgImg}
              src="/images/pool-1024.jpg"
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
                    This will ensure it always operates smoothly and
                    efficiently.
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
                src="/images/pentair-256.jpg"
                alt="Pentair Service Professional Logo"
                width={180}
                height={180}
              />
            </div>

            <Image
              className={styles.bgImg}
              src="/images/tech-1024.jpg"
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

      <SkimmerAppInfo />

      <WhyChooseGuarantee />
    </>
  );
}
