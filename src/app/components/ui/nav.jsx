import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
// COMPONENTS
import { NavLinks } from "./nav-links";
import { ContactLinks } from "./contact-links";
import { SiteLogo } from "../global/site-logo";

export const Nav = ({ nav, setNav }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={nav}
      unmountOnExit
      timeout={400}
      classNames="nav"
      nodeRef={nodeRef}
    >
      <nav className="nav" ref={nodeRef}>
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
