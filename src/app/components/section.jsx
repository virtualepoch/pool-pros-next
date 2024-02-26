"use client";
import Image from "next/image";
import { InViewOpacityTransform } from "./in-view-opacity-transform";
import styles from "./css/section.module.css";

export const Section = ({
  header,
  assurance,
  li1,
  li2,
  li3,
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
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.headerWrap}>
          <InViewOpacityTransform opacitySpeed="1s">
            <h2 className={styles.header}>{header}</h2>
          </InViewOpacityTransform>
        </div>

        <div className={styles.contentWrap}>
          <div className={styles.content}>
            <Image
              className={styles.logo}
              src={logoSrc}
              alt={logoAlt}
              width={logoWidth}
              height={logoHeight}
            />

            <InViewOpacityTransform transformSpeed="1s" className={styles.statement}>
              <h3>{assurance}</h3>
              <ul>
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
              </ul>
            </InViewOpacityTransform>
          </div>

          <Image
            className={styles.bgImg}
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
      </div>
    </section>
  );
};
