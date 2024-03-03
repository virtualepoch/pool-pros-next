import { LinkCall } from "../links/link-call";
import { LinkText } from "../links/link-text";
import { LinkEmail } from "../links/link-email";

export const FooterLinks = () => {
  return (
    <div className="footer-links">
      <LinkCall />

      <div className="link-divider" />

      <LinkEmail />

      <div className="link-divider" />

      <LinkText />
    </div>
  );
};
