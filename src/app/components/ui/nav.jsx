import { CSSTransition } from "react-transition-group";
// COMPONENTS
import { NavLinks } from "./NavLinks";
import { ContactLinks } from "./contact-links";
import { SiteLogo } from "../global/site-logo";

export const Nav = ({ nav, setNav }) => {
  return (
    <CSSTransition in={nav} unmountOnExit timeout={400} classNames="nav">
      <nav className="nav">
        <header className="nav-header">
          <SiteLogo
            priority={true}
            onClick={() => {
              setNav(false);
            }}
          />
        </header>

        <NavLinks setNav={setNav} />

        <ContactLinks />
      </nav>
    </CSSTransition>
  );
};
