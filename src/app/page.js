import { FixedBgImg } from "./components/global/fixed-bg-img";
import { HeroSection } from "./components/global/hero-section";
import { BtnAndModalContact } from "./components/ui/btn-and-modal-contact";
import { Section } from "./components/global/section";
import styles from "./page.module.css";
import { SwiperAutoFlow } from "./components/global/swiper-auto-flow";

export default function Home() {
  return (
    <>
      <FixedBgImg
        src="/gallery/9.jpg"
        alt="Hero image for home page- a glistening pool."
        width={900}
        height={598}
        objectPosition="50% 100%"
      />

      <HeroSection styles={styles} />

      <BtnAndModalContact />

      <Section
        header="Residential and Commercial Services"
        assurance="By choosing us for your weekly pool and spa services, you can rest assured. We are :"
        li1="Fully Insured,"
        li2="Fully Certified,"
        li3="and Guarantee Satisfaction!"
        logoSrc="/globals/cpo.jpg"
        logoAlt="CPO Logo"
        logoWidth={426}
        logoHeight={426}
        bgImgSrc="/home/pool-1024.jpg"
        bgImgAlt="A shallow pool/spa with a large pool in the background"
        bgImgWidth={1024}
        bgImgHeight={2164}
        posY={20}
      />

      <Section
        header="Technical Services"
        assurance="Certified Pentair Technicians"
        li1="Over a decade of experience!"
        li2="Satisfaction Guaranteed!"
        logoSrc="/globals/pentair.jpg"
        logoAlt="Pentair Service Professional Logo"
        logoWidth={512}
        logoHeight={512}
        bgImgSrc="/home/tech-1024.jpg"
        bgImgAlt="Several pool pumps and filters fit snugly in a small room."
        bgImgWidth={1024}
        bgImgHeight={1365}
        posY={100}
      />

      <SwiperAutoFlow styles={styles} />
    </>
  );
}
