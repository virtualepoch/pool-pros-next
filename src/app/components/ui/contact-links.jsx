import { LinkCall } from "../links/link-call";
import { LinkEmail } from "../links/link-email";
import { LinkFacebook } from "../links/link-facebook";
import { LinkReview } from "../links/link-review";
import { LinkText } from "../links/link-text";

export const ContactLinks = () => {

  return (
    <section className="contact-links-wrap">
      <h3 className="contact-links-header">Contact Us</h3>

      <ul className="contact-links">
        <li>
          <LinkCall />
        </li>

        <li>
          <LinkEmail />
        </li>

        <li>
          <LinkText />
        </li>

        <li>
          <LinkFacebook content="Follow" />
        </li>

        <li>
          <LinkReview />
        </li>
      </ul>
    </section>
  );
};
