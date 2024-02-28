"use client";
import { InViewOpacity } from "@/app/components/in-view-opacity";
import { InViewOpacityTransform } from "@/app/components/in-view-opacity-transform";
import Image from "next/image";

export const ServicesSection = ({ services, styles }) => {
  return (
    <div className={styles.sections}>
      {services.map((services) => (
        <section className={styles.section} key={services.id} id={services.id}>
          <h3 className={styles.sectionHeader}>{services.header}</h3>

          <Image
            className={styles.sectionImage}
            src={services.image}
            alt="Services section image"
            width={640}
            height={480}
            style={
              {
                // objectPosition: services.imagePosition,
                // transform: "rotateY(-10deg)",
              }
            }
          />

          <InViewOpacityTransform
            className={styles.sectionContentWrap}
            rootMargin="0%"
            triggerOnce={false}
            opacitySpeed="1000ms"
            transformSpeed="1000ms"
          >
            <p className={styles.sectionContent}>{services.content}</p>
          </InViewOpacityTransform>
        </section>
      ))}
    </div>
  );
};
