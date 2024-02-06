import { HeroSection } from "./components/hero-section";
import { LinkContact } from "./components/links/link-contact";
import { SectionCard } from "./components/section-card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="main">
      <HeroSection styles={styles} />

      <LinkContact />

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

      <LinkContact />

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
    </main>
  );
}
