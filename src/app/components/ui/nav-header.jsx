import { SiteLogo } from "../global/site-logo";

export const NavHeader = ({ setNav }) => {
  return (
    <header className="nav-header">
      <SiteLogo
        priority={true}
        onClick={() => {
          setNav(false);
        }}
      />
    </header>
  );
};
