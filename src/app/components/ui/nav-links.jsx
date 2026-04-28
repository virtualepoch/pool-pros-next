"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavCustomLink({ to, linkName, onNavigate }) {
  const pathname = usePathname();

  return (
    <>
      {pathname != to && (
        <Link
          className="nav-link"
          onClick={onNavigate}
          href={to}
        >
          {linkName}
        </Link>
      )}
    </>
  );
}

export const NavLinks = ({ setNav }) => {
  const handleNavigate = () => setNav(false);

  return (
    <section className="nav-links-wrap">
      <NavCustomLink to="/" linkName="Home" onNavigate={handleNavigate}></NavCustomLink>

      <NavCustomLink to="/services" linkName="Services" onNavigate={handleNavigate}></NavCustomLink>

      <NavCustomLink to="/testimonials" linkName="Testimonials" onNavigate={handleNavigate}></NavCustomLink>

      <NavCustomLink to="/gallery" linkName="Gallery" onNavigate={handleNavigate}></NavCustomLink>
    </section>
  );
};
