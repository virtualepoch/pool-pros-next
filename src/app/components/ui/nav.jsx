import Link from "next/link";
import { usePathname } from "next/navigation";
import { CSSTransition } from "react-transition-group";
// COMPONENTS
import { NavHeader } from "./nav-header";
import { ContactLinks } from "./contact-links";

export const Nav = ({ nav, setNav }) => {
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
    <CSSTransition in={nav} unmountOnExit timeout={400} classNames="nav">
      <nav className="nav">
        <NavHeader setNav={setNav} />

        <section className="nav-links-wrap">
          <CustomLink to="/" linkName="Home" />

          <CustomLink to="/services" linkName="Services" />

          <CustomLink to="/testimonials" linkName="Testimonials" />

          <CustomLink to="/gallery" linkName="Gallery" />
        </section>

        <ContactLinks />
      </nav>
    </CSSTransition>
  );
};
