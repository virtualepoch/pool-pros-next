"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function FooterNavLink({ to, linkName }) {
  const pathname = usePathname();

  return (
    <>
      {pathname != to && (
        <Link className="nav-link" href={to}>
          {linkName}
        </Link>
      )}
    </>
  );
}

export const FooterNavLinks = () => {
  return (
    <nav className="nav-links-wrap">
      <FooterNavLink to="/" linkName="Home"></FooterNavLink>

      <FooterNavLink to="/services" linkName="Services"></FooterNavLink>

      <FooterNavLink to="/testimonials" linkName="Testimonials"></FooterNavLink>

      <FooterNavLink to="/gallery" linkName="Gallery"></FooterNavLink>
    </nav>
  );
};
