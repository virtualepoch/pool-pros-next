"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = ({ setNav }) => {
  function CustomLink({ to, linkName, ...props }) {
    const pathname = usePathname();

    return (
      <>
        {pathname != to && (
          <Link
            className="nav-link"
            onClick={() => {
              setNav(false);
            }}
            href={to}
          >
            {linkName}
          </Link>
        )}
      </>
    );
  }

  return (
    <section className="nav-links-wrap">
      <CustomLink to="/" linkName="Home" />

      <CustomLink to="/services" linkName="Services" />

      <CustomLink to="/testimonials" linkName="Testimonials" />

      <CustomLink to="/gallery" linkName="Gallery" />
    </section>
  );
};
