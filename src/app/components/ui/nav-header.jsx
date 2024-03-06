import { SiteLogo } from "../global/site-logo";

export const NavHeader = ({ setNav }) => {
  return (
    <header className="nav-header">
      <SiteLogo
        onClick={() => {
          setNav(false);
        }}
      />
    </header>
  );
};
