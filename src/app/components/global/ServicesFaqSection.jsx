import Link from "next/link";
import styles from "./services-faq.module.css";

const SERVICE_FAQ_ITEMS = [
  {
    question:
      "Do you service both residential and commercial pools in the Boise area?",
    answer:
      "Yes. Boise Pool Pros supports backyard pools and spas as well as select commercial and community pools within the Boise metro. Route density and safety requirements can affect availability for very large commercial sites, so it is best to describe your property when you first contact us.",
  },
  {
    question: "How often should a pool be professionally cleaned?",
    answer:
      "Most residential pools benefit from a weekly visit during the swim season so filters, surfaces, and chemistry stay ahead of debris and bather load. Heavily used pools, pools under trees, or commercial bodies of water may need a faster cadence. We recommend a schedule after we see your equipment, surroundings, and usage pattern.",
  },
  {
    question: "What is included in a professional pool opening?",
    answer:
      "A typical opening focuses on bringing circulation, filtration, and chemistry back online safely after winter. That usually includes equipment checks, cleaning or vacuuming as needed, startup chemistry, and guidance on when it is safe to swim. Exact steps depend on how the pool was closed and what equipment you run.",
  },
  {
    question: "Can you help with pumps, heaters, salt systems, and leaks?",
    answer:
      "Our technical services cover common equipment troubleshooting, repair coordination, and performance tuning for pumps, filters, heaters, automation, and salt chlorine generators. Pentair-certified support is part of our approach when that equipment is on your system.",
  },
  {
    question: "How do I request a quote or schedule a visit?",
    answer:
      "Use the Contact button on this site, call our office number in the header, or email the address shown in the footer. Tell us your address, pool type, and what you need (cleaning, opening, repair, and so on). We will respond with next steps and scheduling options.",
  },
  {
    question: "Where can I read reviews from real customers?",
    answer:
      "Our testimonials page collects feedback from Google and other sources. You can also browse the gallery for photos that match the kinds of pools and equipment we maintain in the Treasure Valley.",
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SERVICE_FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const ServicesFaqSection = () => {
  return (
    <>
      <section
        className={styles.section}
        id="faq"
        aria-labelledby="services-faq-heading"
      >
        <div className={styles.inner}>
          <h2 className={styles.title} id="services-faq-heading">
            Frequently asked questions
          </h2>
          <p className={styles.intro}>
            Straight answers about how Boise Pool Pros works with local pools
            and spas. If you do not see your question here, reach out through the
            contact options in the site header or footer.
          </p>
          <div className={styles.faqList}>
            {SERVICE_FAQ_ITEMS.map((item) => (
              <article className={styles.item} key={item.question}>
                <h3 className={styles.question}>{item.question}</h3>
                <p className={styles.answer}>{item.answer}</p>
              </article>
            ))}
          </div>
          <p className={styles.footerNote}>
            Ready to talk specifics for your pool? Return to the{" "}
            <Link href="/services#pool-spa-cleaning">cleaning</Link>,{" "}
            <Link href="/services#pool-spa-maintenance">maintenance</Link>, or{" "}
            <Link href="/services#technical-services">technical services</Link>{" "}
            sections above, or jump to the{" "}
            <Link href="/">home page</Link>.
          </p>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema),
        }}
      ></script>
    </>
  );
};
