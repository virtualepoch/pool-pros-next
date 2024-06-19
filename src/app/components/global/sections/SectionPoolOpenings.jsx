import Image from "next/image";
import Link from "next/link";
import { InViewOpacityTransform } from "../in-view-opacity-transform";
import { ActionBtn } from "../ActionBtn";

export const SectionPoolOpenings = ({ styles }) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <div className={styles.headerWrap}>
          <InViewOpacityTransform opacitySpeed="1s">
            <h2 className={styles.header}>Pool Openings</h2>
          </InViewOpacityTransform>
        </div>

        <div className={styles.contentWrap}>
          <div className={styles.content}>
            <div className={styles.statement}>
              <InViewOpacityTransform
                transformSpeed="500ms"
                translateY="100px"
                threshold={0.1}
              >
                <h3>
                  As the warmer days approach, the anticipation of diving into a
                  clear, sparkling pool becomes irresistible.
                  <br />
                  <br />
                  At Boise Pool Pros, we specialize in turning that anticipation
                  into reality with our professional pool opening services.
                </h3>
              </InViewOpacityTransform>

              <Link
                className={styles.sectionLink}
                href="/services#pool-openings"
              >
                <ActionBtn text="Learn More" />
              </Link>
            </div>

            <Image
              className={styles.logo}
              src="/images/cpo-256.jpg"
              alt="CPO Logo"
              width={180}
              height={180}
            />
          </div>

          <Image
            className={styles.bgImg}
            src="/images/10.jpg"
            alt="A shallow pool/spa with a large pool in the background"
            width={1024}
            height={2164}
            style={{
              objectPosition: "50% 55%",
            }}
          />
        </div>
      </div>
    </section>
  );
};
