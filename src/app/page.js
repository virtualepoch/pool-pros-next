import { FixedBgImg } from "./components/global/fixed-bg-img";
import { BtnAndModalContact } from "./components/ui/btn-and-modal-contact";
import { Section } from "./components/global/section";
import { SwiperAutoFlow } from "./components/global/swiper-auto-flow";
import styles from "./page.module.css";
import { AnimOpacityTranslateY } from "./components/global/anim-opacity-translate-y";
import { InViewOpacityTransform } from "./components/global/in-view-opacity-transform";

export default function Home() {
  return (
    <>
      <FixedBgImg src="/gallery/9.jpg" alt="Hero image for home page- a glistening pool." width={900} height={598} objectPosition="50% 100%" />

      <section className={styles.heroSection}>
        <div className={styles.flexWrap}>
          <AnimOpacityTranslateY className={styles.heroHeaderWrap}>
            <h1 className={styles.heroHeader}>We Are Boise&apos;s Highly Rated Pool & Spa Service Professionals</h1>
          </AnimOpacityTranslateY>

          <AnimOpacityTranslateY delay={500} styles={styles}>
            <ul className={styles.heroServicesList}>
              <li>Cleaning</li>
              <li>Maintenance</li>
              <li>Technical Services</li>
              <li>Openings and Closings</li>
            </ul>
          </AnimOpacityTranslateY>
        </div>

        <InViewOpacityTransform opacitySpeed="500ms" transformSpeed="0ms">
          <h2 className={styles.heroStatement}>
            Providing Service to the <span style={{ textTransform: "uppercase", textDecoration: "underline" }}>Boise Metro Area</span> since 2019.
          </h2>
        </InViewOpacityTransform>
      </section>

      <BtnAndModalContact />

      <Section header="Pool Openings" assurance="As the warmer days approach, the anticipation of diving into a clear, sparkling pool becomes irresistible." assurance2=" At Boise Pool Pros, we specialize in turning that anticipation into reality with our professional pool opening services." logoSrc="/globals/cpo.jpg" logoAlt="CPO Logo" logoWidth={426} logoHeight={426} bgImgSrc="/gallery/10.jpg" bgImgAlt="A shallow pool/spa with a large pool in the background" bgImgWidth={1024} bgImgHeight={2164} objectPosition="50% 55%" />

      <Section
        header="Residential and Commercial Services"
        // Our expert team is equipped to handle every aspect of pool maintenance, cleaning, opening, and closing, ensuring your pool is pristine, healthy, and ready for enjoyment year-round.
        assurance="At Boise Pool Pros, we specialize in providing top-tier pool services."
        assurance2="Our services are tailored to both residential and commercial clients."
        logoAlt="CPO Logo"
        logoWidth={426}
        logoHeight={426}
        logoDisplay={"none"}
        bgImgSrc="/home/pool-1024.jpg"
        bgImgAlt="A shallow pool/spa with a large pool in the background"
        bgImgWidth={1024}
        bgImgHeight={2164}
        objectPosition="50% 20%"
        href="/services"
      />

      <Section
        header="Technical Services"
        addedClass={styles.contentLastElement}
        // At Boise Pool Pros, we understand that the backbone of any great pool experience is its technical integrity.
        assurance="Our specialized pool technical services are designed to address, maintain, and enhance the mechanical and structural aspects of your pool."
        assurance2="Ensuring it operates smoothly and efficiently."
        logoSrc="/globals/pentair.jpg"
        logoAlt="Pentair Service Professional Logo"
        logoWidth={512}
        logoHeight={512}
        bgImgSrc="/home/tech-1024.jpg"
        bgImgAlt="Several pool pumps and filters fit snugly in a small room."
        bgImgWidth={1024}
        bgImgHeight={1365}
        objectPosition="50% 90%"
        href="/services#technical-services"
      />

      <SwiperAutoFlow styles={styles} />
    </>
  );
}
