import Image from "next/image";

export const ServicesSection = ({ services, styles }) => {
  return (
    <>
      {services.map((services) => (
        <section className={styles.section} key={services.id} id={services.id}>
          <div className={styles.sectionWrapper}>
            <h3 className={styles.sectionHeader}>{services.header}</h3>

            <Image
              className={styles.sectionImage}
              src={services.image}
              alt="Services section image"
              width={640}
              height={480}
              style={{
                objectPosition: services.imagePosition,
              }}
            />

            <p className={styles.sectionContent}>{services.content}</p>
          </div>
        </section>
      ))}
    </>
  );
};
