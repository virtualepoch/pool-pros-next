import Image from "next/image";
import { ZoomBg } from "../components/global/zoom-bg";
import { BtnAndModalContact } from "../components/ui/btn-and-modal-contact";
import { BtnAndNav } from "./components/btn-and-nav";
// import { InViewOpacityTransform } from "../components/global/in-view-opacity-transform";
import { DetailsOpenings } from "./components/details-openings";
import { DetailsCleaning } from "./components/details-cleaning";
import { DetailsMaintenance } from "./components/details-maintenance";
import { IntroAnim } from "./components/intro-anim";
import { IntroBeforeAfter } from "./components/intro-before-after";
import { DetailsTechnical } from "./components/details-technical";
import styles from "./page.module.css";

const IMAGES = [
  { url: "/gallery/0.jpg", alt: "image one", width: 1440, height: 1080 },
  { url: "/gallery/spa-0.jpg", alt: "image one", width: 2048, height: 1536 },
  { url: "/home/tech-1024.jpg", alt: "image one", width: 1024, height: 1365 },
];

export const metadata = {
  title: "Pool & Spa Services",
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
              backgroundImage: "url(/gallery/10.jpg)",
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
              imgSrc="/services/open.jpg"
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
              backgroundImage: "url(/gallery/0.jpg)",
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
              imgSrc="/services/clean.jpg"
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
              backgroundImage: "url(/services/2.jpg)",
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
              backgroundImage: "url(/home/tech-1024.jpg)",
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
              imgSrc="/services/tech.jpg"
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
              backgroundImage: "url(/gallery/2.jpeg)",
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
              imgSrc="/services/open1.jpg"
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

        <div className={styles.sectionFooterWrap}>
          <div className={styles.sectionWhyChoose}>
            <h3 className={styles.whyChooseHeader}>
              Why Choose Boise Pool Pros?
            </h3>
            <ul className={styles.whyChooseList}>
              <li className={styles.whyChooseItem}>
                <div className={styles.whyChooseIcon} />
                <span>Professional and Efficient Service: </span>Our team is
                committed to getting your pool ready as quickly as possible
                without compromising on quality.
              </li>

              <li className={styles.whyChooseItem}>
                <div className={styles.whyChooseIcon} />
                <span>Safety First: </span>We prioritize the safety of your pool
                and your loved ones by adhering to the highest safety standards.
              </li>

              <li className={styles.whyChooseItem}>
                <div className={styles.whyChooseIcon} />
                <span>Transparent Pricing: </span>No hidden fees. We provide
                clear, upfront pricing based on your specific pool or spa
                service needs.
              </li>

              <li className={styles.whyChooseItem}>
                <div className={styles.whyChooseIcon} />
                <span>Customer Satisfaction Guaranteed: </span>We&apos;re not
                happy until you&apos;re ready to jump in and enjoy your pool.
              </li>
            </ul>
          </div>

          <div className={styles.guaranteeWrap}>
            <h3 className={styles.guaranteeHeader}>Expertise You Can Trust</h3>

            <div className={styles.guaranteeContentWrap}>
              <p className={styles.sectionContent}>
                With over 10 years in the pool service industry, our team of
                certified pool technicians brings expertise, dedication, and a
                meticulous eye for detail to every pool and spa they service.
                We&apos;re committed to using the latest pool cleaning
                technologies and eco-friendly practices to not only maintain
                your pool&apos;s beauty but also its health and longevity.
              </p>

              <Image
                className={styles.guaranteeImage}
                src={"/globals/cpo.jpg"}
                alt="Services section intro image"
                width={426}
                height={426}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
