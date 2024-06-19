import { ZoomBg } from "../components/global/bg-imgs-anim-zoom";
import { WhyChooseGuarantee } from "../components/global/WhyChooseGuarantee";
import { SkimmerAppInfo } from "../components/global/SkimmerAppInfo";
import { BtnAndModalContact } from "../components/ui/btn-and-modal-contact";
import { BtnAndNav } from "./components/btn-and-nav";
import { DetailsOpenings } from "./components/details-openings";
import { DetailsCleaning } from "./components/details-cleaning";
import { DetailsMaintenance } from "./components/details-maintenance";
import { IntroAnim } from "./components/intro-anim";
import { IntroBeforeAfter } from "./components/intro-before-after";
import { DetailsTechnical } from "./components/details-technical";
import styles from "./page.module.css";

const IMAGES = [
  { url: "/images/0.jpg", alt: "image one", width: 1440, height: 1080 },
  { url: "/images/spa-0.jpg", alt: "image one", width: 2048, height: 1536 },
  { url: "/images/tech-1024.jpg", alt: "image one", width: 1024, height: 1365 },
];

export const metadata = {
  title: "Pool & Spa Services - Boise Pool Pros",
};

export default function Services() {
  return (
    <>
      <ZoomBg images={IMAGES} />

      <div className={styles.landing}>
        <h1 className={styles.heroStatement}>
          Our Professional Pool Services are designed to ensure your pool
          remains a pristine oasis of leisure and luxury.
        </h1>

        <BtnAndModalContact addedClass={styles.btnContact} />
      </div>

      <div className={styles.routeHeader}>
        <p>Services</p>
      </div>

      <div className={styles.sections}>
        <BtnAndNav styles={styles} />

        {/* OPENINGS /////////////////////////////////////////////////// */}
        <section className={styles.section} id="pool-openings">
          <h3
            className={styles.header}
            style={{
              backgroundImage: "url(/images/10.jpg)",
              backgroundPosition: "50% 40%",
            }}
          >
            Pool Openings
          </h3>

          <h3 className={styles.subHeader}>
            Comprehensive Pool Opening Services
          </h3>

          <div className={styles.sectionContentWrap}>
            <IntroAnim
              styles={styles}
              imgSrc="/images/open.jpg"
              imagePosition="center"
            >
              <p>
                A pool is not just a luxury, but a centerpiece of summer joy and
                family gatherings. <br />
                <br />
                That&apos;s why we are dedicated to providing a seamless,
                hassle-free start to your swimming season.
              </p>
            </IntroAnim>

            <DetailsOpenings styles={styles} />
          </div>
        </section>

        {/* CLEANING /////////////////////////////////////////////////// */}
        <section className={styles.section} id="pool-spa-cleaning">
          <h3
            className={styles.header}
            style={{
              backgroundImage: "url(/images/0.jpg)",
              backgroundPosition: "20% 40%",
            }}
          >
            Cleaning
          </h3>

          <h3 className={styles.subHeader}>
            Our Comprehensive Pool & Spa Cleaning Services Include:
          </h3>

          <div className={styles.sectionContentWrap}>
            <IntroAnim
              styles={styles}
              imagePosition="100% 70%"
              imgSrc="/images/clean.jpg"
              bgColor="none"
            >
              <p style={{ textShadow: "0 0 5px #000" }}>
                A clean pool is the heart of your backyard oasis.
                <br />
                <br />
                It&apos;s not just about the aesthetics; it&apos;s about health,
                safety, and the joy of swimming in sparkling, crystal-clear
                water.
                <br />
                <br />
                Our professional pool cleaning services are designed to ensure
                your pool remains in pristine condition.
              </p>
            </IntroAnim>

            <DetailsCleaning styles={styles} />
          </div>
        </section>

        {/* MAINTENANCE /////////////////////////////////////////////////// */}
        <section className={styles.section} id="pool-spa-maintenance">
          <h3
            className={styles.header}
            style={{
              backgroundImage: "url(/images/2.jpg)",
              backgroundPosition: "100% 50%",
            }}
          >
            Maintenance
          </h3>

          <h3 className={styles.subHeader} style={{ textAlign: "center" }}>
            Our Pool & Spa Maintenance Services Include:
          </h3>

          <div className={styles.sectionContentWrap}>
            <IntroBeforeAfter styles={styles}>
              <p>
                Our professional technicians bring precision, care, and a
                commitment to excellence to every job.
                <br />
                <br />
                Keeping your pool and spa in pristine condition is our greatest
                concern.
              </p>
            </IntroBeforeAfter>

            <DetailsMaintenance styles={styles} />
          </div>
        </section>

        {/* TECHNICAL /////////////////////////////////////////////////// */}
        <section className={styles.section} id="technical-services">
          <h3
            className={styles.header}
            style={{
              backgroundImage: "url(/images/tech-1024.jpg)",
              backgroundPosition: "50% 70%",
            }}
          >
            Technical Services
          </h3>

          <h3 className={styles.subHeader}>
            Our Pool & Spa Technical Services Include:
          </h3>

          <div className={styles.sectionContentWrap}>
            <IntroAnim
              styles={styles}
              imagePosition="100% 70%"
              imgSrc="/images/tech.jpg"
            >
              <p>
                The backbone of any great pool experience is its technical
                integrity.
                <br />
                <br />
                Our specialized services are designed to address, maintain, and
                enhance the mechanical and structural aspects of your pool.
              </p>
            </IntroAnim>

            <DetailsTechnical styles={styles} />
          </div>
        </section>

        {/* CLOSINGS /////////////////////////////////////////////////// */}
        <section className={styles.section} id="pool-closings">
          <h3
            className={styles.header}
            style={{
              backgroundImage: "url(/images/2.jpeg)",
              backgroundPosition: "50% 60%",
            }}
          >
            Pool Closings
          </h3>

          <h3 className={styles.subHeader} style={{ textAlign: "center" }}>
            Our pool closing service includes a thorough checklist to ensure
            every detail is addressed
          </h3>
          <br />
          <div className={styles.sectionContentWrap}>
            <IntroAnim
              styles={styles}
              imagePosition="50% 60%"
              imgSrc="/images/open1.jpg"
            >
              <p>
                At Boise Pool Pros we understand the intricacies involved in
                properly winterizing a pool.
                <br />
                <br />
                From preventing algae growth and corrosion, to the precise
                installation of winter covers,
                <br />
                we have you covered. 😉
              </p>
            </IntroAnim>
          </div>
        </section>

        <SkimmerAppInfo />

        <WhyChooseGuarantee />
      </div>
    </>
  );
}
