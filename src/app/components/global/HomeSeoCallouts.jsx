import Link from "next/link";
import whyStyles from "./why-choose.module.css";
import serviceStyles from "./service-area.module.css";

export const HomeSeoCallouts = () => {
  return (
    <div className={whyStyles.whyChooseGuaranteeWrap}>
      <section
        className={whyStyles.sectionWhyChoose}
        aria-label="How we handle Treasure Valley pool conditions"
      >
        <p className={serviceStyles.lead}>
          Dig into how we handle Treasure Valley realities—wind-blown debris,
          cottonwood season, hard water, and busy summer bather loads—on our{" "}
          <Link href="/services#pool-spa-cleaning">cleaning</Link>,{" "}
          <Link href="/services#pool-spa-maintenance">maintenance</Link>,{" "}
          <Link href="/services#technical-services">technical</Link>,{" "}
          <Link href="/services#pool-openings">opening</Link>, and{" "}
          <Link href="/services#pool-closings">closing</Link> pages.
        </p>
      </section>

      <section
        className={whyStyles.sectionGuarantee}
        aria-label="Testimonials and project gallery"
      >
        <p className={serviceStyles.lead}>
          Curious how pumps, heaters, and salt cells behave on Idaho pools? Read
          neighbor experiences on{" "}
          <Link href="/testimonials">testimonials</Link> and match equipment to
          real jobs in the <Link href="/gallery">gallery</Link> before you call.
        </p>
      </section>
    </div>
  );
};
