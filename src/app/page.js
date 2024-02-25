import { FixedBgImg, ParallaxBg } from "./components/fixed-bg-img";
import { HeroSection } from "./components/hero-section";
import { SectionCard } from "./components/section-card";
// import { LinkContact } from "./components/links/link-contact";
// import { SpringInViewOpacity } from "./components/spring-in-view-opacity";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <FixedBgImg
        src="/gallery/9.jpg"
        alt="Hero image for home page- a glistening pool."
        width={900}
        height={598}
        objectPosition="center"
      />

      <HeroSection styles={styles} />

      <SectionCard
        header="Residential and Commercial Services"
        content1="Fully Certified"
        logoSrc="/globals/cpo.jpg"
        logoAlt="CPO Logo"
        logoWidth={426}
        logoHeight={426}
        content2="Fully Insured"
        content3="Satisfaction Guaranteed!"
        bgImgSrc="/home/pool-1024.jpg"
        bgImgAlt="A shallow pool/spa with a large pool in the background"
        bgImgWidth={1024}
        bgImgHeight={2164}
        posY={20}
      />

      <SectionCard
        header="Technical Services"
        content1="Certified Pentair Technicians"
        logoSrc="/globals/pentair.jpg"
        logoAlt="Pentair Service Professional Logo"
        logoWidth={512}
        logoHeight={512}
        content2="Over a decade of experience!"
        content3="Satisfaction Guaranteed!"
        bgImgSrc="/home/tech-1024.jpg"
        bgImgAlt="Several pool pumps and filters fit snugly in a small room."
        bgImgWidth={1024}
        bgImgHeight={1365}
        posY={100}
      />

      {/* <SpringInViewOpacity className={styles.springInView}>
        <h1>Spring In View Opacity</h1>
      </SpringInViewOpacity> */}
    </>
  );
}
