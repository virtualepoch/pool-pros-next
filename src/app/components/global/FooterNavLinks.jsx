"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const FooterNavLinks = () => {
  function CustomLink({ to, linkName, ...props }) {
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

  return (
    <nav className="nav-links-wrap">
      <CustomLink to="/" linkName="Home" />

      <CustomLink to="/services" linkName="Services" />

      <CustomLink to="/testimonials" linkName="Testimonials" />

      <CustomLink to="/gallery" linkName="Gallery" />
    </nav>
  );
};
