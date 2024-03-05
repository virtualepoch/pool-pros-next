import { FixedBgImg } from "./components/global/fixed-bg-img";
import { HeroSection } from "./components/global/hero-section";
import { BtnAndModalContact } from "./components/ui/btn-and-modal-contact";
import { BtnAndModalContactGlobal } from "./components/global/btn-and-modal-contact-global";
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
        header="Pool Openings"
        assurance="As the warmer days approach, the anticipation of diving into a clear, sparkling pool becomes irresistible. At Boise Pool Pros, we specialize in turning that anticipation into reality with our professional pool opening services."
        // li1="Fully Insured,"
        // li2="Fully Certified,"
        // li3="and Guarantee Satisfaction!"
        logoSrc="/globals/cpo.jpg"
        logoAlt="CPO Logo"
        logoWidth={426}
        logoHeight={426}
        bgImgSrc="/gallery/10.jpg"
        bgImgAlt="A shallow pool/spa with a large pool in the background"
        bgImgWidth={1024}
        bgImgHeight={2164}
        objectPosition="50% 55%"
      />

      <BtnAndModalContactGlobal />

      <Section
        header="Residential and Commercial Services"
        assurance="At Boise Pool Pros, we specialize in providing top-tier pool services tailored to both residential and commercial clients. Our expert team is equipped to handle every aspect of pool maintenance, cleaning, opening, and closing, ensuring your pool is pristine, healthy, and ready for enjoyment year-round."
        // li1="Fully Insured,"
        // li2="Fully Certified,"
        // li3="and Guarantee Satisfaction!"
        logoSrc="/globals/cpo.jpg"
        logoAlt="CPO Logo"
        logoWidth={426}
        logoHeight={426}
        bgImgSrc="/home/pool-1024.jpg"
        bgImgAlt="A shallow pool/spa with a large pool in the background"
        bgImgWidth={1024}
        bgImgHeight={2164}
        objectPosition="50% 20%"
        href="/services"
      />

      <BtnAndModalContactGlobal />

      <Section
        header="Technical Services"
        assurance="At Boise Pool Pros, we understand that the backbone of any great pool experience is its technical integrity. Our specialized pool technical services are designed to address, maintain, and enhance the mechanical and structural aspects of your pool, ensuring it operates smoothly and efficiently."
        // li1="Certified Pentair Technicians!"
        // li2="Over a decade of experience!"
        // li3="Satisfaction Guaranteed!"
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

      <BtnAndModalContactGlobal />

      <SwiperAutoFlow styles={styles} />
    </>
  );
}
