"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { InViewOpacityTransform } from "./in-view-opacity-transform";
import { BtnAndModalContact } from "../../components/global/btn-and-modal-contact";
import styles from "./section.module.css";

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
  href = "/services#pool-openings",
}) => {
  const [pressed, setPressed] = useState();

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

            <InViewOpacityTransform
              transformSpeed="1s"
              className={styles.statement}
            >
              <h3>{assurance}</h3>

              <ul>
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>
              </ul>

              <div className={styles.actionBtnsWrap}>
                <Link
                  className="btn-contact"
                  href={href}
                  onMouseDown={() => setPressed(true)}
                  onMouseUp={() => setPressed(false)}
                  onTouchStart={() => setPressed(true)}
                  onTouchEnd={() => setPressed(false)}
                  style={{
                    border: pressed ? "2px solid #0ff" : "",
                    boxShadow: pressed ? "none" : "1px 2px 10px 1px #0007",
                    top: 0,
                  }}
                >
                  <p className="contact-link-text">Learn More</p>

                  <div className="contact-link-icon" />
                </Link>

                <BtnAndModalContact />
              </div>
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
