"use client";
import Image from "next/image";
import { InViewOpacityTransform } from "./in-view-opacity-transform";
import styles from "./css/section.module.css";
import { LinkContact } from "./links/link-contact";

export const SectionCard = ({
  header,
  content1,
  content2,
  content3,
  logoSrc,
  logoAlt,
  logoWidth,
  logoHeight,
  bgImgSrc,
  bgImgAlt,
  bgImgWidth,
  bgImgHeight,
  posY,
}) => {
  return (
    <section className={styles.sectionCard}>
     
      <div className={styles.sectionCardHeaderWrap}>
        <InViewOpacityTransform opacitySpeed="1s">
          <h2 className={styles.sectionCardHeader}>{header}</h2>
        </InViewOpacityTransform>
      </div>

      <div className={styles.sectionCardContent}>
        <InViewOpacityTransform transformSpeed="1s">
          <div className={styles.contentWrap}>
            <h2>
              {content1}
              <br />
              <hr />
              {content2}
              <br />
              <hr />
              {content3}
            </h2>
            <Image
              className={styles.sectionCardLogo}
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoHeight}
            />
          </div>
        </InViewOpacityTransform>

        <Image
          className={styles.sectionCardBgImg}
          src={bgImgSrc}
          alt={bgImgAlt}
          width={bgImgWidth}
          height={bgImgHeight}
          style={{
            top: `${posY}%`,
            transform: `translateY(-${posY}%)`,
          }}
        />
      </div>
    </section>
  );
};
